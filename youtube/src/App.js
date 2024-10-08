import logo from "./logo.svg";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./components/utils/store";

function App() {
  return (
    <Provider store={store}>
    <div>
      {/* <h1 className="text-3xl font-bold">Hello</h1> */}
      <Head />
      <Body />
    </div>
    </Provider>
  );
}

export default App;
