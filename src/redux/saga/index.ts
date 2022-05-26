import { all, fork } from "redux-saga/effects"
import watchOffers from "./offersSaga";

export function* rootSaga() {
    yield all([fork(watchOffers)])
}