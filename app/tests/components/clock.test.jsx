

var Clock = require('clock');

describe('Clock', function() {
    it('should exist', function() {
        expect(Clock).toExist();
    });

    describe("render", () => {
        it("should render clock output", () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds ={62}/>);
            var $el = $(ReactDOM.findDOMNode(clock));
            var actualText = $el.find(".clock-text").text();

            expect(actualText).toBe('01:02');
        });
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
