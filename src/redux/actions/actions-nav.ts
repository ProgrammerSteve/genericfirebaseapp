import { 
    CHANGE_NAVIGATION,
} from "../constants";

// setNavigation("/route")
// alters page state
const setNavigation=(text:string)=>({
    type:CHANGE_NAVIGATION,
    payload: text
})

export {
    setNavigation,
}