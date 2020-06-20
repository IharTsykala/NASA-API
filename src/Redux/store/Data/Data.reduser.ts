import { ActionTypes } from "./Data.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  data: Date;
}

const initialState: State = {
  data: new Date(),
}

export const dataReducer = (
  state: State = initialState,
  action: Action<Date>
) => {
  switch (action.type) {
  case ActionTypes.SET_DATA:
    return {
      ...state,
      data: action.payload,
    }
  default:
    return state
  }
}
