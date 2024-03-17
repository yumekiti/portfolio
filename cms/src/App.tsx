import { Route, Routes } from "react-router-dom";

import Layout from "@/layouts/Layout";

import Writing from "@/pages/Writing";
import Portfolio from "@/pages/Portfolio";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Writing />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Layout>
  )
}

export default App
