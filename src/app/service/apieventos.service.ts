import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApieventosService {

  // URL de la API de Mockaroo
  apiUrl = "https://api.mockaroo.com/api/ce467760?count=20&key=617909f0"; 

  constructor(private http: HttpClient) {}

  // Método para obtener eventos
  getEventos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
