import { combineReducers } from "redux"
import { dataReducer } from "./store/Data/Data.reduser"
import { descriptionItemReducer } from "./store/DescriptionItem/DescriptionItem.reduser"

export default combineReducers({
  data: dataReducer,
  // descriptionItem: descriptionItemReducer,
})
