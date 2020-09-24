import React from "react";

const spacings = {
  sp_xs: 8,
  sp_sm: 16,
  sp_base: 24,
  sp_md: 32,
  sp_lg: 40,
  sp_xl: 48,
  sp_xxl: 56
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