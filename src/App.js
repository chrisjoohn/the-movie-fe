import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/index.jsx";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default App;
