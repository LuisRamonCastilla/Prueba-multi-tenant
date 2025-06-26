import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeTarragonaComponent } from './home-tarragona.component';

const routes: Routes = [
  { path: '', component: HomeTarragonaComponent }
];

@NgModule({
  declarations: [HomeTarragonaComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TarragonaModule {}
