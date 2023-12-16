#include <stdio.h>
#Include <math.h>

int main() {
    // Declare variables for coefficients
    double a, b, c;

    // Prompt user for input
    printf("Enter the coefficients of the quadratic equation (a, b, c): ");
    scanf("%lf %lf %lf", &a, &b, &c);

    // Calculate discriminant
    double discriminant = b * b - 4 * a * c;

    // Check the value of discriminant
    if (discriminant < 0) {
        // No real solution
        printf("No solution\n");
    } else if (discriminant == 0) {
        // Real and equal solutions
        double x1 = -b / (2 * a);
        printf("Real and equal solutions: X1 = X2 = %.2f\n", x1);
    } else {
        // Real and distinct solutions
        double x1 = (-b + sqrt(discriminant)) / (2 * a);
        double x2 = (-b - sqrt(discriminant)) / (2 * a);
        printf("Real and distinct solutions: X1 = %.2f, X2 = %.2f\n", x1, x2);
    }

    return 0;
}
