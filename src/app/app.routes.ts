import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Inicio } from './pages/inicio/inicio';
import { Clientes } from './pages/clientes/clientes';
import { Formulario } from './pages/formulario/formulario';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'inico',component:Inicio},
    {path:'clientes',component:Clientes},
    {path:'formulario',component:Formulario},
    {path:'**',redirectTo:''}
];
