import React from "react"
import Link from "next/link"
// import NextImage from "./image"
import Moment from "react-moment"

const Card = ({ article }) => {
  // debugger
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted min-height">
          <div className="uk-card-body">
            <p id="title" className="uk-text-large">
              {article.attributes.title}
            </p>
            <p className="uk-text-italic">
              {article.attributes.content.substring(0, 200)}...
              <span className="uk-text-bold">keep reading</span>
            </p>
            <>
              {"Originally posted on: "}
              {article.attributes.linkedinpostdate ? (
                <Moment format="MMMM Do, YYYY">
                  {article.attributes.linkedinpostdate}
                </Moment>
              ) : (
                <Moment format="MMMM Do, YYYY">
                  {article.attributes.published_at}
                </Moment>
              )}
            </>
            {/* <p id="category" className="uk-text-uppercase">
              {article.attributes.categories.data.map(
                (data) => data.attributes.name
              )}
            </p> */}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
