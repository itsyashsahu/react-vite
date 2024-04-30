import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getCharacter, getCharacters } from "./api";
import { CharacterData } from "@/App";
import { queryClient } from "@/main";
import { Character } from "@/types/Character";
import { AxiosPaginatedResponse, AxiosResponse } from "@/types/AxiosResponse";

export function useCharacters(data:CharacterData) {
    return useInfiniteQuery({
        queryKey: ["characters"],
        queryFn: ({pageParam})=> getCharacters(pageParam,data.pageSize),
        initialPageParam: 1,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        getNextPageParam: (lastPage, _, __) => {
            if(lastPage.data.info.currentPage >= lastPage.data.info.totalPages){
                return undefined
            }
            return lastPage.data.info.currentPage + 1;
        },
        getPreviousPageParam: (_, __, firstPageParam) => {
            if (firstPageParam <= 1) {
                return undefined;
            }
            return firstPageParam - 1;
        },
    });
}

export function useCharacter(id:number|null){
    return useQuery({
        queryKey: ["character",id],
        queryFn: ()=> getCharacter(id!),
        enabled: !!id,
        placeholderData: () => {
            const cachedProducts = (
                queryClient.getQueryData(["products"]) as {
                    pages: AxiosPaginatedResponse<Character[]> | undefined;
                }
            )?.pages?.data?.results.flat(2)
    
            if (cachedProducts) {
                const productData = cachedProducts.find((page)=>{
                    Number(page.id) == id
                });
                const response :AxiosResponse<Character> = {
                    success:true,
                    data:productData!,
                    message: "Data fetched successfully"
                }
                return response
            }
        },
    })
}