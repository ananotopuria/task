import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

function Header() {
  return (
    <>
      <div className="flex flex-row justify-between text-white">
        <img src={logo} alt="" />
        <div>
          <nav>
            <ul className="flex flex-row gap-4">
              <li>Blog</li>
              <li>About</li>
              <li>contact</li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row gap-2">
          <CiSearch />
          <CiUser />
        </div>
      </div>
      <hr className="mt-2" />
      <nav>
        <ul className="flex flex-row justify-around text-white mt-4">
          <li>
            <button className="text-white bg-[#145E2A] px-8 py-2">
              Latest Blog
            </button>
          </li>
          <li>Urban Planning</li>
          <li>Graphics Design</li>
          <li>Web Design</li>
          <li>UX/UI Design</li>
          <li>Technology</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
