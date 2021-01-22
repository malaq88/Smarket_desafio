import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  getMember(id: any) : Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});
  };

  updateMember(member: any) : Observable<any> {
    let body = {name: member.name, surname: member.surname};
    return this.http.put(this.baseUrl + 'members/' + member.id + '/', body,
    {headers: this.httpHeaders});
  };

  deleteMember(id: any) : Observable<any> {
    return this.http.delete(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});
  };
  

  getMemberAssigs(id: any) : Observable<any> {
    return this.http.get(this.baseUrl + 'memberassigs/' + id + '/',
    {headers: this.httpHeaders});
  };

  getAssigs(id: any) : Observable<any> {
    return this.http.get(this.baseUrl + 'assigs/' + id + '/',
    {headers: this.httpHeaders});
  };

  changeStatusAssign(assig: any) : Observable<any> {
    console.log(assig.status);
    if (assig.status == "Pendente") {
      let body = {desc: assig.desc, status: "Feito"};  
      return this.http.put(this.baseUrl + 'assigs/' + assig.id + '/', body,
      {headers: this.httpHeaders});
    } else {
      let body = {desc: assig.desc, status: "Pendente"};
      return this.http.put(this.baseUrl + 'assigs/' + assig.id + '/', body,
      {headers: this.httpHeaders});
    }
  };

  deleteAssig(id: any) : Observable<any> {
    return this.http.delete(this.baseUrl + 'assigs/' + id + '/',
    {headers: this.httpHeaders});
  };

}
