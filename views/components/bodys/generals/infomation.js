import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ListView
} from 'react-native';

import FIcon from 'react-native-vector-icons/FontAwesome';

var d = {
	title: '队长别开枪是我',
	content: '由于是现场直播，不能停顿、不能求助别人，而且按照情节后来的发展，如果陈佩斯拿着枪演，就没有原来设计的那种背着演的效果，何况陈佩斯并不知道皮带断了，朱时茂害怕陈佩斯下面演不下去，在心里瞬间的慌乱之后，沉着冷静若无其事地一边说台词，一边自然而迅速地将背带打好了结。',
	time: (new Date).getTime()
};

var data = [];

for (var i=1; i<100; i++) {
	var _d = d;
	_d.id = i;
	_d.read = i;
	data.push(_d);
}

class DataRowComponent extends Component {
	render() {
		return (<View style={ style.rowContainer }>
				<View style={ style.rowTitle }>
					<Text 
						numberOfLines={2}
						style={ style.rowTitleText }>{ this.props.title }</Text>
				</View>
				<View style={ style.rowContent } >
					<Text 
						numberOfLines={2}
						style={ style.rowContentText }>{ this.props.content }</Text>
				</View>
				<View style={ style.rowInfo }>
					<Text style={ style.rowInfoTime }>刚刚</Text>
					<Text style={ style.rowInfoRead }>
						<FIcon name='bookmark-o' size={12}/> { this.props.read }
					</Text>
				</View>
		</View>)
	}
}

class InfomationComponent extends Component {
	constructor(props) {
		super(props);

		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1.id !== r2.id,
		});

		this.state = {
			dataSource: ds.cloneWithRows(data)
		}
	}

	renderRow(row) {
		return <DataRowComponent title={row.title} content={row.content} time={row.time} read={row.read}/>
	}

	render() {
		return <ListView
			style={ style.infomationContainer }
			initialListNumber={ 20 }
			pageSize={ 20 }
			dataSource={ this.state.dataSource }
			renderRow={ this.renderRow.bind(this) }></ListView>
	}
}

export default InfomationComponent;

const style = StyleSheet.create({

	infomationContainer: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10
	},

	rowContainer: {
		marginBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#E9E9E9',
		paddingBottom: 12,
	},

	rowTitle: {
		height: 20,
		justifyContent: 'center',
		marginBottom: 4,
	},

	rowTitleText: {
		fontSize: 16,
		color: '#333'
	},

	rowContent: {
	},
	
	rowContentText: {
		height: 32,
		color: '#696969'
	},

	rowInfo: {
		height: 18,
		flexDirection: 'row',
		marginTop: 10,
	},

	rowInfoTime: {
		fontSize: 12
	},

	rowInfoRead: {
		fontSize: 12,
		position: 'absolute',
		right: 0
	},
});
