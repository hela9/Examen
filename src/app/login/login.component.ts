import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  erreur=0;
  ngOnInit(): void {
  }
  user = new User();
  onLoggedin(){
    console.log(this.user);
     let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
    this.router.navigate(['/']);
    else
    alert('Login ou mot de passe incorrecte!');
    }
  constructor(private authService : AuthService,
    private router: Router)
     { 
      console.log(this.user);
      let isValidUser: Boolean = this.authService.SignIn(this.user);

      if (isValidUser)
      this.router.navigate(['/']);
      else
  
      //alert('Login ou mot de passe incorrecte!');
      this.erreur = 1

     }
    

}
