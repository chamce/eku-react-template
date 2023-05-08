import './App.css'
import { Demo } from './Demo'

// replace the default modal header button (close button) with the dynamicModalButton prop to have a button which automatically turns into a back button when travelling from the fullscreen modal to another modal
// Bootstrap Modal Usage: https://getbootstrap.com/docs/5.3/components/modal/

function App({ dynamicModalButton }) {
  return <Demo />
}

export default App