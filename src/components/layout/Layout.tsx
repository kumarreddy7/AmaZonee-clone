// Wraps every page in the app with a common layout (e.g. navbar, content, footer)
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-az-light dark:bg-dk-bg transition-colors duration-250">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
