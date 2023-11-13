import { Component } from '@angular/core';
import { TecnologiaService } from '../service/tecnologia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dipendente } from '../model/dipendente';
import { Observable, debounceTime, map } from 'rxjs';
import { FormControl } from '@angular/forms';
import { RicercaDipendenteTecnologia } from '../model/ricercaDipendenteTecnologia';

@Component({
  selector: 'app-ricerca-dipendenti',
  templateUrl: './ricerca-dipendenti.component.html',
  styleUrls: ['./ricerca-dipendenti.component.css'],
})
export class RicercaDipendentiComponent {
  dipendenti!: Observable<RicercaDipendenteTecnologia[]>;
  selectedValues: string[] = [];
  searchText = new FormControl(''); // Aggiungi il FormControl
  searchTecnologia = new FormControl('');
  currentSortField: string = ''; // Campo di ordinamento corrente
  isAscendingOrder: boolean = true; // Ordine ascendente o discendente

  constructor(
    private dipendentiService: TecnologiaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (
      this.dipendentiService.getRuolo() !== 'user' ||
      this.dipendentiService.getRuolo() !== 'admin'
    ) {
      this.router.navigate(['/welcome']);
    }

    this.route.params.subscribe((params) => {
      const selectedValuesString = params['selectedValues'];
      this.selectedValues = selectedValuesString.split(',');
    });

    this.dipendenti = this.dipendentiService.ricercaDipendenti(
      this.selectedValues
    );

    // Aggiungi un listener per il campo di ricerca
    this.searchText.valueChanges
      .pipe(debounceTime(300)) // Aggiungi un ritardo per evitare richieste troppo frequenti
      .subscribe((searchValue) => {
        this.filterDipendenti(searchValue);
      });

    this.searchTecnologia.valueChanges
      .pipe(debounceTime(300))
      .subscribe((searchValue) => {
        this.filterDipendentiTec(searchValue);
      });
  }

  filterDipendenti(searchValue: string | null): void {
    const searchString = searchValue || ''; // Converti in stringa vuota se searchValue è null
    this.dipendenti = this.dipendentiService
      .ricercaDipendenti(this.selectedValues)
      .pipe(
        map((data) => {
          return data.filter((dipendente: RicercaDipendenteTecnologia) => {
            return dipendente.cognome
              .toLowerCase()
              .includes(searchString.toLowerCase());
          });
        })
      );
  }

  filterDipendentiTec(searchValue: string | null): void {
    const searchString = searchValue || ''; // Converti in stringa vuota se searchValue è null
    this.dipendenti = this.dipendentiService
      .ricercaDipendenti(this.selectedValues)
      .pipe(
        map((data) => {
          return data.filter((dipendente: RicercaDipendenteTecnologia) => {
            return dipendente.nomeTecnologia
              .toLowerCase()
              .includes(searchString.toLowerCase());
          });
        })
      );
  }

  sortBy(field: string): void {
    // Verifica se si sta già ordinando per lo stesso campo
    if (this.currentSortField === field) {
      // Cambia l'ordine tra ascendente e discendente
      this.isAscendingOrder = !this.isAscendingOrder;
    } else {
      // Imposta il nuovo campo di ordinamento e l'ordine ascendente
      this.currentSortField = field;
      this.isAscendingOrder = true;
    }

    // Richiama sortData per ordinare i dati
    this.sortData();
  }

  private sortData(): void {
    // Ordina i dati in base al campo e all'ordine specificato
    this.dipendenti = this.dipendenti.pipe(
      map((data) => {
        return data.sort((a: any, b: any) => {
          const aValue = a[this.currentSortField];
          const bValue = b[this.currentSortField];
          if (this.isAscendingOrder) {
            return aValue.localeCompare(bValue);
          } else {
            return bValue.localeCompare(aValue);
          }
        });
      })
    );
  }
}
