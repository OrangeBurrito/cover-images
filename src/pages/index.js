import React from 'react';
import {Link, graphql} from 'gatsby'

import Layout from '../components/layout'
import Dump from '../components/dump'

export default function HomePage({data}) {
	
  return (
		<Layout title="Home">
			<h1>Cover Images!</h1>
			{data.allMdx.nodes.map(({excerpt, frontmatter, fields}) => (
				<>
					<Link to={fields.slug}>
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
				date
			}
			fields {
				slug
			}
		}
	}
}
`