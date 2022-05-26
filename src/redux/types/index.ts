import {OfferModel} from "../../model";
import {offersTypes} from "../ActionTypes/offersTypes";


export interface OffersState {
    loading: boolean;
    offers: OfferModel[];
    error: string | null;
}

export interface FetchOffersSuccessPayload {
    offers: OfferModel[];
}

export interface FetchOffersFailedPayload {
    error: string | null
}

export interface FetchOffersRequest {
    type: typeof offersTypes.FETCH_OFFERS_REQUEST
}

export type FetchOffersSuccess = {
   type: typeof offersTypes.FETCH_OFFERS_DATA_SUCCESS;
   payload: FetchOffersSuccessPayload;
}

export type FetchOffersFailed = {
    type: typeof offersTypes.FETCH_OFFERS_DATA_ERROR;
    payload: FetchOffersFailedPayload;
};

export type OffersActions = | FetchOffersRequest | FetchOffersSuccess | FetchOffersFailed