import React, {FunctionComponent} from "react";
import {OfferModel} from "../../../model";

type Props = {
    item: OfferModel
}

const Card: FunctionComponent<Props> = ({ item}) => {

    const formatPrice = (amount: number) => {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR'}).format(amount)
    }

    return (
        <div className="max-w-sm bg-stone-200/50 rounded-lg shadow-xs dark:bg-gray-800 dark:border-gray-700">
            <img className="p-8 rounded-t-lg" src={item.carGroupInfo?.modelExample.imageUrl} alt="product image"/>

            <div className="px-5 pb-5">
                <h6 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{item.carGroupInfo?.modelExample.name}</h6>
                <div className="flex justify-center items-center">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{formatPrice(item.prices?.totalPrice.amount.value)}</span>
                </div>
            </div>
        </div>


    )
}

export default Card