import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import { Portfolio } from "../Components/Portfolio/Portfolio";
import { CV } from "../Components/CV/CV";
import { HeaderNav } from "../Components/layout/HeaderNav/HeaderNav";
import { Footer } from "../Components/layout/Footer/Footer";
import { Project } from "../Components/Project/Project";

export const MyRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        {/*   HEADER AND NAVIGATION */}
        <HeaderNav />
        {/*   MAIN CONTENT */}
        <section className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/CV" element={<CV />} />
            <Route path="/project/:id" element={<Project />} />

            <Route
              path="*"
              element={
                <div className="page">
                  <h2 className="heading">
                    Error 404. The content doesn't exist or couldn't be
                    displayed
                  </h2>
                </div>
              }
            ></Route>
          </Routes>
        </section>

        {/*   FOOTER  */}
        <Footer />
      </BrowserRouter>
    </div>
  );
};
