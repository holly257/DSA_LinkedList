//Walk through the linked list code in the curriculum and understand it well.
//Then write a linked list class and its core functions
//(insertFirst, insertLast, remove, find) from scratch.

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class linkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertBefore(newItem, itemToInsertBefore) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        //if inserting before first item in list??
        if (this.head.value == itemToInsertBefore) {
            let firstNode = this.head;
            this.head = new _Node(newItem, this.head);
            this.head.next = firstNode;
            return;
        }

        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while (currNode !== null && currNode.value !== itemToInsertBefore) {
            // Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        let newNode = new _Node(newItem);
        newNode.next = currNode;
        previousNode.next = newNode;
    }

    insertAfter(newItem, itemToInsertAfter) {
        // If the list is empty
        if (!this.head) {
            return null;
        }

        //inserting after the first item in the list
        if (this.head.value == itemToInsertAfter) {
            let nodeAfterNewNode = this.head.next;
            this.head.next = new _Node(newItem, nodeAfterNewNode);
            return;
        }

        // Start at the head
        let currNode = this.head;
        // Keep track of next
        let nextNode = this.head;

        while (currNode !== null && currNode.value !== itemToInsertAfter) {
            // Save the previous node
            currNode = currNode.next;
            nextNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        let newNode = new _Node(newItem);
        newNode.next = nextNode;
        currNode.next = newNode;
    }

    insertAt(newItem, position) {
        // If the list is empty
        if (!this.head) {
            return null;
        }

        //inserting at the first item in the list
        if (position === 1) {
            this.insertFirst(newItem);
            return;
        }

        //start count at one for the first item in the list
        let count = 1;
        let currNode = this.head;
        let previousNode = this.head;

        //keep traversing while there are items and the count isnt the position
        while (currNode !== null && count !== position) {
            previousNode = currNode;
            currNode = currNode.next;
            //increase the count for each item in the list
            count++;
        }

        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        let newNode = new _Node(newItem);
        newNode.next = currNode;
        previousNode.next = newNode;
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            } else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while (currNode !== null && currNode.value !== item) {
            // Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

function main() {
    const SLL = new linkedList();

    SLL.insertFirst('1 Apollo');
    SLL.insertLast('2 Boomer');
    SLL.insertLast('3 Helo');
    SLL.insertLast('4 Husker');
    SLL.insertLast('5 Starbuck');
    SLL.insertLast('6 Tauhida');

    SLL.remove('4 Husker');

    SLL.insertBefore('1.5 Athena', '2 Boomer');
    SLL.insertAfter('3.5 Hotdog', '3 Helo');
    SLL.insertAt('new 3 - Kat', 7);

    SLL.remove('6 Tauhida')
    return SLL;
}

console.log(main());
