module.exports = config => require('react-app-rewire-postcss')(config, {
	plugins() {
		return [
			require('postcss-preset-env')({
                stage: 0,
                autoprefixer: { grid: true },
                importFrom : [
                    './src/styles/mediaqueries.css'
                ],
                features:  {
                    'custom-properties': {
                      preserve: true,
                      importFrom: [
                        './src/styles/variables.css',
                      ],
                    },
                  },
			})
		]
	}
});