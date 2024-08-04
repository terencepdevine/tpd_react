import { Link } from "react-router-dom";

function Footer() {
  const links = [
    {
      title: "Vite",
      url: "https://vitejs.dev",
    },
    {
      title: "React",
      url: "https://react.dev",
    },
    {
      title: "Tailwind",
      url: "https://tailwindcss.com",
    },
    {
      title: "WordPress",
      url: "https://wordpress.org",
    },
  ];

  return (
    <footer className="px-16 py-16 flex flex-col gap-4 text-center lg:text-left lg:flex-row justify-between lg:text-xl text-gray-400">
      <span>Copyright &copy; Terence Devine {new Date().getFullYear()}</span>
      <span>
        Built with{" "}
        {links.map((link, key) => (
          <>
            <Link key={key} target="_blank" to={link.url}>
              {link.title}
            </Link>
            {key < links.length - 2 && ", "}
            {key === links.length - 2 && " and "}
          </>
        ))}
      </span>
    </footer>
  );
}

export default Footer;
