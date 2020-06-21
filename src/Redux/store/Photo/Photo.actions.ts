import { Action } from "../../interfacesAction/action.interface"
import { CardItem } from "../../InterfacesEntity/CardItem.interface"

export const ActionTypes = {
  GET_PHOTO_BY_DAY: "[Photo] Get photo by id",

  GET_FAILURE: "[getFailure] Get failure",
}

export const getPhotoById = (
  currentDate: Date
): Action<Date> => ({
  type: ActionTypes.GET_PHOTO_BY_DAY,
  payload: currentDate,
})

export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
