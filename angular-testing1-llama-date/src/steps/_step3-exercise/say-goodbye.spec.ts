describe('Exercise', () => {



  function sayGoodbye(name?: string): string {
    if (!name) {
      return 'No Name!';
    }
    return 'Goodbye ' + name + '!';
  }

  let actualValue, expectedValue;

  describe('sayGoodbye function', () => {
     beforeEach(() => {

    console.log('I LOVE MY LLAMAS!');
  });

      it ('should return Goodby Bonnie', () => {

        actualValue = sayGoodbye('Bonnie');
        expectedValue = 'Goodbye Bonnie!';

        expect(actualValue).toEqual(expectedValue);

      });

      describe('should failed and ', () => {

        it ('should return No Name! when no Name specifyed', () => {

          actualValue = sayGoodbye();
          expectedValue = 'No Name!';

          expect(actualValue).toEqual(expectedValue);

        });
      });
  });
});
