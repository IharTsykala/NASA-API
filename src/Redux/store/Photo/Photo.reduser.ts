import { PhotoInterface } from "../../InterfacesEntity/Photo.interface"
import { ActionTypes } from "./Photo.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  currentPhoto: PhotoInterface;
}

const initialState: State = {
  currentPhoto: {} as PhotoInterface,
}

export const PhotoReducer = (
  state: State = initialState,
  action: Action<any>
) => {
  switch (action.type) {
  case ActionTypes.SET_CURRENT_PHOTO:
    return {
      ...state,
      currentPhoto: action.payload
    }
  default:
    return state
  }
}
