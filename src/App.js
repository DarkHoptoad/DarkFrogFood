import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Route, Switch } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Nothing } from "./pages/NotFound";
import {Category} from "./pages/Category"
import {Recipe} from './pages/Recipe'

function App() {
  return (
    <>
        <div className="page">
          <Header />
          <div className="hiden" />
          <main className="content container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route path="/category/:name" component={Category} />
              <Route path="/meal/:idMeal" component={Recipe} />
              <Route component={Nothing} />
            </Switch>
          </main>
          <Footer />
        </div>
    </>
  );
}

export default App;
