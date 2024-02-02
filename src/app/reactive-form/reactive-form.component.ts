import { Component } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CustomValidators } from '../validators/nospaceaalowed.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  generateUsername(){

  }
  reactiveForm:FormGroup
  ngOnInit(){
    this.reactiveForm = new FormGroup({
      firstname:new FormControl(null, [Validators.required,CustomValidators.noSpaceAllowed ]),
      lastname:new FormControl(null,Validators.required),
      dob:new FormControl(null,),
      gender:new FormControl(null),
      address:new FormControl(null),
      phone:new FormControl(null),
      email:new FormControl(null, [Validators.required,Validators.email]),
      password:new FormControl(null),
      skill: new FormArray([ new FormControl(null,Validators.required)]
       
      )

    })
  }
  submitForm(){
    console.log(this.reactiveForm)
  }
  addSkill(){
   (<FormArray> this.reactiveForm.get("skill")).push(new FormControl(null,Validators.required))
  }
  deleteSkill(i){
    (<FormArray> this.reactiveForm.get("skill")).removeAt(i)
  }
}
