import Task from "./components/tasks/Task";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Task />
    </Provider>
  );
}

export default App;
