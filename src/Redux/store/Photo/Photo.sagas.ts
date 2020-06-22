import { put, takeEvery } from "redux-saga/effects"
import {
  ActionTypes,
  getFailureAction,
  setCurrentPhoto,
  setCatalog,
} from "./Photo.actions"
import ServicePhoto from "../../../services/photo"

const getDate = (objectDate: any) => {
  const year = objectDate.getFullYear()
  let mouth = objectDate.getMonth() + 1
  if (mouth < 10) mouth = `0${mouth}`
  let day = objectDate.getDate()
  if (day < 10) day = `0${day}`
  return `${year}-${mouth}-${day}`
}

function* getPhotoByDaySaga(actions: any) {
  try {
    const photo = yield ServicePhoto.getPhoto(getDate(actions.payload))
    yield put(setCurrentPhoto(photo))
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

function* getCatalogSaga(actions: any) {
  try {
    const catalog = yield ServicePhoto.getCatalog(getDate(actions.payload))
    yield put(setCatalog(catalog))
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

export default function* photoSaga() {
  yield takeEvery(ActionTypes.GET_PHOTO_BY_DAY, getPhotoByDaySaga)
  yield takeEvery(ActionTypes.GET_CATALOG_BY_DAY, getCatalogSaga)
}
