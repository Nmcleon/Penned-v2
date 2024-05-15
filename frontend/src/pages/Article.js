import React from 'react';
import Placard from '../components/Placard/Placard';
import Prompt from '../components/Prompt/Prompt';
import Footer from '../components/Footer/Footer';
import Card from '../components/CardSection/Card';
import './Article.css';
import Badge from '../components/Badge/Badge';

export default function Article() {
  return (
    <>
      <section className="article">
        <div className="article-header">
          <Placard />
          <div className="article-heading">
            <h2>Rivian stock plummets to a new low</h2>
          </div>
          <Badge />
        </div>
        <div className="article-img">
          <img src="/images/rivian.jpg" alt="Rivian Stock" />
        </div>
        <div className="main">
          <div className="article-details">
            <h2 className="subtopic">Reasons for the Plummet</h2>
            <p className="details">
              The recent decline in Rivian's stock price can be attributed to a
              variety of factors. One significant reason is the broader market
              volatility, particularly in the tech and automotive sectors.
              Additionally, concerns about supply chain disruptions and
              production delays have weighed heavily on investor sentiment.
            </p>
          </div>

          <div className="article-details">
            <h2 className="subtopic">Impact on Investors</h2>
            <p className="details">
              The sharp decline in Rivian's stock price has had a significant
              impact on investors. Many shareholders have experienced losses as
              the stock continues to plummet. Some long-term investors remain
              optimistic about Rivian's prospects and see this downturn as a
              buying opportunity, while others are concerned about the company's
              ability to navigate current challenges.
            </p>
          </div>
        </div>

        <div className="suggestion">
          <h2 className="subtopic">Next Read</h2>
          <Card />
        </div>
      </section>
      <Prompt />
      <Footer />
    </>
  );
}
