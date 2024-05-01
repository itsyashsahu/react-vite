export type Character = {
    id:string,
    name: string,
    image: string,
    species: string,
    episode?: string[],
    status?:string,
    gender?:string,
    origin?:{
        name:string
    }
}