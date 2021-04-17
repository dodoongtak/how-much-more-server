import '@babel/polyfill';
import 'regenerator-runtime/runtime';

import { processApartment } from './apartmentController';

describe('apartmentController', () => {
  it('processApartment', () => {
    const initialApartment = {
      거래금액: '   470,000',
      건축년도: 2016,
      년: 2021,
      법정동: ' 반포동',
      월: 3,
      일: 2,
      아파트: '아크로리버파크',
      전용면적: 129.92,
      지번: '2-12',
      지역코드: 11650,
      총: 8,
      해제사유발생일: ' ',
      해제여부: ' ',
    };

    const processedApartment = {
      name: '아크로리버파크',
      price: '470000',
      date: '2021-3-2',
      district: '반포동',
      size: 129.92,
      builtYear: 2016,
      lotNumber: '2-12',
    };

    expect(processApartment(initialApartment)).toEqual(processedApartment);
  });
});
