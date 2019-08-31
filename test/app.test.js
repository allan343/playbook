const expect = require('chai').expect;
const describe = require('chai').describe;
const request = require('supertest');
const app = require('../src/app');

describe('GET /books', () => {
  it('should return an array of playbooks', () => {
    return request(app)
      .get('/apps')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
               expect(res.body).to.be.an('array');
             });
  })
});