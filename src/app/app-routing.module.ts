import { NgModule, RootRenderer } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroTopComponent } from './hero-top/hero-top.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
const routes: Routes = [
  { path: '', redirectTo: 'heroTop', pathMatch: 'full' },
  { path: 'heroList', component: HeroListComponent },
  { path: 'heroTop', component: HeroTopComponent },
  { path: 'heroDetail/:id', component: HeroDetailComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
