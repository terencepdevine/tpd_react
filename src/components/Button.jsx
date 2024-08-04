import { Link } from "react-router-dom";

export default function Button({ children, to }) {
  return (
    <Link
      to={to}
      className="flex gap-2 lg:gap-4 items-center bg-rose-500 shadow-md text-shadow-shine text-gray-900 font-bold text-lg px-4 py-3 lg:text-3xl lg:px-8 lg:py-4 rounded-lg transition-colors hover:bg-rose-400"
    >
      {children}
    </Link>
  );
}
