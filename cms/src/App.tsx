import { Route, Routes } from "react-router-dom";

import Writing from "@/pages/Writing";
import Layout from "@/layouts/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Writing />} />
      </Routes>
    </Layout>
  )
}

export default App
