import React, { useState } from "react";

const Dashboard = () => {
  const [hover, setHover] = useState("stock1");
  const [menuActive, setMenuActive] = useState(false);

  const changeImage = () => {
    return hover === "stock1"
      ? "/Images/Frame 1.png"
      : hover === "stock2"
      ? "/Images/Frame 2.png"
      : "/Images/Frame 3.png";
  };

  const getIcon = (stock) => {
    return hover === stock
      ? stock === "stock1"
        ? "/Images/icon1-1.png"
        : stock === "stock2"
        ? "/Images/icon2-2.png"
        : "/Images/icon3-3.png"
      : stock === "stock1"
      ? "/Images/icon1.png"
      : stock === "stock2"
      ? "/Images/icon2.png"
      : "/Images/icon3.png";
  };
  
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    
    <div className="section">
      <div className="navbar">
        <div className="logo">
          <img src="/Images/Logo.png" alt="Logo" />
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          {menuActive ? "✖" : "☰"}
        </div>

        <div
        
          className={`center-navbar ${menuActive ? "active" : "non-active"}`}
        >
          <ul>
            <li>
              <a href="/Market">Market</a>
            </li>
            <li>
              <a href="/">Stock Picks</a>
            </li>
            <li>
              <a href="/">News</a>
            </li>
            <li>
              <a href="/">StockVerse GPT</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>

          <div className="right-navbar">
            <a href="/">Login</a>
            <a href="/">Create Account</a>
          </div>
        </div>
        <div className="right-navbar">
            <a href="/">Login</a>
            <a href="/">Create Account</a>
          </div>
      </div>

      <div className="main-section">
        <div className="left-section">
          <h1>
            One Stop Shop <span className="everythin">Everything</span>
            <span className="stockss"> Stocks</span>
          </h1>
          <p>
            Access real-time stock data, AI-driven analysis, and powerful tools
            to simplify your trading—everything you need, all in one platform.
          </p>
          <a href="\">Get started for free</a>
        </div>
        <div className="right-section">
          <img src="/Images/Fram.png" alt="" />
        </div>
      </div>

      {/* Stock Hover Section */}
      <div className="whystock">
        <div className="why-left">
          <h1>
            Why <span className="stock"> Stockverse? </span>
          </h1>
          <br />
          <br />

          {/* Stock1 Hover Effect */}
          <div
            className={`stock ${
              hover === "stock1" ? "active-border" : "inactive-border"
            }`}
            onMouseEnter={() => setHover("stock1")}
          >
            <div className="stock1">
              <div className="image">
                <img src={getIcon("stock1")} alt="Stock Icon 1" />
              </div>
              <div className="para">
                <h2>All-in-One Stock Research Platform</h2>
                <p>
                  Get real-time market data, AI-driven insights, and deep
                  analysis—all in one easy-to-use platform.
                </p>
              </div>
            </div>
          </div>

          {/* Stock2 Hover Effect */}
          <div
            className={`stock ${
              hover === "stock2" ? "active-border" : "inactive-border"
            }`}
            onMouseEnter={() => setHover("stock2")}
          >
            <div className="stock1">
              <div className="image">
                <img src={getIcon("stock2")} alt="Stock Icon 2" />
              </div>
              <div className="para">
                <h2>Insights Tailored to You</h2>
                <p>
                  Access personalized stock analysis and research based on your
                  preferences to stay ahead of the market.
                </p>
              </div>
            </div>
          </div>

          {/* Stock3 Hover Effect */}
          <div
            className={`stock ${
              hover === "stock3" ? "active-border" : "inactive-border"
            }`}
            onMouseEnter={() => setHover("stock3")}
          >
            <div className="stock1">
              <div className="image">
                <img src={getIcon("stock3")} alt="Stock Icon 3" />
              </div>
              <div className="para">
                <h2>Secure and Reliable</h2>
                <p>
                  Enjoy peace of mind with industry-leading security measures
                  and dependable performance for your trading needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="why-right">
          <img src={changeImage()} alt="Why Stockverse Image" />
        </div>
      </div>
      <div className="main-section2">
        <div className="heading-para">
          <div className="heading">
            <h1>
              Our Dedication to Simplifying
              <span className="stockss"> Stock </span>
              <span className="research"> Research </span>
              for Everyone
            </h1>
          </div>
          <div className="para1">
            <p>
              Stockverse was built on the vision that every investor, regardless
              of experience, should have access to reliable and simplified
              market insights. We know the stock market can be complex, so we’re
              here to decode it, providing you with real-time data, expert
              analysis, and intuitive tools to support confident
              decision-making.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="box-text">
            <img src="/Images/share icon.png" alt="" />
            <h3>Realtime Market Data</h3>
            <p>
              Stay connected to the market instantly. Stockverse delivers
              real-time data, helping you act quickly and make precise
              decisions.
            </p>
          </div>
          <div className="box-text">
            <img src="/Images/share icon.png" alt="" />
            <h3>AI-Powered Stock Insights</h3>
            <p>
              Leverage AI-driven analysis to spot trends, detect patterns, and
              develop a deeper market understanding for smarter trading.
            </p>
          </div>
          <div className="box-text">
            <img src="/Images/share icon.png" alt="" />
            <h3>Pro-Level Charting & Analysis</h3>
            <p>
              Access advanced charts, technical indicators, and in-depth
              analytics to refine your strategy and optimize market performance.
            </p>
          </div>
          <div className="box-text">
            <img src="/Images/share icon.png" alt="" />
            <h3>Personalized Watchlists</h3>
            <p>
              Track and organize stocks effortlessly. Stay focused on key stocks
              with a tailored watchlist built specifically for traders
            </p>
          </div>
        </div>
        <div className="links">
          <img src="/Images/Fictional company logo.png" alt="" />
          <img src="/Images/Fictional company logo 2.png" alt="" />
          <img src="/Images/Fictional company logo 3.png" alt="" />
          <img src="/Images/Fictional company logo 4.png" alt="" />
          <img src="/Images/Fictional company logo 5.png" alt="" />
        </div>
      </div>
      <div className="main-section3">
        <div className="tool-section">
          <h1>Tools and Resources Designed To Enhance Your Investments</h1>
          <p>
            rom real-time stock data to tailored financial tools, Stockverse
            provides an array of services to help you maximize your portfolio.
          </p>
        </div>
        <div
          className="stocks"
          style={{
            backgroundImage: "url('/Images/background image.webp')",
            backgroundSize: "72%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right -3px",
          }}
        >
          <div className="stockgpt">
            <h1>StockVerse GPT</h1>
            <p>
              Stockverse GPT is the ChatGPT for stocks—delivering real-time
              data, technical analysis, and market predictions instantly to help
              you trade smarter.
            </p>
          </div>
          <div className="frame4">
            <img src="/Images/Frame 4.png" alt="" />
          </div>
        </div>
      </div>
      <div className="search-section">
        <div className="left-search">
          <h1>Search your stocks</h1>
          <p>
            Your AI-powered investment assistant, ready to answer your
            questions, and guide you through the market with ease.
          </p>
          <img src="/Images/stock search image.webp" alt="" />
        </div>
        <div className="right-search">
          <h1>Track Market Leaders Instantly</h1>
          <p>
            Get real-time stock data on top movers. Instantly track key stats,
            trends, and price action to make smarter trades.
          </p>
          <img src="/Images/stock search image 2.webp" alt="" />
        </div>
      </div>
      <div className="level-section">
        <div className="level-left">
          <h1>Level 2 Data</h1>
          <p>
            Dive deeper with detailed market activity, including bid and ask
            prices, so you can see the true dynamics of stock movement.
          </p>
          <img src="/Images/links.webp" alt="" />
        </div>
        <div className="level-right">
          <img src="/Images/stock search image 3.webp" alt="" />
        </div>
      </div>
      <div className="main-section4">
        <div className="everything">
          <div className="left-everything">
            <h1>
              Everything You Need To Know{" "}
              <span className="stockss"> About </span>
              <span className="research"> Stockverse </span>
            </h1>
          </div>
          <div className="right-everything">
            <p>
              ind quick answers to frequently asked questions about Stockverse’s
              tools, subscription options, and resources
            </p>
          </div>
        </div>
        <div className="question">
          <div className="answer">
            <h3>What is Stockverse?</h3>
            <img src="/Images/cross.webp" alt="" />
          </div>
          <div className="answer">
            <h3>How does Stockverse GPT work?</h3>
            <img src="/Images/cross.webp" alt="" />
          </div>
          <div className="answer">
            <h3>Is Stockverse suitable for beginners?</h3>
            <img src="/Images/cross.webp" alt="" />
          </div>
          <div className="answer">
            <h3>What is Level 2 Data, and why is it important?</h3>
            <img src="/Images/cross.webp" alt="" />
          </div>
          <div className="answer">
            <h3>How often is stock data updated on Stockverse?</h3>
            <img src="/Images/cross.webp" alt="" />
          </div>
          <div className="answer">
            <h3>Can I set custom alerts on Stockverse?</h3>
            <img src="/Images/cross.webp" alt="" />
          </div>
          <div className="answer">
            <h3>Is my data secure on Stockverse?</h3>
            <img src="/Images/cross.webp" alt="" />
          </div>
        </div>
        <div className="have">
          <div className="question2">
            <p>Have any more Questions?</p>
          </div>
          <div className="button">
            <a href="/">Let us know</a>
          </div>
        </div>
      </div>
      <div className="trading">
        <div className="trading-top">
          <h1>
            Revolutionize Your Stock
            <span className="research"> Trading </span>
            <span className="jonrney">Journey</span>
          </h1>
          <p>
            Join a platform trusted by investors looking to elevate their
            journey in the stock market.
          </p>
          <img src="/Images/stock search image 4.webp" alt="" />
          <a href="/">Get started for free</a>
        </div>
      </div>
      <div className="bottom-navbar-section">
        <div className="left-bottom">
          <div className="logo2">
            <img src="/Images/Logo.png" alt="" />
          </div>
          <p>
            Your trusted platform for live Stock Data, Stock News, IPO Calendar,
            AI-driven insights, Stockpicks, Alerts and personalized analysis and
            tools.{" "}
          </p>
          <div className="link">
            <img src="/Images/facebook.webp" alt="" />
            <img src="/Images/istagram.webp" alt="" />
            <img src="/Images/tiwter.webp" alt="" />
            <img src="/Images/tiktok.webp" alt="" />
          </div>
        </div>
        <div className="right-bottom">
          <div className="quick-links">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/">StockVerse GPT</a>
            <a href="/">Stock Picks</a>
          </div>
          <div className="quick-links">
            <h3>Market</h3>
            <a href="/">Gainers / Losers</a>
            <a href="/">News</a>
            <a href="/">IPO Calendar</a>
          </div>
          <div className="quick-links">
            <h3>Contact</h3>
            <a href="/">Email Us</a>
            <a href="/">Send us Feedback</a>
          </div>
        </div>
      </div>
      <div className="big-image">
        <img src="/Images/big image.webp" alt="" />
      </div>
      <div className="bottom-navbar">
        <div className="left">
          <h5>© 2024 Stockverse, All right reserved.</h5>
        </div>
        <div className="right">
          <a href="Disclaimer">Disclaimer</a>
          <a href="">. Terms of Service</a>
          <a href="">. Privacy Policy</a>
          <a href="">. Refund Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
