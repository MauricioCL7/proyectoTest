import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmptyDemoComponent } from './emptydemo.component';
import {WelcomeComponent} from "../../../../components/pages/welcome/welcome.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: WelcomeComponent },
        { path: 'productCustom', component: EmptyDemoComponent }
    ])],
    exports: [RouterModule]
})
export class EmptyDemoRoutingModule { }
