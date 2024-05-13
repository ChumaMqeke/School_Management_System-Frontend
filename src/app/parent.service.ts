import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  private baseUrl = 'http://localhost:7227/api/parents';

  constructor(private http: HttpClient) { }

  getParents(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addParent(parent: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, parent);
  }

  updateParent(parentId: string, updatedParent: any): Observable<any> {
    const url = `${this.baseUrl}/${parentId}`;
    return this.http.put<any>(url, updatedParent);
  }

  deleteParent(parentId: string): Observable<any> {
    const url = `${this.baseUrl}/${parentId}`;
    return this.http.delete<any>(url);
  }
}
