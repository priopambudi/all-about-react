import "./App.css";
import UseEffectComp from "./components/UseEffectComp";
import UseMemoComp from "./components/UseMemoComp";
import UseCallbackComp from "./components/callback/UseCallBackComp";
import ContextComp from "./components/context/ContextComp";
import UseReducerComp from "./components/reducer/UseReducerComp";
import UseRefComp from "./components/ref/UseRefComp";

function App() {
  return (
    <>
      <UseEffectComp />
      <UseMemoComp />
      <UseCallbackComp />
      <ContextComp />
      <UseRefComp />
      <UseReducerComp />
    </>
  );
}

export default App;
