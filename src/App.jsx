import "./App.scss";
import Header from "./component/header/Header";
import JobsList from "./component/jobs-list/JobsList";

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <JobsList />
      </main>
    </>
  );
}

export default App;
