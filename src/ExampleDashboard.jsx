import { useState } from 'react';
import viteLogo from './assets/vite.svg';
import reactLogo from './assets/react.svg';
import bootstrapLogo from './assets/bootstrap.svg';
import eslintLogo from './assets/eslint.svg';
import prettierLogo from './assets/prettier.svg';

export const ExampleDashboard = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='vstack gap-5'>
      <div className='vstack gap-4'>
        <div className='d-flex justify-content-center flex-wrap column-gap-5 row-gap-4'>
          <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
            <img src={viteLogo} className='logo hover-bounce-in vite' alt='Vite logo' />
          </a>
          <a href='https://react.dev' target='_blank' rel='noreferrer'>
            <img src={reactLogo} className='logo hover-bounce-in react' alt='React logo' />
          </a>
          <a href='https://getbootstrap.com/' target='_blank' rel='noreferrer'>
            <img
              src={bootstrapLogo}
              className='logo hover-bounce-in bootstrap'
              alt='Bootstrap logo'
            />
          </a>
          <a href='https://eslint.org/' target='_blank' rel='noreferrer'>
            <img src={eslintLogo} className='logo hover-bounce-in eslint' alt='ESLint logo' />
          </a>
          <a href='https://prettier.io/' target='_blank' rel='noreferrer'>
            <img src={prettierLogo} className='logo hover-bounce-in prettier' alt='Prettier logo' />
          </a>
        </div>
        <h1 className='mb-0 lh-sm text-center display-5'>
          Vite + React + Bootstrap + ESLint + Prettier
        </h1>
      </div>
      <div className='vstack gap-4'>
        <div className='text-center'>
          <button
            type='button'
            className='btn btn-light btn-solid border-dark fs-5'
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </div>
        <p className='mb-0 lh-sm text-center fs-5'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className='vstack gap-4 fs-5'>
        <p className='mb-0 lh-sm text-center text-muted fs-5'>
          Click on the Vite, React, Bootstrap, ESLint, and Prettier logos to learn more
        </p>
        <p className='mb-0 lh-sm text-center text-muted fs-5'>
          Wrapper component is loaded{' '}
          <a href='https://github.com/Paciolan/remote-component' rel='noreferrer' target='_blank'>
            remotely
          </a>
        </p>
      </div>
    </div>
  );
};
