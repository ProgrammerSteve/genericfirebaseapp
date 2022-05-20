import { 
  CHANGE_NAVIGATION,
} from "../constants";

interface Iaction {
  type?: string;
  payload?:string;
}

interface IstateNav{page:string;}

const initialStateNavigate:IstateNav={page:'/login'}

export const navReducer=(state:IstateNav=initialStateNavigate,action:Iaction={})=>{
  switch(action.type){
    case CHANGE_NAVIGATION:
      return Object.assign({},state, {page: action.payload});
    default:
      return state;
  }
}
