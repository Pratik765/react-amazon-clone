import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FetchItems from "./components/FetchItems";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const item = useSelector((store) => store.item);
  return (
    <>
      <Header />
      <FetchItems />
      {item.length === 0 ? <Loading /> : <Outlet />}
      {/* {fetchStatus.currentlyFetching ? <Loading /> : <Outlet />} */}
      {/* <Outlet /> */}
      <Footer />
    </>
  );
}

export default App;
