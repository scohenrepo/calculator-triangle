import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class ConfigService {

  configUrl = 'http://localhost:8080/getType';

  constructor(private httpClient: HttpClient) { }

  public get(sizes: any){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const params = new HttpParams()
              .set('sizes', sizes);
    return this.httpClient.get(this.configUrl, {headers, responseType: 'text', params});
  }

}
