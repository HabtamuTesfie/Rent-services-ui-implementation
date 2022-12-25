//-----------------------------------------------------------------------------
/**
 * @Application Rent Service
 * @owner Habtamu Tesfie
 * @data 10/25/2022
 * Run at typescript
*/
//-----------------------------------------------------------------------------
import {RentServiceAction, RentServiceActionType} from "../action/rent-service.action";
import {IRentService} from "../../model/rent-service.model";

//-----------------------------------------------------------------------------
/**
 * intial state of the model
*/
//-----------------------------------------------------------------------------
const initialState: Array<IRentService> =
[
  {
    serviceName: '',
    serviceType: '',
    price:       '',
    serviceOwners:
    [
      {
        fname: '',
        lname: '',
        email: '',
        phone: ''
      }
    ]
  },
];


//-----------------------------------------------------------------------------
/**
 * Rent service reducer
 * @param state intial state of the model
 * @param action rent service action
 * @returns state current state of the object
*/
//-----------------------------------------------------------------------------
export function RentServiceReducer
(
   state: Array<IRentService> = initialState,
   action: RentServiceAction
): IRentService[]
{
   switch (action.type)
   {
     case RentServiceActionType.ADD_ITEM:

       return [...state, action.payload];

     default:

       return state;
   }
} // RentServiceReducer
