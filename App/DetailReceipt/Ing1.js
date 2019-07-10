//
//  Ing1
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { Text, View, TouchableWithoutFeedback, Image, StyleSheet } from "react-native"
import React from "react"


export default class Ing1 extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onIng1Press = () => {
	
	}

	render() {
	
		return <TouchableWithoutFeedback
				onPress={this.onIng1Press}>
				<View
					navigation={this.props.navigation}
					style={styles.ing1}>
					<Image
						source={require("./../../assets/images/avatar.png")}
						style={styles.avatarImage}/>
					<Text
						style={styles.ingredient1Text}>cooking spray</Text>
				</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({
	ing1: {
		backgroundColor: "transparent",
		width: "100%",
		height: 66,
		flexDirection: "row",
		alignItems: "center",
	},
	avatarImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 50,
		marginLeft: 25,
		marginRight: 15,
	},
	ingredient1Text: {
		backgroundColor: "transparent",
		color: "rgb(3, 15, 9)",
		fontFamily: "Nunito-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		marginLeft: 15,
	},
})
