function addingEventListener() {
}
const sinon = require('sinon');
const { addingEventListener } = require('./index'); // Import the function to test

describe('index.js', () => {
  let input;

  beforeEach(function () {
    input = document.createElement('input'); // Create an input element for testing
    input.id = 'input';
    document.body.appendChild(input); // Append the input element to the body
    sinon.spy(input, 'addEventListener');
  });

  afterEach(function () {
    input.removeEventListener('click', addingEventListener); // Remove the event listener after each test
    document.body.removeChild(input); // Remove the input element from the body
  });

  it('binds an event listener in addingEventListener()', () => {
    addingEventListener();
    expect(input.addEventListener.calledWith('click')).to.be.true;
  });
});
