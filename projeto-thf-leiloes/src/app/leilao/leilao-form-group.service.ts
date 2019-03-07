import { Injectable } from '@angular/core';

@Injectable()
export class LeilaoFormGroupService {

  construtor() { }

  getStatusOptions() {
    return [
      { label: 'Rascunho', value: '0' },
      { label: 'Ativo', value: '1' },
      { label: 'Finalizado', value: '2' },
    ];
  }

}
