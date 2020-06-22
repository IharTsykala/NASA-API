import { Action } from "../../interfacesAction/action.interface"
import { PhotoInterface } from "../../InterfacesEntity/Photo.interface"

export const ActionTypes = {
  GET_PHOTO_BY_DAY: "[Photo] Get photo by day",
  SET_CURRENT_PHOTO: "[Photo] Set current photo",
  GET_CATALOG_BY_DAY: "[Photo] Get catalog by day",
  SET_CATALOG: "[Photo] Set catalog",

  GET_FAILURE: "[getFailure] Get failure",
}

export const getPhotoByDay = (currentDate: Date): Action<Date> => ({
  type: ActionTypes.GET_PHOTO_BY_DAY,
  payload: currentDate,
})

export const setCurrentPhoto = (
  photo: PhotoInterface
): Action<PhotoInterface> => ({
  type: ActionTypes.SET_CURRENT_PHOTO,
  payload: photo,
})

export const getCatalogByDay = (currentDate: Date): Action<Date> => ({
  type: ActionTypes.GET_CATALOG_BY_DAY,
  payload: currentDate,
})

export const setCatalog = (
  catalog: [PhotoInterface]
): Action<[PhotoInterface]> => ({
  type: ActionTypes.SET_CATALOG,
  payload: catalog,
})

export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
