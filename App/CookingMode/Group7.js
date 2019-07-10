//
//  Group7
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { Text, TouchableWithoutFeedback, StyleSheet, View } from "react-native"
import React from "react"


export default class Group7 extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onGroup7Press = () => {
	
	}

	render() {
	
		return <TouchableWithoutFeedback
				onPress={this.onGroup7Press}>
				<View
					navigation={this.props.navigation}
					style={styles.group7}>
					<View
						style={styles.step1View}>
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
								style={styles.textText}>1</Text>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.heatABelgianWafflText}>Heat a Belgian waffle iron.</Text>
				</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({
	group7: {
		backgroundColor: "transparent",
		width: "100%",
		height: 24,
		flexDirection: "row",
		alignItems: "center",
	},
	step1View: {
		backgroundColor: "transparent",
		opacity: 0.4,
		width: 24,
		height: 24,
		marginLeft: 25,
	},
	ovalView: {
		backgroundColor: "rgb(48, 190, 118)",
		borderRadius: 10,
		height: 20,
		marginLeft: 2,
		marginRight: 2,
	},
	textText: {
		backgroundColor: "transparent",
		color: "white",
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
	heatABelgianWafflText: {
		backgroundColor: "transparent",
		color: "rgb(168, 168, 168)",
		fontFamily: "Nunito-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		marginRight: 146,
	},
})
