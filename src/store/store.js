import {configureStore} from "@reduxjs/toolkit"
import { trelloReducer } from "../slices/slice"

 export const store=configureStore({
    reducer:{
        trelloReducer
    }
 })
 