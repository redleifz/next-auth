"use client";
import React, { useEffect } from "react";
import axios from "axios";
// import { axiosInstance1 } from "./utils/axiosService.js";

const RootPage = () => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/user");
      // const { data } = await axiosInstance1.get("user"); // Use axiosInstance1 to make a GET request to the 'user' endpoint
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>RootPage</div>;
};

export default RootPage;
