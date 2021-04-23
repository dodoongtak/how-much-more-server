import axios from 'axios';
import dotenv from 'dotenv';

import categories from '../../fixtures/categories';

import { converToPyeong } from '../../utils/utils';

dotenv.config();

function hanldeURL({ address, year }) {
  const baseURL = 'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTrade'
    + `?serviceKey=${process.env.SERVICE_KEY}`;

  return `${baseURL}`
  + `&LAWD_CD=${address}`
+ `&DEAL_YMD=${year}`;
}

function filterApartment(items, key) {
  return items.filter((item) => item.아파트 === key)[0];
}

async function getApartment({ address, year, keyword }) {
  const url = hanldeURL({
    address,
    year,
  });

  const response = await axios.get(url);

  const apartments = [...response.data.response.body.items.item];

  return filterApartment(apartments, keyword);
}

export function processApartment(apartment) {
  const {
    아파트, 거래금액, 년, 월, 일, 법정동, 전용면적, 건축년도, 지번,
  } = apartment;

  const processedData = {
    name: 아파트,
    price: 거래금액.trim().replace(',', ''),
    date: `${년}-${월}-${일}`,
    district: 법정동.trim(),
    size: Math.floor(전용면적),
    pyeong: converToPyeong(전용면적),
    builtYear: 건축년도,
    lotNumber: 지번,
  };

  return processedData;
}

const getApartmentController = async (req, res) => {
  const { query: { apartmentCategory } } = req;
  try {
    const apartmentsPromises = categories[apartmentCategory].map(
      async (url) => getApartment(url),
    );

    const apartments = (await Promise.all(apartmentsPromises))
      .map((apartment) => processApartment(apartment));

    res.status(200).json({ msg: '성공', success: true, apartments });
  } catch (err) {
    res.status(400).json({ msg: err, success: false });
  }
};

export default getApartmentController;
