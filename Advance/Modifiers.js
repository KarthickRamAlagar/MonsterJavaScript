// private:
// The method or property is only accessible within the same class.
// Not accessible from outside the class or by subclasses.

// public:
// The method or property is accessible from anywhere (inside the class, subclasses, and outside).

// protected:
// The method or property is accessible within the class and its subclasses (child classes), but not from outside.

// but the js does not have any reserved keyword 
// instead of that we use closure and this keyword

function MyClass(publicField, privateField, protectedField) {
    // public field
    this.publicField = publicField;
    // private field (closure)
    const _privateField = privateField;
    // protected field (closure, by convention)
    const _protectedField = protectedField;

    // public method
    this.publicMethod = function () {
        return `Public Field: ${this.publicField}`;
    };

    // private method (closure)
    function _privateMethod() {
        return `private method: ${_privateField}`;
    }

    // protected method (closure)
    function _protectedMethod() {
        return `protected method: ${_protectedField}`;
    }

    // privileged method to access protected method
    this.accessProtectedMethod = function () {
        return _protectedMethod();
    };
}

const myObj = new MyClass("public Data", "Private Data", "Protected Data");

console.log(myObj.publicField);           // public Data
console.log(myObj._privateField);         // undefined
console.log(myObj._protectedField);       // undefined
console.log(myObj.publicMethod());        // Public Field: public Data
// The following lines will throw errors because the methods are not accessible from outside
// console.log(myObj._privateMethod());    // Error: myObj._privateMethod is not a function
// console.log(myObj._protectedMethod());  // Error: myObj._protectedMethod is not a function
console.log(myObj.accessProtectedMethod()); // protected method: Protected Data