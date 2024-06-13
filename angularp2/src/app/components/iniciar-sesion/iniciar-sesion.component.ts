import { Component, inject } from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators} from "@angular/forms";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Credencial } from '../../interfaces/credencial';
import { LoginService } from '../../services/login.service';

const jwtHelperService = new JwtHelperService();

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  router = inject(Router);
  loginService : LoginService = inject(LoginService);

  formularioCredenciales = new FormGroup({
    usuario: new FormControl("", Validators.required),
    contrasenia: new FormControl("",Validators.required),
  })
  manejarEnvio(){
    if (this.formularioCredenciales.valid) {
      const usuario = this.formularioCredenciales.value.usuario;
      const contrasenia = this.formularioCredenciales.value.contrasenia;
      
      if (typeof usuario === "string" && typeof contrasenia === "string") {
        const credencial : Credencial ={
          usuario,
          contrasenia
        }
        this.loginService.login(credencial).subscribe((response: any) => {
          console.log("response: ", Response);
          /* const decode = jwtHelperService.decodeToken(response.datos);
          console.log("decode", decode);
          this.router.navigateByUrl("/productos") */
        })
      }
        
    } else {
      console.log("error!!, faltan datos");
    }
    
  }
}
