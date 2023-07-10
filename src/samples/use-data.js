import { useEffect, useState } from "react"

const useData = (url) => {
    const [data, setData] = useState(null)
    useEffect(() => {
      if (url) {
        let ignore = false
        fetch(url)
          .then(response => response.json())
          .then(json => {
            if (!ignore) {
              setData(json)
            }
          })
        return () => ignore = true
      }
    }, [url])
    return data
}

const [sample, setSample] = useState({
  one: 'param',
  two: 'pr',
  o: 0,
  myparam: 4
})


let coolParam = 'myparam'

setSample({...sample, coolParam: '9'})
setSample({...sample, ['coolParam']: '9'})

setSample({  two: 'pr', o: 0, one: '9'})

let y = Object.clone({...sample, one: '9'})
y.one = 9
setSample(y)
