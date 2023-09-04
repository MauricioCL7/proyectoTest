import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDemoRoutingModule } from './emptydemo-routing.module';
import { EmptyDemoComponent } from './emptydemo.component';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import {FormsModule} from "@angular/forms";
import { InputNumberModule } from 'primeng/inputnumber';
@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        EmptyDemoRoutingModule,
        RatingModule,
        FormsModule,
        InputNumberModule

    ],
    declarations: [EmptyDemoComponent]
})
export class EmptyDemoModule { }
