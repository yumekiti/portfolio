import { Route, Routes } from "react-router-dom";

import Home from "@/components/pages/Home";
import NotFound from "@/components/pages/NotFound";
import Writing from "@/components/pages/Writing";
import Stack from "@/components/pages/Stack";
import Timeline from "@/components/pages/Timeline";
import Portfolio from "@/components/pages/Portfolio";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/stack" element={<Stack />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
