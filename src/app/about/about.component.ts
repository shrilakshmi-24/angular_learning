import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
  value: number;
  convertedValue: number;

  convert() {
    // Check if the input is a valid number
    if (!isNaN(parseFloat(this.value.toString()))) {
      this.convertedValue = (this.value * 9/5) + 32;
    } else {
      this.convertedValue = null; 
    }
  }
}
