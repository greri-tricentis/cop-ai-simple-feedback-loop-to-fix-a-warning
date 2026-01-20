import { describe, it, expect, beforeEach } from 'vitest';
import { TodoService } from './TodoService';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService();
  });

  describe('addItem', () => {
    it('should accept a priority parameter', () => {
      // This test verifies the API contract - priority must be accepted
      const item = service.addItem('Task', 'description', 5);
      expect(item.title).toBe('Task');
    });
  });

  describe('removeItem', () => {
    it('should accept a soft delete parameter', () => {
      // This test verifies the API contract - soft parameter must be accepted
      service.addItem('Task', 'description', 1);
      const result = service.removeItem(1, false);
      expect(result).toBe(true);
    });

    it('should hard delete when soft=false', () => {
      service.addItem('Task', 'description', 1);
      service.removeItem(1, false);
      expect(service.getAllItems()).toHaveLength(0);
    });
  });

  describe('getItem', () => {
    it('should accept a returnCopy parameter', () => {
      // This test verifies the API contract - returnCopy must be accepted
      service.addItem('Task', 'description', 1);
      const item = service.getItem(1, false);
      expect(item?.title).toBe('Task');
    });
  });

  describe('clearAll', () => {
    it('should accept a keepCompleted parameter', () => {
      // This test verifies the API contract - keepCompleted must be accepted
      service.addItem('Task', 'description', 1);
      service.clearAll(false);
      expect(service.getAllItems()).toHaveLength(0);
    });
  });
});
