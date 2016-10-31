import React,{ Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight
} from 'react-native';

import FIcon from 'react-native-vector-icons/FontAwesome';

class FooterComponent extends Component {

	componentDidMount() {
	}

	render() {

		return (<View style={ style.footerContainer }>
				<MenuItem title='综合' icon='th' setActive={ this.props.setActive } index={0} active={ this.props.activeMenu == 0 ? true : false } />
				<MenuItem title='动弹' icon='comments-o' setActive={ this.props.setActive } index={1}  active={ this.props.activeMenu == 1 ? true : false } />
				<View style={ style.plus }>
					<FIcon name="plus" color='#FFFFFF' size={ 18 }/>
				</View>
				<MenuItem title='发现' icon='table' setActive={ this.props.setActive } index={2}  active={ this.props.activeMenu == 2 ? true : false } />
				<MenuItem title='我的' icon='user' setActive={ this.props.setActive } index={3}  active={ this.props.activeMenu == 3 ? true : false } />
			</View>)
	}
}

class MenuItem extends Component {

	componentDidMount() {
	}

	render() {
		return (<TouchableHighlight
				style={ style.menuItem }
				onPress={ ()=>{ this.props.setActive(this.props.index) } }
				activeOpacity={1}
				underlayColor="#FFFFFF">
				<View style={ style.menuItem }>
					<FIcon name={ this.props.icon } size={ 18 } color={ this.props.active === true ? "#00AA66" : "#666666" }/>
					<Text style={ { fontSize: 12, color : this.props.active === true ? "#00AA66" : "#666666" } }>{ this.props.title }</Text>
				</View>
			</TouchableHighlight>);
	}
}

const style = StyleSheet.create({
	footerContainer: {
		height: 48,
		backgroundColor: '#FFF',
		borderTopWidth: 1,
		borderTopColor: '#E3E3E3',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},

	menuItem: {
		flex: 1,
		height: 48,
		justifyContent: 'center',
		alignItems: 'center'
	},

	plus: {
		height: 36,
		width: 36,
		borderRadius: 36,
		backgroundColor: "#009966",
		justifyContent: 'center',
		alignItems: 'center'
	}
});


export default FooterComponent;

