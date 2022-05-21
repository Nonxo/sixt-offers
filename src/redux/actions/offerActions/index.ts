import {
    FetchOffersFailed,
    FetchOffersFailedPayload,
    FetchOffersRequest,
    FetchOffersSuccess,
    FetchOffersSuccessPayload
} from "../../types";
import {offersTypes} from "../../ActionTypes/offersTypes";

export const handleRequest = (): FetchOffersRequest => ({ type: offersTypes.FETCH_OFFERS_REQUEST })

export const handleSuccess = (payload: FetchOffersSuccessPayload): FetchOffersSuccess => ({ type: offersTypes.FETCH_OFFERS_DATA_SUCCESS, payload })

export const handleError = (payload: FetchOffersFailedPayload): FetchOffersFailed => ({ type: offersTypes.FETCH_OFFERS_DATA_ERROR, payload})