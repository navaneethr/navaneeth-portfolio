---
title: "Understanding useEffect in React"
date: "2025-06-10"
---

The useEffect hook lets you perform side effects in function components.

- Fetch data
- Directly update the DOM
- Set up subscriptions

Example usage:

```tsx
useEffect(() => {
  // Your effect here
}, []);
```

Remember to clean up your effects!
