import React from "react"
import Card from "./card"

const Articles = ({ articles }) => {
  articles.sort((a, b) => a.id - b.id).reverse()
  const leftArticlesCount = Math.ceil(articles.length / 5)
  const leftArticles = articles.filter((article) => article.id % 2 === 0)
  const rightArticles = articles.filter((article) => article.id % 2 !== 0)

  const welcome = (
    <div className="uk-margin-xlarge-bottom">
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          <p className="uk-text-bold">
            Welcome! This space will contain my writing from LinkedIn in a more
            accessible and eventually searchable/filterable place. This will
            make advice easier to find, and I will also be expanding on certain
            projects (such as my #buildinpublic project starting January).
          </p>
        </div>
        <div>
          <p className="uk-text-bold uk-margin-remove-bottom">
            You can also find me here:
          </p>
          <ul className="uk-list-disc uk-margin-remove-top">
            <li>
              {"Daily Junior Developer Advice on "}
              <a href="https://www.linkedin.com/in/andrewtclarkson/">
                My LinkedIn
              </a>
            </li>
            <li>
              {"Listen to the "}
              <a href="https://linktr.ee/loonieengineering">
                {"Loonie Engineering "}
              </a>
              podcast
            </li>
            <li>
              {"Join "}
              <a href="https://list-manage.us14.list-manage.com/subscribe?u=52487365461b8c86592dec0b2&id=5941a0fcc9">
                {"Andrew's Coffee Chats"}
              </a>
              {" (every other Thursday @7pm)"}
            </li>
            <li>
              {"Work with me to land the job quicker "}
              <a href="https://introwise.com/andrew-clarkson">
                Tech Job Seeker Coaching
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  )

  return (
    <div>
      {welcome}
      {/* displays on larger breakpoint only, 2 cols, resets order */}
      <div className="uk-child-width-1-2@s two-col" data-uk-grid="true">
        <div>
          {leftArticles.map((article, i) => {
            return (
              <Card
                article={article}
                key={`article__left__${article.attributes.slug}`}
              />
            )
          })}
        </div>
        <div>
          <div className="" data-uk-grid margin="0">
            {rightArticles.map((article, i) => {
              return (
                <Card
                  article={article}
                  key={`article__left__${article.attributes.slug}`}
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* displays on smaller breakpoint only, 1 col, resets order */}
      <div className="one-col">
        {articles.map((article, i) => {
          return <Card article={article} key={article.attributes.slug} />
        })}
      </div>
    </div>
  )
}

export default Articles
