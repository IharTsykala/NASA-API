import { ActionTypes } from "./Catalog.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  catalogValue: boolean;
}

const initialState: State = {
  catalogValue: false,
}

export const catalogReducer = (
  state: State = initialState,
  action: Action<boolean>
) => {
  switch (action.type) {
    case ActionTypes.SET_CATALOG_VALUE:
      return {
        ...state,
        catalogValue: !state.catalogValue,
      }
  default:
    return state
  }
}
