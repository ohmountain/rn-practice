import React, { Component } from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

import HeaderCompont from './components/header';
import BodyCompont from './components/body';
import FooterCompont from './components/footer';

export default class LayoutComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeMenu: 0
		}
	}

	setMenuActive(index) {
		if (this.state.activeMenu != index) {
			this.setState({ activeMenu: index });
		}
	}

	render() {
		return <View style={ style.container }>
				<HeaderCompont activeMenu={ this.state.activeMenu }/>
				<BodyCompont  activeMenu={ this.state.activeMenu }/>
				<FooterCompont setActive={ this.setMenuActive.bind(this) } activeMenu={ this.state.activeMenu }/>
			</View>
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1
	}
});
