import { useState, useEffect } from 'react'
const HooksExample = () => {
  const [input, setInput] = useState(10)
  useEffect(() => {
    document.title = `you have typed ${input}`
  })

  let count = 10
  const updateCount = () => {
    count = count + 1
    console.log(count)
  }
  document.title = `you have typed ${input}`
  return (
    <div>
      {/* <input
        value={input}
        placeholder="add todo"
        onInput={(e) => setInput(e.target.value)}
      />
      Updated Text: {input} */}
      count: {count}
      input: {input}
      <button onClick={updateCount}>Click me</button>
      <button onClick={() => setInput(input + 1)}>Click me using hooks</button>
    </div>
  )
}

export default HooksExample
