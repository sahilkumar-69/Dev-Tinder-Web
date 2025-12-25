import { useDispatch, useSelector } from "react-redux";
import requestHandler from "../utils/requestHandler";
import axios from "axios";
import { BASE_URL } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../store/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    try {
      await axios.get(BASE_URL + "/auth/logout", {
        withCredentials: true,
      });

      dispatch(removeUser());

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(user);
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          Dev Tinder
        </Link>
      </div>
      <div className="flex gap-2">
        {user && (
          <div className="flex items-center gap-2">
            <p>Welcome, {user.firstName}</p>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="user image" src={user.photoUrl} />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <Link onClick={handleLogOut}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
