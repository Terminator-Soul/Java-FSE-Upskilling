public class TypeCastingExample {
    public static void main(String[] args) {
        double doubleValue = 9.78;
        int intValue = (int) doubleValue;
        System.out.println("Double to Int: " + intValue);

        intValue = 10;
        doubleValue = (double) intValue;
        System.out.println("Int to Double: " + doubleValue);
    }
}