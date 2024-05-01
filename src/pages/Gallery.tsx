import CharacterCard from "@/components/CharacterCard";
import Header from "@/components/Header";
import { PaginationDemo, PaginationType } from "@/components/Pagniation";
import { usePaginatedCharacters } from "@/services/queries";
import React, { Fragment, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Gallery = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [search, _] = useSearchParams();
  const currentPageParam = search.get("page");
  const pageSizeParam = search.get("pageSize");
  const navigate = useNavigate();
  const page = currentPageParam ? parseInt(currentPageParam) : 1;
  const pageSizeQuery = pageSizeParam ? parseInt(pageSizeParam) : 4;
  const [pageSize, setPageSize] = useState(pageSizeQuery || 4);
  const { isPending, data, error, isError } = usePaginatedCharacters({
    page,
    pageSize,
  });

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize)
    navigate(`/gallery?page=${page}&pageSize=${newPageSize}`)
  };
  const characters = data?.data?.results;
  const totalPages = Number(data?.data?.info?.totalPages);
  const currentPage = Number(data?.data?.info?.currentPage);
  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  const nextPage = () => {
    if (!hasNextPage) return;
    console.log("🚀 ~ nextPage ~ hasNextPage:", hasNextPage);
    navigate(`/gallery?page=${page + 1}&pageSize=${pageSize}`);
  };

  const previousPage = () => {
    if (!hasPreviousPage) return;
    navigate(`/gallery?page=${page - 1}&pageSize=${pageSize}`);
  };

  const gotoPage = (pageNumber: number) => {
    if (!(1 <= pageNumber && pageNumber >= totalPages)) return;
    navigate(`/gallery?page=${pageNumber}&pageSize=${pageSize}`);
  };

  if (isPending)
    return (
      <div className="flex flex-col items-center justify-center w-full mt-8 gap-7">
        Loading...
      </div>
    );

  if (isError)
    return (
      <div className="flex flex-col items-center justify-center w-full mt-8 text-red-500 gap-7">
        {error.message}
      </div>
    );

  const pagination: PaginationType = {
    hasPreviousPage,
    hasNextPage,
    currentPage,
    totalPages,
    pageSize,
    nextPage,
    previousPage,
    gotoPage,
    setPageSize: handlePageSizeChange,
  };

  return (
    <>
    <Header/>
      <section
        id="gallery"
        className="flex flex-col w-full min-h-screen border border-black"
      >
        <div className="flex flex-col items-center w-full gap-2 py-8 mx-auto text-muted-foreground md:py-10 md:pb-4 lg:py-12 lg:pb-12">
          <h3 className="text-xl font-bold leading-tight tracking-tighter md:text-3xl lg:leading-[1.1] md:block">
            Our Beloved Characters
          </h3>
        </div>
        <div className="grid place-items-center">
          <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2">
            {characters?.map((ch, index) => {
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
          </div>
        </div>
        <PaginationDemo pagination={pagination} />
      </section>
    </>
  );
};

export default Gallery;
