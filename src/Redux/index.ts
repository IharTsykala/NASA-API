import { combineReducers } from "redux"
import { dataReducer } from "./store/Data/Data.reduser"
import { photoReducer } from "./store/Photo/Photo.reduser"
import { catalogReducer } from "./store/Catalog/Catalog.reduser"

export default combineReducers({
  data: dataReducer,
  currentPhoto: photoReducer,
  catalog: catalogReducer,
})
