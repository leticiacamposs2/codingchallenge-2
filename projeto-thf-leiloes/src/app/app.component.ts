import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titleToolbar = 'Projeto THF Leiloes';

  menus = [
    { label: '', link: '/login'},
    { label: 'Meus Leiloes', link: '/meus-leiloes' },
    { label: 'Adicionar Leilao', link: '/leiloes' },
    { label: 'Leiloes Abertos', link: '/leiloes-abertos' },
  ];
}
