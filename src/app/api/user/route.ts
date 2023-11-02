import { NextResponse } from "next/server";
import axios from "axios";
import axiosService from "@/app/utils/axiosService";
// import { BACKEND_URL } from "../config";

export async function GET() {

    const BACKEND_URL = 'http://localhost:8000/'

    try {
        const {data} = await axiosService.get(`user/`)
        // const { data } = await axios.get(
        //     `${BACKEND_URL}api/user`
        //     , {
        //         headers: {},
        //     });
        return NextResponse.json(data, { status: 200 })
    }
    catch (error) {
        return NextResponse.json(error.response.data, { status: error.response.status })
    }
}