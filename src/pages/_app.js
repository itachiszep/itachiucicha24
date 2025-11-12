// pages/_app.tsx
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Blog from "./blog/blog";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Header/>
      <Component {...pageProps} />

    </>
  );
}
