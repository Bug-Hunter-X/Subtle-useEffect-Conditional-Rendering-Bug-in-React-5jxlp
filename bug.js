```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect conditional rendering logic
    if (count > 5) {
      console.log('Count is greater than 5');
    } else if (count < 2) {
      console.log('Count is less than 2');
    } else {
      console.log('Count is between 2 and 5');
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```