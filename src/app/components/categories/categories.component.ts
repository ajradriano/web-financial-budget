import { NgFor, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNgModule } from 'src/app/prime-ng.module';
import { ListComponent } from 'src/app/template/layout/list/list.component';
import { TitleComponent } from 'src/app/template/layout/title/title.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [TitleComponent, ListComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  title: string = 'Categorias'

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
      "name": "Água",
      "description": "Consumo de água",
      "created_at": "2023-11-29T18:39:40.000000Z",
      "updated_at": "2023-11-29T18:39:40.000000Z",
      "deleted_at": null
    },
    {
      "id": 2,
      "name": "Alimentação",
      "description": "Despesas com mercado, padaria, etc",
      "created_at": "2023-11-29T18:39:40.000000Z",
      "updated_at": "2023-11-29T18:39:40.000000Z",
      "deleted_at": null
    },
    {
      "id": 3,
      "name": "Aluguel",
      "description": "",
      "created_at": "2023-11-29T18:39:40.000000Z",
      "updated_at": "2023-11-29T18:39:40.000000Z",
      "deleted_at": null
    },
    {
      "id": 4,
      "name": "Despesas diversas",
      "description": "",
      "created_at": "2023-11-29T18:39:40.000000Z",
      "updated_at": "2023-11-29T18:39:40.000000Z",
      "deleted_at": null
    },
    {
      "id": 5,
      "name": "Educação",
      "description": "",
      "created_at": "2023-11-29T18:39:40.000000Z",
      "updated_at": "2023-11-29T18:39:40.000000Z",
      "deleted_at": null
    },
    {
      "id": 6,
      "name": "Fatura do cartão",
      "description": "",
      "created_at": "2023-11-29T18:39:40.000000Z",
      "updated_at": "2023-11-29T18:39:40.000000Z",
      "deleted_at": null
    },
    {
      "id": 7,
      "name": "Gastos com veículo",
      "description": "Custo de manutenção e combustively",
      "created_at": "2023-11-29T18:39:40.000000Z",
      "updated_at": "2023-11-29T18:39:40.000000Z",
      "deleted_at": null
    },
  ]

}
