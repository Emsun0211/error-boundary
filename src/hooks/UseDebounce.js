import React from 'react'

function UseDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = React.useState()
    React.useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500) 
        return () => {
          clearTimeout(timer)
        }
      }, [value, delay])
  return debouncedValue
}

export default UseDebounce