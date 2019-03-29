import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, MainComponent, IndexComponent, LoginComponent, TermsComponent],
  exports: [FooterComponent, HeaderComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
