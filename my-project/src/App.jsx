import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 shadow-md">
        <Header />
        <Nav />
      </div>

      <Main />
      <Footer />
    </>
  );
}
