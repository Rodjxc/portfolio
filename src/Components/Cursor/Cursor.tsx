import MouseFollower from 'mouse-follower';
import gsap from 'gsap';
import "./cursor.css"

MouseFollower.registerGSAP(gsap);

export const Cursor = () => {
     new MouseFollower({
      container: document.body,
      speed: 0.6,
      skewingText: 0.1,
    });

     

  return (
    <div className="cursor">
    </div>
  );
};
