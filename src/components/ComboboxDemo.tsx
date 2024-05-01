import * as React from "react";
import { Check, ChevronsUpDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "./ui/label";

const defaultFrameworks = [
  {
    value: "4",
    label: "4",
  },
  {
    value: "6",
    label: "6",
  },
  {
    value: "10",
    label: "10",
  },
  {
    value: "15",
    label: "15",
  },
  {
    value: "20",
    label: "20",
  },
];

type Props = {
  pageSize:number,
  setPageSize:(newPageSize:number)=>void
}

export function ComboboxDemo({pageSize, setPageSize}:Props) {
  console.log("🚀 ~ ComboboxDemo ~ pageSize:", pageSize)

  
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("")
  const [frameworks,setFrameworks] = React.useState(defaultFrameworks)
const findRes = frameworks.find((framework) => String(framework.value) === String(pageSize))

  if(!findRes){
    setFrameworks([...frameworks, {value:String(pageSize),label:String(pageSize)}])
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] bg-transparent justify-between text-muted-foreground"
        >
          {pageSize
            ? "Count : " +
              frameworks.find((framework) => String(framework.value) === String(pageSize))?.label
            : "No. of Records"}
          <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-transparent">
        <Command>
          <CommandInput placeholder="No. of Records" value={inputValue} onValueChange={(val)=>{setInputValue(val)}}  />
          <CommandList>
            <CommandEmpty className="p-0">
                <Label onClick={()=>{
                    setFrameworks([...frameworks, {value:inputValue, label:inputValue}])
                    setPageSize(Number(inputValue))
                    setInputValue("")
                    setOpen(false)
                }} className="flex w-full px-3 py-4 cursor-pointer flex-left text-muted-foreground hover:text-foreground hover:bg-muted-background">
                    <Plus className="w-4 h-4 mr-2"/>
                    {inputValue}
                </Label>
            </CommandEmpty>
            <CommandGroup>
              {frameworks?.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setPageSize(currentValue === String(pageSize) ? 1 : Number(currentValue));
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      String(pageSize) === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
