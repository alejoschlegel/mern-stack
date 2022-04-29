import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./reduxToolkit/store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <div>
                <h1>Hello World</h1>
                <div>
                </div>
            </div>
            </Provider>
        );
    }
}
export default App;