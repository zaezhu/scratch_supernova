//
//  CookingMode
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import Group6 from "./Group6"
import { FlatList, Text, View, Image, StyleSheet } from "react-native"
import Group7 from "./Group7"
import LinearGradient from "react-native-linear-gradient"
import Group5 from "./Group5"
import React from "react"
import Group3 from "./Group3"
import Group4 from "./Group4"


export default class CookingMode extends React.Component {

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

	groupFlatListMockData = [{
		key: "1",
	}, {
		key: "2",
	}, {
		key: "3",
	}, {
		key: "4",
	}, {
		key: "5",
	}, {
		key: "6",
	}, {
		key: "7",
	}, {
		key: "8",
	}, {
		key: "9",
	}, {
		key: "10",
	}]

	renderGroupFlatListCell = ({ item }) => {
	
		return <Group4
				navigation={this.props.navigation}/>
	}

	render() {
	
		return <View
				style={styles.cookingModeView}>
				<View
					style={styles.backToView}>
					<Image
						source={require("./../../assets/images/back-2.png")}
						style={styles.backImage}/>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.backToText}>Back to Recipe</Text>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 33,
						marginLeft: 25,
						marginRight: 16,
						marginTop: 14,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<Text
						style={styles.cookingModeText}>Cooking Mode</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.timerView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Text
								style={styles.textSixText}>00.12</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/timer.png")}
								style={styles.timerImage}/>
						</View>
					</View>
				</View>
				<Text
					style={styles.almondAndSaffronBText}>Almond and Saffron Bonbons</Text>
				<View
					pointerEvents="box-none"
					style={{
						height: 236,
						marginTop: 21,
					}}>
					<Image
						source={require("./../../assets/images/video.png")}
						style={styles.videoImage}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 15,
							height: 221,
							alignItems: "flex-end",
						}}>
						<Image
							source={require("./../../assets/images/full-screen.png")}
							style={styles.fullScreenImage}/>
						<View
							style={styles.videoPlayButtonView}>
							<Image
								source={require("./../../assets/images/rectangle.png")}
								style={styles.rectangleImage}/>
						</View>
						<LinearGradient
							start={{
								x: 0.5,
								y: 0,
							}}
							end={{
								x: 0.5,
								y: 1,
							}}
							locations={[0, 1]}
							colors={["transparent", "rgba(0, 0, 0, 0.5)"]}
							style={styles.group2ViewLinearGradient}>
							<View
								style={styles.group2View}>
								<View
									style={styles.elementSlider2View}>
									<View
										style={styles.barView}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 32,
										right: 71,
										top: 44,
										height: 24,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										style={styles.viewView}>
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
										style={styles.viewTwoView}>
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
												style={styles.ovalTwoView}/>
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
												style={styles.textTwoText}>2</Text>
										</View>
									</View>
									<View
										style={styles.viewThreeView}>
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
												style={styles.ovalThreeView}/>
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
												style={styles.textThreeText}>3</Text>
										</View>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.viewFourView}>
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
												style={styles.ovalFourView}/>
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
												style={styles.textFourText}>4</Text>
										</View>
									</View>
									<View
										style={styles.viewFiveView}>
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
												style={styles.ovalFiveView}/>
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
												style={styles.textFiveText}>5</Text>
										</View>
									</View>
								</View>
							</View>
						</LinearGradient>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.viewStepView}>
					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginLeft: 25,
							marginRight: 25,
							marginTop: 25,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.stepsText}>Steps</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.viewIngredientsText}>View Ingredients</Text>
					</View>
					<View
						style={styles.groupFlatListViewWrapper}>
						<FlatList
							renderItem={this.renderGroupFlatListCell}
							data={this.groupFlatListMockData}
							style={styles.groupFlatList}/>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	cookingModeView: {
		backgroundColor: "white",
		flex: 1,
	},
	backToView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 129,
		height: 20,
		marginLeft: 20,
		marginTop: 55,
		flexDirection: "row",
		alignItems: "center",
	},
	backImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 6,
		height: 13,
		marginLeft: 7,
	},
	backToText: {
		color: "rgb(118, 118, 118)",
		fontFamily: "Nunito-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		marginRight: 18,
	},
	cookingModeText: {
		backgroundColor: "transparent",
		color: "rgb(3, 15, 9)",
		fontFamily: "Nunito-Bold",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		lineHeight: 32,
		paddingTop: 1,
	},
	timerView: {
		backgroundColor: "transparent",
		width: 68,
		height: 24,
		marginTop: 5,
	},
	textSixText: {
		color: "rgb(48, 190, 118)",
		fontFamily: "Nunito-Bold",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.32,
		backgroundColor: "transparent",
	},
	timerImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	almondAndSaffronBText: {
		color: "rgb(3, 15, 9)",
		fontFamily: "Nunito-Bold",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 25,
		marginTop: 30,
	},
	videoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 236,
	},
	fullScreenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
		marginRight: 15,
	},
	videoPlayButtonView: {
		backgroundColor: "rgba(255, 255, 255, 0.6)",
		borderRadius: 45,
		shadowColor: "rgba(0, 0, 0, 0.5)",
		shadowRadius: 40,
		shadowOpacity: 1,
		alignSelf: "center",
		width: 90,
		height: 90,
		marginTop: 28,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	rectangleImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 39,
		height: 46,
		marginRight: 21,
	},
	group2View: {
		width: "100%",
		height: "100%",
	},
	group2ViewLinearGradient: {
		alignSelf: "stretch",
		height: 77,
		marginTop: 2,
	},
	elementSlider2View: {
		backgroundColor: "rgb(230, 230, 230)",
		borderRadius: 2,
		position: "absolute",
		left: 20,
		right: 20,
		top: 55,
		height: 4,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	barView: {
		backgroundColor: "rgb(48, 190, 118)",
		borderRadius: 2,
		width: 115,
		height: 4,
	},
	viewView: {
		backgroundColor: "transparent",
		width: 24,
		height: 24,
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
		color: "rgb(3, 15, 9)",
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
	viewTwoView: {
		backgroundColor: "transparent",
		width: 24,
		height: 24,
		marginLeft: 25,
	},
	ovalTwoView: {
		backgroundColor: "white",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "rgb(48, 190, 118)",
		borderStyle: "solid",
		height: 20,
		marginLeft: 2,
		marginRight: 2,
	},
	textTwoText: {
		color: "rgb(3, 15, 9)",
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
	viewThreeView: {
		backgroundColor: "transparent",
		width: 24,
		height: 24,
		marginLeft: 27,
	},
	ovalThreeView: {
		backgroundColor: "white",
		borderRadius: 10,
		height: 20,
		marginLeft: 2,
		marginRight: 2,
	},
	textThreeText: {
		color: "rgb(3, 15, 9)",
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
	viewFourView: {
		backgroundColor: "transparent",
		width: 24,
		height: 24,
		marginRight: 39,
	},
	ovalFourView: {
		backgroundColor: "white",
		borderRadius: 10,
		height: 20,
		marginLeft: 2,
		marginRight: 2,
	},
	textFourText: {
		backgroundColor: "transparent",
		color: "rgb(3, 15, 9)",
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
	viewFiveView: {
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	ovalFiveView: {
		backgroundColor: "white",
		borderRadius: 10,
		height: 20,
		marginLeft: 2,
		marginRight: 2,
	},
	textFiveText: {
		color: "rgb(3, 15, 9)",
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
	viewStepView: {
		backgroundColor: "white",
		height: 639,
	},
	stepsText: {
		backgroundColor: "transparent",
		color: "rgb(3, 15, 9)",
		fontFamily: "Nunito-Bold",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
	},
	viewIngredientsText: {
		backgroundColor: "transparent",
		color: "rgb(48, 190, 118)",
		fontFamily: "Nunito-Bold",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.32,
	},
	groupFlatList: {
		backgroundColor: "transparent",
		width: "100%",
		height: "100%",
	},
	groupFlatListViewWrapper: {
		height: 522,
		marginTop: 20,
	},
})
