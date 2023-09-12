import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="md:min-h-[30vh] min-h-[50vh]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
