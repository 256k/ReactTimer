

var CountdownForm = require('countdownform');

describe('CountdownForm', () => {
    it("should exist", () => {
        expect(CountdownForm).toExist();
    });

    it('should call onSearch if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownform = TestUtils.renderIntoDocument(<CountdownForm onSearch={spy} />);
        var $el = $(ReactDOM.findDOMNode(countdownform));

        countdownform.refs.time.value = '109';
        TestUtils.Simulate.submit($el.find("form")[0]);
        expect(spy).toHaveBeenCalledWith(109);

    });
    it('should NOT call onSearch if no empty entered', () => {
        var spy = expect.createSpy();
        var countdownform = TestUtils.renderIntoDocument(<CountdownForm onSearch={spy} />);
        var $el = $(ReactDOM.findDOMNode(countdownform));

        countdownform.refs.time.value = '';
        TestUtils.Simulate.submit($el.find("form")[0]);
        expect(spy).toNotHaveBeenCalled();

    });
    it('should NOT call onSearch if letters entered', () => {
        var spy = expect.createSpy();
        var countdownform = TestUtils.renderIntoDocument(<CountdownForm onSearch={spy} />);
        var $el = $(ReactDOM.findDOMNode(countdownform));

        countdownform.refs.time.value = '121asdd';
        TestUtils.Simulate.submit($el.find("form")[0]);
        expect(spy).toNotHaveBeenCalled();

    });

});
