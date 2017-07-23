"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_router_flux_1 = require("react-native-router-flux");
const react_redux_1 = require("react-redux");
const Login_1 = require("./Login");
const SignUp_1 = require("./SignUp");
const routingKey_1 = require("./Constant/routingKey");
const redux_1 = require("redux");
const Reducer_1 = require("./Reducer");
const action = require("./Action");
const Orientation = require("react-native-orientation");
const Appstore = redux_1.createStore(Reducer_1.default);
class App extends React.Component {
    render() {
        let M = react_redux_1.connect((state) => state)(Main);
        return (React.createElement(react_redux_1.Provider, { store: Appstore },
            React.createElement(M, null)));
    }
}
exports.default = App;
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.orientationDidChange = this.orientationDidChange.bind(this);
    }
    render() {
        return (React.createElement(react_native_router_flux_1.Router, { createReducer: reducerCreator, tintColor: 'red' },
            React.createElement(react_native_router_flux_1.Scene, { key: routingKey_1.default.root },
                React.createElement(react_native_router_flux_1.Scene, { key: routingKey_1.default.logIn, component: Login_1.default, type: 'replace', initial: true, hideNavBar: true }),
                React.createElement(react_native_router_flux_1.Scene, { key: routingKey_1.default.signUp, component: SignUp_1.default }))));
    }
    orientationDidChange(orientation) {
        action.DeviceInfo.dispatchOrientationChange(this.props.dispatch, orientation);
    }
    componentWillMount() {
        action.DeviceInfo.dispatchOrientationChange(this.props.dispatch, Orientation.getInitialOrientation());
    }
    componentDidMount() {
        Orientation.addOrientationListener(this.orientationDidChange);
    }
    componentWillUnmount() {
        Orientation.removeOrientationListener(this.orientationDidChange);
    }
}
function reducerCreator(params) {
    const defaultReducer = new react_native_router_flux_1.Reducer(params);
    return (state, action) => {
        console.log('ACTION:', action);
        return defaultReducer(state, action);
    };
}
