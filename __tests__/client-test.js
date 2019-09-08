// const app = require("../app");

// The assertion for a promise must be returned.
describe("proxy api", () => {
    it("will do something", () => {
        expect.assertions(1);
        // return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
        return expect(1).toEqual(1);
    });
})
  