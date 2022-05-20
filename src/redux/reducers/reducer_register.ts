import { 
    CHANGE_REGISTER_EMAIL,
    CHANGE_REGISTER_PASS,
    CHANGE_REGISTER_CONFIRM,
    CHANGE_REGISTER_USERNAME,
    CHANGE_REGISTER_NAME,
    CHANGE_REGISTER_BIRTHDAY,
    CHANGE_REGISTER_JOINED,
  } from "../constants";

  interface Iaction {
    type?: string;
    payload?:string;
  }
  

interface IstateRegister{
  R_Email:string;
  R_Pass:string;
  R_Confirm:string;
  R_Username:string;
  R_Name:string;
  R_Birthday:string;
  R_Joined:string;
}
const initialStateRegister:IstateRegister={
  R_Email:'',
  R_Pass:'',
  R_Confirm:'',
  R_Username:'',
  R_Name:'',
  R_Birthday:'',
  R_Joined:'',
}

export const registerReducer=(state:IstateRegister=initialStateRegister,action:Iaction={})=>{
    switch(action.type){

        case CHANGE_REGISTER_EMAIL:
            return Object.assign({},state, {R_Email: action.payload});

        case CHANGE_REGISTER_PASS:
            return Object.assign({},state, {R_Pass: action.payload});

        case CHANGE_REGISTER_CONFIRM:
            return Object.assign({},state, {R_Confirm: action.payload});

        case CHANGE_REGISTER_USERNAME:
            return Object.assign({},state, {R_Username: action.payload});

        case CHANGE_REGISTER_NAME:
            return Object.assign({},state, {R_Name: action.payload});
        
        case CHANGE_REGISTER_BIRTHDAY:
            return Object.assign({},state, {R_Birthday: action.payload});

        case CHANGE_REGISTER_JOINED:
            return Object.assign({},state, {R_Joined: action.payload});

    default:
        return state;
    }
  }