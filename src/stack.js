function Stack() {
    this.array = Array();

    if (this.array.length === 0) {
        return undefined;
    }

    this.push = function(num) {
        console.log(this.array.push(num))
    };

    this.peek = function(num) {
        console.log(this.array[num]);
    };

    this.pop = function() {
        console.log(this.array.pop())
    };
};

const stack = new Stack();

stack.push(1); 
stack.peek(); 
stack.pop();
stack.pop();