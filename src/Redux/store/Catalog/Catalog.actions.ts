import { Action } from "../../interfacesAction/action.interface"
import { CardItem } from "../../InterfacesEntity/CardItem.interface"

export const ActionTypes = {
  SET_CATALOG_VALUE: "[toggle] set toggle value",
}

export const setCatalogValue = (): Action<{}> => ({
  type: ActionTypes.SET_CATALOG_VALUE,
})
