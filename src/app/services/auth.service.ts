import { Injectable, inject } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({
    providedIn:'root'
})

export class AuthService{
    isLogged:Boolean =false
    userService:UserService =inject(UserService)
    login(username:string,password:string){
        let user:any = this.userService.users.find(u=>u?.username==username&&u.password==password)
        if(user){
            this.isLogged=true
            return user
        }
        return 0

    }
    logout(){
        return this.isLogged=false
    }

    isAunthenticated(){
        return this.isLogged
    }
}