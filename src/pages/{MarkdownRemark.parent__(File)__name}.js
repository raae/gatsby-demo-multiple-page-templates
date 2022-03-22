import React from "react";
import {graphql, Link} from "gatsby";

const RemarkPage = ({data}) => {
  const post = data.markdownRemark;
  const {title, footer} = post.frontmatter;

  return (
    <main>
      <article>
        <header>
          <h1>{title}</h1>
          <p>
            An email by <Link to="/">Queen @raae</Link> 👑 on{" "}
            <time datetime="2015-05-15 19:00">December 31st, 2021</time>
          </p>
        </header>

        <section dangerouslySetInnerHTML={{__html: post.html}} />
        <footer>
          <p>Article footer</p>
        </footer>
      </article>
    </main>
  );
};

export default RemarkPage;

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
