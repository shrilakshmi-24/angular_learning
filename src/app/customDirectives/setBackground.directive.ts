import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[set-background]'
})

export class setBAckground{
    constructor(private element:ElementRef){
        
    }
    ngOnInit(){
        this.element.nativeElement.style.color='red'
    }
}