package myfirstjavaapp;

public class pizza {
    protected int price;
    protected int quantity;
    protected boolean extraCheese;
    protected boolean extraToppings;
    protected boolean takeaway;

    public pizza(int price) {
        this.price = price;
        this.quantity = 1; // Default quantity is 1
        this.extraCheese = false;
        this.extraToppings = false;
        this.takeaway = false;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void addExtraCheese() {
        if (!extraCheese) {
            this.price += 100; // Adding extra cheese charge
            this.extraCheese = true;
        }
    }

    public void addExtraToppings() {
        if (!extraToppings) {
            this.price += 150; // Adding extra toppings charge
            this.extraToppings = true;
        }
    }

    public void addTakeaway() {
        if (!takeaway) {
            this.price += 20; // Adding takeaway charge
            this.takeaway = true;
        }
    }

    public void removeExtraCheese() {
        if (this.extraCheese) {
            this.price -= 100; // Removing extra cheese charge
            this.extraCheese = false;
        }
    }

    public void removeExtraToppings() {
        if (this.extraToppings) {
            this.price -= 150; // Removing extra toppings charge
            this.extraToppings = false;
        }
    }

    public void removeTakeaway() {
        if (this.takeaway) {
            this.price -= 20; // Removing takeaway charge
            this.takeaway = false;
        }
    }

    public String getBill() {
        return "Total Price for " + quantity + " pizza(s): ₹" + (price * quantity);
    }

    // Add the method to return the final price (taking into account quantity and extras)
    public double getFinalPrice() {
        return price * quantity; // Return the total price for the current pizza
    }
}
