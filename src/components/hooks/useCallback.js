import React, { useMemo, useCallback } from "react"

// useCallback is nearly identically to useMemo 
// BUT useCallback is used specifically for caching FUNCTIONS instead of caching values.
// the main difference: 
// useMemo will call the function passed to it whenever its dependencies change and will return the value of that function call. 
// useCallback on the other hand will not call the function passed to it and instead will return a new version of the function passed to it whenever the dependencies change. 
// Basically: useCallback will return the same function as before which maintains referential equality as long as the dependencies do not change.

const Sample = () => { 
    let a,b
    useCallback(() => {
        return a + b
    }, [a, b])
      
    useMemo(() => {
        return () => a + b
    }, [a, b])

    return <div>hello world</div>
}

// p.s. also heed: component will not re-render unless the props change.
React.memo(function Component(props) {
  // Do something
})
