const Node = require('./node');

class LinkedList {
    constructor() {
        this.headList = null;
        this.tailList = null;
        this.length = 0;
    }

    append(data) {
        // create node
        let newNode = new Node;
        this.length++;
        newNode.data = data;
        // linking with list
        if (this.headList === null) {
            this.headList = newNode;
            this.tailList = newNode;
            return;
        }
        newNode.prev = this.tailList;
        this.tailList.next = newNode;
        this.tailList = newNode;
        
    }

    head() {
        if (this.headList) return this.headList.data;
        return null;
    }

    tail() {
        if (this.tailList) return this.tailList.data;
        return null;
    }

    at(index) {
        let i = 0;
        let tmp = this.headList;
        while (tmp) {
            if (i == index) return tmp.data;
            tmp = tmp.next;
            i++;
        }
        return null;
    }

    insertAt(index, data) {
        let newNode = new Node;
        this.length++;
        newNode.data = data;
        if (index == 0) {
            newNode.next = this.headList;
            this.headList.prev = newNode;
            this.headList = newNode;
            return;
        }
        if (index >= length - 1) {
            this.tailList.next = newNode;
            newNode.prev = this.tailList;
            this.tailList = newNode;
            return;

        }

        let tmp = this.headList;
        let i = 1;
        while (tmp.next !== null) {
            if (i == index) {
                newNode.prev = tmp;
                newNode.next = tmp.next;
                tmp.next.prev = newNode;
                tmp.next = newNode;
                return;
            }
            tmp = tmp.next;
            i++;
        }


        
    }

    isEmpty() {
        if (this.headList === null) return true;
        return false;
    }

    clear() {
        this.headList = null;
        this.tailList = null;
        this.length = 0;
    }

    deleteAt(index) {
        if (index >= this.length - 1) return;
        let i = 0;
        let tmp = this.headList;
        let current; 
        while (tmp) {
            if (i == index) {
                current =  tmp;
                break;
            }
            tmp = tmp.next;
            i++;
        }
        if (current == this.headList) {
            this.headList = current;
            current.prev = null;
        } else if (current == this.tailList) {
            this.tailList = currnet.prev;
            this.tailList.next = null;
        } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }


    }

    reverse() {
        let tmp = this.headList;
        let values = []
        while (tmp) {
            values.push(tmp.data);
            tmp = tmp.next;
        }
        values.reverse();
        this.clear();
        values.forEach(value => this.append(value));

    }

    indexOf(data) {
        let i = 0;
        let tmp = this.headList;
        while (tmp) {
            if (tmp.data == data) return i;
            tmp = tmp.next;
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;
