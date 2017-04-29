import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {Message} from '../../model/message';
import {Pager} from '../../model/pager';
import {isUndefined} from 'util';

@Injectable()
export abstract class ApiServiceBase {
  private readonly BASE_URL = 'http://94.177.230.203:8080/sport/rest/';
  private requestOptions: RequestOptions;

  constructor(private http: Http) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json;charset=utf-8',
      'Authorization': `Basic ${btoa('manager:admin')}`
    });

    this.requestOptions = new RequestOptions({headers: headers});
  }

  protected getById<T>(endpoint: string, id: number): Observable<T> {
    return this.http
      .get(`${this.BASE_URL}${endpoint}/${id}`, this.requestOptions)
      .map(response => <T>response.json())
      .publishReplay(1)
      .refCount()
      .catch(this.handleError);
  }

  protected getPage<T>(endpoint: string,
                       order: string,
                       offset: number,
                       limit: number,
                       id?: number): Observable<Pager<T>> {
    return this.http
      .get(
        `${this.BASE_URL}${endpoint}/
         ?${isUndefined(id) ? '' : id + '&'}
         order=${order}
         &offset=${offset}
         &limit=${limit}`, this.requestOptions)
      .map(response => <Pager<T>>response.json())
      .publishReplay(1)
      .refCount()
      .catch(this.handleError);
  }

  protected getAll<T>(endpoint: string): Observable<T> {
    return this.http
      .get(this.BASE_URL + endpoint, this.requestOptions)
      .map(response => <T>response.json())
      .publishReplay(1)
      .refCount()
      .catch(this.handleError);
  }

  protected post(endpoint: string, body: any): Observable<Message> {
    return this.http
      .post(this.BASE_URL + endpoint, JSON.stringify(body), this.requestOptions)
      .map(resp => <Message>resp.json())
      .publishReplay(1)
      .refCount()
      .catch(this.handleError);
  }

  private handleError(error: any) {
    const errorMessage = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.log(errorMessage);

    return Observable.throw(errorMessage);
  }
}
