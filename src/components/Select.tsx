import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Fragment } from "react/jsx-runtime";

type Option = {
  value: string;
  label: string;
};

type Props = {
  name: string;
  options: Option[];
  handleChange: (newValue: string) => void;
};

export function SelectDemo({ name, options, handleChange }: Props) {
  return (
    <Select onValueChange={(value) => {
      console.log("🚀 ~ SelectDemo ~ value:", value)
        handleChange(value)
    }}>
      <SelectTrigger className="w-[180px] text-muted-foreground font-bold">
        <SelectValue placeholder={`Select a ${name}`} />
      </SelectTrigger>
      <SelectContent className="text-white bg-background">
        <SelectGroup>
          <SelectLabel>{name}</SelectLabel>
          {options.map(({ value, label }, index) => {
            return (
              <Fragment key={index}>
                <SelectItem value={value}>{label}</SelectItem>
              </Fragment>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
