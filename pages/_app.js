import App from "next/app"
import Head from "next/head"
import "../assets/css/style.css"
import { createContext } from "react"
import { fetchAPI } from "../lib/api"
import Script from "next/script"
import { GoogleAnalytics } from "nextjs-google-analytics"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          // href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <GoogleAnalytics gaMeasurementId={process.env.GA_ID} trackPageViews />

      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  })
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } }
}

export default MyApp
