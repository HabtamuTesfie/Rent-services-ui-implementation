
// -----------------------------------------------------------------------------
/**
 * @Application Rent Service
 * @owner Habtamu Tesfie
 * @data 10/25/2022
 * Run at typescript
*/
// -----------------------------------------------------------------------------
import {Component, OnInit, ViewChild} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

// -----------------------------------------------------------------------------
/**
 * Service registration component
*/
// -----------------------------------------------------------------------------
@Component({
  selector: 'app-service-registration',
  templateUrl: './service-registration.component.html',
  styleUrls: ['./service-registration.component.scss']
})
export class ServiceRegistrationComponent implements OnInit
{
  // ------------------------------------------------------ Exposed data members
  public serviceRegistration: FormGroup;

  public submitted: boolean = false;

  // -----------------------------------------------------------------------------
  /**
   * component intialization
  */
  // -----------------------------------------------------------------------------
  constructor(private fb: FormBuilder)
  {
    this.serviceRegistration = this.fb.group(
    {
        serviceName: '',
        serviceType: '',
        price: '',
        serviceOwners: this.fb.array([])
    });
  }


  // -----------------------------------------------------------------------------
  /**
   * component intialization
  */
  // -----------------------------------------------------------------------------
  ngOnInit(): void
  {
    console.log("ng onint implemnted");

    return;
  } // ngOnInit


  // -----------------------------------------------------------------------------
  /**
   * Get list of service owners
   *
   * @return list service owners
  */
  // -----------------------------------------------------------------------------
  getServiceOwners() : FormArray
  {
    return this.serviceRegistration.get("serviceOwners") as FormArray;
  } // serviceOwners


  // -----------------------------------------------------------------------------
  /**
   * Get new service owner detail
   *
   * @return service owner detail
  */
  // -----------------------------------------------------------------------------
  getNewServiceOwnerDetail(): FormGroup
  {
    return this.fb.group(
    {
      fname: '',
      lname: '',
      email: '',
      phone: ''
    });
  } // getNewServiceOwnerDetail


  // -----------------------------------------------------------------------------
  /**
   * Add new service owner form group
  */
  // -----------------------------------------------------------------------------
  addServiceOwner():void
  {
    this.getServiceOwners().push(this.getNewServiceOwnerDetail());
  } // addServiceOwner


  // -----------------------------------------------------------------------------
  /**
   * Remove service owner form group
  */
  // -----------------------------------------------------------------------------
  removeServiceOwner(i:number):void
  {
    this.getServiceOwners().removeAt(i);
  } // removeServiceOwner


  // -----------------------------------------------------------------------------
  /**
   * Manipulate form data to the next transaction
  */
  // -----------------------------------------------------------------------------
  submit():void
  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.serviceRegistration.invalid)
    {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.serviceRegistration.value, null, 4));
    console.log("+++++++form data+++++++",this.serviceRegistration.value);
  } // submit


  // -----------------------------------------------------------------------------
  /**
   * Reset form data
  */
  // -----------------------------------------------------------------------------
  reset():void
  {
    this.submitted = false;
    this.serviceRegistration.reset();
  } // reset

} // ServiceRegistrationComponent
