import { FunctionComponent, ReactNode } from "react";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import { useRouter } from "next/router";

interface ILayout {
  children: ReactNode;
}

const Layout: FunctionComponent<ILayout> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Header />
      <main>{children}</main>
      {router.pathname !== "/contact" ? <Footer /> : <></>}
    </>
  );
};

export default Layout;
