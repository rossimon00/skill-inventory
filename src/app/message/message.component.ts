import { Message } from './../model/message';
import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  @Input() message = '';
}
