// aqui escribire el pseudocodigo//
/*pseudocodigo
inicio 
*leer a 
*leer b
*sumar<-a+b
*escribir suma
*fin */

import java.util.Scanner;

public class Calculadora {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int opcion = 0;

        System.out.println("==============================");
        System.out.println("      CALCULADORA EN JAVA     ");
        System.out.println("==============================");

        do {
            mostrarMenu();
            System.out.print("Elige una opción: ");

            // Validar que se ingrese un número
            if (!scanner.hasNextInt()) {
                System.out.println("⚠️  Por favor, ingresa un número válido.\n");
                scanner.next(); // Limpiar entrada inválida
                continue;
            }

            opcion = scanner.nextInt();

            if (opcion >= 1 && opcion <= 5) {
                System.out.print("Ingresa el primer número: ");
                double num1 = leerNumero(scanner);

                System.out.print("Ingresa el segundo número: ");
                double num2 = leerNumero(scanner);

                double resultado = 0;
                boolean operacionValida = true;

                switch (opcion) {
                    case 1:
                        resultado = num1 + num2;
                        System.out.printf("Resultado: %.2f + %.2f = %.2f%n", num1, num2, resultado);
                        break;
                    case 2:
                        resultado = num1 - num2;
                        System.out.printf("Resultado: %.2f - %.2f = %.2f%n", num1, num2, resultado);
                        break;
                    case 3:
                        resultado = num1 * num2;
                        System.out.printf("Resultado: %.2f * %.2f = %.2f%n", num1, num2, resultado);
                        break;
                    case 4:
                        if (num2 == 0) {
                            System.out.println("❌ Error: No se puede dividir entre cero.");
                            operacionValida = false;
                        } else {
                            resultado = num1 / num2;
                            System.out.printf("Resultado: %.2f / %.2f = %.2f%n", num1, num2, resultado);
                        }
                        break;
                    case 5:
                        System.out.println("¡Hasta luego! 👋");
                        break;
                }
                System.out.println();
            } else if (opcion != 5) {
                System.out.println("⚠️  Opción no válida. Intenta de nuevo.\n");
            }

        } while (opcion != 5);

        scanner.close();
    }

    // Muestra el menú de opciones
    private static void mostrarMenu() {
        System.out.println("Selecciona una operación:");
        System.out.println("1. Suma");
        System.out.println("2. Resta");
        System.out.println("3. Multiplicación");
        System.out.println("4. División");
        System.out.println("5. Salir");
    }

    // Lee un número decimal validando la entrada
    private static double leerNumero(Scanner scanner) {
        while (!scanner.hasNextDouble()) {
            System.out.print("⚠️  Entrada inválida. Ingresa un número: ");
            scanner.next();
        }
        return scanner.nextDouble();
    }
}