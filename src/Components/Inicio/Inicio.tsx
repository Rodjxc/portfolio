import './Inicio.css' 
import { Link } from 'react-router-dom'


export const Inicio = () => {
  return (
        
    <div className='home'><h1>Front End React Developer | UI / UX Design 
      <br/>Brewer turned developer</h1>
      <h2>Hi!</h2>
      <h1>
      This is <strong>Rod</strong> and I'm a <strong>Web Developer</strong> based in Oslo, Norway. 
      </h1>
      <h4>I love building beautiful and functional web applications and letting my creativity shine through code. I'm a natural problem-solver and self-learner.<br/>
       I'm also a passionate and professional digital content creator with extensive experience in video creation, photo and video editing and live streaming.
       </h4>
       <h4> I have started my own YouTube (35k+) and Twitch channel (10k+) from 0 and have built a solid follower base and engaged community and do live streams when the
         time allows it. This has allowed me to expand my skills in other fields like SEO copywriting, picture editing and public speaking amongst other things. <br/>
        <br/>
        <br/>
        <Link to='/Contact'>Contact me!</Link>
        <br/>

         <br/>
         </h4>
         <p>Outside of my professional pursuits, I enjoy...<br/>
     🎶 Playing music<br/>
     🍺 Craft beer<br/>
     🥋 Brazilian Jiu-Jitsu<br/>
     🎮 Video games<br/>
  </p>

  <section className='last-works'>
    <h2 className='heading'>Some of my projects</h2>
    <p>This are some of my jobs</p>
    <div className='works'></div>
  </section>
      
      </div>
  )
  
}
