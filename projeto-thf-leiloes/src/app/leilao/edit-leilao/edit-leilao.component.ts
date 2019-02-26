import { OnDestroy, OnInit, ViewChild, Component } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { ThfModalAction } from '@totvs/thf-ui/components/thf-modal';
import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal/thf-modal.component';
import { ThfPageAction } from '@totvs/thf-ui/components/thf-page';
import { ThfSelectOption, ThfLookupColumn } from '@totvs/thf-ui';
import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb/thf-breadcrumb.interface';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification/thf-notification.service';
import { ThfI18nService } from '@totvs/thf-ui/services/thf-i18n';

import { Leilao } from './../../entity/leilao';
import { LeiloesService } from '../../services/leiloes.service';
import { LeilaoFormGroupService } from '../../services/leilao-form-group-service';

@Component({
  selector: 'app-edit-leilao',
  templateUrl: './edit-leilao.component.html',
  styleUrls: ['./edit-leilao.component.css']
})
export class EditLeilaoComponent implements OnInit, OnDestroy {

  confirmDeleteAction: ThfModalAction;
  confirmReturnToListAction: ThfModalAction;
  returnAction: ThfModalAction;

  editLeilaoBreadcrumb: ThfBreadcrumb;
  newLeilaoBreadcrumb: ThfBreadcrumb;

  editLeilaoActions: Array<ThfPageAction>;
  newLeilaoActions: Array<ThfPageAction>;

  leilao: Leilao = new Leilao();
  literals = {};
  isPageEdit: boolean;
  statusOptions: Array<ThfSelectOption>;

  public readonly columns: Array<ThfLookupColumn> = [
    { column: 'label', label: 'Name' }
  ];

  readonly status: Array<ThfSelectOption> = [
      { label: 'Rascunho', value: 'rascunho' },
      { label: 'Ativo', value: 'ativo' },
      { label: 'Finalizado', value: 'finalizado' },
  ];

  private literalsSubscription: Subscription;

  @ViewChild('modalDeleteLeilao') modalDeleteLeilao: ThfModalComponent;
  @ViewChild('modalCancelEditLeilao') modalCancelEditLeilao: ThfModalComponent;
  @ViewChild('formLeilao') formLeilao: NgForm;

  constructor(
    private leiloesService: LeiloesService,
    private leilaoFormGroupService: LeilaoFormGroupService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private thfI18Service: ThfI18nService,
    private thfNotification: ThfNotificationService,
    private router: Router,
  ) { }

  ngOnDestroy() {
    this.literalsSubscription.unsubscribe();
  }

  ngOnInit() {

    this.literalsSubscription = this.thfI18Service.getLiterals().subscribe(literals => {
      this.literals = literals;
      this.setLiteralsDefaultValues();
    });

    this.getLeilao();

    this.statusOptions = this.leilaoFormGroupService.getStatusOptions();
  }

    private addLeilao(leilao: Leilao) {
      this.leiloesService.addLeilao(leilao).subscribe(() => {
        this.router.navigate(['/leilao']);
        this.thfNotification.success('Leilao cadastrado com sucesso.');
      });
    }

    private checkLeilaoInterationOnForm(formLeilao: NgForm) {
      formLeilao.dirty === true ? this.modalCancelEditLeilao.open() : this.location.back();
    }

    private closeModal() {
      this.modalDeleteLeilao.close();
      this.modalCancelEditLeilao.close();
    }

    private deleteLeilao() {
      this.leiloesService.deleteLeilao(this.leilao.id).subscribe(data => {
        this.router.navigate(['/leilao']);
        this.thfNotification.success(this.literals['excludedLeilao']);
      });
    }

    private getLeilao() {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.isPageEdit = true;
        this.leiloesService.getLeilao(id).subscribe((leilao: Leilao) => {
          this.leilao = leilao;
        });
      }
    }

    private onConfirmDelete() {
      this.modalDeleteLeilao.close();
      this.deleteLeilao();
    }

    private setLiteralsDefaultValues() {
      this.confirmDeleteAction = {
        action: () => this.onConfirmDelete(), label: this.literals['remove']
      };

      this.confirmReturnToListAction = {
        label: this.literals['yes'], action: () => this.location.back()
      };

      this.editLeilaoActions = [
        { label: this.literals['saveLeilao'], action: this.updateLeilao.bind(this, this.leilao), icon: 'thf-icon-plus'},
        { label: this.literals['return'], action: this.checkLeilaoInterationOnForm.bind(this, this.formLeilao) },
        { label: this.literals['print'], action: () => alert('Imprimir') },
        { label: this.literals['remove'], action: () => this.modalDeleteLeilao.open() },
      ];

      this.editLeilaoBreadcrumb = {
        items: [
          { label: this.literals['leilao'], link: '/leilao'},
          { label: this.literals['editLeilao'], link: '/leilao/edit'},
        ]
      };

      this.newLeilaoActions = [
        { label: this.literals['saveLeilao'], action: this.addLeilao.bind(this, this.leilao), icon: 'thf-icon-plus' },
        { label: this.literals['return'], action: this.checkLeilaoInterationOnForm.bind(this, this.formLeilao) }
      ];

      this.newLeilaoBreadcrumb = {
        items: [
          { label: this.literals['leilao'], link: '/leilao' },
          { label: this.literals['addNewLeilao'], link: '/leilao/new-leilao' }
        ]
      };

      this.returnAction = {
        action: this.closeModal.bind(this), label: this.literals['return']
      };
    }

    private updateLeilao() {
      this.leiloesService.updateLeilao(this.leilao).subscribe(() => {
        this.router.navigate(['/leilao']);
        this.thfNotification.success('Alteracao efetuada com sucesso.');
      });
    }

}

