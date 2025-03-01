import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export default function layout({ children }) {
  return <body className={`${roboto_mono.className} `}>{children}</body>;
}
