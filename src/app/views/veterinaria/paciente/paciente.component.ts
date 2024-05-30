import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RegistropacienteModel } from '../models/paciente.model';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [RowComponent, ColComponent,CardComponent,
     CardHeaderComponent, CardBodyComponent,
    ReactiveFormsModule  , FormsModule, FormDirective,
    FormSelectDirective,FormControlDirective,
    FormLabelDirective, ButtonDirective, NgStyle,
    TextColorDirective,
    TableDirective, TableColorDirective, TableActiveDirective],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.scss'
})

export class PacienteComponent {
listaPacientes : RegistropacienteModel [] = [];
registroModelo : RegistropacienteModel =new RegistropacienteModel();
/*
*
*/

constructor(private pacienteService: PacienteService){
  this.getRegistro();

}
getRegistro(){
  this.pacienteService.traerTodoRegistro().subscribe({
    next : (respuesta) => {
      console.log(respuesta);
          this.listaPacientes = respuesta;
    },
    error: (error) => {
      console.log(error);
    }
  })
}

guardarRegistro(){
  console.log(this.registroModelo);
    if (this.registroModelo._id == '') {
      console.log("guardar", this.registroModelo);
      this.agregarRegistro();
    } else {
      console.log("editar", this.registroModelo);
      this.editarRegistro();
    }

}

agregarRegistro(){
  //console.log(this.registroModelo);
  this.pacienteService.agregarRegistro(this.registroModelo).subscribe({
    next : (respuesta) => {
        console.log("Se guardo exitosamente",respuesta);
        this.getRegistro();
        this.registroModelo = new RegistropacienteModel();
    },
    error: (error) => {
      console.log(error);
    }
  })
}

eliminarRegistro(registro: RegistropacienteModel){
  console.log("itema para eliminar", registro);
  this.pacienteService.eliminarRegistro(registro._id).subscribe({
    next : (respuesta) => {
        console.log("Se elimino exitosamente",respuesta);
        this.getRegistro();
    },
    error: (error) => {
      console.log(error);
    }
  })
}

verReceta(registro: RegistropacienteModel){
  this.registroModelo = registro;
    }
  
    editarRegistro(){
      this.pacienteService.editarRegistro(this.registroModelo).subscribe({
        next : (respuesta) => {
            console.log("Se edito exitosamente",respuesta);
            this.getRegistro();
            this.registroModelo = new RegistropacienteModel();
        },
        error: (error) => {
          console.log(error);
        }
      })
    }

}




