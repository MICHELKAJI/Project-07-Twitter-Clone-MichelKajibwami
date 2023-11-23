import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <Home />
      <h1>Hello word</h1>
      <h2>Hello word</h2>
      <h3>Hello word</h3>
      <h4>Hello word</h4>
      <h5>Hello word</h5>
      <h6>Hello word</h6>


    </Layout>
  );
}
