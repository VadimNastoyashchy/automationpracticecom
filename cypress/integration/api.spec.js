import { GeoService } from "../pom/geoService";

const geoService = new GeoService();

const obj = {
ip:	"176.118.52.230",
country_code:	"UA",
country_name:	"Ukraine",
region_code:	"46",
region_name:	"Lviv Oblast",
city:	"Turka",
zip_code:	"82500",
time_zone:	"Europe/Kiev",
latitude:	49.1557,
longitude:	23.027,
metro_code:	0
}

describe('User Ip geolocation service tests', () => {
  it('Smoke - User Ip geolocation service (API)', () => {
    cy.allure().tms('Smoke API', 'AUT-12');
    cy.allure().startStep(`Check geoService`)
    geoService
    .checkGeoService(obj, 200)
    cy.allure().endStep();
  });
});

