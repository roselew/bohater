import { Component, OnInit, Input } from '@angular/core';
import { AlldataService } from '../services/alldata.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'mission-details',
  template: `
    <ul class="mission-neutral">
      <li class="circle-big">
        <img src="{{mission.icon}}" width="100px">>
      </li>
    </ul>
    <form class="newMissionForm">
      <input type="text" 
        placeholder="Nazwa misji" 
        [(ngModel)]="mission.name" 
        [ngModelOptions]="{standalone: true}" >
      <p>Liczba punktów</p>
      <span class="less">-</span>
      <input type="number" 
        placeholder="Liczba punktów" 
        [(ngModel)]="mission.points" 
        [ngModelOptions]="{standalone: true}" >
      <span class="more">+</span>
      <p>W które dni tygodnia?</p>
      <div class="newMissionDays">
        <label *ngFor="let day of days" >
          {{day}}
          <input type="checkbox">
        </label> 
      </div>

    </form>

    <button (click)="update()" class="add">DODAJ</button>
     
  `,
  styles: []
})
export class MissionDetailsComponent implements OnInit {

  constructor(
    private service:AlldataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  mission 

  days=['PN', 'WT', 'ŚR', 'CZ', 'PT', 'SB', 'ND'];

  update(){
    this.service.updateMission(this.mission)
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.service.getUserMission(+params.get('id')))
      .subscribe(mission => this.mission = mission);
  }
  

}
