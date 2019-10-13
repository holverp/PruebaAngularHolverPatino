import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Producto } from './models/producto';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class AppService {

    private appUrl: string = 'https://fvwzxk56cg.execute-api.us-east-1.amazonaws.com/mock';

    constructor(private http: HttpClient) { }

    public consultarProductos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(this.appUrl.concat('/productos'));
    }
}