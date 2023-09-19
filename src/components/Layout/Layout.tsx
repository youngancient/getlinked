import { FunctionComponent, ReactNode } from "react";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";

interface ILayout {
  children: ReactNode;
}

const Layout: FunctionComponent<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
