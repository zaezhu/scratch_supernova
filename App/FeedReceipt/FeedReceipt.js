//
//  FeedReceipt
//  Project
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet, Text, View, Image, FlatList } from "react-native"
import React from "react"
import FeedCard from "./FeedCard"
import FeedCardTwo from "./FeedCardTwo"
import FeedCardThree from "./FeedCardThree"
import FeedCardFour from "./FeedCardFour"


export default class FeedReceipt extends React.Component {

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

	listCardFlatListMockData = [{
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

	renderListCardFlatListCell = ({ item }) => {
	
		return <FeedCard
				navigation={this.props.navigation}/>
	}

	render() {
	
		return <View
				style={styles.feedReceiptView}>
				<View
					style={styles.navigationBarView}>
					<View
						style={styles.logoView}>
						<Image
							source={require("./../../assets/images/group.png")}
							style={styles.groupImage}/>
						<Text
							style={styles.scratchText}>scratc</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<Image
						source={require("./../../assets/images/notifications.png")}
						style={styles.notificationsImage}/>
					<Image
						source={require("./../../assets/images/messages.png")}
						style={styles.messagesImage}/>
				</View>
				<View
					style={styles.listCardFlatListViewWrapper}>
					<FlatList
						renderItem={this.renderListCardFlatListCell}
						data={this.listCardFlatListMockData}
						style={styles.listCardFlatList}/>
				</View>
				<View
					style={styles.mobileNavigationView}>
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
							pointerEvents="box-none"
							style={{
								height: 32,
								marginLeft: 50,
								marginRight: 52,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source={require("./../../assets/images/nav-1.png")}
								style={styles.nav1Image}/>
							<Image
								source={require("./../../assets/images/icon-3.png")}
								style={styles.icon3Image}/>
						</View>
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
						<Image
							source={require("./../../assets/images/nav-2.png")}
							style={styles.nav2Image}/>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	feedReceiptView: {
		backgroundColor: "white",
		flex: 1,
	},
	navigationBarView: {
		backgroundColor: "white",
		height: 104,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	logoView: {
		backgroundColor: "transparent",
		width: 102,
		height: 28,
		marginLeft: 30,
		marginTop: 60,
		flexDirection: "row",
		alignItems: "center",
	},
	groupImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		flex: 1,
		height: 26,
		marginRight: 10,
	},
	scratchText: {
		color: "rgb(54, 56, 55)",
		fontFamily: "Nunito-Bold",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		lineHeight: 20,
		letterSpacing: 0.4,
		paddingTop: 8,
		backgroundColor: "transparent",
		flex: 1,
		marginLeft: 10,
		marginRight: 4,
	},
	notificationsImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
		marginRight: 25,
		marginTop: 64,
	},
	messagesImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
		marginRight: 25,
		marginTop: 64,
	},
	listCardFlatListViewWrapper: {
		flex: 1,
		marginTop: 9,
		marginBottom: 823,
	},
	listCardFlatList: {
		backgroundColor: "transparent",
		width: "100%",
		height: "100%",
	},
	mobileNavigationView: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.1)",
		shadowRadius: 1,
		shadowOpacity: 1,
		height: 90,
	},
	nav1Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 32,
		height: 32,
	},
	icon3Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		flex: 1,
		height: 22,
		marginLeft: 214,
	},
	nav2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 32,
	},
})
