import * as React from 'react';
import {Scene,Router,Actions,Reducer} from 'react-native-router-flux';
import {Provider,connect } from 'react-redux'
import Login from "./Login"
import routingKey from "./Constant/routingKey"
import orientationConstant from "./Constant/orientation"
import { createStore } from 'redux';
import reducer from './Reducer'
import * as Store from "./Reducer/storeInitial"
import * as action from "./Action"
import * as Orientation from 'react-native-orientation';
const Appstore = createStore(reducer);

interface props
{
	store:Store.Stroe;
	dispatch:()=>void;
}


export default class App extends React.Component<any,any>
{
	render() 
	{
		let M=connect((state)=>state)(Main);
		return (
			<Provider store={Appstore}>
				<M/>
			</Provider>
		)
	}
}

class Main extends React.Component<props,any>
{
	constructor(props)
	{
		super(props);
		this.orientationDidChange=this.orientationDidChange.bind(this);
	}
	render()
	{
		return(
			<Router createReducer={reducerCreator} tintColor='red'>
				<Scene key={routingKey.root}>
					<Scene key={routingKey.login} component={Login} type='replace' initial={true} hideNavBar={true} />
				</Scene>
			</Router>
		)
	}
	orientationDidChange(orientation:string)
	{
		action.DeviceInfo.dispatchOrientationChange(this.props.dispatch,orientation);
	}
	componentWillMount()
	{

	}
	componentDidMount()
	{
		Orientation.addOrientationListener(this.orientationDidChange);
	}
	componentWillUnmount()
	{
		Orientation.removeOrientationListener(this.orientationDidChange);
	}
}




function reducerCreator(params)
{
	const defaultReducer=new Reducer(params);
	return (state, action) => 
	{
		console.log('ACTION:', action);
		return defaultReducer(state, action);
	};
}