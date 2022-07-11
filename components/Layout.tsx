import React, { Children } from "react";
import Header from "./Header";

type Props = {
  Children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ Children }) => {
  return (
    <>
      <Header />
      {Children}
    </>
  );
};

export default Layout;
