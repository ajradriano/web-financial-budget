import { Component } from '@angular/core';
import { ListComponent } from 'src/app/template/layout/list/list.component';
import { TitleComponent } from 'src/app/template/layout/title/title.component';

@Component({
  selector: 'app-payment-method',
  standalone: true,
  imports: [TitleComponent, ListComponent],
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.scss'
})
export class PaymentMethodComponent {
  title = 'Métodos de Pagamento'
  cols: Array<any> = [
    {
      field: 'name',
      header: 'Nome',
      style: 'name-style'
    },
    {
      field: 'description',
      header: 'Descrição',
      style: 'description-style'
    },
  ]

  data: Array<any> = [
    {
      "id": 1,
      "name": "Dinheiro",
      "description": "Meio de pagamento, na forma de moedas ou cédulas, em espécie.",
      "created_at": "2023-11-29T18:39:40.000000Z",
      "updated_at": "2023-11-29T18:39:40.000000Z",
      "deleted_at": null
    },
    {
      "id": 2,
      "name": "Cartão de Crédito",
      "description": "Meio de pagamento à prazo, que permite parcelamento.",
      "created_at": "2023-11-29T18:39:40.000000Z",
      "updated_at": "2023-11-29T18:39:40.000000Z",
      "deleted_at": null
    },
    {
      "id": 3,
      "name": "Cartão de Débito",
      "description": "Meio de pagamento à vista, descontado instantaneamente da conta bancária.",
      "created_at": "2023-11-29T18:39:40.000000Z",
      "updated_at": "2023-11-29T18:39:40.000000Z",
      "deleted_at": null
    },
    {
      "id": 4,
      "name": "PIX",
      "description": "Meio de pagamento online instantâneo.",
      "created_at": "2023-11-29T18:39:40.000000Z",
      "updated_at": "2023-11-29T18:39:40.000000Z",
      "deleted_at": null
    },
    {
      "id": 5,
      "name": "Transferência Bancária - TED",
      "description": "Transferência Eletrônica Disponível. Movimentação de dinheiro entre contas sem restrição de valor.",
      "created_at": "2023-11-29T18:39:40.000000Z",
      "updated_at": "2023-11-29T18:39:40.000000Z",
      "deleted_at": null
    },
    {
      "id": 6,
      "name": "Transferência Bancária - DOC",
      "description": "Documento de Ordem de Crédito. Transações com o valor máximo de R$ 4.999,99.",
      "created_at": "2023-11-29T18:39:40.000000Z",
      "updated_at": "2023-11-29T18:39:40.000000Z",
      "deleted_at": null
    }
  ]
}
