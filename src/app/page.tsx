"use client";
import React, { useEffect } from "react";
import axios from "axios";
// import { axiosInstance1 } from "./utils/axiosService.js";

const RootPage = () => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/user");
      console.log(data);
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
