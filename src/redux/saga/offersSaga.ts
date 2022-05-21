import {AxiosError, AxiosResponse} from "axios";
import { call, put, all, takeLatest } from "redux-saga/effects"

import {getOffers} from "../../services";
import {handleError, handleSuccess} from "../actions/offerActions";
import {OfferModel} from "../../model";
import {offersTypes} from "../ActionTypes/offersTypes";


function* read() {
    try {
        const response: AxiosResponse<OfferModel[]> = yield call(getOffers);
        yield put(handleSuccess({ offers: response.data}))
    } catch (e) {
        if (e instanceof AxiosError) {
            yield put(handleError({ error: e.message }))
        } else {
           yield put(handleError({ error: e}))
        }
    }
}

export default function* watchOffers() {
    yield all([takeLatest(offersTypes.FETCH_OFFERS_REQUEST, read)]);
}

