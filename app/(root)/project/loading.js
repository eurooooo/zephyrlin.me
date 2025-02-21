import { LoadingState } from "@/components/LoadingState";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="grid w-full grid-cols-1 gap-10 mx-auto mt-24 sm:grid-cols-2 xl:grid-cols-3">
      <Skeleton className="w-full h-48" />
      <Skeleton className="w-full h-48" />
      <Skeleton className="w-full h-48" />
      <Skeleton className="w-full h-48" />
      <Skeleton className="w-full h-48" />
      <Skeleton className="w-full h-48" />
    </div>
  );
}
