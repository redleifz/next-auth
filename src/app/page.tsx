"use client";
import React, { useEffect } from "react";
import useAxiosAuth from "./lib/hooks/useAxiosAuth";
import axios from "axios";
import { useSession } from "next-auth/react";
import axiosService from "./lib/axiosService";
// import { axiosInstance1 } from "./utils/axiosService.js";

const RootPage = () => {
  const axiosAuth = useAxiosAuth();
  const session = useSession();

  // console.log(session.data?.user.accessToken);

  const fetchData = async () => {
    try {
      const {data} = await axiosService.get(`user/`)
      // const {data} = await axiosAuth.get(`user/`)
      // console.log("Fetching data");
      // const { data } = await axiosService.get(`user/`);
      // const { data } = await axios.get("http://localhost:8000/api/user/", {
      //   headers: {
      //     "Authorization": `Bearer ${session.data?.user.accessToken}`
      //   }
      // });
      console.log("Data:", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>RootPage</div>;
};

export default RootPage;
