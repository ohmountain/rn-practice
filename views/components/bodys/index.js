import React from 'react';

import GeneralComponent from './general';
import TweetComponent from './tweet';
import DiscoveryComponent from './discovery';
import UserComponent from './user';

module.exports = {
	Components: [
		<GeneralComponent />,
		<TweetComponent />,
		<DiscoveryComponent />,
		<UserComponent />
	]
}
