// import { Car } from './car';

// function simulateAsyncOp(callback) {
//     setTimeout(function () {
//         callback();
//     }, 1000);
// }

// describe('Car', () => {
//     beforeEach(() => {
//         // Sometimes calling install() will fail for some reason,
//         // but calling uninstall() first will make it work
//         jasmine.clock().uninstall();
//         jasmine.clock().install();
//     });

//     afterEach(() => {
//         jasmine.clock().uninstall();
//     });

//     // it('go() works', () => {
//     //     const car: Car = new Car();
//     //     const returnValue = car.go('vroom');
//     //     expect(returnValue).toEqual('vroom');
//     // });

//     it('should hide toast', (done) => {
//         const obj: Car = new Car();

//         //obj.showToast = true; // This value should change after timeout

//         console.log(obj.showToast);

//         expect(obj.showToast).toBeTruthy();

//         // First install the clock
//         obj.hideToast();      // Call the component method that turns the showToast value as false

//         // const prom = Promise.resolve();

//         // jasmine.clock().tick(1001);

//         Promise.resolve().then(() => {
//             jasmine.clock().tick(1001);
//             console.log(obj.showToast);
//             expect(obj.showToast).toBeFalsy();
//             done();
//         });

//         // jasmine.clock().tick(4001);

//         // setTimeout(() => {
//         //     //jasmine.clock().tick(1001);
//         //     expect(obj.showToast).toBeFalsy();  // Then executes this
//         //     done()
//         // }, 1000)
//     });

//     // beforeEach(function () {
//     //     jasmine.clock().install();
//     // });

//     // afterEach(function () {
//     //     jasmine.clock().uninstall();
//     // });

//     // it("should call the asynchronous operation synchronously", function () {
//     //     var completed = false;
//     //     simulateAsyncOp(() => {
//     //         completed = true;
//     //     });
//     //     expect(completed).toEqual(false);
//     //     jasmine.clock().tick(1001);
//     //     expect(completed).toEqual(true);
//     // });
// });

// describe("Manually ticking the Jasmine Clock", function () {
//     let timerCallback: jasmine.Spy<jasmine.Func>;
//     beforeEach(function () {
//         timerCallback = jasmine.createSpy("timerCallback");
//         jasmine.clock().install();
//     });
//     afterEach(function () {
//         jasmine.clock().uninstall();
//     });
//     it("causes a timeout to be called synchronously", function () {
//         setTimeout(function () {
//             timerCallback();
//         }, 100);
//         expect(timerCallback).not.toHaveBeenCalled();

//         Promise.resolve().then(() => {
//             jasmine.clock().tick(101);
//             expect(timerCallback).toHaveBeenCalled();

//         });
//     });
// });


// import { Car } from './car';

// describe('Car', () => {
//     beforeEach(() => {
//         //jasmine.clock().uninstall(); // you probably don't need this line
//         jasmine.clock().install();
//     });

//     afterEach(() => {
//         jasmine.clock().uninstall();
//     });

//     it('should hide toast', () => {
//         const obj: Car = new Car();
//         obj.showToast = true; // also here, it's redundant, as set to true in constructor
//         obj.hideToast();
//         Promise.resolve().then(() => {
//             jasmine.clock().tick(5000);
//             expect(obj.showToast).toBeFalsy();
//         });
//     });
// });


import { Car } from './car';

describe('Car', () => {
    // beforeEach(() => {
    //     jasmine.clock().uninstall(); // you probably don't need this line
    //     jasmine.clock().install();
    // });

    // afterEach(() => {
    //     jasmine.clock().uninstall();
    // });

    it('should wait half a second', (done) => {
        const obj: Car = new Car();
        const clock = jasmine.clock().install();
        let messagePromise = obj.simulateSendingMessage();
        clock.tick(10);
        messagePromise.then(() => {
            expect(obj.showToast).toBe(false);
            clock.uninstall();
            done();
        });
    });

    xit('should hide toast', (done) => {

        const obj: Car = new Car();

        jasmine.clock().install();

        //obj.showToast = true; // also here, it's redundant, as set to true in constructor
        // console.log(obj.showToast);
        // obj.hideToast();

        const x = new Promise<void>((resolve) => {
            // obj.hideToast;


            obj.hideToast(resolve);
        });

        // spyOn(obj, 'hideToast').and.callThrough(x);

        // spyOn(obj, 'hideToast').and.callFake(x);



        let messagePromise = x;
        jasmine.clock().tick(4000);
        messagePromise.then(() => {
            expect(obj.showToast).toBe(false);
            jasmine.clock().uninstall();
            done();
        });

        // jasmine.clock().tick(2000);

        // console.log(obj.showToast);

        // await Promise.resolve()

        // Promise.resolve().then(() => {
        //     console.log("tick", obj.showToast);
        //     jasmine.clock().tick(2000);
        //     console.log("tick after", obj.showToast);
        //     expect(obj.showToast).toBeFalsy();
        //     //expect(waitSpy).toHaveBeenCalled();
        //     jasmine.clock().uninstall();
        //     done();
        // });
    });
});
