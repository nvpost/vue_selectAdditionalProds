function radially(x1, x2, x3) {
  var l = parseFloat(x1) * parseInt(x2) + parseInt(x3) + 4;
  return Math.round(l / 10) * 10;
}
function aslant(x1, x2, x3) {
  var l = (parseFloat(x1) * parseInt(x2)) / 0.7 + parseInt(x3) + 4 - 14;
  return Math.round(l / 10) * 10;
}

export { radially, aslant };
