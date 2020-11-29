import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Loading from '../Loading/Loading'
import styles from './Button.module.css';

export default function Button({
  children, type, theme = 'primaryRed', size = 'default', className = '', loading = false, ...rest
}) {
  return (
    <button type={type || 'button'} className={cn(styles.defaults, styles.button, styles[`theme--${theme}`], styles[`size--${size}`], className)} {...rest}>
      <span className={styles.buttonContent}>
        { loading ? <Loading className={styles.loading} /> : null }
        {children}
      </span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['primary', 'primaryRed', 'secondary', 'borderless']),
  size: PropTypes.oneOf(['default', 'small', 'large']),
  type: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool,
};