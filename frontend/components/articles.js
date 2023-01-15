import React from "react"
import Card from "./card"

const Articles = ({ articles }) => {
  articles.sort((a, b) => a.id - b.id).reverse()
  const leftArticlesCount = Math.ceil(articles.length / 5)
  const leftArticles = articles.slice(0, leftArticlesCount)
  const rightArticles = articles.slice(leftArticlesCount, articles.length)

  const welcome = (
    <div>
      <p className="uk-text-bold">
        Welcome! I will be using this space to repost my writing from LinkedIn
        in a more accessible and eventually searchable/filterable place. This
        will make advice easier to find, and I will also be expanding on certain
        projects (such as my #buildinpublic project starting January).
      </p>
      <p className="uk-text-bold">You can also find me here:</p>
      <p>
        Daily Junior Developer Advice on{" "}
        <a href="https://www.linkedin.com/in/andrewtclarkson/"> My LinkedIn</a>
      </p>
      <p>
        Listen to the{" "}
        <a href="https://linktr.ee/loonieengineering">Loonie Engineering</a>{" "}
        podcast
      </p>
      <p>
        Join{" "}
        <a href="https://list-manage.us14.list-manage.com/subscribe?u=52487365461b8c86592dec0b2&id=5941a0fcc9">
          {"Andrew's Coffee Chats"}
        </a>{" "}
        (every other Thursday @7pm)
      </p>
      <p>
        Work with me to land the job quicker{" "}
        <a href="https://introwise.com/andrew-clarkson">
          Tech Job Seeker Coaching
        </a>
      </p>
      <hr />
    </div>
  )

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {welcome}
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
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
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
    </div>
  )
}

export default Articles
