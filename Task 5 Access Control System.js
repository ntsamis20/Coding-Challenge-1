// Task 1: Variables and Data Types

let customerName = "Steve Irwin";
const customerID = 342;
var isPremiumMember = false;

console.log(customerName, typeof(customerName));
console.log(customerID, typeof(customerID));
console.log(isPremiumMember, typeof(isPremiumMember));

// Task 2: Compound Data Types

let products = ["Windows Computer", "Monitors, Router"];
const productDetails = {
    products: "Windows Computer",
    price: 1799.99,
    inStock: true
};

console.log(products);
console.log(productDetails);

// Task 3: Assignment Operators

let accountBalance = 1000;
accountBalance += 200;
accountBalance -= 150;
accountBalance *= 1.05;
accountBalance /= 1.10;
accountBalance %= 100;

console.log("Deposited 200:", accountBalance);
console.log("Withdrew 150:", accountBalance);
console.log("5% interest rate:", accountBalance);
console.log("10% Bank fee:", accountBalance);
console.log("Remainder after dividing by 100:", accountBalance);

// Task 4 Comparison Operators

let employeeScore1 = 65
let employeescore2 = 91
console.log("employeeScore1 >= employeeScore2:", employeeScore1 >= employeeScore2);
console.log("employeeScore1 === employeeScore2:", employeeScore1 === employeeScore2);
console.log("employeeScore1 > employeeScore2:", employeeScore1 > employeeScore2);
console.log("employeeScore1 < employeeScore2:", employeeScore1 < employeeScore2);
console.log("employeeScore1 <= employeeScore2:", employeeScore1 <= employeeScore2);

// Task 5 Logical Operators

let hasKeys = true;
let hasPermission = false;
let restrictedAccess = hasKeys && hasPermission;
let canAccessCommons = hasKeys || hasPermission;
let noPermission = !hasPermission;
let canAccessAll = (hasKeys && hasPermission) || noPermission;
console.log("Can access restricted area (AND):", restrictedAccess); // false
console.log("Can access commons (OR):", canAccessCommons); // true
console.log("no permission:", noPermission); // true
console.log("Can access all:", canAccessAll); // true


