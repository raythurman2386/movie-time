import { useState } from 'react'

export const useLocalStorage = initialValue => {
  const [storedValue, setValue] = useState(() => {
    const item = window.localStorage.getItem('Page')

    return item ? JSON.parse(item) : initialValue
  })

  const setStoredValue = newValue => {
    setValue(newValue)

    window.localStorage.setItem('Page', JSON.stringify(newValue))
  }

  return [storedValue, setStoredValue]
}
