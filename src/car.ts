class Car {
    showToast: boolean;

    constructor() {
        this.showToast = true;
    }

    hideToast(cbk: any) {
        setTimeout(() => {
            this.showToast = false;
            cbk();
        }, 4000);
    }

    simulateSendingMessage() {
        // Do some stuff
        return new Promise((resolve) => {
            setTimeout(() => {
                this.showToast = false;
                resolve("Hello");
            }, 4999);
        });
    }

    public go(msg: string): string {
        console.log(msg);
        return msg;
    }
}

export { Car };

