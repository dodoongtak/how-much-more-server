class Execute {
  constructor(app) {
    this.app = app;
  }

  use(route, func) {
    switch (route.method) {
    case 'POST':
    case 'post':
      this.app.post(route.route, func);
      break;
    case 'GET':
    case 'get':
      this.app.get(route.route, func);
      break;
    case 'PUT':
    case 'put':
      this.app.put(route.route, func);
      break;
    case 'PATCH':
    case 'patch':
      this.app.patch(route.route, func);
      break;
    case 'DELETE':
    case 'delete':
      this.app.delete(route.route, func);
      break;
    default:
      break;
    }
  }
}

export default Execute;
