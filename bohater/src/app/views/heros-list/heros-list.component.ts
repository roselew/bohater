import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.css']
})
export class HerosListComponent implements OnInit {

  @Input()
  hero

  constructor() { }

  ngOnInit() {
  }

}
