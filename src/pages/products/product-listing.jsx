import React from 'react';
import { ProductCard } from 'components/Card';
import BrandsFilter  from 'components/BrandFilter/BrandFilter';
import { connect } from 'react-redux';
import SortListFilter from 'components/SortListFilter/SortListFilter';

import { getProducts } from './actions';
import Pagination from 'components/Pagination/Pagination';

class ProductsListing extends React.Component {
    state = {
        perPage: 10,
        currentPage: 1,
    };

    componentDidMount() {
        this.handleApiCall();
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.brandFilter !== this.props.brandFilter) {
           this.handleApiCall();
        }
    }

    handleApiCall = () => {
        const { loadData, brandFilter } = this.props;
        const { currentPage } = this.state;
        var params = new URLSearchParams();
        params.append("_page", currentPage);
        params.append("_limit", this.state.perPage);
        Object.keys(brandFilter).map(key => params.append("brand", key))
        const requestParams = {
            params: params
        };
        loadData(requestParams);
    }

    showProductDetails = (item) => {
        const { history } = this.props;
        const url = `/products/${item.id}`;
        history.push(url);
    }
    handlePageClick = data => {
        let selected = data.selected;    
        this.setState({ currentPage: selected + 1 }, () => {
            this.handleApiCall();
        });
    };
    render () {
        const { data = [], total } = this.props.products;
        const pageCount = total / this.state.perPage;
        return(
            <main className="search-base">
                <div class="row-base">
                    <div class="search-leftContainer column-base">
                        <div className="condition-render-verticalFilters condition-render-boundary-top">
                            <div className="vertical-filters-filters header-container"><span class="header-title">FILTERS</span></div>
                            <BrandsFilter handleFilter={this.handleFilter}/>
                            {/* <PriceOrder/> */}
                        </div>
                    </div>
                    <div class="search-rightContainer column-base">
                        <div class="row-base">
                            <div className="horizontal-filters-base">
                            <SortListFilter/>
                            </div>
                        </div>
                        <div className="search-searchProductsContainer row-base">
                        <ProductCard data={data} type="product" showProductDetails={this.showProductDetails}/>
                        <div className="results-showMoreContainer">
                            { pageCount > 1 && 
                                <Pagination 
                                    pageCount={pageCount} 
                                    handlePageClick={this.handlePageClick}
                                />
                            }
                        </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadData: (requestParams) => {
            dispatch(getProducts(requestParams))
        }
    }
}

const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
      brandFilter: state.brandFilter
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductsListing);