import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const GetDrivers = async () =>{
    const res = await axios.get(`${API_URL}/formula-one/2024/drivers`)
    return res.data
}

export const GetDriverStandings = async ()=>{
    const res = await axios.get(`${API_URL}/formula-one/2024/driver-standings`)
    return res.data
}
export const GetConstructors = async ()=>{
    const res = await axios.get(`${API_URL}/formula-one/2024/constructors`)
    return res.data
}
export const GetConstructorStandings = async ()=>{
    const res = await axios.get(`${API_URL}/formula-one/2024/constructor-standings`)
    return res.data
}