import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Response, URLSearchParams} from "@angular/http";
import {Transaction} from "../entities/Transaction";
import {API_BASE_URL} from "../constants/Config"

@Injectable()
export class TransactionService {

  private apiUrlPath = '/transactions';

  constructor (private http: Http) {}

  getTransactionsByDateAndmagasin(date: string, magasin: string): Observable<Transaction[]> {

    let params: URLSearchParams = new URLSearchParams();
    params.set('date', date);
    params.set('magasin', magasin);

    return this.http.get(API_BASE_URL + this.apiUrlPath, { withCredentials: true, search: params })
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
