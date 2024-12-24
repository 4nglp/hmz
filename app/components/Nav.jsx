import Image from "next/image";
import Link from "next/link";
import pfp from "../docs/home.png";

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <Link href="/home">
          <Image src={pfp} alt="Home" width={50} height={50} />
        </Link>
        <ul>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <Image src={pfp} alt="User Profile Picture" width={50} height={50} />
      </div>
    </nav>
  );
};

export default Nav;
