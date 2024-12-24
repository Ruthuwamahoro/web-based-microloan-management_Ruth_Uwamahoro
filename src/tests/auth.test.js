const  { expect } = require("chai");
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require("../app")


chai.use(chaiHttp);
chai.should();


describe('testing Login API', () => {
  describe('test if user credentials are valid', () => {

    it('it should return status code of 200', done => {
      const user = {
        telephone: '0788888888',
        password: '1111@aa',
      };

      chai
        .request(app)
        .post('/api/users/auth/login')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    }).timeout(10000);

    it('check if user exists (401)', done => {
      const user = {
        telephone: '0788888888',
        password: '1111@aa',
      };
      chai
        .request(app)
        .post('/api/users/auth/login')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    }).timeout(10000);
  });
});

