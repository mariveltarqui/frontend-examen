import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RegistropacienteModel } from "../models/paciente.model";
@Injectable({
    providedIn : 'root'
})
export class PacienteService{
    // url de api( backend)
    private API_URL = 'http://localhost:7000/registropaciente'
    constructor(private http: HttpClient){

    }
    traerTodoRegistro (): Observable<RegistropacienteModel[]>{
     return this.http.get<RegistropacienteModel[]>(`${this.API_URL}/traerTodoRegistro`);
    }

    agregarRegistro( registro: RegistropacienteModel):Observable<RegistropacienteModel>{
        return this.http.post<RegistropacienteModel>(`${this.API_URL}/crearRegistro`, registro);
    }
 

    editarRegistro(registro: RegistropacienteModel) : Observable<RegistropacienteModel> {
        return this.http.put<RegistropacienteModel>(`${this.API_URL}/editarRegistro/${registro._id}`, registro);
      }

    eliminarRegistro(idRegistro : string) : Observable<RegistropacienteModel> {
        console.log(idRegistro);
        // return this.http.delete<RecetaModel>(`${this.API_URL}/eliminar/${idReceta}`);
        return this.http.delete<RegistropacienteModel>(this.API_URL+'/eliminarRegistro/'+idRegistro);
    
      }
}