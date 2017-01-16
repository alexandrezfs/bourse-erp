import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Transaction } from "../components/Transaction";

@Injectable()
export class TransactionService {

  private commentsUrl = 'http://localhost:3000/api/transactions';

  constructor (private http: Http) {}

  getTransactionsByDateAndmagasin(): Observable<Transaction[]> {
    return this.http.get(this.commentsUrl, { withCredentials: true })
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
