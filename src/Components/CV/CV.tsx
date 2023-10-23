import "./cv.css";
import { useEffect } from "react";

export const CV = () => {
  useEffect(() => {
    // Intersection Observer setup. Runs the observer on load. It'll "observe" changes in the intersection of a target element
    // with a parent element or the viewport

    const observer = new IntersectionObserver((entries) => {
      // it goes over every "entry" in the entries array, Entries represent elements being observed. If the entry "intersects", it gives
      // it the class of show (making them visible through CSS). Since I want them dissapearing again when not displayed, I make an else
      // that will remove the class

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <div className="">
      <section className="cv">
        <article>
          <div className="education hidden">
            <h2>Education</h2>
            <ul>
              <li>
                <a className="link" href="">
                  Udemy | Master in React: React JS, Hooks, MERN, NodeJS, JWT
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://www.udemy.com/certificate/UC-a51f7d6a-becd-4034-abd3-18b7a31a0a69/"
                >
                  Udemy | The Complete 2023 Web Development Bootcamp
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://www.udemy.com/certificate/UC-f7fceaa7-e4fc-4062-8b6c-d18583280e75/"
                >
                  Udemy | Master in CSS: Responsive design, SASS, LESS, Flexbox,
                  Grid & Bootstrap
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://www.udemy.com/certificate/UC-f053ab6b-d229-4899-ac50-0b0e42756b66/"
                >
                  Udemy | Tailwind CSS - Zero to hero v3 2023
                </a>
              </li>
              <li>
                UIB - University of Balearic Island (Spain) - Degree in Tourism
                and Leisure Studies
              </li>
            </ul>
          </div>

          {/* <h2>Work Experience</h2>
          <ul>
            <li>Web Developer | Self employed (2022)</li>
            <li>Macondo AS | Key Account Manager (2022-2023) | Oslo </li>
            <li>Amundsen Bryggeri | Assistant Brewer (2019-2022) | Oslo </li>
            <li>
              Gipsy Hill Brewing Co. | Taproom Manager - Head of Beer
              (2018-2019) | London, UK{" "}
            </li>
          </ul> */}
        </article>
        <article>
          <div className="working-tools hidden">
            <h2>
              Working <br />
              Tools
            </h2>
            <ul>
              <li>HTML5, CSS3 </li>
              <li>Javascript with Typescript</li>
              <li>Tailwind & Bootstrap</li>
              <li>React JS with Vite</li>
              <li>Adobe Illustrator and Adobe Photoshop</li>
              <li>Figma & Webflow</li>
              <li>Spotify</li>
              <li>and Google :)</li>
            </ul>
          </div>
        </article>
        <article>
          <div className="other-languages hidden">
            <h2>
              Other
              <br />
              Languages
            </h2>
            <ul>
              <li>English | Proficient (Non-Native Speaker)</li>
              <li>Spanish | Native</li>
              <li>Catalan | Native</li>
              <li>French | Conversational Proficiency</li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
};
