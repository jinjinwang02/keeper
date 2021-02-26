const add = require('./add');

describe('test', () => {
  it('adds', () => {
    const result = add(1, 2);
    expect(result).toEqual(3);
  });
});
