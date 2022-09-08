import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector     : 'layout',
    templateUrl  : './layout.component.html',
    styleUrls    : ['./layout.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit, OnDestroy {
    isCollapsed = false;

    constructor(private router: Router) {
        
    }


    ngOnDestroy(): void {
        console.log('LayoutComponent onDestroy')
    }
    ngOnInit(): void {
        console.log('LayoutComponent onInit')
    }

    isSelected(route: string): boolean {
        return route === this.router.url;
    }
    
    
}