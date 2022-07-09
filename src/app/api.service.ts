import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
  httpApi(){
    return this.http.get("http://localhost:3000")
  }

  httpApiPost(hero:any){
    let url = 'http://localhost:3000'
    return this.http.post<any>(url , hero)
  }

}
