import { 
    CHANGE_PROFILE_EMAIL,
    CHANGE_PROFILE_USERNAME,
    CHANGE_PROFILE_NAME,
    CHANGE_PROFILE_BIRTHDAY,
    CHANGE_PROFILE_JOINED,
    CHANGE_PROFILE_MESSAGES,
  } from "../constants";

  interface Iaction {
    type?: string;
    payload?:string;
  }

interface IstateProfile{
    P_Email:string;
    P_Username:string;
    P_Name:string;
    P_Birthday:string;
    P_Joined:string;
    P_Messages:string[];
}
const initialStateProfile:IstateProfile={
  P_Email:'',
  P_Username:'',
  P_Name:'',
  P_Birthday:'',
  P_Joined:'',
  P_Messages:[],
}

export const profileReducer=(state:IstateProfile=initialStateProfile,action:Iaction={})=>{
    switch(action.type){

        case CHANGE_PROFILE_EMAIL:
            return Object.assign({},state, {P_Email: action.payload});

        case CHANGE_PROFILE_USERNAME:
            return Object.assign({},state, {P_Username: action.payload});

        case CHANGE_PROFILE_NAME:
            return Object.assign({},state, {P_Name: action.payload});

        case CHANGE_PROFILE_BIRTHDAY:
            return Object.assign({},state, {P_Birthday: action.payload});

        case CHANGE_PROFILE_JOINED:
            return Object.assign({},state, {P_Joined: action.payload});
        case CHANGE_PROFILE_MESSAGES:
            return Object.assign({},state, {P_Messages: action.payload});

    default:
        return state;
    }
  }


