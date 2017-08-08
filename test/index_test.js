const models = require('../models');

beforeEach(async () => {
  await Promise.all(Object.values(models).map(model => model.sync({ force: true })));
});
