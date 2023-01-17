import Navigation from './components/routes/navigation/navigation.component';
import Home from './components/routes/home/home.component';
import { Routes, Route, Outlet } from 'react-router-dom';

import './sategories.styles.scss';

const Shop = () => {
  return <h1>This is SHOP</h1>
}

const App = () => {   
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
