import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import { AppRoutingModule } from '../app-routing.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './main-layout.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ItemComponent } from './components/sidenav/item/item.component';
import { ItemChildComponent } from './components/sidenav/item-child/item-child.component';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent, FooterComponent, MainLayoutComponent, ScrollToTopComponent, ProgressBarComponent, ItemComponent, ItemChildComponent],
  exports: [HeaderComponent, SidenavComponent, FooterComponent, MainLayoutComponent, ScrollToTopComponent],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class MainLayoutModule { }
