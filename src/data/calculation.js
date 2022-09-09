function radially(x1, x2, x3) {
  return parseFloat(x1) * parseInt(x2) + parseInt(x3) + 4;
}
function aslant(x1, x2, x3) {
  return (parseFloat(x1) * parseInt(x2)) / 0.7 + parseInt(x3) + 4 - 14;
}

export { radially, aslant };
