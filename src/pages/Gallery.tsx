import CharacterCard from "@/components/CharacterCard";
import ErrorCard from "@/components/ErrorCard";
import Header from "@/components/Header";
import LoadingCard from "@/components/LoadingCard";
import NotFoundCard from "@/components/NotFoundCard";
import { PaginationDemo, PaginationType } from "@/components/Pagniation";
import Config from "@/config";
import { usePaginatedCharacters } from "@/services/queries";
import { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
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
  const { isPending, data, error, isError} =
    usePaginatedCharacters({
      page,
      pageSize,
    });

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    navigate(`/gallery?page=${page}&pageSize=${newPageSize}`);
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
      <Helmet>
          <meta charSet="utf-8" />
          <title>Cartoonify | Gallery</title>
          <link rel="canonical" href={`${Config.FRONTEND_URL}/gallery`} />
      </Helmet>
      <Header />
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
        {(characters && characters.length!=0) ? <PaginationDemo pagination={pagination} /> : null}
        <div className="grid px-6 sm:px-12 place-items-center">

        {isPending ? <LoadingCard/>:null}
        {isError ? <ErrorCard  errorMessage={error?.['message'] || 'something went wrong'} />:null}
        {(!isPending && characters?.length==0) ? <NotFoundCard/>:null}
        </div>
      </section>
    </>
  );
};

export default Gallery;
