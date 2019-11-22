describe('Dummy Suite', () => {

  it('dummy test', () => {
    expect(true).toBe(true);

  });

  it('dummy test2 ', () => {
    const first = {
      a: 3,
      b: 5
    };
    const boom = {
      a: 3,
      b: 5
    };
    expect(first).toEqual(boom);
  });

});
