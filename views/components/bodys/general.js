import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableHighlight,
	ViewPagerAndroid,
} from 'react-native';

import InfomationComponent from './generals/infomation';
import BlogComponent from './generals/blog';
import QuestionComponent from './generals/question';
import ActivityComponent from './generals/activity';

class GeneralComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			generalPos: 0,
			generalOffset: 0
		}
	}

	onPageSelected(event) {
		this.setState({
			generalPos: event.nativeEvent.position,
			//suffixMarginLeft:  event.nativeEvent.position * (Dimensions.get('window').width / 4),
		});
	}

	onPageScroll(event) {
		const position = event.nativeEvent.position;
		const offset = event.nativeEvent.offset;
		this.setState({
			generalOffset: offset,
			suffixMarginLeft: ( position + offset) * (Dimensions.get('window').width / 4)
		});
	}

	setPage(page) {
		this.refs.view_pager.setPage(page);
	}

	render() {

		return <View style={ style.container }>
			<View style={ style.itemsContainer }>
				<View style={style.itemsWrapper}>
					<TouchableHighlight onPress={ () => {this.setPage(0)} } style={ style.itemWrapper } underlayColor='#FFF'>
						<Text style={ this.state.generalPos==0 ? {color: '#00AA66'} : {} } >资讯</Text>
					</TouchableHighlight>
					<TouchableHighlight onPress={ () => {this.setPage(1)} } style={ style.itemWrapper } underlayColor='#FFF'>
						<Text style={ this.state.generalPos==0 ? {color: '#00AA66'} : {} } >博客</Text>
					</TouchableHighlight>
					<TouchableHighlight onPress={ () => {this.setPage(2)} } style={ style.itemWrapper } underlayColor='#FFF'>
						<Text style={ this.state.generalPos==0 ? {color: '#00AA66'} : {} } >问答</Text>
					</TouchableHighlight>
					<TouchableHighlight onPress={ () => {this.setPage(3)} } style={ style.itemWrapper } underlayColor='#FFF'>
						<Text style={ this.state.generalPos==0 ? {color: '#00AA66'} : {} } >活动</Text>
					</TouchableHighlight>
				</View>
				<View style={{
					flex: 1,
					width:  Dimensions.get('window').width / 4,
					backgroundColor: '#00AA66',
					marginLeft: this.state.suffixMarginLeft
				}}></View>
			</View>
			<ViewPagerAndroid
					ref="view_pager"
					style={ style.contentContainer }
					initialPage={0}
					onPageSelected={ this.onPageSelected.bind(this) }
					onPageScroll={ this.onPageScroll.bind(this) }>
					<InfomationComponent />
					<BlogComponent />
					<QuestionComponent />
					<ActivityComponent />
			</ViewPagerAndroid>
		</View>;
	}
}

export default GeneralComponent;

const style = StyleSheet.create({
	container: {
		flex: 1
	},

	itemsContainer: {
		height: 26,
		backgroundColor: '#FFFFFF'
	},

	itemsWrapper: {
		height: 25,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},

	itemWrapper: {
		flex: 1,
		alignItems: 'center'
	},

	suffix: {
		height: 1,
		backgroundColor: '#00AA66',
		width: Dimensions.get('window').width / 4,
	},

	contentContainer: {
		flex: 1,
	},

});
