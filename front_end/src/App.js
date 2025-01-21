import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Table from './pages/table';
import EmployeeForm from './components/form';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<EmployeeForm/>}/></Routes></BrowserRouter>
    </>
  );
}

export default App;
