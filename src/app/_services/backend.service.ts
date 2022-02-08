import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  apiUrl: string = `${environment.apiUrl}`;

  constructor(
    private http: HttpClient
  ) { }

  public getIPAddress() {
    return this.http.get<any>("http://api.ipify.org/?format=json").pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

}
