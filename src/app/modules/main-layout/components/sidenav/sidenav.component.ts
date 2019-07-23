import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        $("#sidebarToggle, #sidebarToggleTop").on('click', function() {
            $("body").toggleClass("sidebar-toggled");
            $(".sidebar").toggleClass("toggled");
            if ($(".sidebar").hasClass("toggled")) {
                $('.sidebar .collapse').collapse('hide');
            };
        });
    }
}
