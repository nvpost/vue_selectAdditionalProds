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
  //У Коэффициент погружения = (Lх-П9-4+14) *0,7/П2
  //П Коэффициент погружения = (Lх-П9-4)/П2

  let c1 = fitting ? ((lx - p9 - 4 + 14) * 0.7) / p2 : (lx - p9 - 4) / p2;


    //min_lx=L2, max_lx = L3
    let min_lx = Math.floor(lx / 10) * 10;
    let max_lx = Math.ceil(lx / 10) * 10;
  
    // Вычислим на какой коэффициент погрузится датчик при этих длинах:
    let k2 = (min_lx-parseFloat(p9)-4)/parseFloat(p2)
    let k3 = (max_lx-parseFloat(p9)-4)/parseFloat(p2)

  //Если П7 - А то lx<80, для В lx <75 возвращем false,
  //т.е. максимальная глубина больше - условие не пройдено
  let c2 = p7 ? lx < 75 : lx < 80;

  //Lпогружное
  // Lпр2 = L2-G9-4=60-25-4 = 32 мм (погружное расчётное) < 75
  // Lпр3 = L3-G9-4=80-25-4 = 51 мм (погружное расчётное) < 75

  let l_submerge2 = c2 ? min_lx - parseFloat(p9) - 4 : false 
  let l_submerge3 = c2 ? max_lx - parseFloat(p9) - 4 : false 

  // console.log(parseFloat(p2), p3_value, parseFloat(p9), lx);
  // console.log('lx', lx);
  // console.log('c1', c1);
  // console.log('c2', c2);

  // console.log(l_submerge2, l_submerge3, k2, k3)

  return { prepared_lx, max_lx, min_lx, lx, c1, c2 };
}

export { fittingMethod };
