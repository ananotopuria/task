import { AiFillInstagram } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <>
    
    <footer className="flex flex-row justify-center text-white gap-5 ">
      <AiFillInstagram />
      <CiLinkedin />
      <CiFacebook />
      <FaPinterestP />
    </footer>
    <div className="text-white text-start">© 2023 dailyblog. All rights reserved.</div>
    
    </>
  );
}

export default Footer;
