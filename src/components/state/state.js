import React from 'react';
import { connect } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';
import { Convert } from '../../utility/convert';
import { isLoaded, setPages, setNavbarLinks, setPageInfo } from '../../store/action';

const State = (props) => {
	let data = useStaticQuery(
		graphql`
			{
				allContentfulPage {
					edges {
						node {
							title
							slug
							type
							contentful_id
							description {
								json
							}
							images {
								fluid {
									base64
									aspectRatio
									src
									srcSet
									sizes
								}
							}
							order
							projectType
							videoLink
							link
						}
					}
				}
				allContentfulNavbarLink {
					edges {
						node {
							contentful_id
							page {
								contentful_id
								title
								slug
								projectType
							}
							title
							order
						}
					}
				}
				allContentfulPageInfo {
					edges {
						node {
							contentful_id
							description {
								description
							}
							navbarList {
								contentful_id
								page {
									contentful_id
									title
									slug
									projectType
									type
								}
								title
							}
						}
					}
				}
				contentfulPageInfo {
					contentful_id
					description {
						description
					}
					navbarList {
						contentful_id
						page {
							contentful_id
							title
							slug
							projectType
						}
						title
					}
				}
			}
		`
	);

	if (!props.isLoaded) {
		let { allContentfulPage, allContentfulNavbarLink, allContentfulPageInfo, contentfulPageInfo } = data;

		let pages = Convert.toModelArray(allContentfulPage, Convert.toPageModel);
		let navbarLinks = Convert.toModelArray(allContentfulNavbarLink, Convert.toNavbarLinkModel);
		let pageInfo = Convert.toPageInfoModel(contentfulPageInfo);
		props.setPages(pages);
		props.setNavbarLinks(navbarLinks);
		props.setPageInfo(pageInfo);
	}

	return <React.Fragment />;
};

const mapStateToProps = (state) => {
	return {
		isLoaded: state.isLoaded
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setPages: (pages) => dispatch(setPages(pages)),
		loaded: () => dispatch(isLoaded()),
		setNavbarLinks: (navbar_links) => dispatch(setNavbarLinks(navbar_links)),
		setPageInfo: (page_info) => dispatch(setPageInfo(page_info))
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(State);
