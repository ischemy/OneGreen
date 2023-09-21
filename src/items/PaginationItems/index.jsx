function PaginationItems() {
  return (
    <>
      <div className="d-flex justify-content-center mb-91">
        <div className="pagination">
          <a href="#" className="green-arrow border-0">
            &lt;
          </a>
          <a href="#" className="text-pagination">
            1
          </a>
          <a className="text-pagination active" href="#">
            2
          </a>
          <a href="#" className="text-pagination">
            3
          </a>
          <a href="#" className="text-pagination">
            4
          </a>
          <a href="#" className="text-pagination">
            5
          </a>
          <a href="#" className="text-pagination">
            6
          </a>
          <a href="#" className="green-arrow border-0">
            &gt;
          </a>
        </div>
      </div>
    </>
  );
}

export default PaginationItems;
