import axios, {AxiosResponse} from "axios"
import {OfferModel} from "../model";

export const getOffers = (): Promise<AxiosResponse<OfferModel[]>> => {
    return axios.get<OfferModel[]>(`https://cdn.sixt.io/codingtask/offers.json`)
}