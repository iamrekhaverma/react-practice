import React, { useState } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

const options = [
    { value: 'Price: High to low', label: 'Price: High to low' },
    { value: 'Price: Low to High', label: 'Price: Low to High' },
];

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: '1px dotted pink',
    fontSize: state.selectProps.fontSize
  }),

  control: (_, { selectProps: { width,display,height,border,fontSize }}) => ({
    width: width,
    display: display,
    height:height,
    border: border,
    fontSize: fontSize
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}
const SortListFilter = (props) => {
    const [selectedOption, setSortBy] = useState(options[0]);
    const handleChange = selectedOption => {
        setSortBy(selectedOption);
    }
    return (
        <div className="horizontal-filters-sortContainer">
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
                width='203px'
                display="flex"
                border="solid 1px #ddd"
                fontSize="14px"
                height="28px"
                styles={customStyles}
            />
        </div>
    );
}

export default connect(null,null)(SortListFilter);