import "./App.css";
import UseEffectComp from "./components/UseEffectComp";
import UseMemoComp from "./components/UseMemoComp";
import UseCallbackComp from "./components/callback/UseCallBackComp";
import ContextComp from "./components/context/ContextComp";

function App() {
  return (
    <>
      {/* <UseEffectComp />
      <UseMemoComp />
      <UseCallbackComp /> */}
      <ContextComp />
    </>
  );
}

export default App;
