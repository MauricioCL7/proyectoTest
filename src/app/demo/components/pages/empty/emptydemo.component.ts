import {Component, ViewChild} from '@angular/core';
import {ProductService} from "../services/product-service";
import {Product} from "../dominio/product";
import {Galleria} from "primeng/galleria";
import {PhotoService} from "../services/photoservice";
import {SelectItem} from "primeng/api";

@Component({
    templateUrl: './emptydemo.component.html'
})
export class EmptyDemoComponent {
    rating: any;
    objeto1: number;
    objeto2: number;
    resultado: number;
    products!: Product[];
    sortOptions!: SelectItem[];
    sortOrder!: number;

    sortField!: string;
    sortKey: any;
    layout: string = 'list';
    constructor(private productService: ProductService, private photoService: PhotoService) {
    }

    public suma() {
        this.resultado = this.objeto1 + this.objeto2
    }


    onSortChange(event: any) {
        let value = event.value;
        console.log(value);
        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
        this.bindDocumentListeners();
        this.productService.getProducts().then((data) => (this.products = data.slice(0, 15)));
        this.sortOptions = [
            {label: 'Precio-los mas altos primero', value: '!price'},
            {label: 'Price-los mas bajos priemero', value: 'price'}
        ];
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


    redirect(redsocial: string) {
        switch (redsocial) {
            case 'WHATSAPP':
                location.href = "https://w.app/5AWpfa";
                break;

            case 'FACEBOOK':
                location.href = "https://www.facebook.com/people/DiDi-project/61551572532973/?mibextid=ZbWKwL";
                break;

            case 'INSTAGRAM':
                location.href = "https://www.instagram.com/maurii.cl_7/";
                break;

            default:
                return null;
        }


    }

    images: any[] | undefined;

    showThumbnails: boolean | undefined;

    fullscreen: boolean = false;

    activeIndex: number = 0;

    onFullScreenListener: any;

    @ViewChild('galleria') galleria: Galleria | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    onThumbnailButtonClick() {
        this.showThumbnails = !this.showThumbnails;
    }

    toggleFullScreen() {
        if (this.fullscreen) {
            this.closePreviewFullScreen();
        } else {
            this.openPreviewFullScreen();
        }

    }

    openPreviewFullScreen() {
        let elem = this.galleria?.element.nativeElement.querySelector('.p-galleria');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem['mozRequestFullScreen']) {
            /* Firefox */
            elem['mozRequestFullScreen']();
        } else if (elem['webkitRequestFullscreen']) {
            /* Chrome, Safari & Opera */
            elem['webkitRequestFullscreen']();
        } else if (elem['msRequestFullscreen']) {
            /* IE/Edge */
            elem['msRequestFullscreen']();
        }
    }

    onFullScreenChange() {
        this.fullscreen = !this.fullscreen;

    }

    closePreviewFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document['mozCancelFullScreen']) {
            document['mozCancelFullScreen']();
        } else if (document['webkitExitFullscreen']) {
            document['webkitExitFullscreen']();
        } else if (document['msExitFullscreen']) {
            document['msExitFullscreen']();
        }
    }

    bindDocumentListeners() {
        this.onFullScreenListener = this.onFullScreenChange.bind(this);
        document.addEventListener('fullscreenchange', this.onFullScreenListener);
        document.addEventListener('mozfullscreenchange', this.onFullScreenListener);
        document.addEventListener('webkitfullscreenchange', this.onFullScreenListener);
        document.addEventListener('msfullscreenchange', this.onFullScreenListener);
    }

    unbindDocumentListeners() {
        document.removeEventListener('fullscreenchange', this.onFullScreenListener);
        document.removeEventListener('mozfullscreenchange', this.onFullScreenListener);
        document.removeEventListener('webkitfullscreenchange', this.onFullScreenListener);
        document.removeEventListener('msfullscreenchange', this.onFullScreenListener);
        this.onFullScreenListener = null;
    }

    ngOnDestroy() {
        this.unbindDocumentListeners();
    }

    galleriaClass() {
        return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
    }

    fullScreenIcon() {
        return `pi ${this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
    }

}

