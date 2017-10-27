import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { Routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AlldataService } from './services/alldata.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { HerosListComponent } from './views/heros-list/heros-list.component';
import { HeroComponent } from './containers/hero.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HerosListComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing
  ],
  providers: [
    AlldataService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
