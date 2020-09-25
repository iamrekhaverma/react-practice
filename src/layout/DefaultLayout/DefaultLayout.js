import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

const DefaultLayout = (props) => {
  return(
    <React.Fragment>
        {/* <Menu/> */}
        <Header />
      <div className="application-base">
        {props.children}
      </div>
      <Footer />
    </React.Fragment>
  )
}
export default DefaultLayout;

