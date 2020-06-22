import { Action } from "../../interfacesAction/action.interface"

export const ActionTypes = {
  SET_DATA: "[Data] Set data",
  SET_TODAY_DATA: "[Data] Set today data",
}

export const setData = (data: Date): Action<Date> => ({
  type: ActionTypes.SET_DATA,
  payload: data,
})

export const setTodayData = (value: boolean): Action<boolean> => ({
  type: ActionTypes.SET_TODAY_DATA,
  payload: value,
})
