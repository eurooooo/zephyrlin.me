import "@/styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainWrapper from "@/components/MainWrapper";

export default function layout({ children }) {
  return (
    <div className="bg-[url('/images/bg.webp')]">
      <div className="flex flex-col items-center px-4 pt-10 mx-auto max-w-4xl lg:max-w-5xl sm:px-12 md:px-20 lg:px-12 xl:max-w-7xl min-h-svh">
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </div>
    </div>
  );
}
