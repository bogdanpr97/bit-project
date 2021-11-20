import './App.scss';
import SideBar from './containers/Sidebar';
import Header from './containers/Header';
import Landing from './containers/Landing';

function App() {
  return (
    <div className="container">
      <SideBar />
      <div className="content-container">
        <Header />
        <Landing />
      </div>
    </div>
  );
}

export default App;
