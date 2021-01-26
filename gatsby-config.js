module.exports = {
	siteMetadata: {
		title: 'Blog',
		description: 'the blog',
	},
	plugins: [
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/posts`,
				name: `posts`,
			}
		}
	]
}