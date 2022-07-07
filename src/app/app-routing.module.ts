// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './core/components/home/home.component';
import { ArchiveComponent } from './core/components/archive/archive.component';
import { NewDetailComponent } from './core/components/new-detail/new-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'archived', component: ArchiveComponent },
  { path: 'new/:newId', component: NewDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
