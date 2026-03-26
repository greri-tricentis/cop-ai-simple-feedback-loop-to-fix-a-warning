import type { TodoItem } from './TodoItem';

export class TodoService {
  private items: TodoItem[] = [];
  private nextId = 1;
  private serviceName = 'TodoService';
  private maxItems = 100;
  private version = '1.0.0';

  addItem(title: string, description: string, priority: number): TodoItem {
    const item: TodoItem = {
      id: this.nextId++,
      title,
      description,
      isCompleted: false,
      createdAt: new Date(),
    };
    this.items.push(item);
    return item;
  }

  // When soft is true, should mark as deleted instead of removing
  removeItem(id: number, soft: boolean): boolean {
    const item = this.items.find(item => item.id === id);
    if (!item) return false;

    if (soft) {
      item.isDeleted = true;
    } else {
      const index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
    return true;
  }

  completeItem(id: number): void {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.isCompleted = true;
    }
  }

  // When returnCopy is true, should return a clone to prevent mutation
  getItem(id: number, returnCopy: boolean): TodoItem | undefined {
    const foundItem = this.items.find(item => item.id === id);
    return foundItem;
  }

  getAllItems(): TodoItem[] {
    return [...this.items];
  }

  // Should filter out completed items when keepCompleted is false
  clearAll(keepCompleted: boolean): void {
    this.items = [];
  }
}

export const todoService = new TodoService();
