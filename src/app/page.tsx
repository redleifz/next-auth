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
