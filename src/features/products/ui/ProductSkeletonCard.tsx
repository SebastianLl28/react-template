import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import { Skeleton } from "@/shared/ui/skeleton";

const ProductSkeletonCard = () => {
  return (
    <Card className="overflow-hidden border">
      <Skeleton className="h-40 w-full" />
      <CardHeader className="p-3">
        <Skeleton className="h-4 w-2/3" />
      </CardHeader>
      <CardContent className="px-3 pb-0">
        <Skeleton className="h-3 w-1/3" />
      </CardContent>
      <CardFooter className="p-3">
        <Skeleton className="h-8 w-full" />
      </CardFooter>
    </Card>
  );
};

export default ProductSkeletonCard;
