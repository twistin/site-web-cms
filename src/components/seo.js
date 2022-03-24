import Helmet from 'react-helmet'

const image = node.frontmatter.socialcard

export const SEO = ({ postData, frontmatter = {}, metaImage, isBlogPost }) => (
	<Helmet>
		{/* Your other meta tags... */}
		<meta name="image" content={image} />
		<meta property="og:image" content={image} />
		<meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:image" content={image} />
	</Helmet>
)