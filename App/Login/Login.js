//
//  Login
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from "react-native"
import React from "react"


export default class Login extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	on️ValuePressed = () => {
	
	}

	onButtonGroupPressed = () => {
	
	}

	render() {
	
		return <View
				style={styles.loginView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 285,
					}}>
					<Image
						source={require("./../../assets/images/image-3.png")}
						style={styles.imageImage}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 25,
							width: 170,
							top: 60,
							height: 105,
							alignItems: "flex-start",
						}}>
						<View
							style={styles.logoView}>
							<Image
								source={require("./../../assets/images/group.png")}
								style={styles.groupImage}/>
							<Text
								style={styles.scratchText}>scratc</Text>
						</View>
						<Text
							style={styles.welcomeBackText}>Welcome Back!</Text>
					</View>
				</View>
				<Text
					style={styles.pleaseLoginToContText}>Please login to continue.</Text>
				<View
					style={styles.inputTwoView}>
					<Text
						style={styles.labelTwoText}>Email address</Text>
					<TextInput
						autoCorrect={false}
						placeholder="user@email.com"
						style={styles.️ValueTwoTextInput}/>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.separatorTwoView}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 66,
						marginLeft: 25,
						marginRight: 25,
						marginTop: 29,
					}}>
					<Text
						style={styles.forgotPasswordText}>Forgot password?</Text>
					<View
						style={styles.inputView}>
						<Text
							style={styles.labelText}>Password</Text>
						<TextInput
							autoCorrect={false}
							placeholder="Ex:i23DJ8"
							secureTextEntry={true}
							style={styles.️ValueTextInput}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.separatorView}/>
					</View>
				</View>
				<TouchableOpacity
					onPress={this.onButtonGroupPressed}
					style={styles.buttonGroupButton}>
					<Text
						style={styles.buttonGroupButtonText}>Login</Text>
				</TouchableOpacity>
				<View
					style={styles.signUpView}>
					<Text
						style={styles.newToScratchText}>New to Scratch?</Text>
					<TouchableOpacity
						onPress={this.on️ValuePressed}
						style={styles.️ValueButton}>
						<Text
							style={styles.️ValueButtonText}>Create Account Here</Text>
					</TouchableOpacity>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	loginView: {
		backgroundColor: "white",
		flex: 1,
	},
	imageImage: {
		resizeMode: "cover",
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 285,
	},
	logoView: {
		backgroundColor: "transparent",
		width: 102,
		height: 28,
		flexDirection: "row",
		alignItems: "center",
	},
	groupImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		flex: 1,
		height: 26,
		marginRight: 10,
	},
	scratchText: {
		color: "rgb(54, 56, 55)",
		fontFamily: "Nunito-Bold",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		lineHeight: 20,
		letterSpacing: 0.4,
		paddingTop: 8,
		backgroundColor: "transparent",
		flex: 1,
		marginLeft: 10,
		marginRight: 4,
	},
	welcomeBackText: {
		backgroundColor: "transparent",
		color: "rgb(3, 15, 9)",
		fontFamily: "Nunito-Bold",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		lineHeight: 32,
		paddingTop: 1,
		marginTop: 44,
	},
	pleaseLoginToContText: {
		backgroundColor: "transparent",
		color: "rgb(96, 96, 96)",
		fontFamily: "Nunito-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		alignSelf: "flex-start",
		marginLeft: 25,
		marginTop: 19,
	},
	inputTwoView: {
		backgroundColor: "transparent",
		flex: 1,
		marginLeft: 25,
		marginRight: 25,
		marginTop: 48,
		marginBottom: 29,
		alignItems: "flex-start",
	},
	labelTwoText: {
		backgroundColor: "transparent",
		color: "rgb(168, 168, 168)",
		fontFamily: "Nunito-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
	},
	️ValueTwoTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(3, 15, 9)",
		fontFamily: "Nunito-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 325,
		height: 22,
		marginTop: 16,
	},
	separatorTwoView: {
		backgroundColor: "rgb(204, 204, 204)",
		alignSelf: "stretch",
		height: 1,
	},
	forgotPasswordText: {
		backgroundColor: "transparent",
		color: "rgb(96, 96, 96)",
		fontFamily: "Nunito-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		position: "absolute",
		right: 0,
		top: 0,
	},
	inputView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 1,
		height: 65,
		alignItems: "flex-start",
	},
	labelText: {
		backgroundColor: "transparent",
		color: "rgb(168, 168, 168)",
		fontFamily: "Nunito-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
	},
	️ValueTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(3, 15, 9)",
		fontFamily: "Nunito-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 325,
		height: 22,
		marginTop: 16,
	},
	separatorView: {
		backgroundColor: "rgb(204, 204, 204)",
		alignSelf: "stretch",
		height: 1,
	},
	buttonGroupButton: {
		backgroundColor: "rgb(48, 190, 118)",
		borderRadius: 8,
		shadowColor: "rgba(13, 51, 32, 0.1)",
		shadowRadius: 20,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		flex: 1,
		alignSelf: "center",
		width: 325,
		marginTop: 30,
		marginBottom: 30,
	},
	buttonGroupButtonText: {
		color: "white",
		fontFamily: "Nunito-Bold",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonGroupButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	signUpView: {
		backgroundColor: "transparent",
		flex: 1,
		width: 174,
		marginTop: 30,
		marginBottom: 123,
	},
	newToScratchText: {
		backgroundColor: "transparent",
		color: "rgb(168, 168, 168)",
		fontFamily: "Nunito-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		position: "absolute",
		left: 35,
		right: 35,
		top: 0,
	},
	️ValueButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 9,
		right: 4,
		top: 14,
		height: 42,
	},
	️ValueButtonText: {
		color: "rgb(48, 190, 118)",
		fontFamily: "Nunito-Bold",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
	️ValueButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
})
