package com.example.todo;

import java.util.Scanner;
import java.util.List;
import java.io.Serializable;

public class App {

    private static String VERSION = "1.0.0";

    public static void main(String[] args) {
        TodoService service = new TodoService();
        Scanner scanner = new Scanner(System.in);
        boolean running = true;

        int commandCount = 0;

        System.out.println("=== Simple Todo App ===");
        System.out.println("Commands: add, list, complete, remove, clear, quit");
        System.out.println();

        while (running) {
            System.out.print("> ");
            String input = scanner.nextLine().trim().toLowerCase();

            switch (input) {
                case "add":
                    System.out.print("Title: ");
                    String title = scanner.nextLine();
                    System.out.print("Description: ");
                    String description = scanner.nextLine();
                    service.addItem(title, description, 1);
                    System.out.println("Item added!");
                    break;

                case "list":
                    List<TodoItem> items = service.getAllItems();
                    if (items.isEmpty()) {
                        System.out.println("No items.");
                    } else {
                        for (int i = 0; i < items.size(); i++) {
                            System.out.println((i + 1) + ". " + items.get(i));
                        }
                    }
                    break;

                case "complete":
                    System.out.print("Item number: ");
                    try {
                        int completeIndex = Integer.parseInt(scanner.nextLine());
                        service.completeItem(completeIndex - 1);
                        System.out.println("Item marked complete!");
                    } catch (NumberFormatException e) {
                        System.out.println("Invalid number.");
                    }
                    break;

                case "remove":
                    System.out.print("Item number: ");
                    try {
                        int removeIndex = Integer.parseInt(scanner.nextLine());
                        service.removeItem(removeIndex - 1, false);
                        System.out.println("Item removed!");
                    } catch (NumberFormatException e) {
                        System.out.println("Invalid number.");
                    }
                    break;

                case "clear":
                    service.clearAll(false);
                    System.out.println("All items cleared!");
                    break;

                case "quit":
                case "exit":
                    running = false;
                    break;

                default:
                    System.out.println("Unknown command.");
                    break;
            }
        }

        scanner.close();
        System.out.println("Goodbye!");
    }
}
