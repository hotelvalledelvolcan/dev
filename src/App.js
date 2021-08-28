import React, { Component } from 'react'
import { Root, Routes } from 'react-static'
import { Router } from "@reach/router"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Spinner from "./components/Preloader/Spinner";
import BackToTop from "./components/BackToTop/BackToTop";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";

class App extends Component {
  render() {
    return (
      <Root>
        <div style={{ overflow: "visible" }}>
          <Spinner />
          <header>
            <Header />
          </header>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Routes />
          </React.Suspense>
          <footer>
            <Footer />
          </footer>
          <BackToTop />
        </div>
      </Root>
    )
  }
}

export default App
