//
//  FeedCardThree
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { Image, StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native"
import React from "react"


export default class FeedCardThree extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onFeedCardThreePress = () => {
	
	}

	render() {
	
		return <TouchableWithoutFeedback
				onPress={this.onFeedCardThreePress}>
				<View
					navigation={this.props.navigation}
					style={styles.feedCard}>
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
						<Image
							source={require("./../../assets/images/card-base.png")}
							style={styles.cardBaseImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 41,
							right: 41,
							top: 15,
							bottom: 18,
						}}>
						<Text
							style={styles.profileNameText}>Profile Name</Text>
						<Text
							style={styles.timeText}>2h ago</Text>
						<Text
							style={styles.redWineAndMintSoText}>Vanilla Pud</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.apparentlyWeHadReText}>Apparently we had reached a great height in the atmosphere, for the sky was …</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 22,
								marginRight: 11,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.likesText}>32 likes</Text>
							<Text
								style={styles.commentsText}>8 Comments</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.saveText}>Save</Text>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({
	feedCard: {
		backgroundColor: "transparent",
		width: "100%",
		height: 360,
	},
	cardBaseImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		height: 360,
		marginLeft: 25,
		marginRight: 25,
	},
	profileNameText: {
		backgroundColor: "transparent",
		color: "rgb(3, 15, 9)",
		fontFamily: "Nunito-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
		marginLeft: 41,
	},
	timeText: {
		backgroundColor: "transparent",
		color: "rgb(118, 118, 118)",
		fontFamily: "Nunito-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.4,
		alignSelf: "flex-start",
		marginLeft: 41,
	},
	redWineAndMintSoText: {
		backgroundColor: "transparent",
		color: "rgb(3, 15, 9)",
		fontFamily: "Nunito-SemiBold",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		lineHeight: 32,
		marginRight: 201,
		marginTop: 164,
	},
	apparentlyWeHadReText: {
		backgroundColor: "transparent",
		color: "rgb(168, 168, 168)",
		fontFamily: "Nunito-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		marginBottom: 20,
	},
	likesText: {
		backgroundColor: "transparent",
		color: "rgb(96, 96, 96)",
		fontFamily: "Nunito-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
	},
	commentsText: {
		backgroundColor: "transparent",
		color: "rgb(96, 96, 96)",
		fontFamily: "Nunito-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		marginLeft: 25,
	},
	saveText: {
		backgroundColor: "transparent",
		color: "rgb(48, 190, 118)",
		fontFamily: "Nunito-Bold",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		lineHeight: 18,
		letterSpacing: 0.4,
		paddingTop: 2,
	},
})
