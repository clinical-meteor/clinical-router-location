
describe('clinical:router-url', function () {
  var server = meteor();
  var client = browser(server);

  it('Iron.Location should exist on the client', function () {
    return client.execute(function () {
      expect(Iron.Location).to.exist;
    });
  });

  it('Iron.Location should be undefined on the server', function () {
    return server.execute(function () {
      //expect(typeof Router).to.equal("undefined");
      expect(typeof Iron.Location).to.equal("undefined");
    });
  });
});
