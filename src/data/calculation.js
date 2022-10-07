function fittingMethod(fitting, p2, p3, p9) {
  //fitting: 0 - Радиально (П); 1 - Наклонно (У)

  //Вычисляем Lx
  //Длина У (П1) = (П2*П3/0,7) +П9+4-14  = Lx
  //Длина П (П1) = П2*П3+П9+4 = Lx
  let l = fitting
    ? (parseFloat(p2) * parseInt(p3)) / 0.7 + parseInt(p9) + 4 - 14
    : parseFloat(p2) * parseInt(p3) + parseInt(p9) + 4;

  let lx = Math.round(l / 10) * 10;

  //Вычисляем Условие1
  //П Коэффициент погружения = (Lх-П9-4)/П2
  //У Коэффициент погружения = (Lх-П9-4+14) *0,7/П2
  let c1 = fitting ? ((lx - p9 - 4 + 14) * 0.7) / p2 : (lx - p9 - 4) / p2;

  return { lx, c1 };
}

export { fittingMethod };
