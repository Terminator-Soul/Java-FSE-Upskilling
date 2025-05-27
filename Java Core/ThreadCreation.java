class MessageThread extends Thread {
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println("Message from thread: " + Thread.currentThread().getName());
        }
    }
}

public class ThreadCreation {
    public static void main(String[] args) {
        MessageThread thread1 = new MessageThread();
        MessageThread thread2 = new MessageThread();
        thread1.start();
        thread2.start();
    }
}