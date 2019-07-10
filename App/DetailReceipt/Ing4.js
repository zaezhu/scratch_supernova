//
//  Ing4
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Text, Image, View, TouchableWithoutFeedback, StyleSheet } from "react-native"


export default class Ing4 extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onIng4Press = () => {
	
	}

	render() {
	
		return <TouchableWithoutFeedback
				onPress={this.onIng4Press}>
				<View
					navigation={this.props.navigation}
					style={styles.ing4}>
					<Image
						source={require("./../../assets/images/avatar.png")}
						style={styles.avatarImage}/>
					<Text
						style={styles.ingredient4Text}>1/2 teaspoon vanilla extract</Text>
				</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({
	ing4: {
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
	ingredient4Text: {
		color: "rgb(3, 15, 9)",
		fontFamily: "Nunito-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		marginLeft: 15,
	},
})
