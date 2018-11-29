/* global afterAll */

const request = require('supertest');
const app = require('./app')
const mongoose = require('./app').mongoose;
describe('Test the root path', () => {
    it('responds to the GET method', () => {
        return request(app).get('/').expect(200);
    });
    
    it('gives 404 for everything else', () => {
        return request(app).get('/something').expect(404); 
    });

    afterAll(() => {
    	mongoose.connection.close();
        mongoose.disconnect()
    });
})
