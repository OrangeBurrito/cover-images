import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'

export const query = graphql`
query PostBySlug($slug: String!) {
  mdx(fields: { slug: { eq: $slug } }) {
		body
    frontmatter {
      title
			date(formatString: "MMMM Do YYYY")
			cover
			coverAlt
    }
  }
}
`

export default ({data, pageContext}) => {
	const { frontmatter, body } = data.mdx
	const { previous, next } = pageContext
	return (
		<Layout title='Blog'>
			<div className="blogpost-wrap" id="key">
				<img src={frontmatter.cover} alt={frontmatter.coverAlt}></img>
				<h1 className="post-title">{frontmatter.title}</h1>
				<p style={{ fontFamily: 'Fira Code' }}>{frontmatter.date}</p>
				<MDXRenderer>{body}</MDXRenderer>
				{previous === false ? null : (
        <>
          {previous && (
            <Link to={previous.fields.slug} className="navigation-btn">
							<h3>Previous</h3>
              <h2>{previous.frontmatter.title}</h2>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields.slug} className="navigation-btn">
							<h3>Next</h3>
              <h2>{next.frontmatter.title}</h2>
            </Link>
          )}
        </>
      )}
			</div>
		</Layout>
	)
}