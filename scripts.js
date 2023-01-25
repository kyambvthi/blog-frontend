// TODO
function buidFeedComp() {
    const articleTimeline = document.createElement("div");
    return articleTimeline;
}

function buildArticleComp() {
    // build the markup for the article component.
    const article = document.createElement("div");
    article.setAttribute("class", "article");

    const articleMediaArea = document.createElement("div");
    articleMediaArea.setAttribute("class", "article__media-area");

    const articleContextArea = document.createElement("div");
    articleContextArea.setAttribute("class", "article__context-area");

    const articleActionArea = document.createElement("div");
    articleActionArea.setAttribute("class", "article__action-area");

    return article;
}
