//
//  Group3
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native"


export default class Group3 extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onGroup3Press = () => {
	
	}

	render() {
	
		return <TouchableWithoutFeedback
				onPress={this.onGroup3Press}>
				<View
					navigation={this.props.navigation}
					style={styles.group3}>
					<View
						style={styles.step3View}>
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
								style={styles.textText}>3</Text>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.lightlyGreaseOrSpText}>Lightly grease or spray the waffle iron with non-stick cooking spray. Pour some batter onto the preheated waffle iron, close the top, and cook until golden brown and crisp on both sides. Waffles are usually cooked with steam subsides. Transfer waffles to a serving plate, and keep warm.</Text>
				</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({
	group3: {
		backgroundColor: "transparent",
		width: "100%",
		height: 154,
		flexDirection: "row",
		alignItems: "center",
	},
	step3View: {
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
	lightlyGreaseOrSpText: {
		backgroundColor: "transparent",
		color: "rgb(3, 15, 9)",
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
