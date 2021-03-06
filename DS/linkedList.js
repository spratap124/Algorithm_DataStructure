// linked list implementation

// new node constructor
function Node(val) {
    this.val = val;
    this.next = null;
}

//linked list constructor
function linkedList() {

    this.front = null;
    this.insert = insert;
    this.deleteNode = deleteNode;
    this.print = print;
}

//insert a node
function insert(data) {
    // Creating a node and initailising 
    // with data 
    var newNode = new Node(data);
    var pointer = this.front;

    // if front is null then node will
    // be added to the list and made front.
    if (this.front == null) {
        this.front = newNode;
    } else {
        //if there is next node then move to next node
        while (pointer.next != null) {
            //move the pointer to the next node
            pointer = pointer.next;
        }
        pointer.next = newNode;
    }

}

//delete a node
function deleteNode(data) {
    var head = this.front;
    var prevNode = this.front;
    var temp = this.front;

    // If head node itself holds the key to be deleted
    if (temp != null && temp.val == data) {
        //change head
        head = temp.next;

        //point the front to the head
        this.front = head;
    }

    // Search for the key to be deleted, keep track of the
    // previous node as we need to change 'prev->next'
    while (temp != null && temp.val != data) {
        prevNode = temp;
        temp = temp.next;
    }

    // If key was not present in linked list
    if (temp == null) {
        console.log("data not found");
    } else {
        //if found the key,
        // Unlink the node from linked list
        prevNode.next = temp.next;
        this.print();
    }

}

//print the list
function print() {
    var pointer = this.front;
    var list = "";
    while (pointer !== null) {
        list += pointer.val + "-->";
        pointer = pointer.next;
    }
    console.log("List = ", list);
    console.log("//list operations");
    console.log("//list.insert(34)");
    console.log("//list.deleteNode(34)");
}

var data = [3,4,5,6,7,8,9];

var list = new linkedList();

data.forEach(function(d){
    list.insert(d);
});

list.print();