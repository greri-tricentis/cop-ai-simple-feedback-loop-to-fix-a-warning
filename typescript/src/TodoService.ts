import type { TodoItem } from './TodoItem';

export class TodoService {
  private items: TodoItem[] = [];
  private nextId = 1;

  addItem(title: string, description: string, priority: number): TodoItem {
    const item: TodoItem = {
      id: this.nextId++,
      title,
      description,
      isCompleted: false,
      priority,
      createdAt: new Date(),
    };
    this.items.push(item);
    return item;
  }

  removeItem(id: number, soft: boolean): boolean {
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) return false;

    if (soft) {
      this.items[index].isDeleted = true;
    } else {
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

  getItem(id: number, returnCopy: boolean): TodoItem | undefined {
    const foundItem = this.items.find(item => item.id === id);
    if (!foundItem) return undefined;
    return returnCopy ? { ...foundItem } : foundItem;
  }

  getAllItems(): TodoItem[] {
    return [...this.items];
  }

  clearAll(keepCompleted: boolean): void {
    this.items = keepCompleted
      ? this.items.filter(item => item.isCompleted)
      : [];
  }
}

export const todoService = new TodoService();
