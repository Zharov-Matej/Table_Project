import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableFilter } from './mat-table/mat-table.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _httpClient: HttpClient) { }
  
  getApplicatorsList(filter: DataTableFilter):  Observable<any> {
    return this._httpClient.post<any>(`http://api.interns.techup.me/user/datatable`, filter)
  }
}