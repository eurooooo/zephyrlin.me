import Blogs from "@/components/Blogs";
import Description from "@/components/Description";
import MotionDivWrapper from "@/components/MotionDivWrapper";
import { getBlogs } from "@/lib/blog";

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col gap-10 "
    >
      <Description page="Blog" description="" />
      <Blogs blogs={blogs} />
    </MotionDivWrapper>
  );
}
