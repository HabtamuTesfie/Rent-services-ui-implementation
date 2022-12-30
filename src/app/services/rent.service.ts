//-----------------------------------------------------------------------------
/**
 * @Application Rent Service
 * @owner Habtamu Tesfie
 * @data 11/27/2022
 * Run at typescript
*/
//-----------------------------------------------------------------------------
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { url } from 'inspector';
import { IRentService } from '../model/rent-service.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

//-----------------------------------------------------------------------------
/**
 * rent service
*/
//-----------------------------------------------------------------------------
@Injectable
({
  providedIn: 'root'
})
export class RentService
{
  private url = "/rentService";

  public data = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {}


  public saveData(data: Observable<IRentService[]>):void
  {
    this.http.post(this.url,data,
    {
      headers:
      {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }


  public submitData(data: IRentService): void
  {
    this.data.next(data);
  }


}
