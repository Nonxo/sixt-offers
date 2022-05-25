import React, { useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";
import {handleRequest} from "../../redux/actions";
import ErrorState from "../../basic-components/ErrorState";
import Card from "./components/Card";
import Spinner from "../../basic-components/Spinner";

const Dashboard: React.FC = () => {
    const dispatch = useDispatch()
    const { loading, offers, error} = useSelector((state: RootState) => state.offers);

    useEffect(() => {
        // Fetch all offers
        dispatch(handleRequest())
    }, [dispatch])

    if (loading) return <Spinner />

    if (error) return  <ErrorState />

    return (
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            { offers.map((offer) => (
                <Card key={offer.id} item={offer} />
            ))}
        </div>
    )
}

export default Dashboard;