import { 
  CHANGE_NAVIGATION,
  CHANGE_UID,
  CHANGE_TAB,
} from "../constants";

interface Iaction {
  type?: string;
  payload?:string;
}

interface IstateNav
{
  page:string;
  profile_uid:string;
  profile_tab:string;
}

const initialStateNavigate:IstateNav=
{
  page:'/',
  profile_uid:'',
  profile_tab:'profile',
}

export const navReducer=(state:IstateNav=initialStateNavigate,action:Iaction={})=>{
  switch(action.type){
    case CHANGE_NAVIGATION:
      return Object.assign({},state, {page: action.payload});
    case CHANGE_UID:
      return Object.assign({},state, {profile_uid: action.payload});
    case CHANGE_TAB:
      return Object.assign({},state, {profile_tab: action.payload});
    default:
      return state;
  }
}
