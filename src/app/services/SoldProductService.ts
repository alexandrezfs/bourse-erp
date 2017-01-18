import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Response, URLSearchParams} from "@angular/http";
import {SoldProduct} from "../entities/SoldProduct";
import {API_BASE_URL} from "../constants/Config"

@Injectable()
export class SoldProductService {

  private apiUrlPath = '/soldproducts';

  constructor (private http: Http) {}

  getSoldProductAnyKeyword(keyword: string): Observable<SoldProduct[]> {

    let params: URLSearchParams = new URLSearchParams();
    params.set('keyword', keyword);

    return this.http.get(API_BASE_URL + this.apiUrlPath, { withCredentials: true, search: params })
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
