class Car {
    showToast: boolean;

    constructor() {
        this.showToast = true;
    }

    hideToast() {
        setTimeout(() => {
            this.showToast = false;
        }, 5000);
    }

    public go(msg: string): string {
        console.log(msg);
        return msg;
    }
}

export { Car };
