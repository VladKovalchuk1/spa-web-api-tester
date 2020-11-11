import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FetchService, IResultObject } from '../shared/services/fetch.service';

@Component({
  selector: 'app-fetch-form',
  templateUrl: './fetch-form.component.html',
  styleUrls: []
})
export class FetchFormComponent implements OnInit {
  public url = '';
  public res: IResultObject = {
    error: new HttpErrorResponse({}),
    result: false
  };

  constructor(private http: FetchService) { }

  ngOnInit(): void {
  }

  sendRequst(): void{
    this.http.sendGetRequst(this.url);
    this.res = this.http.resultObject;
  }

  getResponse(): void{
    console.log(this.res);
  }
}
