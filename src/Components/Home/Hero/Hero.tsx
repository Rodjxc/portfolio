import "./Hero.css";

export const Hero = () => {
  return (
    <div>
      <section id="container-hero">
        <div className="text hidden">
          <div className="hero-text">
            <h2>Hey!</h2>
            <p>
              I'm a freelance designer & developer from Spain (but living in
              Oslo 📍) with a love for all things web. I'm currently working as
              a freelancer but looking to be part of a bigger team and
              contribute to wider projects with my skills and personality.
            </p>
          </div>

          <div className="rod-name">
            <h1>Rod Jimeno</h1>
          </div>
        </div>

        <div className="hero-img-section hidden" >
          <img
            src="/img/snd-back2.png"
            alt="profile pic for Rod"
            className="hero-img"
            data-cursor-text ="Yep, that's me!"
          />
        </div>
      </section>
    </div>
  );
};
