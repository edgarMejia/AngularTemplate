import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '~utils/constants';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public readonly APP_NAME = CONSTANTS.APP_NAME;

  public menuList = [
    {
      id: 1,
      title: 'Dashboard',
      link: '/',
      icon: 'fas fa-tachometer-alt',
    },
    // {
    //   id: 1,
    //   title: 'Reportes',
    //   link: '/text',
    //   icon: '',
    // },
    {
      id: 1,
      title: 'Seguridad',
      link: '',
      icon: 'fas fa-lock',
      childs: [
        {
          id: 1,
          title: 'Administrar usuarios',
          link: '/admin/users',
          icon: null,
        },
        {
          id: 2,
          title: 'Demo text',
          link: '/text',
          icon: null,
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit() {}

}
