//
//  DetailReceipt
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, StyleSheet, FlatList, Image, Text } from "react-native"
import React from "react"
import Ing4 from "./Ing4"
import Ing3 from "./Ing3"
import Ing1 from "./Ing1"
import Ing2 from "./Ing2"


export default class DetailReceipt extends React.Component {

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

	listIngredientsFlatListMockData = [{
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

	renderListIngredientsFlatListCell = ({ item }) => {
	
		return <Ing4
				navigation={this.props.navigation}/>
	}

	render() {
	
		return <View
				style={styles.detailReceiptView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 359,
							marginRight: 75,
						}}>
						<View
							style={styles.imageBarView}>
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
									source={require("./../../assets/images/image.png")}
									style={styles.imageImage}/>
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
								<View
									style={styles.rectangleView}/>
							</View>
							<Text
								style={styles.engineCookedHoneyText}>Engine-Cooked Honey Orange Pancake</Text>
						</View>
						<View
							style={styles.navigationBarView}>
							<View
								style={styles.backToView}>
								<Image
									source={require("./../../assets/images/back.png")}
									style={styles.backImage}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.backToText}>Back to My Profile</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.editAnnotationsView}>
								<Image
									source={require("./../../assets/images/icon.png")}
									style={styles.iconImage}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.editAnnotationsText}>Cook Now</Text>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 94,
							marginLeft: 25,
							marginRight: 100,
							marginTop: 25,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/image-2.png")}
							style={styles.imageTwoImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.imageNextView}>
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
									source={require("./../../assets/images/image-4.png")}
									style={styles.imageFourImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									alignSelf: "center",
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Text
									style={styles.textText}>12+</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.tabsView}>
						<View
							pointerEvents="box-none"
							style={{
								height: 32,
								marginLeft: 14,
								marginRight: 24,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.tab1Text}>Ingredients</Text>
							<Text
								style={styles.tab2Text}>How to Cook</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.tab3Text}>Additional Info</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.selectedView}/>
						<View
							style={styles.lineSeparatorView}/>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.listIngredientsFlatListViewWrapper}>
						<FlatList
							renderItem={this.renderListIngredientsFlatListCell}
							data={this.listIngredientsFlatListMockData}
							style={styles.listIngredientsFlatList}/>
					</View>
				</View>
				<Image
					source={require("./../../assets/images/image-2.png")}
					style={styles.imageThreeImage}/>
			</View>
	}
}

const styles = StyleSheet.create({
	detailReceiptView: {
		backgroundColor: "white",
		flex: 1,
	},
	imageBarView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 359,
	},
	imageImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		height: 359,
	},
	rectangleView: {
		backgroundColor: "rgba(40, 41, 40, 0.5)",
		opacity: 0.8,
		height: 358,
	},
	engineCookedHoneyText: {
		color: "white",
		fontFamily: "Nunito-Bold",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		lineHeight: 32,
		paddingTop: 1,
		backgroundColor: "transparent",
		position: "absolute",
		left: 25,
		width: 302,
		bottom: 16,
	},
	navigationBarView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 104,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	backToView: {
		backgroundColor: "transparent",
		width: 129,
		height: 20,
		marginLeft: 20,
		marginTop: 66,
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
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Nunito-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.4,
	},
	editAnnotationsView: {
		backgroundColor: "rgba(0, 0, 0, 0.4)",
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "white",
		borderStyle: "solid",
		width: 101,
		height: 30,
		marginRight: 25,
		marginTop: 61,
		flexDirection: "row",
		alignItems: "center",
	},
	iconImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 15,
		height: 15,
		marginLeft: 11,
	},
	editAnnotationsText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Nunito-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		marginRight: 11,
	},
	imageTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 103,
		height: 94,
	},
	imageNextView: {
		backgroundColor: "transparent",
		width: 103,
		height: 94,
	},
	imageFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.2,
		height: 94,
	},
	textText: {
		backgroundColor: "transparent",
		color: "rgb(3, 15, 9)",
		fontFamily: "Nunito-Bold",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
	},
	tabsView: {
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 425,
		height: 37,
		marginTop: 25,
	},
	tab1Text: {
		color: "rgb(3, 15, 9)",
		fontFamily: "Nunito-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 32,
		backgroundColor: "transparent",
	},
	tab2Text: {
		color: "rgb(3, 15, 9)",
		fontFamily: "Nunito-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 32,
		backgroundColor: "transparent",
		opacity: 0.4,
		marginLeft: 60,
	},
	tab3Text: {
		backgroundColor: "transparent",
		opacity: 0.4,
		color: "rgb(3, 15, 9)",
		fontFamily: "Nunito-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 32,
	},
	selectedView: {
		backgroundColor: "rgb(48, 190, 118)",
		alignSelf: "flex-start",
		width: 110,
		height: 4,
	},
	lineSeparatorView: {
		backgroundColor: "rgb(230, 230, 230)",
		borderRadius: 0.5,
		height: 1,
	},
	listIngredientsFlatList: {
		backgroundColor: "transparent",
		width: "100%",
		height: "100%",
	},
	listIngredientsFlatListViewWrapper: {
		height: 256,
		marginRight: 75,
	},
	imageThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		top: 384,
		height: 94,
	},
})
