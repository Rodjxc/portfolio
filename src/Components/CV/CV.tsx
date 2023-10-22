import "./cv.css";

export const CV = () => {
  return (
    <div>
      <section className="cv">
        <article>
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
          <h2>Working Tools</h2>
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
        </article>
        <article>
          <h2>Other languages</h2>
          <ul>
            <li>English | Proficient (Non-Native Speaker)</li>
            <li>Spanish | Native</li>
            <li>Catalan | Native</li>
            <li>French | Conversational Proficiency</li>
          </ul>
        </article>
      </section>
    </div>
  );
};
