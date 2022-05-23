import { 
    CHANGE_PROFILE_EMAIL,
    CHANGE_PROFILE_USERNAME,
    CHANGE_PROFILE_NAME,
    CHANGE_PROFILE_BIRTHDAY,
    CHANGE_PROFILE_JOINED,
  } from "../constants";

const setProfileEmail=(text:string)=>({
    type:CHANGE_PROFILE_EMAIL,
    payload: text
})
const setProfileUsername=(text:string)=>({
    type:CHANGE_PROFILE_USERNAME,
    payload: text
})
const setProfileName=(text:string)=>({
    type:CHANGE_PROFILE_NAME,
    payload: text
})
const setProfileBirthday=(text:string)=>({
    type:CHANGE_PROFILE_BIRTHDAY,
    payload: text
})
const setProfileJoined=(text:string)=>({
    type:CHANGE_PROFILE_JOINED,
    payload: text
})

const setProfileMessages=(messagetxt:string[])=>({
    type:CHANGE_PROFILE_JOINED,
    payload: messagetxt
})



export {
    setProfileEmail,
    setProfileUsername,
    setProfileName,
    setProfileBirthday,
    setProfileJoined,
    setProfileMessages,
}