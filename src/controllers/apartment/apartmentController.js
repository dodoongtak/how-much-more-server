import axios from 'axios';
import dotenv from 'dotenv';

import categories from '../../fixtures/categories';

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

const getApartmentController = async (req, res) => {
  const { query: { apartmentCategory } } = req;
  try {
    const apartmentsPromises = categories[apartmentCategory].map(
      async (url) => getApartment(url),
    );

    const apartments = await Promise.all(apartmentsPromises);

    res.status(200).json({ msg: '성공', success: true, apartments });
  } catch (err) {
    res.status(400).json({ msg: err, success: false });
  }
};

export default getApartmentController;
