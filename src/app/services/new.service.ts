import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { New } from "../models/new.model"

@Injectable({
  providedIn: 'root'
})
export class NewService {

  public route = 'http://localhost:3001/';
  constructor(
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get<New[]>(`${this.route}news`);
  }

  getArchived() {
    return this.http.get<New[]>(`${this.route}news/archived`);
  }

  getDetail(newId: string) {
    return this.http.get<New>(`${this.route}news/${newId}`);
  }

  archive(newId: any) {
    return this.http.get(`${this.route}news/archive/${newId}`);
  }

  delete(newId: any) {
    return this.http.delete(`${this.route}news/${newId}`);
  }
}
