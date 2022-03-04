import React, {useState, useEffect} from 'react'

const getStoredValue = (key, initialValue) => {
    const storedValue = JSON.parse(localStorage.getItem(key))
    if(storedValue) return storedValue

    return initialValue
}

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(getStoredValue(key, initialValue))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

export default useLocalStorage