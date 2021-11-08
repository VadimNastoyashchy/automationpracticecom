export class GeoService {

  checkGeoService(obj, statusCode) {
    cy.request({
      method: 'GET',
      url: Cypress.env('api_server')
    })
    .then((response) => {
      expect(response.status).to.eq(statusCode)
      Object.entries(obj).forEach(([key, value]) => {
        expect(value).to.eq(response.body[key]);
        });
  });
    return this;
  }
}