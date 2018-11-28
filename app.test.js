/* global afterAll */

const request = require('supertest');
const app = require('./app')
const mongoose = require('./app').mongoose;
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get('/').expect(200);
    });

    afterAll(() => {
    	mongoose.connection.close();
        mongoose.disconnect()
    });
})
