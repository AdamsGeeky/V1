#include <stdio.h>

int main() {
    double num1, num2, result;
    char operator;

    // Get user input
    printf("Enter first number: ");
    scanf("%lf", &num1);

    printf("Enter operator (+, -, *, /): ");
    scanf(" %c", &operator);  // Note the space before %c to consume any whitespace characters

    printf("Enter second number: ");
    scanf("%lf", &num2);

    // Perform arithmetic operations
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 != 0) {
                result = num1 / num2;
            } else {
                printf("Error: Division by zero is not allowed.\n");
                return 1;  // Exit with an error code
            }
            break;
        default:
            printf("Error: Invalid operator.\n");
            return 1;  // Exit with an error code
    }

    // Display the result
    printf("Result: %.2lf %c %.2lf = %.2lf\n", num1, operator, num2, result);

    return 0;  // Exit successfully
}
