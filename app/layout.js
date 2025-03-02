import "@/styles/global.css";
import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Zephyr Lin | Developer",
  description:
    "Hi, I'm Zephyr Lin, an undergraduate student at University of Minnesota Twin Cities majoring in Computer Science. I am passionate about developing applications that merge aesthetics with purpose.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-thumb-muted-foreground scrollbar-track-muted dark"
    >
      <body className={`${roboto_mono.className}`}>{children}</body>
    </html>
  );
}
