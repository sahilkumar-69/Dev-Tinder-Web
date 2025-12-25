import Navbar from "../components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import { BASE_URL } from "../constants";
import { addUser } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Body = () => {
  const userProfile = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getProfile = async () => {
    console.log(userProfile);
    if (userProfile) return;
    try {
      const { data } = await axios.get(BASE_URL + "/auth/profile/view", {
        withCredentials: true,
      });

      dispatch(addUser(data.data));
    } catch (error) {
      if (error.status === 401) navigate("/login");
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(userProfile);
    getProfile();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
