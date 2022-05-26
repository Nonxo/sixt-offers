import React from "react";
import * as service from "../../services"
import mockData from "../../../public/api/json_files/offers.json"
import {getStateWithItems, renderWithContext} from "../../test-utils";
import Offers from ".";
import {screen, waitFor} from "@testing-library/react";

import {runSaga} from "redux-saga";
import {read} from "../../redux/saga/offersSaga";


test("several offers should be listed", async () => {
    const state = getStateWithItems()
    const dispatched = []
    const getOffersSpy = jest.spyOn(service, "getOffers");
    getOffersSpy.mockResolvedValue(mockData)
    await runSaga({
        dispatch: (action) => dispatched.push(action),
        getState: () => getStateWithItems()
    }, read).toPromise()
    await waitFor(() => expect(getOffersSpy).toHaveBeenCalledTimes(1))

    renderWithContext(<Offers />, state);
    expect(screen.getByRole("status")).toBeInTheDocument()

})