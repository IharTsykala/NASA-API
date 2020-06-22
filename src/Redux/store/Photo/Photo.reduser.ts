import { PhotoInterface } from "../../InterfacesEntity/Photo.interface"
import { ActionTypes } from "./Photo.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  currentPhoto: PhotoInterface;
  catalog: [PhotoInterface];
}

const initialState: State = {
  currentPhoto: {} as PhotoInterface,
  catalog: [{} as PhotoInterface],
}

export const photoReducer = (
  state: State = initialState,
  action: Action<any>
) => {
  switch (action.type) {
  case ActionTypes.SET_CURRENT_PHOTO:
    return {
      ...state,
      currentPhoto: action.payload
    }
  case ActionTypes.SET_CATALOG:
    return {
      ...state,
      catalog: action.payload
    }
  default:
    return state
  }
}
