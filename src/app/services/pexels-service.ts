// src/app/services/pexels.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';  // ✅ your API key
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PexelsService {
  private apiUrl = 'https://api.pexels.com/v1';

  constructor(private http: HttpClient) {}

  searchImages(query: string, perPage: number = 5): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search?query=${query}&per_page=${perPage}`, {
      headers: {
        Authorization: environment.pexelsApiKey
      }
    });
  }
}
