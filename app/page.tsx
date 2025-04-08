import { Me } from "./component/Me";
import { Contect } from "./component/Contect";
import { Project } from "./component/Project";
import  Experience  from "./component/Experiance";
import { Aboutme } from "./component/Aboutme";


export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <Me/>
      <Aboutme/>
      <Experience/>
      <Project/>
      <Contect/>
      {/* <Footer/> */}
    </div>
  );
}
