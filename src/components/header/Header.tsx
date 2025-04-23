import { Link } from "react-router-dom";
import UserProfile from "../userProfile/UserProfile";
import { useNavigate } from "react-router-dom";
type Props = {};

const Header = (props: Props) => {
const navigate =useNavigate();
  return (
    <div className="flex justify-between h-[7vh]  items-center">
      <div>
        <Link to="/">
          <h1 className="text-xl font-semibold">
            <span className="mx-2 border-2 p-1">TL</span>
            Todolist
          </h1>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-4">
        <UserProfile />
      </div>
    </div>
  );
};

export default Header;
