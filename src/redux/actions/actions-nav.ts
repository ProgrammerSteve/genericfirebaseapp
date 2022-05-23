import { 
    CHANGE_NAVIGATION,
    CHANGE_UID,
    CHANGE_TAB,
} from "../constants";

// setNavigation("/route")
// alters page state
const setNavigation=(text:string)=>({
    type:CHANGE_NAVIGATION,
    payload: text
})

const setUID=(text:string)=>({
    type:CHANGE_UID,
    payload: text
})


const setTab=(text:string)=>({
    type:CHANGE_TAB,
    payload: text
})

export {
    setNavigation,
    setUID,
    setTab,
}