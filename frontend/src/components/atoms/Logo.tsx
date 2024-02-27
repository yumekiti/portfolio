import { Link } from "react-router-dom";

const Component = () => {
  return (
    <Link to="/">
      <p className="text-2xl bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent font-bold">
        My Portfolio
      </p>
    </Link>
  );
};

export default Component;