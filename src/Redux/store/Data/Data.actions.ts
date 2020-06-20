import { Action } from "../../interfacesAction/action.interface"
import { CardItem } from "../../InterfacesEntity/CardItem.interface"

export const ActionTypes = {
  SET_DATA: "[Data] Set data",

  GET_FAILURE: "[getFailure] Get failure",
}

export const setData = (data: Date): Action<Date> => ({
  type: ActionTypes.SET_DATA,
  payload: data,
})

export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
