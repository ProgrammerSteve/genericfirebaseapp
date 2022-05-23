import {navReducer} from './reducers/reducer_navigation';
import {registerReducer} from './reducers/reducer_register';
import {profileReducer} from './reducers/reducer_profile';

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
      nav: navReducer,
      reg: registerReducer,
      pro: profileReducer,
    }
  })
  
  export default store;

  //Redux documentation types
  export type RootState= ReturnType<typeof store.getState> ;
  export type AppDispatch= typeof store.dispatch;
