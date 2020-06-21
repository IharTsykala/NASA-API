import { ActionTypes } from "./Data.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  data: Date;
  valueTodayDate: boolean;
}

const initialState: State = {
  data: new Date(),
  valueTodayDate: true,
}

export const dataReducer = (
  state: State = initialState,
  action: Action<Date | boolean>
) => {
  switch (action.type) {
  case ActionTypes.SET_DATA:
    return {
      ...state,
      data: action.payload,
    }
    case ActionTypes.SET_TODAY_DATA:
      return {
        ...state,
        valueTodayDate: action.payload,
      }
  default:
    return state
  }
}
