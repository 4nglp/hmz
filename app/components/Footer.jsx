import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white text-center py-4 mt-auto">
      <p>&copy; 2041 Hamizza Inc. All rights stolen.</p>
      <ul className="flex justify-center space-x-6 mt-2">
        <li>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/social-media" className="hover:underline">
            Social Media
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
