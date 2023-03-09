import React from 'react'
import PortfolioPage from "./PortfolioPage.js";
import portfolio from "../portfolio.json";


function PortfolioDisplay() {
// Creating an array with the portfolio.json file
    const portfolioArray = [];
for (let i=0; i < portfolio.length; i++) {
    portfolioArray.push(<PortfolioPage
    image={portfolio[i].image}
    title={portfolio[i].title}
    description={portfolio[i].description}
    URL={portfolio[i].URL}
  />)
}
    
    
    return (
        <div>
         {portfolioArray}   
        </div>
    )
}

export default PortfolioDisplay