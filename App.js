//
//  App.js
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { createStackNavigator, createAppContainer } from "react-navigation"
import React from "react"
import Login from "./App/Login/Login"
import CookingMode from "./App/CookingMode/CookingMode"
import FeedReceipt from "./App/FeedReceipt/FeedReceipt"
import DetailReceipt from "./App/DetailReceipt/DetailReceipt"

const PushRouteOne = createStackNavigator({
	Login: {
		screen: Login,
	},
}, {
	initialRouteName: "Login",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	render() {
	
		return <AppContainer/>
	}
}
