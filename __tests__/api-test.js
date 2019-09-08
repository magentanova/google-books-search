const request = require("supertest");

const app = require("../app");

const getJSON = url => {
    const httpRequest = request(app).get(url);
    httpRequest.set('Accept', 'application/json')
    httpRequest.set('Origin', 'http://localhost:3000')
    return httpRequest;
}
  
describe("proxy api", () => {
    it("returns a not-found message for an invalid endpoint", async done => {
        // arrange
        const url = "/schmook-search";
        expect.assertions(1);

        // act
        const response = await getJSON(url).expect(400);
        
        // assert
        expect(response.body.message).toEqual("no such page exists");

        done()
    });
    it("returns a non-empty result set for a valid query", async done => {
        // arrange
        const url = "/book-search?q=javascript";
        expect.assertions(1);

        // act
        const response = await getJSON(url).expect(200);

        // assert
        expect(response.body.totalItems).toBeGreaterThan(0);
        
        done()
    });
})
  
