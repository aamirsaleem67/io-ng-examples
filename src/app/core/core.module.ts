import { UserService } from './services/user/user.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppContentComponent } from './components/app-content/app-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
  ],
  declarations: [AppContentComponent, AppHeaderComponent],
  exports: [
    HttpClientModule,
    RouterModule
  ]
})
export class CoreModule { }
