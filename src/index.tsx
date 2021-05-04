import * as React from 'react'
import 'antd/dist/antd.css'
import configureStore from "./configureStore"

//class AppProps {
//    propsMessage: string
//}
//const AppComponent = (props: AppProps) => <p>{props.propsMessage}</p>

// redux boilerplate
//import { createStore } from 'redux'
//import { connect } from 'react-redux'


import MenuContainer from './components/MenuContainer'

//class StoreState {
//    storeMessage: string
//}
//const mapStateToProps = (state: StoreState) => ({ propsMessage: state.storeMessage })
//const AppContainer = connect(mapStateToProps)(AppComponent)
//const reducer = () => ({ storeMessage: 'Hello world' })
const initialState: any = {}
const store = configureStore({}, initialState)

// Render the app
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
ReactDOM.render(
    <Provider store={store}><MenuContainer /></Provider>,
    document.getElementById('render-app')
)
