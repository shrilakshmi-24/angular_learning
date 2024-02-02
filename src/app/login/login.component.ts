import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 @ViewChild('username') username!:ElementRef
 @ViewChild('password') password!:ElementRef
  router:Router=inject(Router)
 authservice :AuthService =inject(AuthService)
  activeRoute:ActivatedRoute=inject(ActivatedRoute)

  ngOnInit(){
    this.activeRoute.queryParamMap.subscribe((query)=>{
      const logout= Boolean(query.get('logout'))
      if(logout){
        this.authservice.logout()
        alert("Logged out successfully")
      }
    })
  }
 OnLoginClicked(){
  const username= this.username.nativeElement.value;
  const password =this.password.nativeElement.value;

  const user =this.authservice.login(username,password)
  if(!user){
    alert("Invalid credentials")
  }
  else{
    alert("welcome "+user.username )
    this.router.navigate(['\Home'])
  }
 }
}
