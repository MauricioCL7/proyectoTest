import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmptyDemoRoutingModule} from './emptydemo-routing.module';
import {EmptyDemoComponent} from './emptydemo.component';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from "@angular/forms";
import {InputNumberModule} from 'primeng/inputnumber';
import {ImageModule} from 'primeng/image';
import {TabMenuModule} from 'primeng/tabmenu';
import {PickListModule} from 'primeng/picklist';
import {MultiSelectModule} from 'primeng/multiselect';
import {SpeedDialModule} from 'primeng/speeddial';
import {DataViewModule, DataViewLayoutOptions} from 'primeng/dataview';
import {TagModule} from "primeng/tag";
import {ProductService} from "../services/product-service";
import { AccordionModule } from 'primeng/accordion';
import {GalleriaModule} from "primeng/galleria";
import {PhotoService} from "../services/photoservice";
import {DropdownModule} from "primeng/dropdown";
import {WelcomeComponent} from "../../../../components/pages/welcome/welcome.component";
@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        EmptyDemoRoutingModule,
        RatingModule,
        FormsModule,
        InputNumberModule,
        ImageModule,
        TabMenuModule,
        PickListModule,
        MultiSelectModule,
        SpeedDialModule,
        DataViewModule,
        TagModule,
        AccordionModule,
        GalleriaModule,
        DropdownModule
    ],
    providers: [
        ProductService,PhotoService
    ],
    declarations: [EmptyDemoComponent,WelcomeComponent]
})
export class EmptyDemoModule {
}
