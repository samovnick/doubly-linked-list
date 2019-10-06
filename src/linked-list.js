const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(data) {
        let newNode = new Node;
        newNode.data = data;
        newNode.prev = this.tail;
        this.tail.next = newNode;
        tail = newNode;
        this.length++;
    }

    head() {
        return this.head.data;
    }

    tail() {
        return this.tail.data;
    }

    at(index) {
        let i = 0;
        let tmp = this.head;
        while (tmp) {
            if (i == index) return tmp.data;
            tmp = tmp.next;
            i++;
        }
        return null;
    }

    insertAt(index, data) {
        let newNode = new Node;
        newNode.data = data;
        let tmp = this.head;
        for(let i = 0; i < this.length - 1; i++) {
            if (i == index) {
                newNode.prev = tmp;
                newNode.next = tmp.next;
                tmp.next.prev = newNode;
                tmp.next = newNode;
                return;
            }
            tmp = tmp.next;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    isEmpty() {
        if (head === null) return true;
        return false;
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    deleteAt(index) {
        let tmp = this.at(index);
        tmp.prev.next = tmp.next;
        tmp.next.prev = tmp.prev;
    }

    reverse() {
        let tmp = this.head;

    }

    indexOf(data) {
        let i = 0;
        let tmp = this.head;
        while (tmp) {
            if (tmp.data == data) return i;
            tmp = tmp.next;
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;
