export type AxiosResponse<T> = {
    success:boolean,
    data: T;
    message:string 
};

export type AxiosPaginatedResponse<T> = {
    success: boolean, 
    data: {
        info:{
            currentPage:number,
            totalRecords:number,
            totalPages:number
        },
        results: T
    }
}