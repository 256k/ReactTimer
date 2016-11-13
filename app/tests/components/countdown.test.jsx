var expect = require ('expect');
var ReactDOM = require('react-dom');
var TestUtils = require ('react-addons-test-utils');
var $ = require('jQuery');
var React = require('react');
var Countdown = require('countdown');

describe('Countdown', () => {
    it("should exist", () => {
        expect(Countdown).toExist();
    });
    it('should update time and status', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.setTime(10);

        expect(countdown.state.time).toBe(10);
        expect(countdown.state.countdownStatus).toBe('started');
        setTimeout(() =>{
            expect(countdown.state.time).toBe(7);
            done();
        }, 3000);
    });
    it('should not go to negative numbers', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.setTime(1);
        setTimeout(() =>{
            expect(countdown.state.time).toBe(0);
            done();
        }, 3000);
    });
    it('should stop countdown and change status to stopped', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.setTime(1);
        setTimeout(() =>{
            expect(countdown.state.countdownStatus).toBe('stopped');
            done();
        }, 1000);
    });
});
