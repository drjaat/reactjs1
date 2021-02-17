import { useState } from 'react'
import ErrorBoundries from './ErrorBoundries'

const BuggyCounter = () => {
  const [counter, setCounter] = useState(1)
  const [counter1, setCounter1] = useState(1)

  const setCounterWithCheck = (counter) => {
    if (counter == 5) {
      throw new Error('I crashed!')
    }
    setCounter(counter)
  }
  return (
    <>
      <ErrorBoundries
        fallbackRender={({ error, resetErrorBoundary, componentStack }) => (
          <div>
            <h1>An error occurred: {error.message}</h1>
            <button>Try again</button>
          </div>
        )}
      >
        <h1 onClick={() => setCounterWithCheck(counter + 1)}>
          Click me: {counter}
        </h1>
      </ErrorBoundries>
      <ErrorBoundries
        fallbackRender={({ error, resetErrorBoundary, componentStack }) => (
          <div>
            <h1>An error occurred: {error.message}</h1>
            <button>Try again</button>
          </div>
        )}
      >
        <h1 onClick={() => setCounterWithCheck(counter1 + 1)}>
          Click me: {counter1}
        </h1>
      </ErrorBoundries>
    </>
  )
}

export default BuggyCounter

const OurFallbackComponent = ({
  error,
  componentStack,
  resetErrorBoundary,
}) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
