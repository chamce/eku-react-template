## Development

You can use degit to scaffold your project with this template:

```
npx degit chamce/eku-react-template my-project
cd my-project

npm install
npm run dev
```

And then open http://localhost:5173 to view it in the browser.

#### Available Scripts

In this project, you can run the following scripts:

| Script          | Description                                         |
| --------------- | --------------------------------------------------- |
| npm run dev     | Runs the app in the development mode.               |
| npm run build   | Builds the app for production to the `docs` folder. |
| npm run preview | Serves the production build from the `docs` folder. |

## Notes

- Location of wrapper component (wrapper.cjs)
    - https://raw.githubusercontent.com/chamce/remote-starter/master/dist/wrapper.cjs

- Location of eku favicons
    - https://chamce.github.io/eku-favicons/

- Wrapper contains location of favicons and inserts a link to each one (at runtime) in any client app we render the wrapper in. Therefore, our client apps no longer need to come with favicons

- Location of template live demo
    - https://chamce.github.io/eku-react-template/

- Template already fetches wrapper at runtime, so template will already appear bundled with wrapper and favicons after being run

- Location of template repo with instructions on getting started
    - https://github.com/chamce/eku-react-template

- After getting started, you can begin making changes to the App.jsx and App.css files found in the src folder. Refer to any of the links shown on screen/found in the App.jsx file to learn more

- To be done by Chance
    - Host these resources on our server instead of github
    - Move the wrapper repo to our server and create a process for Chad to change settings of the wrapper and then redeploy