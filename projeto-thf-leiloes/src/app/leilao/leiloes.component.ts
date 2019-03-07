import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb/thf-breadcrumb.interface';
import { ThfDisclaimer } from '@totvs/thf-ui/components/thf-disclaimer/thf-disclaimer.interface';
import { ThfDisclaimerGroup } from '@totvs/thf-ui/components/thf-disclaimer-group';
import { ThfI18nService } from '@totvs/thf-ui/services/thf-i18n/thf-i18n.service';
import { ThfModalAction } from '@totvs/thf-ui/components/thf-modal';
import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal/thf-modal.component';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification/thf-notification.service';
import { ThfPageAction, ThfPageFilter } from '@totvs/thf-ui/components/thf-page';
import { ThfSelectOption } from '@totvs/thf-ui/components/thf-field';
import { ThfTableColumn } from '@totvs/thf-ui/components/thf-table';

import { LeilaoFormGroupService } from '../services/leilao-form-group-service';
import { LeiloesService } from '../services/leiloes.service';
import { Leilao } from '../entity/leilao';
import { TotvsResponse } from './leiloes.interface';

@Component({
  selector: 'app-leiloes',
  templateUrl: './leiloes.component.html',
  styleUrls: ['./leiloes.component.css']
})
export class LeiloesComponent implements OnDestroy, OnInit {

  advancedFilterPrimaryAction: ThfModalAction;
  cancelDeleteAction: ThfModalAction;
  confirmDeleteAction: ThfModalAction;

  pageActions: Array<ThfPageAction>;
  tableActions: Array<ThfPageAction>;

  breadcrumb: ThfBreadcrumb;
  disclaimerGroup: ThfDisclaimerGroup;
  filterSettings: ThfPageFilter;

  columns: Array<ThfTableColumn>;
  items: Array<Leilao>;
  itemsFiltered: Array<Leilao>;
  statusOptions: Array<ThfSelectOption>;

  leilaoStatus: string;
  isLoading = true;
  labelFilter = '';
  literals = {};

  private disclaimers: Array<ThfDisclaimer> = [];

  private leilaoSubscription: Subscription;
  private literalsSubscription: Subscription;

  @ViewChild('modalDelete') modalDelete: ThfModalComponent;
  @ViewChild('advancedFilterModal') advancedFilterModal: ThfModalComponent;

  constructor(
    private leiloesService: LeiloesService,
    private router: Router,
    private thfI18nService: ThfI18nService,
    private leilaoFormGroupService: LeilaoFormGroupService,
    public thfNotification: ThfNotificationService,
  ) { }

  ngOnDestroy(): void {
    this.leilaoSubscription.unsubscribe();
    this.literalsSubscription.unsubscribe();
  }

  ngOnInit() {

    this.literalsSubscription = this.thfI18nService.getLiterals().subscribe(literals => {
      this.literals = literals;
      this.setLiteralsDefaultValues();
    });

    this.getLeilao();

    this.disclaimerGroup = {
      title: 'Filters',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this)
    };

    this.statusOptions = this.leilaoFormGroupService.getStatusOptions();
  }

  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  filterAction(filter = [this.labelFilter]) {

    this.populateDisclaimers(filter);
    this.filter();
  }

  private applyFilters(filters) {
    this.itemsFiltered = this.items.filter(item => {
      return Object.keys(item)
      .some(key => (!(item[key] instanceof Object) && this.includeFilter(item[key], filters)));
    });
  }

  private deleteLeilao() {
    const selectedLeilao = this.itemsFiltered.filter((leilao: any) => leilao.$selected);

    if (selectedLeilao.length > 0) {
      selectedLeilao.map(((leilao: Leilao) => {
        this.leiloesService.deleteLeilao(leilao.id).subscribe(data => {
          this.getLeilao();
        });
      }));
      this.thfNotification.success(this.literals['excludedLeilao']);
    }
  }

  private editLeilao(leilao: Leilao) {
    this.router.navigate(['/edit', leilao.id]);
  }

  private filter() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value);

    filters.length ? this.applyFilters(filters) : this.resetFilters();
  }

  private getLeilao() {
    this.leilaoSubscription = this.leiloesService.getLeiloes().subscribe((leilao: TotvsResponse<Leilao>) => {
      this.items = leilao.items;
      this.itemsFiltered = [...this.items];

      this.isLoading = false;
    });
  }

  private includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  private onConfirmDelete() {
    this.modalDelete.close();
    this.deleteLeilao();
  }

  private onChangeDisclaimer(disclaimers) {
    this.disclaimers = disclaimers;
    this.filter();
  }

  private populateDisclaimers(filters) {
    this.disclaimers = filters.map(value => ({ value }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  private resetFilters() {
    this.itemsFiltered = [...this.items];
    this.leilaoStatus = '';
  }

  private setLiteralsDefaultValues() {

    this.advancedFilterPrimaryAction = {
      action: () => {
        this.advancedFilterModal.close();
        const filters = [this.leilaoStatus];
        this.filterAction(filters);
      },
      label: 'Apply filters'
    };

    this.confirmDeleteAction = {
      action: () => this.onConfirmDelete(), label: this.literals['remove']
    };

    this.cancelDeleteAction = {
      action: () => this.modalDelete.close(), label: this.literals['return']
    };

    this.pageActions = [
      { label: this.literals['addNewLeilao'], action: () => this.router.navigate(['/new-leilao']), icon: 'thf-icon-plus' },
      { label: this.literals['print'], action: () => alert('Acao Imprimir')},
      { label: this.literals['export'], action: () => alert('Exportando...')},
      { label: this.literals['remove'], action: () => this.modalDelete.open()},
      { label: this.literals['actions'], action: () => alert('Acao 2') }
    ];

    this.tableActions = [
      { action: this.editLeilao.bind(this), label: this.literals['edit'] },
    ];

    this.columns = [
      { column: 'id', label: this.literals['code'], type: 'string' },
      { column: 'name', label: this.literals['name'] , type: 'link', action: (value, row) => this.editLeilao(row) },
      { column: 'photo_url', label: this.literals['photo_url'], type: 'string' },
      { column: 'bid_type', label: this.literals['bid_type'], type: 'number' },
      { column: 'bid_step', label: this.literals['bid_step'], type: 'number' },
      { column: 'status', label: this.literals['status'], type: 'label', width: '10%', labels: [
        { value: '0', color: 'danger', label: 'Rascunho' },
        { value: '1', color: 'warning', label: 'Ativo' },
        { value: '2', color: 'sucess', label: 'Finalizado' },
      ]},
      { column: 'owner', label: this.literals['owner'], type: 'string' },
      { column: 'expirationDate', label: this.literals['expirationDate'], type: 'Date' },
    ];

    this.breadcrumb = {
      items: [
        { label: this.literals['leilao'], link: '/leilao' }
      ]
    };

    this.filterSettings = {
      action: 'filterAction',
      advancedAction: 'advancedFilterActionModal',
      ngModel: 'labelFilter',
      placeholder: this.literals['search']
    };
  }
}
