class Calculator {
  private currentResult: number | null;
  private currentOperator: string | null;

  constructor() {
    this.currentResult = null;
    this.currentOperator = null;
  }

   calculateResult(num1: number, num2: number, operator: string): number {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          throw new Error("Cannot divide by zero");
        }
        return num1 / num2;
      default:
        throw new Error("Invalid operator");
    }
  }

  add(num: number): Calculator {
    if (this.currentResult === null) {
      this.currentResult = num;
    } else {
      this.currentResult = this.calculateResult(this.currentResult, num, '+');
    }
    this.currentOperator = '+';
    return this;
  }

  subtract(num: number): Calculator {
    if (this.currentResult === null) {
      this.currentResult = num;
    } else {
      this.currentResult = this.calculateResult(this.currentResult, num, '-');
    }
    this.currentOperator = '-';
    return this;
  }

  multiply(num: number): Calculator {
    if (this.currentResult === null) {
      this.currentResult = num;
    } else {
      this.currentResult = this.calculateResult(this.currentResult, num, '*');
    }
    this.currentOperator = '*';
    return this;
  }

  divide(num: number): Calculator {
    if (this.currentResult === null) {
      this.currentResult = num;
    } else {
      this.currentResult = this.calculateResult(this.currentResult, num, '/');
    }
    this.currentOperator = '/';
    return this;
  }

  getResult(): number {
    if (this.currentResult === null) {
      throw new Error("No calculation performed");
    }
    return this.currentResult;
  }

  clear(): void {
    this.currentResult = null;
    this.currentOperator = null;
  }
}

/* Simple test */
var calculator = new Calculator()
let res = calculator.add(5).add(5).divide(2).getResult()
console.log("The result of the operation is equals to ", res)