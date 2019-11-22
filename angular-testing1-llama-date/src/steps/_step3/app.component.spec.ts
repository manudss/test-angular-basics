import { AppComponent } from "./app.component";

describe('METHOD: getWelcomingMessage', () => {
    let actualValue, expectedValue;

    it('should return  Hello with Bonnie', () => {

      const commponent = new AppComponent();

      actualValue = commponent.getWelcomingMessage('Bonnie');
      expectedValue = 'Hello Bonnie';

      expect( actualValue ).toEqual( expectedValue );
    });

    it('should return  Hello with Alyssa', () => {

      const commponent = new AppComponent();

      actualValue = commponent.getWelcomingMessage('Alyssa');
      expectedValue = 'Hello Alyssa';

      expect( actualValue ).toEqual( expectedValue );
    });
});


