import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import ARTICLE_QUERY from "../../queries/article/article";

const Article = () => {
    let { id } = useParams();
    return (
        <Query query={ARTICLE_QUERY} id={id}>
            {({ data: { article } }) => {
                const imageUrl = process.env.REACT_APP_BACKEND_URL + article.image[0].url;

                return (
                    <div>
                        <div
                            id="banner"
                            className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                            data-src={imageUrl}
                            data-srcset={imageUrl}
                            data-uk-img
                        >
                            <h1>{article.title}</h1>
                        </div>

                        <div className="uk-section">
                            <div className="uk-container uk-container-small">
                                <p>
                                    <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                                </p>
                                <ReactMarkdown source={article.content} />
                            </div>
                        </div>
                    </div>
                );
            }}
        </Query>
    );
};

export default Article;
