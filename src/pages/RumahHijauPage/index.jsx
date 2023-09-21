import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SearchBar from "../../items/SearchBar";
import FilterButton from "../../items/FilterButton";
import RumahCardItems from "../../items/RumahCardItems";
import PaginationItems from "../../items/PaginationItems";
function RumahHijauPage() {
  return (
    <>
      <Navbar />
      <SearchBar/>
      <FilterButton/>
      <RumahCardItems/>
      <RumahCardItems/>
      <RumahCardItems/>
      <RumahCardItems/>
      <PaginationItems/>
      <Footer />
    </>
  );
}

export default RumahHijauPage;
