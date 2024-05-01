import Header from "@/components/Header";
import { SelectDemo } from "@/components/Select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAllSearchParams } from "@/lib/utils";
import { InfinitePageData, useInfiniteCharacters } from "@/services/queries";
import {  useState } from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [search, setSearchParams] = useSearchParams();
  const searchTerm = search.get("s");
  const [species,setSpecies] = useState("")
  const [type,setType] = useState("")
  
  const statusOptions = [
    {
        value:"alive",
        label:"Alive"
    },
    {
        value:"dead",
        label:"Dead"
    },
    {
        value:"unknown",
        label:"Unknown"
    },
  ]
  const handleStatusChange=(newValue:string)=>{
    setSearchParams({
        ...getAllSearchParams(search),
        status:newValue
    })
  }
  const genderOptions = [
    {
        value:"male",
        label:"Male"
    },
    {
        value:"female",
        label:"Female"
    },
    {
        value:"genderless",
        label:"Genderless"
    },
    {
        value:"unknown",
        label:"Unknown"
    },
  ]
  const handleGenderChange=(newValue:string)=>{
    setSearchParams({
        ...getAllSearchParams(search),
        gender:newValue
    })
  }

  const infinitePageData:InfinitePageData = {
    type,
    species,
    searchTerm: search.get("s")!,
    status: search?.get("status") || "",
    gender: search?.get("gender") || "",
    page:1,
    pageSize:10
}

  const infiniteQuery = useInfiniteCharacters(infinitePageData)
  console.log("🚀 ~ Search ~ infiniteQuery:", infiniteQuery)

//   useEffect(()=>{

//   },[type,species,search])

  return (
    <>
      <Header />
      <section id="gallery" className="flex flex-col w-full px-12">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <div className="flex justify-between w-full gap-2 py-4 mx-auto text-left no-underline text-muted-foreground md:py-4 md:pb-4 lg:py-6">
              <h3 className="text-xl font-bold no-underline leading-tight tracking-tighter md:text-3xl lg:leading-[1.1] md:block">
                Search Results for : {searchTerm}
              </h3>
              <Button asChild variant="outline">
                <AccordionTrigger></AccordionTrigger>
              </Button>
            </div>
            <AccordionContent>
              <div className="grid w-1/2 grid-cols-1 gap-4 py-4 md:grid-cols-2">
                <div className="flex items-center flex-row text-xl mb-4 font-bold no-underline text-muted-foreground leading-tight tracking-tighter md:text-2xl lg:leading-[1.1]">
                  <div className="flex items-center h-full mr-4">Status :</div>
                </div>
                  <SelectDemo name="Status" options={statusOptions} handleChange={handleStatusChange} />
                <div className="flex items-center flex-row text-xl mb-4 font-bold no-underline text-muted-foreground leading-tight tracking-tighter md:text-2xl lg:leading-[1.1]">
                  <div className="flex items-center h-full mr-4">Gender :</div>
                </div>
                  <SelectDemo name="Gender" options={genderOptions} handleChange={handleGenderChange} />
                <div className="flex items-center flex-row text-xl mb-4 font-bold no-underline text-muted-foreground leading-tight tracking-tighter md:text-2xl lg:leading-[1.1]">
                  <div className="flex items-center h-full mr-4">Species :</div>
                </div>
                  <Input value={species} onChange={(e)=>{setSpecies(e.target.value)}} className="w-[180px] text-muted-foreground font-bold" />
                  <div className="flex items-center flex-row text-xl mb-4 font-bold no-underline text-muted-foreground leading-tight tracking-tighter md:text-2xl lg:leading-[1.1]">
                  <div className="flex items-center h-full mr-4">Type :</div>
                </div>
                <Input value={type} onChange={(e)=>{setType(e.target.value)}} className="w-[180px] text-muted-foreground font-bold" />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="grid place-items-center">
          <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2">
            {/* {
                infiniteQuery?.data?.pages.
            } */}
            {/* {characters?.map((ch, index) => {
              return (
                <Fragment key={index}>
                  <CharacterCard
                    id={ch.id}
                    url={ch.image}
                    name={ch.name}
                    species={ch.species}
                  />
                </Fragment>
              );
            })} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
