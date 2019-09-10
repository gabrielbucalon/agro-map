import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from "../../app/app.api";

@Injectable()
export class LocationsProvider {
  constructor(public http: HttpClient) {}

  //Pega somente um registro
  findById(id: number){
    return this.http.get<any>(`${API}/grupoConsumo/${id}`);
  }

  //Pega todos os registros
  findAll(){
    return this.http.get<any>(`${API}/grupoConsumo`);
  }
}
