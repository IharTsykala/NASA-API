import { put, takeEvery } from "redux-saga/effects"
import { ActionTypes, getFailureAction, setCurrentPhoto } from "./Photo.actions"
import ServicePhoto from "../../../services/photo"

function* getPhotoByIdSaga(actions: any) {
  try {
    const year = actions.payload.getFullYear()
    let mouth = actions.payload.getMonth() + 1
    if (mouth < 10) mouth = `0${mouth}`
    let day = actions.payload.getDate()
    if (day < 10) day = `0${day}`
    const date = `${year}-${mouth}-${day}`

    const photo = yield ServicePhoto.getPhotoById(date)
    yield put(setCurrentPhoto(photo))
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

export default function* photoSaga() {
  yield takeEvery(ActionTypes.GET_PHOTO_BY_DAY, getPhotoByIdSaga)
}
