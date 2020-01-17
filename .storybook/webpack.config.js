const prettierConfig = require('../.prettierrc.js');

module.exports = async ({ config, mode }) => {
	config.module.rules.push({
		test: /.stories.ts?$/,
		loaders: [
			{
				loader: require.resolve('@storybook/addon-storysource/loader'),
				options: {
					parser: 'typescript',
					prettierConfig: {
						...prettierConfig,
						tabWidth: 2,
					},
					uglyCommentsRegex: [/^tslint*/],
				},
			},
		],
		enforce: 'pre',
	});

	return config;
};
