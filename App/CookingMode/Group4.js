//
//  Group4
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet, View, TouchableWithoutFeedback, Text } from "react-native"
import React from "react"


export default class Group4 extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onGroup4Press = () => {
	
	}

	render() {
	
		return <TouchableWithoutFeedback
				onPress={this.onGroup4Press}>
				<View
					navigation={this.props.navigation}
					style={styles.group4}>
					<View
						style={styles.step2View}>
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
								style={styles.textText}>2</Text>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.mixTheFlourSugarText}>Mix the flour, sugar, and baking powder together in a mixing bowl. Stir in 1 cup eggnog, butter, and the egg until well blended. Add more eggnog if needed to make a pourable batter.</Text>
				</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({
	group4: {
		backgroundColor: "transparent",
		width: "100%",
		height: 110,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	step2View: {
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
	mixTheFlourSugarText: {
		backgroundColor: "transparent",
		color: "rgb(168, 168, 168)",
		fontFamily: "Nunito-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		alignSelf: "center",
		width: 286,
		marginRight: 25,
	},
})
