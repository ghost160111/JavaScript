class Item {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
        this.constructor.count++;
    }

    static count = 0;
    static GetCount() {
        return Item.count;
    }
}

let pen = new Item("Pen", 5);
let notebook = new Item("Notebook", 10);

console.log(Item.GetCount()); // 2
