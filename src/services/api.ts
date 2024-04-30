import Config from "@/config";
import { AxiosPaginatedResponse, AxiosResponse } from "@/types/AxiosResponse";
import { Character } from "@/types/Character";
import axios from "axios";

const BASE_URL = Config.BASEURL
const axiosInstance = axios.create({ baseURL: BASE_URL });

// export const getCharacters = async () => {
//     return (await axiosInstance.get<AxiosPaginatedResponse<Character[]>>(`characters`)).data;
// };
export const getCharacters = async (page:number, pageSize:number) => {
   return (await axiosInstance.get<AxiosPaginatedResponse<Character[]>>(`characters?page=${page}&pageSize=${pageSize}`)).data;
}

export const getCharacter = async(id:number) =>{
    return (await axiosInstance.get<AxiosResponse<Character>>(`characters/${id}`)).data;
}