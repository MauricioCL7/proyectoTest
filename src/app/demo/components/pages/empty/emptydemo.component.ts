import { Component } from '@angular/core';

@Component({
    templateUrl: './emptydemo.component.html'
})
export class EmptyDemoComponent {
   rating:any;
   objeto1: number;
   objeto2: number;
   resultado: number;
   public suma (){
       this.resultado = this.objeto1 + this.objeto2
   }

 }

