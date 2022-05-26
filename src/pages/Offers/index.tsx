import React, {useEffect} from "react";
import {handleRequest} from "../../redux/actions";
import ErrorState from "../../basic-components/ErrorState";
import Card from "./components/Card";
import Spinner from "../../basic-components/Spinner";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {RootState} from "../../redux/Store";

const Offers: React.FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        // Fetch all offers
        dispatch(handleRequest())
    }, [dispatch])

    const {loading, offers, error} = useAppSelector((state: RootState) => state.offersReducer);

    if (loading) return <Spinner/>

    if (error) return <ErrorState/>

    return (
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {offers.map((offer) => (
                <Card key={offer.id} item={offer}/>
            ))}
        </div>
    )
}

export default Offers;