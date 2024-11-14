import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Leav } from 'src/models/Leave';

@Injectable({
  providedIn: 'root'
})
export class LeavService {

  private baseUrl = 'http://localhost:8089/leav'; // Update with your API URL

  constructor(private http: HttpClient) { }

  // Add a new leave
  addLeave(leav: Leav): Observable<Leav> {
    return this.http.post<Leav>(`${this.baseUrl}/addLeav`, leav);
  }

  getAllLeaves(): Observable<Leav[]> {
    return this.http.get<Leav[]>(`${this.baseUrl}/allLeavs`); // Updated URL to match the backend endpoint
  }
  
}
