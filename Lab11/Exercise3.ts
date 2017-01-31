class BaseObject {
    width: number = 0;
    height: number = 0;
}
class Rectangle extends BaseObject{
    constructor() {
        super();
        this.width = 5;
        this.height = 2;
    }
    calcSize(): number {
        return this.height * this.width;
    }
}
const r = new Rectangle();
console.log(r.calcSize());
