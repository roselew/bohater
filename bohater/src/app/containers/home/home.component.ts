import { Component, OnInit } from '@angular/core';
import { AlldataService } from '../../services/alldata.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:AlldataService) { }
  
    hero
  
    ngOnInit() {
      this.hero = this.service.getHero()
      console.log(this.hero)
    }

}
