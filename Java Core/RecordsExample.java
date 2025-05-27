import java.util.ArrayList;
import java.util.List;

record Person(String name, int age) {
}

public class RecordsExample {
    public static void main(String[] args) {
        List<Person> people = new ArrayList<>();
        people.add(new Person("Alice", 30));
        people.add(new Person("Bob", 25));
        people.forEach(person -> System.out.println(person));
    }
}