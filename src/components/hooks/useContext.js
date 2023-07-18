import { createContext, useContext, useState } from 'react'

// useContext: lets you read and subscribe to context from your component.
// use: to avoid passing props => props => props down the children chain

// works as pair
// To pass context, wrap it or one of its parent components into the corresponding context provider:
function MyPage() {
    return (
      <ThemeContext.Provider value="dark">
        <MyComponent />
      </ThemeContext.Provider>
    )
  }

function MyComponent() {
    const theme = useContext(ThemeContext)
    //
}

// NOTE: useContext() always looks for the closest provider above the component. So it will NOT look at itself as provider


// https://codesandbox.io/s/ufg2tj?file=/App.js&utm_medium=sandpack

// e.g. fallback default value = light
const ThemeContext = createContext('light')

export const MyThemedBox = () => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        Use dark mode
      </label>
    </ThemeContext.Provider>
  )
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  )
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext)
  const className = 'panel-' + theme
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext)
  const className = 'button-' + theme
  return (
    <button className={className}>
      {children}
    </button>
  )
}
