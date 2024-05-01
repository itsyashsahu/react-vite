import { Card, CardContent, CardFooter } from "./ui/card";
import { ServerCrash } from "lucide-react";

const ErrorCard = ({errorMessage}:{errorMessage:string}) => {
  return (
    <Card className="p-4 bg-transparent">
      <CardContent className="grid mt-6 place-items-center">
        <ServerCrash className="w-16 h-16 text-white stroke-1" />
      </CardContent>
      <CardFooter className="text-white">Error Occured : {errorMessage}</CardFooter>
    </Card>
  )
}

export default ErrorCard