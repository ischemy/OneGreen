import filter from "../../assets/image/filter.svg";
import searchIcon from "../../assets/image/search.svg";
function SearchBar() {
  return (
    <>
      <div className="container mb-40">
        <div className="d-flex justify-content-center">
          <div className="wrapper">
            <input
              type="text"
              id="search"
              name="search"
              className=""
              placeholder="Cari nama perumahan"
            />
            <button className="">
              Cari <img src={searchIcon} width={14} height={14} alt="" />
            </button>
          </div>
          <img
            src={filter}
            alt=""
            width={44}
            height={44}
            className="mt-13 ml-16"
          />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
