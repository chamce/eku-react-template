import './App.css';
import { ExampleDashboard } from './ExampleDashboard';

// data files go in public folder

// replace the default modal header button (close button) with the dynamicModalButton prop to have a button which automatically turns into a back button when travelling from the fullscreen modal to another modal
// Bootstrap Modal Usage: https://getbootstrap.com/docs/5.3/components/modal/

function App({ dynamicModalButton }) {
  return <ExampleDashboard />;
}

export default App;
