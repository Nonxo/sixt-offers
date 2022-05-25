import React from 'react';
import {render, screen} from './test-utils';
import App from './App';
import {OffersState} from "./redux/types";


jest.mock("./services", () => {
  return {
    offers: jest.fn().mockImplementation(() => {
      return [
        {
          "id": "2436432a-e1d5-4649-bece-f98834f6ee1d-SDMR",
          "carGroupInfo": {
            "modelExample": {
              "name": "Audi A3 Sedan",
              "imageUrl": "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/eb3c65f783b980c0929b5f4a20ad4f2640723126.jpeg"
            },
          },
          "prices": {
            "totalPrice": {
              "amount": {
                "value": 209.96,
                "display": "209,96",
                "currency": "EUR"
              },
            },
          },
        },

        {
          "id": "2436432a-e1d5-4649-bece-f98834f6ee1d-FWMR",
          "carGroupInfo": {
            "modelExample": {
              "name": "Audi A4 Avant",
              "imageUrl": "https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/c4845f6d6d8950431934b646f9af03e96a6b762a.jpeg",
            }
          },
          "prices": {
            "totalPrice": {
              "amount": {
                "value": 231.99,
                "display": "231,99",
                "currency": "EUR"
              },
            },
          },
        }
      ]
    })
  }
})


describe("<App />", () => {
  const initialState: OffersState = {
    loading: false,
    offers: [],
    error: null
  }
  it("should display offer list with img, name, price", async () => {
    render(<App />, { reducerInitialState: initialState })
    expect( await screen.findByText("Audi A3 Sedan")).toBeInTheDocument()
  })
})
