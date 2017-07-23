"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Resource_1 = require("./Constant/Resource");
const orientation_1 = require("./Constant/orientation");
const react_native_1 = require("react-native");
const react_native_material_kit_1 = require("react-native-material-kit");
const react_native_router_flux_1 = require("react-native-router-flux");
const react_redux_1 = require("react-redux");
const MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
const routingKey_1 = require("./Constant/routingKey");
const portraitStyle = react_native_1.StyleSheet.create({
    view: { flex: 1 },
    backgroundImage: { flex: 1, resizeMode: 'cover', width: "100%", height: "100%", alignItems: "center" },
    logo: { resizeMode: "contain", flex: 8, marginTop: "7%" },
    form: { flex: 12, width: "100%", alignItems: "center" },
    account: { width: "70%", flex: 3, justifyContent: "center", marginTop: 50 },
    password: { width: "70%", flex: 3, justifyContent: "center" },
    textInputStyle: { color: "white", fontSize: 30 },
    button: { width: "70%", flex: 2, borderRadius: 1, elevation: 13, justifyContent: 'center', alignItems: 'center', },
});
const landscapeStyle = react_native_1.StyleSheet.create({
    view: { flex: 1 },
    backgroundImage: { flex: 1, resizeMode: 'cover', width: "100%", height: "100%", alignItems: "center", flexDirection: "row" },
    logo: { resizeMode: "contain", flex: 8, marginLeft: "3%" },
    form: { flex: 12, width: "100%", alignItems: "center" },
    account: { width: "70%", flex: 3, justifyContent: "center" },
    password: { width: "70%", flex: 3, justifyContent: "center" },
    textInputStyle: { color: "white", fontSize: 30 },
    button: { width: "70%", flex: 2, borderRadius: 1, elevation: 13, justifyContent: 'center', alignItems: 'center', marginTop: "2%" },
});
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                account: "",
                password: "",
            };
        this.accountChange = this.accountChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.loginOnPress = this.loginOnPress.bind(this);
        this.signUpOnPress = this.signUpOnPress.bind(this);
    }
    render() {
        let style = this.props.deviceInfo.orientation == orientation_1.default.LANDSCAPE ? landscapeStyle : portraitStyle;
        return (React.createElement(react_native_1.View, { style: style.view },
            React.createElement(react_native_1.Image, { source: require('./IMG/loginBG.jpg'), style: style.backgroundImage },
                React.createElement(react_native_1.Image, { source: require('./IMG/logo.png'), style: style.logo }),
                React.createElement(react_native_1.View, { style: style.form },
                    React.createElement(react_native_material_kit_1.MKTextField, { onTextChange: this.accountChange, text: this.state.account, placeholder: Resource_1.default.account, floatingLabelEnabled: true, floatingLabelBottomMargin: 0, highlightColor: "#26A69A", tintColor: "white", textInputStyle: style.textInputStyle, style: style.account, placeholderTextColor: "white" }),
                    React.createElement(react_native_material_kit_1.MKTextField, { onTextChange: this.passwordChange, text: this.state.password, placeholder: Resource_1.default.password, floatingLabelEnabled: true, highlightColor: "#26A69A", tintColor: "white", textInputStyle: style.textInputStyle, style: style.password, placeholderTextColor: "white" }),
                    React.createElement(react_native_material_kit_1.MKButton, { style: style.button, backgroundColor: "#26A69A" },
                        React.createElement(MaterialIcons_1.default, { name: "send", size: 50, color: "white" })),
                    React.createElement(react_native_material_kit_1.MKButton, { style: style.button, onPress: this.signUpOnPress },
                        React.createElement(react_native_1.Text, { style: { color: "white", fontSize: 30 } }, Resource_1.default.signUpText))))));
    }
    accountChange(v) { this.setState({ account: v }); }
    passwordChange(v) { this.setState({ password: v }); }
    loginOnPress() {
    }
    signUpOnPress() {
        react_native_router_flux_1.Actions[routingKey_1.default.signUp]();
    }
    componentWillMount() {
    }
    componentDidMount() {
    }
}
function mapStateToProps(state) {
    return { login: state.login, deviceInfo: state.deviceInfo };
}
exports.default = react_redux_1.connect(mapStateToProps)(Login);
