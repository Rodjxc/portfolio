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
    <div>
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
              <a
                  className="link"
                  href="https://www.udemy.com/certificate/UC-bd7b711f-a31c-4886-82a3-a9ee376804e2/"
                >
                  Udemy | Complete Web Design: From Figma to Webflow to Freelancing
                  
                </a>
                </li>

              
              <li>IBD Certified Beer Sommelier</li>
              <li>
                UIB - University of Balearic Island (Spain) - Degree in Tourism
                and Leisure Studies
              </li>
            </ul>
          </div>
          <article>
          <div className="work-experience hidden">
            <h2>Work Experience</h2>
            <div className="web-dev">
              <h4>Web Developer | Freelance (Nov. 2022 - Present) | 📍 Oslo</h4>
             <p>During the time of my studies I've been able to partake in all the projects and 
              works shown in my portfolio and it's been an assurance that development has been the 
              right career path for me. Beyond coding, I brought concepts to life an coded websites 
              with React, Vite and NodeJS or Webflow from Figma designs. It's not just about writing 
              code; it's a creative journey, much like brewing beer—from an idea to a tangible product
               and a user experience. And not only is it a fulfilling job but also I have fun alongside 
               it. </p>
               </div>
             <div className="macondo"> 
              <h4>Macondo AS | Key Account Manager (Jan. 2022 - March 2023) | 📍 Oslo </h4>
             <p>My role here was quite varied - not just helping with beer production of Schouskjelleren 
              Bryggeri but also connecting with some of the managers of the best bars in Oslo. I listened to 
              what they craved and sourced unique beers from around the globe. Some of those selections even
              made their way to Vinmonopolet! This role wasn't just about beer, but also selling and negotiating 
              prices with managers, curating customer relationships and keeping up and understanding the trends
               and needs of the market. This relations led me to close and friendly relationships with bar owners
               leading to an increase in sales for the company and good reputation as a supplier. I also designed
                the logo and website of the company.</p>
             </div>
            <div className="content-creator">
              <h4> Content Creator for Youtube & Twitch (July 2019 - Present)</h4>
              <p>I started my Content Creation journey in 2019 by starting a YouTube channel where I made game 
                guides for various video games, which laid part of the groundwork for my transition into the 
                development world. Beyond technical skills, this experience taught me valuable skills like discipline, 
                commitment, keeping up to date with technology. Also other valuable skills like web SEO and 
                picture/video editing to enhance the channel's quality, with allowed me to have a good eye for 
                good UX / UI design and accessibility which have proven of great use in my developer career. All 
                of this have resulted in a growing channel that recently passed the 40k mark.</p>
            </div>
            <div className="various">
             <h4>Various roles within brewing and hospitality (July 2012 - 2019) | 📍 Oslo - London (UK)</h4>
             <p>A year after I finished my university I decided to move out of my comfort zone and I moved to London,
               UK, where I worked for several years. I worked in hospitality both as a bartender and as a manager 
               (I even helped opening and organizing Gipsy Hill's Brewery's Taproom in the heart of London), lead
                teams of 10+ people in a very fast-paced and stressful enviroment as working in the center of a 
                big city with people of all sorts. Thanks to my network and contacts I got a job for Amundsen 
                Bryggeri in Oslo, which led me to move to Norway and start anew, and since I'm always willing to
                learn I embraced the change and new opportunities to grow.</p>
                </div>

            </div>
        </article>

        
        </article>
        <article>
          <div className="working-tools hidden">
            <h2>
              Working Tools
            </h2>
            <ul>
              <li>HTML5, CSS3 </li>
              <li>Javascript with Typescript</li>
              <li>Tailwind & Bootstrap</li>
              <li>React JS with Vite</li>
              <li>Adobe Illustrator and Adobe Photoshop</li>
              <li>Figma</li>
              <li>Building websites with Webflow</li>
              <li>Spotify</li>
              <li>and Google :)</li>
            </ul>
          </div>
        </article>
        <article>
          <div className="other-languages hidden">
            <h2>
              Other Languages
            </h2>
            <ul>
              <li>English | Proficient (Non-Native Speaker)</li>
              <li>Spanish | Native</li>
              <li>Catalan | Native</li>
              <li>French | Limited Working Proficiency</li>
              <li>Norwegian | Elementary Proficiency</li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
};
