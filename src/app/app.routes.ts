import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { OrdenComponent } from './components/orden/orden.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { adminGuard, meseroGuard } from './guard/guardian.guard';

export const routes: Routes = [

    {path:"menu",component:ProductosComponent },
    {path:"orden",component:OrdenComponent , canActivate:[meseroGuard]},
    {path:"usuarios",component:UsuarioComponent, canActivate:[adminGuard] },


    {path:"",component:LoginComponent },
    {path:"**",redirectTo:"",pathMatch:'full' }
];
