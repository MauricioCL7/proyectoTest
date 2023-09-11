import {Component} from '@angular/core';
import {ProductService} from "../services/product-service";
import {Product} from "../dominio/product";

@Component({
    templateUrl: './emptydemo.component.html'
})
export class EmptyDemoComponent {
    rating: any;
    objeto1: number;
    objeto2: number;
    resultado: number;
    products!: Product[];

    constructor(private productService: ProductService) {
    }

    public suma() {
        this.resultado = this.objeto1 + this.objeto2
    }

    ngOnInit() {
        this.productService.getProducts().then((data) => (this.products = data.slice(0, 5)));
    }

    getSeverity(product: Product) {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

}

