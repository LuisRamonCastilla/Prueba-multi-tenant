import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'andalucia', loadChildren: () => import('./andalucia/andalucia.module').then(m => m.AndaluciaModule) },
  { path: 'tarragona', loadChildren: () => import('./tarragona/tarragona.module').then(m => m.TarragonaModule) },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
