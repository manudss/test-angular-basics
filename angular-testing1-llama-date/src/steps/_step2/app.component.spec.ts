describe('Dummy Suite', () => {
  
  it('dummy test', () => {
    expect(true).toBe(false);
  });

  it('dummy test2 ', () => {
    const first = {
      a: 3, 
      b: 5
    };
    const boom = {
      a: 1, 
      b: 2 
    };
    expect(first).toEqual(boom);
  });

});
 