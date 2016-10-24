var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('clock');

describe('Clock', function() {
    it('should exist', function() {
        expect(Clock).toExist();
    });

    describe("format seconds", () => {
        it("should format time", () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>); // this renders the component in the file so we can use its methods
            expect(clock.formatSeconds(615)).toBe("10:15");
        });
        it("should adjust for < 10 time", () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>); // this renders the component in the file so we can use its methods
            expect(clock.formatSeconds(62)).toBe("01:02");
        });
    });
});
