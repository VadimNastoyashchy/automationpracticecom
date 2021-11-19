export class GeoService {

  public checkGeoService(obj: object, statusCode: number): this {
    cy.allure().startStep(`Check geoService`);
    cy.request({
      method: 'GET',
      url: Cypress.env('api_server')
    })
      .then((response) => {
        expect(response.status).to.eq(statusCode)
        for (let key in response.body) {
          expect(Object.keys(obj)).to.include(key);
        }
      });
    cy.allure().endStep();

    return this;
  }
}
