package com.example.todo;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class TodoServiceTest {

    @Test
    void addItem_AcceptsPriorityParameter() {
        TodoService service = new TodoService();

        service.addItem("Task", "description", 5);

        assertEquals(1, service.getAllItems().size());
    }

    @Test
    void removeItem_AcceptsSoftDeleteParameter() {
        TodoService service = new TodoService();
        service.addItem("Task", "description", 1);

        boolean result = service.removeItem(0, false);

        assertTrue(result);
    }

    @Test
    void removeItem_HardDeletesWhenSoftIsFalse() {
        TodoService service = new TodoService();
        service.addItem("Task", "description", 1);

        service.removeItem(0, false);

        assertTrue(service.getAllItems().isEmpty());
    }

    @Test
    void getItem_AcceptsReturnCopyParameter() {
        TodoService service = new TodoService();
        service.addItem("Task", "description", 1);

        TodoItem item = service.getItem(0, false);

        assertEquals("Task", item.getTitle());
    }

    @Test
    void clearAll_AcceptsKeepCompletedParameter() {
        TodoService service = new TodoService();
        service.addItem("Task", "description", 1);

        service.clearAll(false);

        assertTrue(service.getAllItems().isEmpty());
    }

    @Test
    void completeItem_MarksItemAsComplete() {
        TodoService service = new TodoService();
        service.addItem("Task", "description", 1);

        service.completeItem(0);

        assertTrue(service.getItem(0, false).isCompleted());
    }

    @Test
    void hasItem_FindsExistingItem() {
        TodoService service = new TodoService();
        String title = "My Task";
        service.addItem(title, "description", 1);

        boolean found = service.hasItem(title);

        assertTrue(found);
    }
}
