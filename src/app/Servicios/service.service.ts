import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Celular } from '../Entidad/Celular';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:7580/api/Celular/'

  listarC(){
    return this.http.get<Celular[]>(this.url+'listar');
  }

  buscarC(celular: Celular){
    return this.http.post<Celular>(this.url+'buscar', celular);
  }

  guardarC(celular: Celular){
    return this.http.post<Celular>(this.url+'guardar', celular);
  }

  editarC(celular: Celular){
    return this.http.post<Celular>(this.url+'editar', celular);
  }

  eliminarC(celular: Celular){
    return this.http.post<Celular>(this.url+'eliminar', celular);
  }


}
