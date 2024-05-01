import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useCharacter } from "@/services/queries";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Character = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams();
  const characterQuery = useCharacter(Number(id));
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section className="flex items-center justify-center flex-1 py-8 antialiased md:py-16 ">
        <div className="flex items-center justify-center max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="max-w-md mx-auto shrink-0 lg:max-w-lg">
              <img
                className="w-full dark:block"
                src={characterQuery.data?.data.image}
                alt=""
              />
            </div>

            <div className="flex flex-col items-center justify-center flex-1 mt-6 sm:mt-8 lg:mt-0">
              <div>
                <h1 className="text-xl font-semibold text-muted-foreground sm:text-5xl">
                  {characterQuery?.data?.data.name}
                </h1>

                <hr className="my-6 border-gray-200 md:my-8" />

                <p className="mb-6 text-gray-500 dark:text-gray-400">
                  {characterQuery.data?.data.name} is a mysterious creature
                  hailing from {characterQuery?.data?.data?.origin?.name} within
                  the Rick and Morty universe.{" "}
                  {characterQuery.data?.data?.gender !== "unknown"
                    ? `A ${characterQuery.data?.data?.gender?.toLowerCase()}`
                    : "Despite its unknown gender,"}{" "}
                  this {characterQuery.data?.data?.species} species is{" "}
                  {characterQuery.data?.data?.status?.toLowerCase()} and thriving.
                  Its debut was marked in Episode{" "}
                  {characterQuery.data?.data?.episode?.[0]?.split("/").pop()},
                  leaving fans intrigued by its presence.
                </p>
                <Button onClick={()=>{navigate(-1)}} variant="outline" className='text-muted-foreground'>
                    Go Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Character;
