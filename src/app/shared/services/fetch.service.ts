import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  public resultObject: IResultObject = {
    error: new HttpErrorResponse({}),
    result: false
  };

  constructor(private http: HttpClient) { }

  sendGetRequst(url: string): void{
    this.http.get<any>(url).subscribe(date => {
      this.resultObject.result = date;
    } , err => {
      this.resultObject.error = err;
    });
  }

  resetResult(): void{
    this.resultObject = {
      error: new HttpErrorResponse({}),
      result: false
    };
  }
}

export interface IResultObject{
  error: HttpErrorResponse;
  result: object | boolean;
}
