function Queue() {
    this.object = Object();

    this.enqueue = function(value) {
        console.log()
    }
}

const queue = new Queue();

queue.enqueue(1); // adds the element to the queue
queue.enqueue(3); // adds the element to the queue
queue.dequeue(); // returns the top element from queue and deletes it, returns 1
queue.getUnderlyingList() 