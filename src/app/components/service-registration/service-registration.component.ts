//-----------------------------------------------------------------------------
/**
 * @Application Rent Service
 * @owner Habtamu Tesfie
 * @data 10/25/2022
 * Run at typescript
*/
//-----------------------------------------------------------------------------
import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

import {IRentService, IState} from '../../model/rent-service.model';
import {SharedService} from '../../services/shared.service';
import {AddRentServiceAction} from '../../store/action/rent-service.action';
import {ConfirmationComponent} from '../confirmation/confirmation.component';

//-----------------------------------------------------------------------------
/**
 * Service registration component
*/
//-----------------------------------------------------------------------------
@Component({
  selector: 'app-service-registration',
  templateUrl: './service-registration.component.html',
  styleUrls: ['./service-registration.component.scss']
})
export class ServiceRegistrationComponent implements OnInit
{
  //------------------------------------------------------ Exposed data members
  public serviceRegistration: FormGroup;
  public services$: Observable<Array<IRentService>> | undefined;

  public submitted: boolean = false;

  //-----------------------------------------------------------------------------
  /**
   * component intialization
  */
  //-----------------------------------------------------------------------------
  constructor(private fb:       FormBuilder,
              private ssrv:     SharedService,
              private store:    Store<IState>,
              private dialog:   MatDialog,
              private snackBar: MatSnackBar)
  {
    this.serviceRegistration = this.fb.group(
    {
        serviceName: '',
        serviceType: '',
        price: '',
        serviceOwners: this.fb.array(
          [
            this.fb.group(
              {
                fname: '',
                lname: '',
                email: '',
                phone: ''
              })
          ])
    });
  }


  //-----------------------------------------------------------------------------
  /**
   * component intialization
  */
  //-----------------------------------------------------------------------------
  public ngOnInit(): void
  {
    this.services$ = this.store.select((store) => store.rentService);

    return;
  } // ngOnInit


  //-----------------------------------------------------------------------------
  /**
   * Get list of service owners
   *
   * @return list service owners
  */
  //-----------------------------------------------------------------------------
  public getServiceOwners() : FormArray
  {
    return this.serviceRegistration.get("serviceOwners") as FormArray;
  } // serviceOwners


  //-----------------------------------------------------------------------------
  /**
   * Get new service owner detail
   *
   * @return service owner detail
  */
  //-----------------------------------------------------------------------------
  public getNewServiceOwnerDetail(): FormGroup
  {
    return this.fb.group(
    {
      fname: '',
      lname: '',
      email: '',
      phone: ''
    });
  } // getNewServiceOwnerDetail


  //-----------------------------------------------------------------------------
  /**
   * Add new service owner form group
  */
  //-----------------------------------------------------------------------------
  public addServiceOwner():void
  {
    this.getServiceOwners().push(this.getNewServiceOwnerDetail());
  } // addServiceOwner


  //-----------------------------------------------------------------------------
  /**
   * Remove service owner form group
  */
  //-----------------------------------------------------------------------------
  public removeServiceOwner(i:number):void
  {
    this.getServiceOwners().removeAt(i);
  } // removeServiceOwner


  //-----------------------------------------------------------------------------
  /**
   * Manipulate form data to the next transaction
  */
  //-----------------------------------------------------------------------------
  public submit():void
  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.serviceRegistration.invalid)
    {
      return;
    }
    //---------------------------------------------------- Store in ngrx storage
    this.store.dispatch
    (
      new AddRentServiceAction(this.serviceRegistration.value)
    );
   // this.reset();

    this.openDialog();
  } // submit


  //-----------------------------------------------------------------------------
  /**
   * Reset form data
  */
  //-----------------------------------------------------------------------------
  public reset():void
  {
    this.submitted = false;
    this.serviceRegistration.reset();
  } // reset


  //-----------------------------------------------------------------------------
  /**
   * Open the confirmation modal
  */
  //-----------------------------------------------------------------------------
  private openDialog(): void
  {
    const dialogRef = this.dialog.open(ConfirmationComponent,
    {
      data:
      {
        message: 'Are you sure want to confirmed?',
        buttonText:
        {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });
  } // openDialog


} // ServiceRegistrationComponent
