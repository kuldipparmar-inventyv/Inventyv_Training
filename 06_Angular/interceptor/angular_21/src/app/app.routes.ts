import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { LoginComponent } from './components/login/login';

export const routes: Routes = [
    {
        path:"",
        component:LoginComponent
    },
    {
        path:"home",
        component:HomeComponent
    }
];
