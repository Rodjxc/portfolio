import "./App.css";
import { MyRoutes } from "./Router/MyRoutes";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { useEffect } from "react";

MouseFollower.registerGSAP(gsap);



function App() {

  useEffect(() => {
    const cursor = new MouseFollower();
  }, []);
  return (

    <div className="layout">
    <MyRoutes />
    <div className="cursor"></div>
    </div>
  );
}

export default App;
