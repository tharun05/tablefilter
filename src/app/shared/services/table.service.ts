import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, RequestMethod, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class DataService {
  result;
  constructor(private http: HttpClient) { 
    this.getdata().subscribe(data=>{
      console.log(data)
    })
  }
  getdata(){
     return this.http.get('assets/json/tabledata.json');
  }
}