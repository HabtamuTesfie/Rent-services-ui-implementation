//-----------------------------------------------------------------------------
/**
 * @Application Rent Service
 * @owner Habtamu Tesfie
 * @data 11/25/2022
 * Run at typescript
*/
//-----------------------------------------------------------------------------
import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';

import {IRentService, IState} from '../../model/rent-service.model';
import { RentService } from '../../services/rent.service';

//-----------------------------------------------------------------------------
/**
 * Confirmation component
*/
//-----------------------------------------------------------------------------
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit
{


  //------------------------------------------------------ Exposed data members
  public message:           string = "Are you sure?";
  public confirmButtonText: string = "Yes";
  public cancelButtonText:  string = "Cancel";
  public services:          Observable<Array<IRentService>> | undefined;
  public recievedData:      IRentService | undefined;

  //-----------------------------------------------------------------------------
  /**
   * component construction
  */
  //-----------------------------------------------------------------------------
  constructor (private rsrv: RentService,
               private store: Store<IState>,
               private dialogRef: MatDialogRef<ConfirmationComponent>,
               @Inject(MAT_DIALOG_DATA) private data: any)
  {
    if (data)
    {
      this.message = data.message || this.message
      if (data.buttonText)
      {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
  }


  //-----------------------------------------------------------------------------
  /**
   * component intialization
  */
  //-----------------------------------------------------------------------------
  ngOnInit(): void
  {
    this.rsrv.data.subscribe(data =>
      {
        this.recievedData = data;
      })
    this.services = this.store.select((store) => store.rentService);

    return;
  } // ngOnInit


  //-----------------------------------------------------------------------------
  /**
   * Close modal on confirmation click
  */
  //-----------------------------------------------------------------------------
  onConfirmClick(): void
  {
    console.log("This is the service call",this.rsrv.saveData(this.store.select((store) => store.rentService)));
    this.dialogRef.close(true);
  } // onConfirmClick

} // ConfirmationComponent
