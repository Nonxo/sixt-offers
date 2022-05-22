export interface OfferModel {
    id: string,
    carGroupInfo: CarInfo | null
    prices: TotalPrice
}

interface CarInfo {
    modelExample: Model
}

interface Model {
    name: string,
    imageUrl: string
}

interface TotalPrice {
   totalPrice: AmountObj
}

interface AmountObj {
   amount: Amount
}

interface Amount {
    value: number,
    display: string,
    currency: string
}


