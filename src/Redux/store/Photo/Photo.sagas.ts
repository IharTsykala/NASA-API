import { put, takeEvery } from "redux-saga/effects"
import { ActionTypes, getFailureAction } from "./Photo.actions"
import ServicePhoto from "../../../services/photo"

function* getPhotoByIdSaga(actions: any) {
  try {
    const photo = yield ServicePhoto.getPhotoById(actions.payload)
    console.log(photo)
    // yield put(setListAlbumsWithPhotosInStoreAction(listAlbums))
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

export default function* photoSaga() {
  yield takeEvery(ActionTypes.GET_PHOTO_BY_DAY, getPhotoByIdSaga)
}
