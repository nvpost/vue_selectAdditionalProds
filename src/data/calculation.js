function radially(p2, p3, p9) {
  //Длина П (П1) = П2*П3+П9+4 = Lx
  var l = parseFloat(p2) * parseInt(p3) + parseInt(p9) + 4;
  // console.log('radially', Math.round(l / 10) * 10);

  let lx = Math.round(l / 10) * 10;

  let c1 = condition1('radially', lx, p2, p3, p9);

  return { lx, c1 };
}
function aslant(p2, p3, p9) {
  //Длина У (П1) = (П2*П3/0,7) +П9+4-14  = Lx
  var l = (parseFloat(p2) * parseInt(p3)) / 0.7 + parseInt(p9) + 4 - 14;
  // console.log('aslant', Math.round(l / 10) * 10);

  let lx = Math.round(l / 10) * 10;

  let c1 = condition1('aslant', lx, p2, p3, p9);

  return { lx, c1 };
}

function fittingMethod(fitting, p2, p3, p9) {
  let l = fitting
    ? (parseFloat(p2) * parseInt(p3)) / 0.7 + parseInt(p9) + 4 - 14
    : parseFloat(p2) * parseInt(p3) + parseInt(p9) + 4;

  let lx = Math.round(l / 10) * 10;

  let c1 = condition1(fitting, lx, p2, p3, p9);

  return { lx, c1 };
}

function condition1(fitting, lx, p2, p3, p9) {
  // let immersionFactor = 0;

  //fitting: 0 - Радиально (П); 1 - Наклонно (У)
  //П Коэффициент погружения = (Lх-П9-4)/П2
  //У Коэффициент погружения = (Lх-П9-4+14) *0,7/П2
  let immersionFactor = fitting
    ? ((lx - p9 + 10) * 0.7) / p2
    : (lx - p9 - 4) / p2;

  // if (fitting == 'radially') {
  //   immersionFactor = (lx - p9 - 4) / p2;
  // }

  // if (fitting == 'aslant') {
  //   immersionFactor = ((lx - p9 + 10) * 0.7) / p2;
  // }
  // console.log('immersionFactor', immersionFactor);

  return immersionFactor;
}

export { radially, aslant, fittingMethod };
