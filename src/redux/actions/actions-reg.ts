import { 
    //Register constants
    CHANGE_REGISTER_EMAIL,
    CHANGE_REGISTER_PASS,
    CHANGE_REGISTER_CONFIRM,
    CHANGE_REGISTER_USERNAME,
    CHANGE_REGISTER_NAME,
    CHANGE_REGISTER_BIRTHDAY,
    CHANGE_REGISTER_JOINED,
    RESET_REGISTER,

    //Navigation constants
    CHANGE_NAVIGATION,
  } from "../constants";





// setNavigation("/route")
// alters page state

const setEmail=(text:string)=>({
  type:CHANGE_REGISTER_EMAIL,
  payload: text
})
const setPass=(text:string)=>({
  type:CHANGE_REGISTER_PASS,
  payload: text
})
const setConfirm=(text:string)=>({
  type:CHANGE_REGISTER_CONFIRM,
  payload: text
})
const setUsername=(text:string)=>({
  type:CHANGE_REGISTER_USERNAME,
  payload: text
})
const setName=(text:string)=>({
  type:CHANGE_REGISTER_NAME,
  payload: text
})
const setBirthday=(text:string)=>({
  type:CHANGE_REGISTER_BIRTHDAY,
  payload: text
})
const setJoined=(text:string)=>({
  type:CHANGE_REGISTER_JOINED,
  payload: text
})

const resetRegister=()=>({
  type: RESET_REGISTER,
  payload: ''
})

export {
  setEmail,
  setPass,
  setConfirm,
  setUsername,
  setName,
  setBirthday,
  setJoined,
  resetRegister,
}
