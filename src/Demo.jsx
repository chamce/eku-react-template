import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import reactLogo from './assets/react.svg'
import bootstrapLogo from './assets/bootstrap.svg'
import eslintLogo from './assets/eslint.svg'
import prettierLogo from './assets/prettier.svg'

export const Demo = () => {
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
                Click on the Vite, React, Bootstrap, ESLint, and Prettier logos to learn more
            </p>
            <p className="read-the-docs">
                Wrapper component is loaded <a href="https://github.com/Paciolan/remote-component" target="_blank" rel="noreferrer">remotely</a>
            </p>
        </div>
    )
}