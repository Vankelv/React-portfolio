import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";
function Body() {
  const BodyRef = useRef();

  // const showBody = () => {

  //     navRef.current.classList.toggle("responsive_nav")
  // }
  return (
    <body>
      <section>
        <div class="container-md">container</div>
        <div class="container-md">container</div>
        <div class="container-md">container</div>
      </section>
    </body>
  );
}
export default Body;
