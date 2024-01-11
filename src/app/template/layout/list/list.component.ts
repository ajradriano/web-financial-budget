import { NgFor, CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PrimeNgModule } from 'src/app/prime-ng.module';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [PrimeNgModule, NgFor, CommonModule, TitleComponent, ListComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() data: any
  @Input() cols: any
}
