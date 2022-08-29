// Project Import
import ScrollTop from "./components/ScrollTop";
import ThemeCustomization from "./themes";
import Home from './pages/home';
import Routes from "./routes";


function App() {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <Routes />
      </ScrollTop>
    </ThemeCustomization>
  );
}

export default App;
