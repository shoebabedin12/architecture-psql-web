import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Career from "./pages/Career";
import Colleagues from "./pages/Colleagues";
import ColleaguesDetails from "./pages/ColleaguesDetails";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import People from "./pages/People";
import Practice from "./pages/Practice";
import Work from "./pages/Work";
import WorkDetails from "./pages/WorkDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="work" element={<Work />} />
            <Route path="/work-details/:id" element={<WorkDetails />} />
            <Route path="career" element={<Career />} />
            <Route path="people" element={<People />} />
            <Route path="practise" element={<Practice />} />
            <Route path="Colleagues" element={<Colleagues />} />
            <Route
              path="/collegues-details/:id"
              element={<ColleaguesDetails />}
            />
            <Route path="Contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
