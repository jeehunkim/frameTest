import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Bar from './page/chart/Bar'
import Dataset from './page/chart/Dataset'
import Graph from './page/chart/Graph'
import Pie from './page/chart/Pie'
import Scatter from './page/chart/Scatter'
import EditorPage from './page/editor'
import GridPage from './page/grid'
import Form from './page/form'

const pages = () => {
  return (
  <>
			<ul>
      <Link to="/chart/bar"><li>Bar</li></Link>
      <Link to="/chart/dataset"><li>Dataset</li></Link>
      <Link to="/chart/graph"><li>Graph</li></Link>
      <Link to="/chart/pie"><li>Pie</li></Link>
      <Link to="/chart/scatter"><li>Scatter</li></Link>
      <Link to="/editor"><li>Editor</li></Link>
      <Link to="/grid"><li>Grid</li></Link>
      <Link to="/form"><li>Form</li></Link>
			</ul>
		</>
    )
}

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={pages()}></Route>
        <Route path="/chart/bar" element={<Bar />}></Route>
        <Route path="/chart/dataset" element={<Dataset />}></Route>
        <Route path="/chart/graph" element={<Graph />}></Route>
        <Route path="/chart/pie" element={<Pie />}></Route>
        <Route path="/chart/scatter" element={<Scatter />}></Route>
        <Route path="/editor" element={<EditorPage />}></Route>
        <Route path="/grid" element={<GridPage />}></Route>
        <Route path="/form" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
