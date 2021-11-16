import { GeoService } from "../pom/geoService";

const geoService = new GeoService();

const obj = {
ip:	"",
country_code:	"",
country_name:	"",
region_code:	"",
region_name:	"",
city:	"",
zip_code:	"",
time_zone:	"",
latitude:	0,
longitude:	0,
metro_code:	0
}

describe('User Ip geolocation service tests', () => {
  it('Smoke - User Ip geolocation service (API)', () => {
    cy.allure().tms('Smoke API', 'AUT-12');
    geoService
    .checkGeoService(obj, 200);
  });
});

