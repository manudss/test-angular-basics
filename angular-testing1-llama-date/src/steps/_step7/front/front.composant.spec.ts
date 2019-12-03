import { FrontComponent } from "./front.component";
import { TestBed } from '@angular/core/testing';


describe('front Component', ()=>{

  let componentUnderTest: FrontComponent;

   Given(() => {
     TestBed.configureTestingModule({
        providers: [FrontComponent]
      });

      componentUnderTest = TestBed.get(FrontComponent);
    }); // <-- Root level describe()

    describe('METHOD: isListVisible()', () => {

        let actualValue: boolean;

        When(() => {
           actualValue =componentUnderTest.isListVisible();
         });

        describe('input LLams', () => {
              Given(() => {
                        componentUnderTest.llamas = [{name: 'manu3'}];
                      });

              Then(() => {
                expect(actualValue).toEqual(true);
                });
        });

        describe('input empty', () => {
              Given(() => {
                        componentUnderTest.llamas = [];
                      });

              Then(() => {
                expect(actualValue).toEqual(false);
                });
        });




    });

});

