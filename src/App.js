import Sidebar from './components/sidebar/sidebar';
import Content from './components/content/Content';
import CourseDetails from './components/contentLeft/CourseDetails/CourseDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Route exact path="/" component={Content} />
        <Route exact path={`/:id`} component={CourseDetails} />
      </div>
    </Router>
  );
}

export default App;
