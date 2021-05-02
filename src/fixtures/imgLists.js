const imgLists = [
  {
    keyword: '아크로리버파크',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116790973-300e8e80-aaf2-11eb-8f9b-e4b12a0204f5.png',
  },
  {
    keyword: '서울',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791007-82e84600-aaf2-11eb-99de-82b4cd5e5b0c.png',
  },
  {
    keyword: '래미안첼리투스아파트',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791043-b32fe480-aaf2-11eb-83ce-946a0a7fff2e.png',
  },
  {
    keyword: '한양1차(영동한양)',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791091-0013bb00-aaf3-11eb-82ac-972eb17c5734.png',
  },

  {
    keyword: '속초자이',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791106-14f04e80-aaf3-11eb-8547-665881d081c5.png',
  },
  {
    keyword: '엘시티',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791122-2afe0f00-aaf3-11eb-8e42-a432b04e94b2.png',
  },
  {
    keyword: '더샵센텀스타',
    imgSrc: '(https://user-images.githubusercontent.com/77006427/116791148-5da80780-aaf3-11eb-95d0-017bd06d2901.png',
  },
  {
    keyword: '해운대두산위브더제니스',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791174-8203e400-aaf3-11eb-88f9-5810add6cbdb.png',
  },
  {
    keyword: '해운대 I PARK',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791197-9ea01c00-aaf3-11eb-959d-9a37b152974f.png',
  },

  {
    keyword: '더펜트하우스청담',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791300-461d4e80-aaf4-11eb-94a2-2665be40feb0.png',
  },
  {
    keyword: '현대7차(73~77,82,85동)',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791324-6ea54880-aaf4-11eb-8e70-3e585d72fe3f.png',
  },
  {
    keyword: '한남더힐',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791349-a3190480-aaf4-11eb-8f72-d7b0de99d56e.png',
  },
  {
    keyword: '나인원 한남',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791376-cc399500-aaf4-11eb-911a-2c46249965cb.png',
  },
  {
    keyword: '현대2차(10,11,20,23,24,25동)',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791408-11f65d80-aaf5-11eb-9565-c6f3993c8733.png',
  },
  {
    keyword: '현대6차(78~81,83,84,86,87동)',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791423-3e11de80-aaf5-11eb-8094-0c1344cf7cc4.png',
  },
  {
    keyword: '갤러리아 포레',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791447-5da90700-aaf5-11eb-8f7e-d05f59a1ef38.png',
  },
  {
    keyword: '상지리츠빌 카일룸',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791471-95b04a00-aaf5-11eb-8965-e9f9bffc3856.png',
  },
  {
    keyword: '아크로 서울포레스트',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791486-a660c000-aaf5-11eb-8825-2e361af7fc0e.png',
  },

  {
    keyword: '리버힐삼성',
    imgSrc: '(https://user-images.githubusercontent.com/77006427/116791547-20914480-aaf6-11eb-8c16-3d9b7f507343.png',
  },
  {
    keyword: '아펠바움',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791639-a90fe500-aaf6-11eb-92d6-22ef0cb834aa.png',
  },
  {
    keyword: '반포 주공1단지',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791680-02781400-aaf7-11eb-9fff-478a5a84d798.png',
  },
  {
    keyword: '트리마제',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791741-584cbc00-aaf7-11eb-96f6-2ae66b457aea.png',
  },

  {
    keyword: '삼성동힐스테이트 1단지',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791774-79ada800-aaf7-11eb-8296-eb24a7b4b629.png',
  },
  {
    keyword: '한강밤섬자이',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791791-8fbb6880-aaf7-11eb-8e88-b3ed7a5da4d3.png',
  },
  {
    keyword: '신구강변연가',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791816-c42f2480-aaf7-11eb-9693-8f60f7c06816.png',
  },
  {
    keyword: 'MARKHILLS',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791888-44ee2080-aaf8-11eb-9782-7e611720ed2c.png',
  },
  {
    keyword: '수원 SK SKY VIEW',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791905-5c2d0e00-aaf8-11eb-8f9c-7b9702ad1157.png',
  },

  {
    keyword: '송도아트윈푸르지오',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116791930-85e63500-aaf8-11eb-8708-e5f4130ad249.png',
  },
  {
    keyword: '상암카이저팰리스클래식',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116792101-977c0c80-aaf9-11eb-81f0-04f84fe08509.png)',
  },
  {
    keyword: '노블씨티',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116792142-d742f400-aaf9-11eb-93d1-0f79a1f1cf68.png',
  },

  {
    keyword: '반포자이',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116792209-2d179c00-aafa-11eb-9c30-5536fddacbe6.png',
  },
  {
    keyword: '반포리체',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116792232-4caec480-aafa-11eb-9673-dd9e0236bd0a.png',
  },
  {
    keyword: '마포래미안푸르지오4단지',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116792271-8bdd1580-aafa-11eb-95a8-377a93602af5.png',
  },
  {
    keyword: '마포래미안푸르지오1단지',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116792279-9b5c5e80-aafa-11eb-8420-c549b644e3b0.png',
  },

  {
    keyword: '래미안퍼스티지',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116792363-145bb600-aafb-11eb-96bb-91956d656f96.png',
  },

  {
    keyword: '타워팰리스2',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116792403-5258da00-aafb-11eb-8905-9a2950848a18.png',
  },

  {
    keyword: '시범',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116792450-9815a280-aafb-11eb-8bbe-fb204631b8b7.png',
  },
  {
    keyword: '여의도자이',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116792492-e5920f80-aafb-11eb-8ad6-cee8d2199964.png',
  },
  {
    keyword: '광장',
    imgSrc: 'https://user-images.githubusercontent.com/77006427/116792511-06f2fb80-aafc-11eb-9a06-7ee61b606bb4.png',
  },
];

export default imgLists;
