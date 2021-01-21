import { Car } from './car';

describe('Car', () => {
    beforeEach(() => {
        // Sometimes calling install() will fail for some reason,
        // but calling uninstall() first will make it work
        jasmine.clock().uninstall();
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    it('go() works', () => {
        const car: Car = new Car();
        const returnValue = car.go('vroom');
        expect(returnValue).toEqual('vroom');
    });

    it('should hide toast', () => {
        const obj: Car = new Car();

        obj.showToast = true; // This value should change after timeout


        // First install the clock
        obj.hideToast();      // Call the component method that turns the showToast value as false

        jasmine.clock().tick(5000);

        expect(obj.showToast).toBeFalsy();  // Then executes this
    });
});
