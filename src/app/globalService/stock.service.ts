import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})

export class StockService {
    // AppConfig = "https://financialmodelingprep.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ&apikey=demo"
    AppConfig = "https://financialmodelingprep.com/api/v3/search?query="
    constructor(private httpClient: HttpClient) {

     
    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };


   
    public getStockList(searchword,limit,exchange): Observable<any> {

        
        return this.httpClient.get<any>(this.AppConfig + searchword+"&limit="+limit+"&exchange="+exchange +"&apikey=8db6d2845cd65410bf270c1574fa044e", this.httpOptions)

    }
   
  // Download Statement
  downloadStatement(symbol: string): Observable<any> {
    return this.httpClient.get('https://financialmodelingprep.com/api/v3/financials/income-statement/' + symbol + '?datatype=csv&apikey=8db6d2845cd65410bf270c1574fa044e' ,this.httpOptions);
  }
}