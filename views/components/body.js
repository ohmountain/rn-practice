import React,{ Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import { Components } from './bodys/index';

class BodyComponent extends Component {

	render() {

		return (<View style={ style.bodyContainer }>
				{ Components[this.props.activeMenu] }
			</View>);
	}
}

const style = StyleSheet.create({
	bodyContainer: {
		flex: 1,
	}
});

export default BodyComponent;
