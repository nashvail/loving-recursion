import React from "react";

const spacings = {
  sp_xs: '0.8rem',
  sp_sm: '1.6rem',
  sp_base: '2.4rem',
  sp_md: '3.2rem',
  sp_lg: '4rem',
  sp_xl: '4.8rem',
  sp_xxl: '5.6rem'
}

const Spacer = (props) => {

  const askedWidth = spacings[props.width] || 1,
    askedHeight = spacings[props.height] || 1;

  const style = {
    width: (typeof askedWidth === 'number' ? (askedWidth + 'px') : (askedWidth || '1px')),
    height: (typeof askedHeight === 'number' ? (askedHeight + 'px') : (askedHeight|| '1px')),
    flexGrow: props.grow,
    flexShrink: props.shrink
  }

  return React.createElement('div', { style }, props.children)
}

export default Spacer