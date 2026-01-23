# Fixing TypeScript Warnings

## Unused Variable/Parameter Warnings (TS6133)

### Problem
TypeScript reports warnings when variables or parameters are declared but never used:
```
error TS6133: 'variableName' is declared but its value is never read.
```

### Solution Process

1. **Identify the unused item**
   - Check the warning message to see which variable/parameter is unused
   - Locate it in the code

2. **Check if it should be used**
   - If it's a prop, check where the component is used to see if the prop is being passed
   - Determine the intended purpose of the variable/parameter
   - Look for similar patterns in the codebase

3. **Apply the fix**
   - **Option A**: Use the variable/parameter in the component logic (preferred)
   - **Option B**: Remove it if it's truly not needed
   - **Option C**: Prefix with underscore (`_variableName`) if it's intentionally unused (e.g., for future use or API compatibility)

### Example: Unused Prop

**Before:**
```typescript
export function TodoList({ maxItems }: TodoListProps) {
  const [items, setItems] = useState<TodoItem[]>([]);
  // ... maxItems is never used
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```

**After:**
```typescript
export function TodoList({ maxItems }: TodoListProps) {
  const [items, setItems] = useState<TodoItem[]>([]);
  // ... maxItems is now used to limit displayed items
  return (
    <ul>
      {items.slice(0, maxItems).map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```

### Key Takeaways

- Always check where the component/function is used to understand the context
- Use semantic search or grep to find usages: `grep -r "ComponentName" src/`
- Prefer using the variable/parameter over removing it if it's being passed from parent components
- For array limiting, use `.slice(0, maxItems)` pattern
- For conditional logic, integrate the parameter into the component's behavior

### Common Patterns

- **Array limiting**: `array.slice(0, maxItems)`
- **Conditional rendering**: `{shouldShow && <Component />}`
- **Filtering**: `array.filter(item => condition)`
- **Styling**: Apply conditional classes or styles based on the prop
