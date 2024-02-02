

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'percentage'
})

export class PercentagePipe implements PipeTransform{
    transform(mark:number, total:number,decimal:number=0){
        return (mark/ 100 *total).toFixed(decimal) +'%'
    }
}



@Pipe({
    name:'temp'
})

export class TempPipe implements PipeTransform{
    transform(value:number, unit:string){
        return 9/5*value+32 +'F'
    }
}