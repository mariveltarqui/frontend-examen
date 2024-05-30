import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RowComponent, ColComponent,CardComponent,
  CardHeaderComponent, CardBodyComponent,
  ButtonDirective,
  FormDirective,
  FormSelectDirective,
  FormLabelDirective,
  TextColorDirective,
  TableDirective,
  TableColorDirective,
  TableActiveDirective,
  FormControlDirective} from '@coreui/angular';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [ RowComponent, ColComponent,CardComponent,
    CardHeaderComponent, CardBodyComponent,
   ReactiveFormsModule  , FormsModule, FormDirective,
   FormSelectDirective, FormControlDirective,
   FormLabelDirective, ButtonDirective, NgStyle,
   TextColorDirective,
   TableDirective, TableColorDirective, TableActiveDirective],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.scss'
})
export class ReportesComponent {

}

