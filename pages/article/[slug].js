import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Article = ({ article, categories }) => {
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div id="banner" className="uk-container uk-container-large" data-uk-img>
        <h1>{article.attributes.title}</h1>
      </div>
      <div className="uk-section uk-padding-small-top">
        <div className="uk-container uk-container-large uk-margin-remove make-narrow">
          <ReactMarkdown
            source={article.attributes.content}
            escapeHtml={false}
          />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div className="uk-width-expand">
              <p className="uk-text-italic uk-text-small">
                {article.attributes.linkedinpostdate ? (
                  <div>
                    Originally posted on LinkedIn on:{" "}
                    <Moment format="MMMM Do, YYYY">
                      {article.attributes.linkedinpostdate}
                    </Moment>
                  </div>
                ) : (
                  <div>
                    Created on:{" "}
                    <Moment format="MMMM Do, YYYY">
                      {article.attributes.published_at}
                    </Moment>
                  </div>
                )}
                {article.attributes.linkedinurl && (
                  <div>
                    <a href={article.attributes.linkedinurl}>
                      See the full conversation here
                    </a>
                  </div>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  })
  const categoriesRes = await fetchAPI("/categories")

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  }
}

export default Article
