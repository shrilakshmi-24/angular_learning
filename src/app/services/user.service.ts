import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
    providedIn:'root'
})

export class UserService{
    users:User[]=[
         new User(1, 'John Smith', 'js', 'password1'),
         new User(2, 'Jane Doe', 'jd', 'password2'),
         new User(3, 'Alice Johnson', 'alice', 'password3'),
         new User(4, 'Bob Miller', 'bob', 'password4'),
         new User(5, 'Eva Brown', 'eva', 'password5'),
         new User(6, 'Michael White', 'mike', 'password6'),
         new User(7, 'Sara Davis', 'sara', 'password7'),
         new User(8, 'Tom Anderson', 'tom', 'password8'),
         new User(9, 'Emily Taylor', 'emily', 'password9'),
         new User(10, 'Alex Turner', 'alex', 'password10')
    ]
}