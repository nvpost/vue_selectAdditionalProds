import { questions_data } from './questions.js';

function fittingMethod(fitting, p2, p3, p7, p9) {
  //fitting: 0 - Радиально (П); 1 - Наклонно (У)

  //Вычисляем Lx
  //Длина У (П1) = (П2*П3/0,7) +П9+4-14  = Lx
  //Длина П (П1) = П2*П3+П9+4 = Lx
  let p3_value = questions_data[2].answ.values[0].options[p3];
  console.log(parseFloat(p3_value));

  let lx = fitting
    ? (parseFloat(p2) * parseFloat(p3_value)) / 0.7 + parseFloat(p9) + 4 - 14
    : parseFloat(p2) * parseFloat(p3_value) + parseFloat(p9) + 4;

  let prepared_lx = Math.round(lx / 10) * 10;

  //Вычисляем Условие1
  //П Коэффициент погружения = (Lх-П9-4)/П2
  //У Коэффициент погружения = (Lх-П9-4+14) *0,7/П2
  let c1 = fitting ? ((lx - p9 - 4 + 14) * 0.7) / p2 : (lx - p9 - 4) / p2;

  //Если П7 - А то lx<80, для В lx <75 возвращем false,
  //т.е. максимальная глубина больше - условие не пройдено
  let c2 = p7 ? lx < 75 : lx < 80;

  console.log(parseFloat(p2), p3_value, parseFloat(p9));
  console.log('lx', lx);
  console.log('c1', c1);
  console.log('c2', c2);

  return { prepared_lx, lx, c1, c2 };
}

export { fittingMethod };
