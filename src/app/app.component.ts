import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputval:string ="hello"
  router:Router =inject(Router)
  btnClicked(inputEl:HTMLInputElement){
       this.inputval= inputEl.value
  }
  redirectTo(){
    // this.router.navigate(['Home'])
    this.router.navigateByUrl("Home")

  }
}
