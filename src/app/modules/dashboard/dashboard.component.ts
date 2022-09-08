import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
    /**
     * Constructor
     */
    constructor() {
        console.log('DashboardComponent constructor')
    }
    ngOnInit(): void {
        console.log('DashboardComponent onInit')
    }
}
