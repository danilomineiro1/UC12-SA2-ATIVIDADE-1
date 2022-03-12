import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { observable, Observable } from 'rxjs';
import { Vagas } from '../models/vagas.models';

@Injectable({
  providedIn: 'root'
})
export class VagasServiceService {

  baseURL = "http://localhost:3000/vagas";

  constructor(private http: HttpClient) { }
  ///operações de Crud
  ///***criaçao de uma vaga****////
  create (dados : Vagas) : Observable<Vagas> {
    return this.http.post<Vagas>(this.baseURL, dados);
  }
/// leitura de vagas
read() : Observable<Vagas[]> {
  return this.http.get<Vagas[]>(this.baseURL);
}
/// leitura de vaga especifica
readById(id : number) : Observable<Vagas>{
const url = `${this.baseURL}/${id}`;
return this.http.get<Vagas>(url);
  } 
///alteraçao de vagas
updateVagas(dados: Vagas) :Observable<Vagas> {
  const url = `${this.baseURL}/${dados.id}`;
  return this.http.put<Vagas>(url, dados);
}
  // exclusao de vagas
  deleteVagas(id : number): Observable<Vagas> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Vagas>(url);
  }
}
