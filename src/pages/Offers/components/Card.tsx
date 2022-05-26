import React, {FunctionComponent} from "react";
import {Amount, OfferModel} from "../../../model";

type Props = {
    item: OfferModel
}

const Card: FunctionComponent<Props> = ({ item}) => {

    const formatPrice = (amount: Amount) => {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: amount.currency}).format(amount.value)
    }

    return (
        <div className="max-w-sm bg-white cursor-pointer rounded-lg shadow-xs dark:bg-gray-800 dark:border-gray-700">
            <img className="p-8 rounded-t-lg" src={item.carGroupInfo?.modelExample.imageUrl} alt="product image"/>

            <div className="text-center font-mono px-5 pb-5">
                <h6 className="text-lg font-semibold tracking-tight break-words text-gray-900 dark:text-white">{item.carGroupInfo?.modelExample.name}</h6>
                <span className="text-lg font-bold text-gray-900 dark:text-white">{formatPrice(item.prices?.totalPrice.amount)}</span>
            </div>
        </div>


    )
}

export default Card