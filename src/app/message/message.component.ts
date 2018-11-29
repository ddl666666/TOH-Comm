import { Component, OnInit } from '@angular/core';
import { MassageService } from '../massage.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public ms: MassageService) { }

  ngOnInit() {
  }

}
