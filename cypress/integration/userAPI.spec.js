describe('User Ip geolocation service tests', () => {
  it('Smoke - User Ip geolocation service (API)', () => {
    cy.request({
      method: 'GET',
      url: 'https://freegeoip.app/json/'
    })
    .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.country_code).to.eq("UA")
      expect(response.body.country_name).to.eq("Ukraine")
    })
  });
});
