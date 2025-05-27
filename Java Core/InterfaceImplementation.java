interface Playable {
    void play();
}

class Guitar implements Playable {
    public void play() {
        System.out.println("Playing guitar");
    }
}

class Piano implements Playable {
    public void play() {
        System.out.println("Playing piano");
    }
}

public class InterfaceImplementation {
    public static void main(String[] args) {
        Playable guitar = new Guitar();
        Playable piano = new Piano();
        guitar.play();
        piano.play();
    }
}