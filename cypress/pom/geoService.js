export class GeoService {

  checkGeoService(obj, statusCode) {
    cy.allure().startStep(`Check geoService`)
    cy.request({
      method: 'GET',
      url: Cypress.env('api_server')
    })
    .then((response) => {
      expect(response.status).to.eq(statusCode)
      Object.entries(obj).forEach(([key, value]) => {
        expect(response.body).to.eq(key);
        });
  });
  cy.allure().endStep();

    return this;
  }
}
