import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { TermsComponent } from './terms/terms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, MainComponent, IndexComponent, LoginComponent, TermsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class LayoutModule { }
