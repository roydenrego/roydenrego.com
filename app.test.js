/* global afterAll */

const request = require('supertest');
const app = require('./app')
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get('/').expect(200);
    });

    afterAll(() => {
        app.close();
        app.mongoose.connection.close();
        app.mongoose.disconnect()
    });
})
