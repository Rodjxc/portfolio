import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from "../Components/Inicio/Inicio";
import { Portfolio } from "../Components/Portfolio/Portfolio";
import { Servicios } from "../Components/Servicios/Servicios";
import { CV } from "../Components/CV/CV";
import { Contact } from "../Components/Contact/Contact";
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
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/Inicio" element={<Inicio />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/servicios" element={<Servicios />}></Route>
            <Route path="/CV" element={<CV />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/project/:id" element={<Project />}></Route>

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
