import { Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';



export const routes: Routes = [
    {path: "Iniciar sesion", component: IniciarSesionComponent},
    {path: "Inicio", component: InicioComponent},
    {path: "Nosotros", component: NosotrosComponent},
    {path: "Privado", component: PrivadoComponent},
    {path: "Productos", component: ProductosComponent},
    {path: "Servicios", component: ServiciosComponent},
    {path: "Registrarse", component: RegistrarseComponent},
    {path: "Contacto", component: ContactoComponent},
    {path: "", redirectTo: "Inicio", pathMatch: "full"},
    {path: "**", component  : NoEncontradoComponent},
];
