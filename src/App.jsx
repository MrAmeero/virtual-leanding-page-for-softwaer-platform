import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Feartures from "./components/Feartures"
import WorkFlow from "./components/WorkFlow"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <Hero/>
    <Feartures/>
    <WorkFlow/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
    </div>
    </>
  )
}

export default App
