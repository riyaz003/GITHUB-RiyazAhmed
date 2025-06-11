package myfirstjavaapp;

import java.util.Scanner;

public class main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        pizza selectedPizza = null;
        double totalBill = 0; // To track the total bill

        while (true) {
            System.out.println("Welcome to Pizzamania!");
            System.out.println("1. Veg Pizza - ₹300");
            System.out.println("2. Non-Veg Pizza - ₹400");
            System.out.println("3. Deluxe Veg Pizza (Extra Cheese + Toppings Included) - ₹550");
            System.out.println("4. Deluxe Non-Veg Pizza (Extra Cheese + Toppings Included) - ₹650");
            System.out.print("Please select the pizza (1/2/3/4): ");
            int pizzaChoice = sc.nextInt();

            switch (pizzaChoice) {
                case 1:
                    selectedPizza = new pizza(300); // Veg Pizza
                    break;
                case 2:
                    selectedPizza = new pizza(400); // Non-Veg Pizza
                    break;
                case 3:
                    selectedPizza = new deluxpizza(550); // Deluxe Veg Pizza
                    break;
                case 4:
                    selectedPizza = new deluxpizza(650); // Deluxe Non-Veg Pizza
                    break;
                default:
                    System.out.println("Invalid choice! Please try again.");
                    continue;
            }

            // Ask for the pizza quantity
            System.out.print("Enter the quantity: ");
            int quantity = sc.nextInt();
            selectedPizza.setQuantity(quantity);

            char cheeseChoice = 'n';
            char toppingsChoice = 'n';

            // Ask for extras (only for regular pizzas, not deluxe)
            if (!(selectedPizza instanceof deluxpizza)) {
                System.out.print("Want Extra Cheese? (y/n): ");
                cheeseChoice = sc.next().charAt(0);
                if (cheeseChoice == 'y' || cheeseChoice == 'Y') {
                    selectedPizza.addExtraCheese();
                } else {
                    selectedPizza.removeExtraCheese(); // Remove if not selected
                }

                System.out.print("Want Extra Toppings? (y/n): ");
                toppingsChoice = sc.next().charAt(0);
                if (toppingsChoice == 'y' || toppingsChoice == 'Y') {
                    selectedPizza.addExtraToppings();
                } else {
                    selectedPizza.removeExtraToppings(); // Remove if not selected
                }
            } else {
                System.out.println("Extras cannot be modified for Deluxe Pizzas.");
            }

            // Ask for takeaway option
            System.out.print("Want Takeaway (y/n): ");
            char takeawayChoice = sc.next().charAt(0);
            if (takeawayChoice == 'y' || takeawayChoice == 'Y') {
                selectedPizza.addTakeaway();
            } else {
                selectedPizza.removeTakeaway();
            }

            // Add the cost of the current pizza to the total bill
            totalBill += selectedPizza.getFinalPrice();

            // Display current pizza's bill
            System.out.println("Current Pizza Bill: ₹" + selectedPizza.getBill());

            System.out.print("Do you want to order another pizza? (y/n): ");
            char anotherOrder = sc.next().charAt(0);
            if (anotherOrder != 'y' && anotherOrder != 'Y') {
                break; // Exit the loop if user doesn't want to order another pizza
            }
        }

        // Display final total bill
        System.out.println("\n--- Final Bill ---");
        System.out.println("Total Amount: ₹" + totalBill);
        System.out.println("Thank you for visiting Pizzamania!");

        sc.close(); // Close Scanner
    }
}
