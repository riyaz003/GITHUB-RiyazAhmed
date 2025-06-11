package myfirstjavaapp;

public class deluxpizza extends pizza {

    public deluxpizza(int price) {
        super(price); // Calling the constructor of the superclass (pizza)
    }

    @Override
    public double getFinalPrice() {
        // You can add any specific logic for deluxe pizzas if needed
        return price * quantity; // Returns final price, based on quantity
    }
}
