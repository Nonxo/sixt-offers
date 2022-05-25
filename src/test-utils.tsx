import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import {createStore} from "redux";
import offersReducer, {initialState} from "./redux/reducers/offersReducer";
import {Provider} from "react-redux";


type Props = { children: React.ReactNode }


export const render = (component: React.ReactElement, { reducerInitialState = initialState, ...renderOptions } = {}) => {

    const store = createStore(offersReducer, reducerInitialState)

    const Wrapper: React.FC<Props> = ({ children }) => {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(component, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
