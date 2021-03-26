module.exports = {
	siteMetadata: {
		title: `gatsby-wordpress-chakra-starter`,
		description: `Website description`,
		author: `@VTWebDevelopment`,
		titleTemplate: `%s | VT Web Development`,
		url: `https://www.vtwebdevelopment.com`,
		image: `icon.png`,
		twitterUsername: `@VTWebDevelopment`,
	},
	plugins: [
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-image`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				url: `http://kissaneassociates.local/graphql`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: [
						'Roboto: 100, 200, 300, 400, 500, 600, 700,900',
						'Poppins:  100, 200, 300, 400, 500, 600, 700,900',
					],
				},
			},
		},
		{
			resolve: '@chakra-ui/gatsby-plugin',
			options: {
				/**
				 * @property {boolean} [isResettingCSS=true]
				 * if false, this plugin will not use `<CSSReset />
				 */
				isResettingCSS: true,
				/**
				 * @property {boolean} [isUsingColorMode=true]
				 * if false, this plugin will not use <ColorModeProvider />
				 */
				isUsingColorMode: true,
			},
		},
	],
}
