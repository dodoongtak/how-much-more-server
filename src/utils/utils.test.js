import {
  converToPyeong,
  getImgSrc,
} from './utils';

test('covertToPyeong', () => {
  const size = 129.92;

  expect(converToPyeong(size)).toBe(39);
});

test('getImgSrc', () => {
  const imgLists = [
    {
      keyword: '아크로리버파크',
      imgSrc: 'https://user-images.githubusercontent.com/77006427/116790973-300e8e80-aaf2-11eb-8f9b-e4b12a0204f5.png',
    },
    {
      keyword: '서울',
      imgSrc: 'https://user-images.githubusercontent.com/77006427/116791007-82e84600-aaf2-11eb-99de-82b4cd5e5b0c.png',
    },
  ];

  const name = '서울';

  expect(getImgSrc(imgLists, name)).toBe('https://user-images.githubusercontent.com/77006427/116791007-82e84600-aaf2-11eb-99de-82b4cd5e5b0c.png');
});
