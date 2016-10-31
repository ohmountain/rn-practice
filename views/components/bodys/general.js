import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
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

	render() {

		return <View style={ style.container }>
			<View style={ style.itemsContainer }>
				<View style={style.itemsWrapper}>
					<View style={ style.itemWrapper }><Text style={ this.state.generalPos==0 ? {color: '#00AA66'} : {} } >资讯</Text></View>
					<View style={ style.itemWrapper }><Text style={ this.state.generalPos==1 ? {color: '#00AA66'} : {} } >博客</Text></View>
					<View style={ style.itemWrapper }><Text style={ this.state.generalPos==2 ? {color: '#00AA66'} : {} } >问答</Text></View>
					<View style={ style.itemWrapper }><Text style={ this.state.generalPos==3 ? {color: '#00AA66'} : {} } >活动</Text></View>
				</View>
				<View style={{
					flex: 1,
					width:  Dimensions.get('window').width / 4,
					backgroundColor: '#00AA66',
					marginLeft: this.state.suffixMarginLeft
				}}></View>
			</View>
			<ViewPagerAndroid
					style={ style.contentContainer }
					setPage={1}
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
		backgroundColor: '#EEE',
	},

});
