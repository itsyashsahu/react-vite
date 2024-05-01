import Config from "@/config";
import { AxiosPaginatedResponse, AxiosResponse } from "@/types/AxiosResponse";
import { Character } from "@/types/Character";
import axios from "axios";
import { InfinitePageData } from "./queries";

const BASE_URL = Config.BASEURL
const axiosInstance = axios.create({ baseURL: BASE_URL });

// export const getCharacters = async () => {
//     return (await axiosInstance.get<AxiosPaginatedResponse<Character[]>>(`characters`)).data;
// };
export const getCharacters = async (page:number, pageSize:number) => {
   return (await axiosInstance.get<AxiosPaginatedResponse<Character[]>>(`characters?page=${page}&pageSize=${pageSize}`)).data;
}

export const getInfiniteCharacters = async (infinitePageData:InfinitePageData) => {
    const {
        page = 1,
        pageSize = 10,
        type = "",
        species = "",
        gender = "",
        status = "",
        searchTerm = "",
    } = infinitePageData;
    const params = new URLSearchParams();
    if (page) params.append('page', page.toString());
    if (pageSize) params.append('pageSize', pageSize.toString());
    if (type) params.append('type', type);
    if (species) params.append('species', species);
    if (gender) params.append('gender', gender);
    if (status) params.append('status', status);
    if (searchTerm) params.append('name', searchTerm);
    const url = `characters?${params.toString()}`
    // const url = `characters?page=${page}&pageSize=${pageSize}&type=${type}&species=${species}&gender=${gender}&status=${status}&searchTerm=${searchTerm}`
    return (await axiosInstance.get<AxiosPaginatedResponse<Character[]>>(url)).data;
 }

export const getCharacter = async(id:number) =>{
    return (await axiosInstance.get<AxiosResponse<Character>>(`characters/${id}`)).data;
}