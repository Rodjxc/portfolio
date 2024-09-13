import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../Pages/layout/Home/Home";
import { Portfolio } from "../Pages/Portfolio/Portfolio";
import { Experience } from "../Pages/Experience/Experience";
import { Footer } from "../Pages/layout/Footer/Footer";
import { Project } from "../Pages/Project/Project";
import { Header } from "../Pages/layout/HeaderNav/Header";
import { AboutMe } from "../Pages/AboutMe/AboutMe";

export const MyRoutes = () => {
	return (
		<div>
			<BrowserRouter>
				{/*   HEADER AND NAVIGATION */}

				<Header />

				{/*   MAIN CONTENT */}
				<section className="pt-20">
					<Routes>
						<Route path="/" element={<Navigate to="/home" />} />
						<Route path="/home" element={<Home />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/experience" element={<Experience />} />
						<Route path="/project/:id" element={<Project />} />
						<Route path="/about-me" element={<AboutMe />} />

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
						/>
					</Routes>
				</section>

				{/*   FOOTER  */}
				<Footer />
			</BrowserRouter>
		</div>
	);
};
