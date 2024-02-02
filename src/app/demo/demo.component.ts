import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild,DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges,OnInit,DoCheck,AfterContentInit {
  @Input() message:string ="";
  totalMarks=400
  marks=10
  @ViewChild('para') tempPara!:ElementRef;
  ngOnChanges(changes:SimpleChanges){
    console.log("Onchange Hook called",changes)
  }
  ngOnInit(): void {
      console.log("On Init Called")
      // console.log(this.tempPara.nativeElement.innerHTML)
  }
  ngDoCheck(){
    console.log("On Do Check Called")
  }

  ngAfterContentInit(){
    console.log("On AfterContent Init Called")
  }

}
