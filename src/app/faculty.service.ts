import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faculty } from './faculty';


@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  getFaculty(id: number){

  
  }
  private baseURL = "http://localhost:8090/api/admins";

  constructor(private httpClient: HttpClient) { }

  getFacultiesList(): Observable<Faculty[]>{
    return this.httpClient.get<Faculty[]>(`${this.baseURL}`);    
  }
  createFaculty(faculty : Faculty): Observable<Object>{
    return this.httpClient.post(`http://localhost:8090/api/create`, faculty);
  }
  updateFaculty(id: number, faculty:Faculty): Observable<Object> {
    return this.httpClient.put(`http://localhost:8090/api/update/1`, faculty);
  }
  getFacultyById (id: number): Observable<Faculty>{
    return this.httpClient.get<Faculty>(`${this.baseURL}/${id}`);
  }

  deleteFaculty(id: number): Observable<Object> {
    return this.httpClient.delete(`http://localhost:8090/api/delete/68`,
    { responseType: 'text' });
    
    
  }
}
