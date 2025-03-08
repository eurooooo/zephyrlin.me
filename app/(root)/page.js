import MotionDivWrapper from "@/components/MotionDivWrapper";
import { getBlogs } from "@/lib/blog";
import Hero from "@/components/Hero";
import SkillsBar from "@/components/SkillsBar";
import RecentUpdate from "@/components/RecentUpdate";
import BasisInfo from "@/components/BasicInfo";
import Spotify from "@/components/Spotify";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Page() {
  const blogs = await getBlogs();
  const recentBlogs = blogs.slice(0, 3);

  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <section className="w-full mb-20 lg:w-2/3 min-h-[calc(100svh-500px)] flex items-center gap-20">
        <Hero />
      </section>

      <section className="relative flex flex-col justify-between w-full gap-10 lg:flex-row">
        <div className="w-full">
          <RecentUpdate blogs={recentBlogs} isHome={true} />
        </div>

        <aside className="lg:w-[680px] w-full lg:sticky lg:h-fit lg:-top-10 flex flex-col gap-12 rounded-2xl ">
          <BasisInfo />
          <SkillsBar />
          <Suspense fallback={<Skeleton />}>
            <Spotify />
          </Suspense>
        </aside>
      </section>
    </MotionDivWrapper>
  );
}
