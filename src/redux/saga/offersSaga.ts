import { call, put, all, takeLatest } from "redux-saga/effects"

import {getOffers} from "../../services";
import {handleError, handleSuccess} from "../actions";
import {offersTypes} from "../ActionTypes/offersTypes";


function* read(): any {
    try {
        const response  = yield call(getOffers);
        yield put(handleSuccess({ offers: response.offers}))
    } catch (e: any) {
        if (e instanceof Error) {
            yield put(handleError({ error: e.message }))
        } else {
           yield put(handleError({ error: e}))
        }
    }
}

export default function* watchOffers() {
    yield all([takeLatest(offersTypes.FETCH_OFFERS_REQUEST, read)]);
}

