// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Components
import { HomeComponent } from './components/home/home.component';
import { NewDetailComponent } from './components/new-detail/new-detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    NewDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
