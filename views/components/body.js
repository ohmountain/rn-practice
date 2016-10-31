import React,{ Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	PixelRatio,
	ViewPagerAndroid
} from 'react-native';

import { Components } from './bodys/index';

class BodyComponent extends Component {

	componentWillReceiveProps(props) {
	}

	render() {
		return (<View style={ [style.bodyContainer, {marginLeft: - (Dimensions.get('window').width * this.props.activeMenu) }] }>
						<View style={{ width: Dimensions.get('window').width  }}>{ Components[0] }</View>
						<View style={{ width: Dimensions.get('window').width  }}>{ Components[1] }</View>
						<View style={{ width: Dimensions.get('window').width  }}>{ Components[2] }</View>
						<View style={{ width: Dimensions.get('window').width  }}>{ Components[3] }</View>
					</View>);
	}
}

const style = StyleSheet.create({
	bodyContainer: {
		flex: 1,
		width: 4 * Dimensions.get('window').width * PixelRatio.get(),
		backgroundColor: '#F9F9F9',
		flexDirection: 'row',
	}
});

export default BodyComponent;
