import React from 'react';

const Article = ({ title, author, text }) => {

  const styles = {
    marginBottom: 40
  }

  return (
    <article style={styles}>
      <h3 style={{ marinBottm: 3, textTransform: "uppercase" }}>{title}</h3>
      <span style={{ display: "block", marginBottom: 10, fontSize: 12 }}>{author}</span>
      <p style={{ fontSize: 15 }}>{text}</p>
    </article>
  );
}

export default Article;