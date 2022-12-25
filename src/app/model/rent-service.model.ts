//-----------------------------------------------------------------------------
/**
 * Rent service data object
 */
//-----------------------------------------------------------------------------
export interface IRentService
{
  serviceName:   string;
  serviceType:   string;
  price:         string;
  serviceOwners: IServiceOwner[];
} // IRentService


//-----------------------------------------------------------------------------
/**
  * Service owner data object
 */
//-----------------------------------------------------------------------------
export interface IServiceOwner
{
  fname: string;
  lname: string;
  email: string;
  phone: string;
} // IServiceOwner


//-----------------------------------------------------------------------------
/**
  * Application state object
 */
//-----------------------------------------------------------------------------
export interface IState
{
  readonly rentService: Array<IRentService>;
} // State
