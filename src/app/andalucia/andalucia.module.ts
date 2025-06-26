import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeAndaluciaComponent } from './home-andalucia.component';

const routes: Routes = [
  { path: '', component: HomeAndaluciaComponent }
];

@NgModule({
  declarations: [HomeAndaluciaComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AndaluciaModule {}
