import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className=" bg-zinc-100">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
