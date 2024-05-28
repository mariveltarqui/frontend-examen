import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [RowComponent, ColComponent,CardComponent, CardHeaderComponent, CardBodyComponent,
    ReactiveFormsModule  , ReactiveFormsModule, FormDirective, FormSelectDirective,
    FormControlDirective, FormControlDirective,ButtonDirective,NgStyle,TextColorDirective,
    TableDirective,TableColorDirective,TableActiveDirective],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.scss'
})
export class PacienteComponent {

}
