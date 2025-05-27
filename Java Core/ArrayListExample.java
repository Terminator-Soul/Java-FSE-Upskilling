import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        String name;
        while (true) {
            System.out.print("Enter a name (or 'exit' to stop): ");
            name = scanner.nextLine();
            if (name.equalsIgnoreCase("exit")) {
                break;
            }
            names.add(name);
        }
        System.out.println("Names entered: " + names);
    }
}