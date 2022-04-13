import '../styles/globals.css'

import SEO from './components/seo/Seo'
import Layout from './layout/Layout'

function MyApp({ Component, pageProps }) {

  
  return <Layout >
    <SEO />
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
