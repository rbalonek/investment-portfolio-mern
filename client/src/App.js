import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import InvestmentCard from "./components/InvestmentCard/InvestmentCard.jsx";

import { getInvestments } from "./services/investments";

function App() {
  const [allInvestments, setAllInvestments] = useState([]);

  useEffect(() => {
    const fetchInvestments = async () => {
      const investments = await getInvestments();
      setAllInvestments(investments);
    };
    fetchInvestments();
  }, []);

  console.log("investments", allInvestments);

  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <div className="login-news-split">
          <div className="login-area">
            <p>Login Section</p>
          </div>
          <div className="news-area">
            <p>News Area</p>
          </div>
        </div>
        <div className="carousel-area">
          <h1>Investment Carousel</h1>
        </div>
      </div>
    </div>
  );
}

export default App;

// {allInvestments.map((investment) => (
//   <InvestmentCard investment={investment} />
// ))}
