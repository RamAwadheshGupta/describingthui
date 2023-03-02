import './App.css';
import Profile from './components/Profile';
import TodoList from './components/TodoList';
import TodoCurlyBraces from './components/JSX_with_curly _braces';
import PassingPropsToComponent from './components/PassingPropsToComponent';
function Profiles()
{
  return (
    <img
      src='https://i.imgur.com/MK3eW3As.jpg'
      alt='Johnson katherine'
    />
  );
}

function Gallery()
{
  return (
    <>
      <h2>Profile User</h2>
      <Profiles />
      <Profiles />
      <Profiles />
      <br />
      <h2>importing and exporting components</h2>
      <Profile />
      <Profile />
      <Profile />
      <TodoList />
      <TodoCurlyBraces />
      <PassingPropsToComponent />
    </>
  );
}

function App()
{
  return (
    <div className="App">
      <section>
        <Gallery />
      </section>
    </div>
  );
}

export default App;


