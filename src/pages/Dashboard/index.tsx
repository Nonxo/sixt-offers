import React, { useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";
import {handleRequest} from "../../redux/actions";
import ErrorState from "../../basic-components/ErrorState";
import Card from "./components/Card";
import Footer from "../../basic-components/Footer";
import Spinner from "../../basic-components/Spinner";

const Dashboard: React.FC = () => {
    const dispatch = useDispatch()
    const { loading, offers, error} = useSelector((state: RootState) => state.offers);

    useEffect(() => {
        // Fetch all offers
        dispatch(handleRequest())
    }, [])

    const isLoading = loading ? <Spinner /> : null

    const showError = error ? <ErrorState /> : null


    return (
        <div className="container flex flex-col mx-auto my-5 max-h-screen">
            { isLoading }
            { showError}
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                { offers.map((offer) => (
                    <Card key={offer.id} item={offer} />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;