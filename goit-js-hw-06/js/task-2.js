"use strict";

class Storage {
    #items;
    constructor(items) {
        this.#items = items;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        if (this.#items.includes(newItem)) {
            console.log(`${newItem} is in a Storage already!`)
        } else {
            this.#items.push(newItem)
        }
    }

    removeItem(itemToRemove) {
        const indexToDelete = this.#items.indexOf(itemToRemove);

        if (indexToDelete === -1) {
            console.error(`${itemToRemove} is not in a Storage`);
            return;
        }

        this.#items.splice(indexToDelete, 1);
    }
    
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
