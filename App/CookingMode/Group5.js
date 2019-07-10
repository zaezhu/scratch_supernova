//
//  Group5
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { TouchableWithoutFeedback, StyleSheet, View, Text } from "react-native"
import React from "react"


export default class Group5 extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onGroup5Press = () => {
	
	}

	render() {
	
		return <TouchableWithoutFeedback
				onPress={this.onGroup5Press}>
				<View
					navigation={this.props.navigation}
					style={styles.group5}>
					<View
						style={styles.step4View}>
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
								style={styles.textText}>4</Text>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.meanwhilePlaceTheText}>Meanwhile, place the raspberry preserves in a pan, and heat over medium heat until pourable</Text>
				</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({
	group5: {
		backgroundColor: "transparent",
		width: "100%",
		height: 66,
		flexDirection: "row",
		alignItems: "center",
	},
	step4View: {
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
		color: "rgb(48, 190, 118)",
		fontFamily: "Nunito-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 12,
		paddingTop: 5,
		backgroundColor: "transparent",
		marginLeft: 8,
		marginRight: 8,
	},
	meanwhilePlaceTheText: {
		backgroundColor: "transparent",
		color: "rgb(168, 168, 168)",
		fontFamily: "Nunito-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		width: 286,
		marginRight: 25,
	},
})
