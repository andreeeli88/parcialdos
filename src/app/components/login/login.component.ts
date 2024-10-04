import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: any;
  password: any;
  servicio = inject(AdminService);
  login(datos: any){
    this.servicio.postLogin(datos.value).subscribe(p =>{
      console.log(p.accessToken)
      if (p.accessToken!= ""){
        sessionStorage.setItem("login", "true")
        if (datos.value.email === "adminres@gmail.com"){
          sessionStorage.setItem("role", "admin");
          location.href = "/usuarios"
        
        } else if (datos.value.email === "meseo@gmail.com") {
          sessionStorage.setItem("role", "mesero");
          location.href = "/orden"
        }
       
      }
    })
  }
  cerrar(){
    sessionStorage.removeItem('login');
    window.location.href = "/login";
  }
}
