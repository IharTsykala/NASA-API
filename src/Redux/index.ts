import { combineReducers } from "redux"
import { dataReducer } from "./store/Data/Data.reduser"
import { PhotoReducer } from "./store/Photo/Photo.reduser"

export default combineReducers({
  data: dataReducer,
  currentPhoto: PhotoReducer,
})
