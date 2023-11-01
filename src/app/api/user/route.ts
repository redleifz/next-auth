//make post api call to login
import axiosService from "@/app/utils/axiosService";
import { NextResponse } from "next/server";


export async function GET() {

    try {
        const { data } = await axiosService(`user/`)
        return NextResponse.json(data, { status: 200 })
    } catch (error) {
        return NextResponse.json(error.response.data, {status: error.response.status})
    }
}