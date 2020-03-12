import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FetchPostsRequest } from '../actions/postsAction'
import { LoginRequest } from '../actions/userActions'
import { StyleSheet, Text, View, Button, ScrollView, Alert } from 'react-native';
import { Dimensions } from "react-native";
import Item from '../components/Item'
import Stories from '../components/Stories'

class Home extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		const {fetchPosts,postLogin} = this.props
		fetchPosts()
		postLogin()
	}
	render() {
		const { navigation } = this.props
		const { posts } = this.props
		return (
			<View>
				<ScrollView style={styles.listContainter}>
					<Stories></Stories>
					{posts.map((item, key) => (
						<Item item={item} key={key} ></Item>
					))}</ScrollView>
			</View>
		);
	}
}
const mapDispatchToProps = (dispatch, props) => {
	return {
		fetchPosts: () => dispatch(FetchPostsRequest()),
		postLogin: ()=> dispatch(LoginRequest("vucms","timboy900"))
	}
}
const mapStateToProps = (state) => {
	return {
		posts : state.posts
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
const screenHeight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',

	},
	countTxt: {
		fontSize: 200,
		textAlign: 'center',
		lineHeight: screenHeight - 170,
		width: "100%",
		height: screenHeight - 170
	},
	button: {
		width: "100%",
		height: 50,
		backgroundColor: 'black',
	},
	buttonText: {
		fontSize: 20,
		color: "white",
		textAlign: "center",
		lineHeight: 50
	}
});