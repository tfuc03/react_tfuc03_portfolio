import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects /> 
      <Contact /> 
    </main>
    <Toaster position="top-right"
              toastOptions={{
    // style mặc định
    style: {
      borderRadius: "12px",
      background: "#1f2937", // bg-gray-800
      color: "#f9fafb",      // text-gray-50
      padding: "12px 16px",
      fontSize: "14px",
      fontWeight: 500,
      boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
    },
    // style cho success
    success: {
      style: {
        background: "linear-gradient(to right, #22c55e, #16a34a)", // xanh lá gradient
        color: "#fff",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#22c55e",
      },
    },
    // style cho error
    error: {
      style: {
        background: "linear-gradient(to right, #ef4444, #b91c1c)", // đỏ gradient
        color: "#fff",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#ef4444",
      },
    },
  }}/>
    </>
  )
}

export default App
