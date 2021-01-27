import React from 'react';
import {Link, graphql} from 'gatsby'

import Layout from '../components/layout'

export default function HomePage({data}) {
	
  return (
		<Layout title="Home">
			<h1>Cover Images!</h1>
			{data.allMdx.nodes.map(({excerpt, frontmatter, fields}) => (
				<>
					<Link to={fields.slug}>
					<img src={frontmatter.cover} alt={frontmatter.coverAlt}></img>
						<h2>{frontmatter.title}</h2>
						<p>{frontmatter.date}</p>
					</Link>
				</>
			))}
		</Layout>
	)
};

export const  query = graphql`
query SITE_INDEX_QUERY {
	allMdx(
		sort: { fields: [frontmatter___date], order: DESC }
		filter: { frontmatter: { published: { eq: true } } }
	) {
		nodes {
			id
			excerpt(pruneLength: 60)
			frontmatter {
				title
				date(formatString: "YYYY MMMM Do")
				cover
				coverAlt
			}
			fields {
				slug
			}
		}
	}
}
`

// {
// 	childImageSharp {
// 			fluid(maxWidth: 630) {
// 				tracedSVG
// 				aspectRatio
// 				src
// 				srcSet
// 				sizes
// 			}
// 		}
// }