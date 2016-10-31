import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import { menuItems } from '../common/footer';

class HeaderComponent extends Component {
	
	render() {
		return (<View style={ style.headerContainer }>
					<Text style={ style.headerText }>{ menuItems[this.props.activeMenu] }</Text>
				</View>)
	}
}

const style = StyleSheet.create({
	headerContainer: {
		height: 48,
		backgroundColor: '#00AA66',
		justifyContent: 'center',
		alignItems: 'center'
	},

	headerText: {
		color: '#FFF',
		fontSize: 18
	}
});

export default HeaderComponent;
