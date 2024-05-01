import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { ComboboxDemo } from "./ComboboxDemo";

type props = {
  pagination: PaginationType;
};

export type PaginationType = {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  currentPage: number;
  totalPages: number;
  pageSize:number;
  nextPage: () => void;
  previousPage: () => void;
  gotoPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
};

export function PaginationDemo({ pagination }: props) {
  return (
    <Pagination className="block w-full mx-auto mb-12">
      <PaginationContent className="justify-center mb-8">
        {pagination.hasPreviousPage ? (
          <PaginationItem>
            <PaginationPrevious
              onClick={pagination.previousPage}
              className="text-muted-foreground"
            />
          </PaginationItem>
        ) : null}

        {pagination.currentPage - 2 > 0 ? (
          <PaginationItem>
            <PaginationEllipsis className="text-muted-foreground" />
          </PaginationItem>
        ) : null}

        {pagination.hasPreviousPage ? (
          <PaginationItem>
            {/* <PaginationLink href={`#gallery?page=${currentPage+1}&pageSize=${pageSize}`} className="text-muted-foreground"> */}
            <PaginationLink
              onClick={pagination.previousPage}
              className="text-muted-foreground"
            >
              {pagination.currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        ) : null}
        <PaginationItem>
          <PaginationLink className={cn("text-muted-foreground")} isActive>
            {pagination.currentPage}
          </PaginationLink>
        </PaginationItem>

        {pagination.hasNextPage ? (
          <PaginationItem>
            <PaginationLink
              onClick={pagination.nextPage}
              className="text-muted-foreground"
            >
              {pagination.currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        ) : null}
        {pagination.currentPage + 1 < pagination.totalPages ? (
          <PaginationItem>
            <PaginationEllipsis className="text-muted-foreground" />
          </PaginationItem>
        ) : null}
        {pagination.hasNextPage ? (
          <PaginationItem>
            <PaginationNext
              onClick={pagination.nextPage}
              className="text-muted-foreground"
            />
          </PaginationItem>
        ) : null}
      </PaginationContent>

      <PaginationContent className="justify-center">
        <PaginationItem>
          <ComboboxDemo pageSize={pagination.pageSize} setPageSize={pagination.setPageSize} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
