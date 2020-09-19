const crudPlugin = function (schema) {
  schema.statics.getAll = function (query = {}) {
    return this.find();
  };

  schema.statics.get = function (query = {}) {
    return this.findOne(query);
  };

  schema.statics.search = function (query = {}) {
    return this.find(query);
  };

  // schema.statics.create = function(data = {}) {
  //   return this.create(data);
  // };

  schema.statics.update = function (data = {}) {
    return this.save(data);
  };
};

module.exports = crudPlugin;
