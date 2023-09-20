import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ num }) {
  return (
    <>
      <Header num={num} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
