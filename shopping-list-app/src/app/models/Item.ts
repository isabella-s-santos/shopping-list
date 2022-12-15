export default class Item {
    static lastId: number = 1;
    
    id: number;
    name: string;
    measurementUnit?: string;
    quantity?: number;
    price?: number;
    date?: Date;
    status: boolean;

    constructor(name: string, measurementUnit?: string, quantity?: number, price?: number, date?: Date, status: boolean = false) {
        this.id = Item.updateLastId();
        
        this.name = name;
        this.measurementUnit = measurementUnit;
        this.quantity = quantity;
        this.price = price;
        this.date = date;
        this.status = status;
    };

    static updateLastId(id?: number): number {
        return ++this.lastId;
    };
};