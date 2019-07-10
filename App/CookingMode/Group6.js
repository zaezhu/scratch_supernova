//
//  Group6
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, TouchableWithoutFeedback, StyleSheet, Text } from "react-native"
import React from "react"


export default class Group6 extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onGroup6Press = () => {
	
	}

	render() {
	
		return <TouchableWithoutFeedback
				onPress={this.onGroup6Press}>
				<View
					navigation={this.props.navigation}
					style={styles.group6}>
					<View
						style={styles.step5View}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<View
								style={styles.ovalView}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Text
								style={styles.textText}>5</Text>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.toServeDrizzleRaText}>To serve, drizzle raspberry preserves over each waffle, and top with raspberries. If desired, add a dollop of whipped cream to each waffle.</Text>
				</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({
	group6: {
		backgroundColor: "transparent",
		width: "100%",
		height: 88,
		flexDirection: "row",
		alignItems: "center",
	},
	step5View: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 24,
		height: 24,
		marginLeft: 25,
	},
	ovalView: {
		backgroundColor: "white",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "rgb(48, 190, 118)",
		borderStyle: "solid",
		height: 20,
		marginLeft: 2,
		marginRight: 2,
	},
	textText: {
		backgroundColor: "transparent",
		color: "rgb(48, 190, 118)",
		fontFamily: "Nunito-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 12,
		paddingTop: 5,
		marginLeft: 8,
		marginRight: 8,
	},
	toServeDrizzleRaText: {
		color: "rgb(168, 168, 168)",
		fontFamily: "Nunito-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		width: 286,
		marginRight: 25,
	},
})
