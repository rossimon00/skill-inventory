import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { TecnologiaService } from '../service/tecnologia.service';

@Component({
  selector: 'app-lista-categorie',
  templateUrl: './lista-categorie.component.html',
  styleUrls: ['./lista-categorie.component.css'],
})
export class ListaCategorieComponent implements OnInit {
  values: string[] = [];
  selectedValues: string[] = [];
  selectedLetter: string | null = null;
  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  showAllElements: boolean = false;
  showAllCheckboxes: boolean = true;
  checkboxStates: { [key: string]: boolean } = {};
  selectedCheckboxValues: string[] = [];

  constructor(
    private tecnologiaDipendenteService: TecnologiaService,
    private router: Router
  ) {
    this.values.forEach((value) => {
      this.checkboxStates[value] = true;
    });
  }

  trasformaJson() {
    const jsonData$: Observable<any[]> =
      this.tecnologiaDipendenteService.listaTecnologie();

    jsonData$
      .pipe(map((data) => data.map((item) => item.nome)))
      .subscribe((result) => {
        this.values = result;
      });
  }

  getAvailableLetters(): string[] {
    const uniqueLetters = new Set<string>();
    this.values.forEach((value) => {
      const firstLetter = value.charAt(0).toUpperCase();
      uniqueLetters.add(firstLetter);
    });
    return Array.from(uniqueLetters).sort();
  }

  ngOnInit(): void {
    if (
      this.tecnologiaDipendenteService.getRuolo() === 'user' ||
      this.tecnologiaDipendenteService.getRuolo() === 'admin'
    ) {
      this.router.navigate(['/welcome']);
    }

    this.trasformaJson();
    setTimeout(() => {
      this.alphabet = this.getAvailableLetters();
    }, 50);
  }

  onCheckboxChange(event: any, value: string): void {
    this.checkboxStates[value] = event.target.checked;

    if (event.target.checked) {
      this.selectedCheckboxValues.push(value);
    } else {
      const index = this.selectedCheckboxValues.indexOf(value);
      if (index !== -1) {
        this.selectedCheckboxValues.splice(index, 1);
      }
    }
  }

  selectLetter(letter: string) {
    this.selectedLetter = letter;
    this.selectedValues = this.values.filter((value) =>
      value.toLowerCase().startsWith(letter.toLowerCase())
    );
    this.showAllCheckboxes = false;
  }

  showAllLetters() {
    this.selectedValues = this.values.filter(
      (value) => this.checkboxStates[value]
    );
    this.selectedLetter = null; // Imposta la lettera selezionata su null per mostrare tutti i checkbox
  }

  selectTutti() {
    // Imposta lo stato di tutti i checkbox su true
    for (const value of this.values) {
      this.checkboxStates[value] = true;
    }
  }

  deselectTutti() {
    // Imposta lo stato di tutti i checkbox su false
    for (const value of this.values) {
      this.checkboxStates[value] = false;
    }
  }

  cerca(): void {
    this.selectedValues = []; // Inizializza l'array vuoto

    // Verifica quali checkbox sono selezionati e aggiungi il label all'array
    this.values.forEach((value) => {
      if (this.checkboxStates[value]) {
        this.selectedValues.push(value);
      }
    });

    this.router.navigate([
      '/ricerca-dipendenti',
      { selectedValues: this.selectedValues },
    ]);
  }
}
