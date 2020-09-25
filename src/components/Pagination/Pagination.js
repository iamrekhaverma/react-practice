import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
    const { pageCount } = props;
        return (
            <ReactPaginate
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={5}
                onPageChange={props.handlePageClick}
                containerClassName={'pagination-container'}
                subContainerClassName={'pagination-number'}
                activeClassName={'pagination-active'}
                previousClassName={'pagination-prev'}
                nextClassName={'pagination-next'}
                previousLabel={'Previous'}
                nextLabel={'Next'}
            />
        );
}

export default Pagination;
