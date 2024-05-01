import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { PackageOpen } from "lucide-react";

const NotFoundCard = () => {
  return (
    <Card className="p-4 bg-transparent">
      <CardContent className="grid mt-6 place-items-center">
        <PackageOpen className="w-16 h-16 text-white stroke-1" />
      </CardContent>
      <CardFooter className="text-white">No Records Found</CardFooter>
    </Card>
  );
};

export default NotFoundCard;
