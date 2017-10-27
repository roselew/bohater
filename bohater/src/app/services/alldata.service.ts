import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import 'rxjs/add/observable/of'

@Injectable()
export class AlldataService {

  constructor(private http:HttpClient) { }
  private url = 'http://localhost:3000/hero'

  fetchHero(){
    this.http.get(this.url)
    .subscribe( (hero:any) => this.hero$.next(hero))
  }
  private hero$ = new BehaviorSubject([])

  getHero(){
    this.fetchHero()
    return this.hero$.asObservable()
  }


  


}
