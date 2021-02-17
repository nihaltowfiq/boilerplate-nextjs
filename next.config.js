/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

module.exports = {
	env: {
		website: process.env.WEBSITE_URI,
	},
};
