import Header from "./componenst/Header/Header";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Switch>
            <Route path={"/"} component={Home} exact />
            <Route path={"/basket"} component={Basket} exact />
            <Route
              path={"*"}
              component={() => (
                <h1 className={"notFound"}>Ошибка адресной строки</h1>
              )}
            />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default App;
