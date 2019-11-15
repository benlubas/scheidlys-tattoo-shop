import React from 'react';

export const titlecase = function(str) {
  return str
    .split(' ')
    .map(value => value.charAt(0).toUpperCase() + value.substr(1))
    .join(' ');
};
export const bold = function(str) {
  return <span style={{ fontWeight: 'bold' }}>{str}</span>;
};
export const underline = function(str) {
  return <span style={{ textDecoration: 'underline' }}>{str}</span>;
};
