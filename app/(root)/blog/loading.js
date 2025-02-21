import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="flex flex-col w-full gap-10 mt-16 lg:w-4/5">
      <Skeleton className="w-full aspect-[5/1]" />
      <Skeleton className="w-full aspect-[5/1]" />
    </div>
  );
}
