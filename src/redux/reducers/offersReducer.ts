import {Reducer} from "redux";
import {OffersActions, OffersState} from "../types";
import {offersTypes} from "../ActionTypes/offersTypes";



export const initialState: OffersState = {
    loading: false,
    offers: [],
    error: null
}

const offersReducer: Reducer<OffersState, OffersActions> = (state = initialState, action: OffersActions) => {
    switch (action.type) {
        case offersTypes.FETCH_OFFERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case offersTypes.FETCH_OFFERS_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                offers: action.payload.offers,
                error: null
            }
        case offersTypes.FETCH_OFFERS_DATA_ERROR:
            return {
                ...state,
                loading: false,
                offers: [],
                error: action.payload.error
            }
        default:
            return {
                ...state
            }
    }
}

export default offersReducer