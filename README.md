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

## At A Glance

- Location of wrapper component (wrapper.cjs) - https://raw.githubusercontent.com/chamce/remote-starter/master/dist/wrapper.cjs
  <br /><br />
- Location of eku favicons - https://chamce.github.io/eku-favicons/
  <br /><br />
- Wrapper contains location of favicons and inserts a link to each one (at runtime) in any client app we render the wrapper in. Therefore, our client apps no longer need to come with favicons
  <br /><br />
- Location of template live demo - https://chamce.github.io/eku-react-template/
  <br /><br />
- Template already fetches wrapper at runtime, so template will already appear bundled with wrapper and favicons after being run
  <br /><br />
- Location of template repo with instructions on getting started - https://github.com/chamce/eku-react-template
  <br /><br />
- After getting started, you can begin making changes to the App.jsx and App.css files found in the src folder. Refer to any of the links shown on screen/found in the App.jsx file to learn more
  <br /><br />
- To be done by Chance
  - Host these resources on our server instead of github
  - Move the wrapper repo to our server and create a process for Chad to change settings of the wrapper and then redeploy

## In Depth

- 3 Repos
  - Wrapper (https://github.com/chamce/remote-starter)
    - Where does chance currently make changes to the wrapper?
      - Currently, the wrapper repo lives on my machine and I make changes there
      - It gets pushed to github when I make local updates
      - Before pushing to github, have to rebuild wrapper
      - Have to push to github because wrapper link (template points to) is hosted on github
    - What changes do we want to make?
      - Instead of keeping wrapper repo on my machine, move to server (clone)
      - Make settings file in root to be changed
      - Change settings, run `npm run build` in root, and then wrapper cjs file gets updated
      - Instead of pointing to github location, template will instead point to server wrapper cjs file
  - Favicons (https://github.com/chamce/eku-favicons)
    - Currently hosted on github
    - Will move to our server
    - Instead of using github absolute paths for each icon in wrapper, will change to paths on our server
      - This will bridge the wrapper and the favicons while keeping them both on the server
  - Template (https://github.com/chamce/eku-react-template)
    - Relationship with wrapper
      - Fetches wrapper from url
        - Url--where the cjs file is hosted
          - Currently on github, will change to server
        - What if url changes?
          - Then we have same issue as before where apps do not contain same wrapper
          - However, won't change url other than when making the switch to server from github (soon)
          - If ever did happen, then we would just have to go through the apps and change the url (probably won't)
    - Contains other resources related to packages contained and an example dashboard (one component)
