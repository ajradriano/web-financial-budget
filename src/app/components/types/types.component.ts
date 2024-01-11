import { Component } from '@angular/core';
import { ListComponent } from 'src/app/template/layout/list/list.component';
import { TitleComponent } from 'src/app/template/layout/title/title.component';

@Component({
  selector: 'app-types',
  standalone: true,
  imports: [TitleComponent, ListComponent],
  templateUrl: './types.component.html',
  styleUrl: './types.component.scss'
})
export class TypesComponent {
  title = 'Tipos de Movimentação'
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
      "name": "Receita",
      "description": "Todo valor que é somado ao seu saldo atual",
      "created_at": "2023-11-29T18:39:40.000000Z",
      "updated_at": "2023-11-29T18:39:40.000000Z",
      "deleted_at": null
    },
    {
      "id": 2,
      "name": "Despesa",
      "description": "Toda transação que subtrai do seu saldo atual",
      "created_at": "2023-11-29T18:39:40.000000Z",
      "updated_at": "2023-11-29T18:39:40.000000Z",
      "deleted_at": null
    }
  ]
}
