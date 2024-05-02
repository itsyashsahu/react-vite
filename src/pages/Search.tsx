import CharacterCard from "@/components/CharacterCard";
import Header from "@/components/Header";
import LoadingCard from "@/components/LoadingCard";
import NotFoundCard from "@/components/NotFoundCard";
import { SelectDemo } from "@/components/Select";
import { CustomInput } from "@/components/ui/CustomInput";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Config from "@/config";
import { getAllSearchParams } from "@/lib/utils";
import { InfinitePageData, useInfiniteCharacters } from "@/services/queries";
import { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [search, setSearchParams] = useSearchParams();
  const searchTermParam = search.get("s");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [searchTerm, setSearchTerm] = useState(searchTermParam || "");

  const statusOptions = [
    {
      value: "alive",
      label: "Alive",
    },
    {
      value: "dead",
      label: "Dead",
    },
    {
      value: "unknown",
      label: "Unknown",
    },
  ];
  const handleStatusChange = (newValue: string) => {
    setSearchParams({
      ...getAllSearchParams(search),
      status: newValue,
    });
  };
  const genderOptions = [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
    {
      value: "genderless",
      label: "Genderless",
    },
    {
      value: "unknown",
      label: "Unknown",
    },
  ];
  const handleGenderChange = (newValue: string) => {
    setSearchParams({
      ...getAllSearchParams(search),
      gender: newValue,
    });
  };

  const infinitePageData: InfinitePageData = {
    type,
    species,
    searchTerm: searchTerm,
    status: search?.get("status") || "",
    gender: search?.get("gender") || "",
    page: 1,
    pageSize: 10,
  };

  const infiniteQuery = useInfiniteCharacters(infinitePageData);

  return (
    <>
    <Helmet>
          <title>Cartoonify | Search</title>
          <link rel="canonical" href={`${Config.FRONTEND_URL}/search`} />
      </Helmet>
      <Header />
      <section id="gallery" className="flex flex-col w-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <div className="flex justify-between py-4 mx-auto text-left no-underline max-w-screen text-muted-foreground md:py-4 md:pb-4 lg:py-6">
              <div className="flex items-center flex-col sm:flex-row px-4 text-xl mb-4 font-bold no-underline text-muted-foreground leading-tight tracking-tighter md:text-2xl lg:leading-[1.1]">
                <div className="flex items-center w-full h-full sm:mr-4">
                  Search Results for :
                </div>
                <div className="tracking-widest">
                  <CustomInput
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setSearchParams({ s: e.target.value });
                    }}
                    className="w-[300px] px-0 mt-4 sm:mt-0 bg-transparent text-white font-bold tracking-wider border-none   hover:border-white"
                  />
                </div>
              </div>
              <div className="">
                <Button
                  asChild
                  variant="outline"
                  className="relative grid place-items-center"
                >
                  <AccordionTrigger />
                </Button>
              </div>
            </div>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-4 px-4 py-4 sm:w-1/2 w-ful md:grid-cols-2">
                <div className="flex items-center flex-row text-xl mb-4 font-bold no-underline text-muted-foreground leading-tight tracking-tighter md:text-2xl lg:leading-[1.1]">
                  <div className="flex items-center h-full mr-4">Status :</div>
                </div>
                <SelectDemo
                  name="Status"
                  options={statusOptions}
                  handleChange={handleStatusChange}
                />
                <div className="flex items-center flex-row text-xl mb-4 font-bold no-underline text-muted-foreground leading-tight tracking-tighter md:text-2xl lg:leading-[1.1]">
                  <div className="flex items-center h-full mr-4">Gender :</div>
                </div>
                <SelectDemo
                  name="Gender"
                  options={genderOptions}
                  handleChange={handleGenderChange}
                />
                <div className="flex items-center flex-row text-xl mb-4 font-bold no-underline text-muted-foreground leading-tight tracking-tighter md:text-2xl lg:leading-[1.1]">
                  <div className="flex items-center h-full mr-4">Species :</div>
                </div>
                <Input
                  value={species}
                  onChange={(e) => {
                    setSpecies(e.target.value);
                  }}
                  className="w-[180px] text-muted-foreground font-bold"
                />
                <div className="flex items-center flex-row text-xl mb-4 font-bold no-underline text-muted-foreground leading-tight tracking-tighter md:text-2xl lg:leading-[1.1]">
                  <div className="flex items-center h-full mr-4">Type :</div>
                </div>
                <Input
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  className="w-[180px] text-muted-foreground font-bold"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="grid px-6 sm:px-12 place-items-center">
          <div className="grid grid-cols-1 gap-16 py-10 pb-12 md:grid-cols-2">
            {infiniteQuery?.data?.pages.map((groupRes, index) => {
              return (
                <Fragment key={index}>
                  {groupRes?.data.results.map((ch, index) => {
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
                  })}
                </Fragment>
              );
            })}
          </div>
          {infiniteQuery?.data?.pages.length == 1 &&
          infiniteQuery?.data?.pages[0].data.info.totalRecords == 0 ? (
            <NotFoundCard />
          ) : null}
          {infiniteQuery.isLoading ? <LoadingCard /> : null}
          {infiniteQuery.hasNextPage ? (
            <div className="grid w-full py-5 mb-10 place-items-center">
              <Button
                onClick={() => {
                  infiniteQuery.fetchNextPage();
                }}
              >
                Load More
              </Button>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Search;
