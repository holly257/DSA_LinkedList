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
            // Save the next node
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

function display(list) {
    // If the list is empty
    if (!list.head) {
        return null;
    }
    let linkedList = [];
    let currNode = list.head;

    //while there are items in the list
    while (currNode !== null) {
        //push each item to the array
        linkedList.push(currNode.value);
        //move to the next item
        currNode = currNode.next;
    }

    return linkedList;
}

function size(list) {
    //returns 0 if empty list
    let count = 0;
    let currNode = list.head;

    //while there are items in the list
    while (currNode !== null) {
        //coutn each item in the list
        count++;
        //move to the next item
        currNode = currNode.next;
    }

    return count;
}

function isEmpty(list) {
    // If the list is empty
    if (!list.head) {
        return true;
    } else return false;
}

function findPrevious(list, item) {
    // If the list is empty
    if (!list.head) {
        return 'No items in list';
    }

    //inserting after the first item in the list
    if (list.head.value == item) {
        return 'Item is first in the list - no previous item.';
    }

    // Start at the head
    let currNode = list.head;
    // Keep track of next
    let previousNode = list.head;

    while (currNode !== null && currNode.value !== item) {
        // Save the previous node
        previousNode = currNode;
        currNode = currNode.next;
    }

    //if item searched for doesn't exist
    if (currNode === null) {
        return 'Item not found';
    }

    return previousNode;
}

function findLast(list) {
    // If the list is empty
    if (!list.head) {
        return 'No items in list';
    }

    let currNode = list.head;

    while (currNode.next !== null) {
        currNode = currNode.next;
    }

    if (currNode === null) {
        console.log('Item not found');
        return;
    }

    return currNode;
}

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            } else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

function reverseList(list) {
    // If the list is empty
    if (!list.head) {
        return null;
    }

    //if only one item in list
    if (!list.head.next) {
        return list;
    }

    let current = list.head;
    let prev = null;
    let next = null;

    //for items in list
    while (current !== null) {
        //set next value first
        next = current.next;
        //then reset the current.next ptr
        current.next = prev;
        //then move to next item in list
        prev = current;
        current = next;
    }

    list.head = prev;

    return list;
}

//antepenultimate means third from the last
function antepenultimate(list) {
    // If the list is empty, or only has 1 or 2 items
    if (!list.head || !list.head.next || !list.head.next.next) {
        return null;
    }

    let currNode = list.head;

    //while the nodes later isn't the end, go through the list
    while (currNode.next.next.next !== null) {
        currNode = currNode.next;
    }

    return currNode;
}

function findMiddle(list) {
    //if empty list
    if (!list.head) {
        return null;
    }

    //if only one item in list
    if (!list.head.next) {
        return list.head;
    }

    let listLength = size(list);
    let currNode = list.head;
    let middlePosition = 0;
    let middleNode = null;
    let currPosition = 1;
    let nextNode = null;
    let twoMiddles = null;

    //if the list is odd - return middle node
    if (listLength % 2 !== 0) {
        middlePosition = Math.floor(listLength / 2) + 1;
        while (currNode !== null && currPosition != middlePosition) {
            currNode = currNode.next;
            currPosition++;
        }
        middleNode = currNode;
        return middleNode;
    } else {
        //if the list is even, return the two middle nodes
        middlePosition = listLength / 2;
        while (currNode !== null && currPosition != middlePosition) {
            currNode = currNode.next;
            nextNode = currNode.next;
            currPosition++;
        }
        twoMiddles = [currNode, nextNode];
        return twoMiddles;
    }
}

//have two pointers being moved through list at different speeds
//if there is a loop - they will eventually collide
function cycleList(list) {
    console.log('cycle list');

    if (!list.head) {
        return null;
    }

    let slow_p = list.head;
    let fast_p = list.head;

    while (slow_p && fast_p && fast_p.next) {
        slow_p = slow_p.next;
        fast_p = fast_p.next.next;
        if (slow_p == fast_p) {
            return true;
        }
    }
    return false;
}

function main() {
    const SLL = new linkedList();

    SLL.insertFirst('1 Apollo');
    SLL.insertLast('2 Boomer');
    SLL.insertLast('3 Helo');
    SLL.insertLast('4 Husker');
    SLL.insertLast('5 Starbuck');
    SLL.insertLast('6 Tauhida');

    // SLL.remove('4 Husker');

    SLL.insertBefore('1.5 Athena', '2 Boomer');
    SLL.insertAfter('3.5 Hotdog', '3 Helo');
    // SLL.insertAt('new 3 - Kat', 7);

    // SLL.remove('6 Tauhida');

    let listValue = display(SLL);
    let listLength = size(SLL);
    let isTheListEmpty = isEmpty(SLL);
    let previousItemInList = findPrevious(SLL, '3 Helo');
    let lastItemInList = findLast(SLL);
    //let reversedList = reverseList(SLL);
    let third = antepenultimate(SLL);
    let middle = findMiddle(SLL);
    let listCycle = cycleList(SLL);
    return listCycle;
    //return SLL;
}

console.log(main());
