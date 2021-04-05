const routes = {
  home: {
    Home: {
      route: '/',
      method: 'GET',
      description: 'Index',
    },
  },
  apartment: {
    GetApartment: {
      route: '/apartment',
      method: 'GET',
      description: 'Get apartment',
    },
  },
};

export const { home, apartment } = routes;
