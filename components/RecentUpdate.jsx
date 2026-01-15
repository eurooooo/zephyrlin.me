import { Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RecentUpdate({ blogs }) {
  return (
    <div className="mt-10">
      <div className="flex gap-3 justify-start items-center mb-10 w-full">
        <Newspaper />
        <span className="text-lg font-semibold">Recent Update</span>
      </div>
      <ul className="grid grid-cols-1 gap-10 w-full">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
              <div className="relative rounded-2xl hover:shadow-[0_0px_2px_rgb(140,140,140)] shadow-[0_0px_1.2px_rgb(140,140,140)] opacity-70 hover:opacity-90">
                <div
                  href={`/blog/${blog.slug}`}
                  className="relative aspect-[240/135] w-full "
                >
                  <Image
                    src={blog.image}
                    alt="Blog image"
                    fill
                    className="object-contain rounded-2xl"
                  />
                </div>

                <div className="absolute right-0 bottom-0 left-0 p-4 rounded-lg backdrop-blur-md bg-black/60 dark:bg-black/70">
                  <h2 className="mb-2 font-bold text-white">{blog.title}</h2>
                  <p className="mb-4 text-sm text-gray-300 dark:text-gray-200">
                    {blog.publishedAt ?? ""} | {blog.tag}
                  </p>
                  <p className="text-sm text-gray-200 dark:text-gray-100">
                    {blog.summary}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
