export interface OfferModel {
    info: { [index: string]: number | string | boolean },
    offers: Offer[]
}

interface Offer {
    id: string,
    description: string,
    images: string | null
    price: Amount | null

}

interface Amount {
   value: number,
   display: string,
   currency: string
}


