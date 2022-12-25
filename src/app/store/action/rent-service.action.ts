//-----------------------------------------------------------------------------
/**
 * @Application Rent Service
 * @owner Habtamu Tesfie
 * @data 10/25/2022
 * Run at typescript
*/
//-----------------------------------------------------------------------------
import {Action} from '@ngrx/store';
import {IRentService} from "../../model/rent-service.model";

//-----------------------------------------------------------------------------
/**
 * Rent service action type
*/
//-----------------------------------------------------------------------------
export enum RentServiceActionType
{
  ADD_ITEM = 'Rent service'
}


//-----------------------------------------------------------------------------
/**
 * Adding rent service action
*/
//-----------------------------------------------------------------------------
export class AddRentServiceAction implements Action
{
  readonly type = RentServiceActionType.ADD_ITEM;

  constructor(public payload: IRentService){}
}

export type RentServiceAction = AddRentServiceAction;
