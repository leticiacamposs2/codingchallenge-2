import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MeusLeiloesComponent } from './meus-leiloes/meus-leiloes.component';
import { EditLeilaoComponent } from './leilao/edit-leilao/edit-leilao.component';
import { LeiloesAbertosComponent } from './leiloes-abertos/leiloes-abertos.component';
import { LeiloesComponent } from './leilao/leiloes.component';

const routes: Routes = [
  { path: 'meus-leiloes', component: MeusLeiloesComponent },
  { path: 'leiloes', component: LeiloesComponent },
  { path: 'edit-leilao', component: EditLeilaoComponent },
  { path: 'leiloes-abertos', component: LeiloesAbertosComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
