import React from 'react';
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: "What is the best car of year 2021",
    author: "Steven King",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis omnis tempore, at nemo vel voluptatem adipisci, id ullam maxime minus, sequi voluptatum commodi non inventore molestiae harum error exercitationem?"
  },
  {
    id: 2,
    title: "Psychology of beauty",
    author: "Marcel Palicki",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis omnis tempore, at nemo vel voluptatem adipisci, id ullam maxime minus, sequi voluptatum commodi non inventore molestiae harum error exercitationem?"
  },
  {
    id: 3,
    title: "When will we get back to the moon",
    author: "Elon Musk",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis omnis tempore, at nemo vel voluptatem adipisci, id ullam maxime minus, sequi voluptatum commodi non inventore molestiae harum error exercitationem?"
  }
]

const HomePage = () => {

  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ))

  return (
    <div className="home">{artList}</div>
  );
}

export default HomePage;