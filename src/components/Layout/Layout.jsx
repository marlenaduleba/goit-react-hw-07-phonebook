import React from 'react';
import PropTypes from 'prop-types';

import css from './Layout.module.css';

const Layout = ({ children }) => {
    return <div className={css.container}>{children}</div>;
  };
  
  Layout.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };
  
  export default Layout;