import React from "react"
import Layout from "../components/layout/layout";
import SEO from '../components/seo/seo';


const Home = props => {
    return (
        <Layout>
            <SEO title='Home' />
            <p> Home </p>
        </Layout> 
    )
}

export default Home;