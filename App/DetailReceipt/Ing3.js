//
//  Ing3
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { TouchableWithoutFeedback, Text, Image, View, StyleSheet } from "react-native"
import React from "react"


export default class Ing3 extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onIng3Press = () => {
	
	}

	render() {
	
		return <TouchableWithoutFeedback
				onPress={this.onIng3Press}>
				<View
					navigation={this.props.navigation}
					style={styles.ing3}>
					<Image
						source={require("./../../assets/images/avatar.png")}
						style={styles.avatarImage}/>
					<Text
						style={styles.ingredient3Text}>2 large eggs1 tablespoon maple syrup</Text>
				</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({
	ing3: {
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
	ingredient3Text: {
		backgroundColor: "transparent",
		color: "rgb(3, 15, 9)",
		fontFamily: "Nunito-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		marginRight: 46,
	},
})
