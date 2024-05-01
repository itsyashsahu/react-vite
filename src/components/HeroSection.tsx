import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const HeroSection = () => {
    const navigate = useNavigate()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit =(e:any) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const searchTerm = formData.get("searchTerm")
        navigate(`/search?s=${searchTerm}`)
    }
  return (
    <div className="grid flex-1 h-full max-w-screen-xl px-4 py-8 mx-auto text-left lg:py-16 lg:px-6 place-items-center">
      <section className="mx-auto text-muted-foreground flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-18">
        <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] md:block">
          Weird and Wonderful Worlds of
          <br />
          Rick and Morty!
        </h1>
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] md:block">
          {/* Explore Your Favorite Cartoons! */}
        </h1>
        <div className="flex flex-col items-center justify-center w-full py-4 md:pb-10">
          <p className="inline-flex items-center justify-center whitespace-nowrap text-lg font-medium transition-colors disabled:pointer-events-none  h-9 px-4 py-2 rounded-[6px]">
            Unlocking the Multiverse of Cartoons!
          </p>
        </div>
        <div className="grid w-full place-items-center">
          <div className="w-full">
            <form className="grid w-full place-items-center" onSubmit={handleSubmit} >
              <div className="relative w-4/5">
                <Search className="absolute w-4 h-4 left-6 top-5 text-muted-foreground" />
                <Input
                  type="search"
                  name="searchTerm"
                  placeholder="Search for you favorite cartoon character"
                  className="w-full text-lg shadow-none appearance-none bg-background text-muted-foreground p-7 pl-14"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full my-10">
          <Link to="/gallery">
            <Button
              variant="link"
              className="grid text-lg font-bold text-muted-foreground place-items-center"
            >
              Go to Gallery
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
