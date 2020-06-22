import { Action } from "../../interfacesAction/action.interface"
import { CardItem } from "../../InterfacesEntity/CardItem.interface"

export const ActionTypes = {
  GET_PHOTO_BY_DAY: "[Photo] Get photo by day",
  SET_CURRENT_PHOTO: "[Photo] Set current photo",

  GET_FAILURE: "[getFailure] Get failure",
}

export const getPhotoById = (currentDate: Date): Action<Date> => ({
  type: ActionTypes.GET_PHOTO_BY_DAY,
  payload: currentDate,
})

export const setCurrentPhoto = (photo: {}): Action<{}> => ({
  type: ActionTypes.SET_CURRENT_PHOTO,
  payload: photo,
})

export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
