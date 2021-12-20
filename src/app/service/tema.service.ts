import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

  token={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://ograndioso.herokuapp.com/tema', this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://ograndioso.herokuapp.com/tema', tema, this.token)
  }

  getTemaById(id: Number): Observable<Tema>{
    return this.http.get<Tema>(`https://ograndioso.herokuapp.com/tema/${id}`, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://ograndioso.herokuapp.com/tema', tema, this.token)
  }

  deleteTema(id: Number){
    return this.http.delete(`https://ograndioso.herokuapp.com/tema/${id}`, this.token)
  }
}
