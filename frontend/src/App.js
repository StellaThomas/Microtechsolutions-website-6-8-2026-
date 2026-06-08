// import Home from "./pages/Home";

// function App() {
//   return <Home />;
// }

// export default App;
























import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import OurProjects from "./components/OurProjects";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT PAGE */}
        <Route
          path="/about"
          element={<AboutPage />}
        />

        {/* CONTACT PAGE */}
        <Route
          path="/contact"
          element={<ContactPage />}
        />

        {/* PROJECTS PAGE */}
        <Route
          path="/projects"
          element={<OurProjects />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;