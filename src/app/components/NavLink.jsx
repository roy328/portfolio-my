import Link from "next/link";

const NavLink = ({ href, title, id }) => {
  const handleScroll = (e, id) => {
    console.log(id, e);
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link
      href={href}
      onClick={(e) => handleScroll(e, id)}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
