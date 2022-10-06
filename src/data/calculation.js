function radially(p2, p3, p9) {
  //Длина П (П1) = П2*П3+П9+4 = Lx
  var l = parseFloat(p2) * parseInt(p3) + parseInt(p9) + 4;
  console.log('radially', Math.round(l / 10) * 10);
  condition1('radially', l, p2, p3, p9);

  return Math.round(l / 10) * 10;
}
function aslant(p2, p3, p9) {
  //Длина У (П1) = (П2*П3/0,7) +П9+4-14  = Lx
  var l = (parseFloat(p2) * parseInt(p3)) / 0.7 + parseInt(p9) + 4 - 14;
  console.log('aslant', Math.round(l / 10) * 10);
  condition1('aslant', l, p2, p3, p9);

  return Math.round(l / 10) * 10;
}

function condition1(fitting, lx, p2, p3, p9) {
  let immersionFactor = 0;

  //П Коэффициент погружения = (Lх-П9-4)/П2
  if (fitting == 'radially') {
    immersionFactor = (lx - p9 - 4) / p2;
  }

  //У Коэффициент погружения = (Lх-П9-4+14) *0,7/П2
  if (fitting == 'aslant') {
    immersionFactor = ((lx - p9 + 10) * 0.7) / p2;
  }
  console.log('immersionFactor', immersionFactor);
}

export { radially, aslant };
