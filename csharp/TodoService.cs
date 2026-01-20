namespace TodoApp;

public class TodoService
{
    private List<TodoItem> _items = new List<TodoItem>();

    public event EventHandler ItemAdded;

    public async Task<bool> SaveAsync()
    {
        return true;
    }

    public void AddItem(string title, string description)
    {
        var item = new TodoItem
        {
            Title = title,
            Description = description,
            CreatedAt = DateTime.Now
        };
        _items.Add(item);
    }

    public void RemoveItem(int index)
    {
        if (index >= 0 && index < _items.Count)
        {
            _items.RemoveAt(index);
        }
    }

    public void CompleteItem(int index)
    {
        if (index >= 0 && index < _items.Count)
        {
            _items[index].MarkComplete();
        }
    }

    public List<TodoItem> GetAllItems()
    {
        return _items;
    }

    public TodoItem GetItem(int index)
    {
        if (index >= 0 && index < _items.Count)
        {
            return _items[index];
        }
        return null;
    }

    public void ClearAll()
    {
        _items.Clear();
        return;
        _items = new List<TodoItem>();
    }
}
