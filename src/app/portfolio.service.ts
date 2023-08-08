import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private dataUrl = 'assets/portfolio-data.json';
  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    // return this.http.get<any>("../app/projects/portfolio-data.json");
    return this.http.get<any[]>(this.dataUrl);
  }
}
