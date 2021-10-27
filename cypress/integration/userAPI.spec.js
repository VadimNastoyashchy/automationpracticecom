describe('User Ip geolocation service tests', () => {
  it('Smoke - User Ip geolocation service (API)', () => {
    cy.request({
      method: 'GET',
      url: Cypress.env('api_server')
    })
    .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.country_code).to.eq("UA")
      expect(response.body.country_name).to.eq("Ukraine")
    })
  });
});