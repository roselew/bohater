import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './containers/home/home.component';
import { HeroComponent } from './containers/hero.component';


const routes:Routes = [
    { path:'', component: HeroComponent },
    { path:'home', component: HomeComponent },
    { path:'hero', component: HeroComponent }
]

export const Routing = RouterModule.forRoot(routes,{
    useHash:false
})