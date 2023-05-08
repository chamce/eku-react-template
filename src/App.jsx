import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import reactLogo from './assets/react.svg'
import bootstrapLogo from './assets/bootstrap.svg'
import eslintLogo from './assets/eslint.svg'
import prettierLogo from './assets/prettier.svg'
import './App.css'

// replace the default modal header button (close button) with the dynamicModalButton prop to have a button which automatically turns into a back button when travelling from the fullscreen modal to another modal
// Bootstrap Modal Usage: https://getbootstrap.com/docs/5.3/components/modal/

function App({ dynamicModalButton }) {
  const [count, setCount] = useState(0)

  return (
    <div className='text-center'>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
          <img src={bootstrapLogo} className="logo bootstrap" alt="Bootstrap logo" />
        </a>
        <a href="https://eslint.org/" target="_blank" rel="noreferrer">
          <img src={eslintLogo} className="logo eslint" alt="ESLint logo" />
        </a>
        <a href="https://prettier.io/" target="_blank" rel="noreferrer">
          <img src={prettierLogo} className="logo prettier" alt="Prettier logo" />
        </a>
      </div>
      <h1>Vite + React + Bootstrap + ESLint + Prettier</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Wrapper component is loaded <a href="https://github.com/Paciolan/remote-component" target="_blank" rel="noreferrer">remotely</a>
      </p>
    </div>
  )
}

export default App

/*
* deploy template to github (eku-react-template)
* add readme from thumbnail-app to template
* vite + react + bootstrap in template (+ eslint + prettier)?
* include something about remote component in app.jsx?
- make short instructions on how to get started, maybe provide a couple links
- update style

* fill ice trays
* call mom

* add avenir font to wrapper
* change modal header button to dynamic modal button
* color picker moves slightly when opening modal or sidebar
* head manager in wrapper? how important is this? and is it possible to use the required tags? it is possible to point to public folder
*/