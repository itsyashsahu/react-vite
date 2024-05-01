import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

type Props = {
  id: string;
  url: string;
  name: string;
  species: string;
};

const CharacterCard = ({ id, url, name, species }: Props) => {
    const navigate = useNavigate();
  return (
    <>
      {/* <a
          href={`/character/${id}`}
          className={`flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 bg-background`}
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={url}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-muted-foreground dark:text-white">
              {name}
            </h5>
            <p className="mb-3 font-normal text-muted-foreground">{species}</p>
          </div>
        </a> */}
      <Card className="p-0 cursor-pointer w-96" onClick={()=>{navigate(`/character/${id}`)}}>
        <CardContent className="flex flex-col items-center p-0 border rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 bg-background">
          <img
            className="object-cover w-full rounded-t-lg md:w-48 md:rounded-none md:rounded-s-lg"
            src={url}
            alt=""
          />
          <div className="flex flex-col justify-between w-full p-4 leading-normal ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-muted-foreground">
              {name}
            </h5>
            <p className="mb-3 font-normal text-muted-foreground">{species}</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CharacterCard;
