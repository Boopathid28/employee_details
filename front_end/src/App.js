import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Table from './pages/empolyee_details/table';
import EmployeeForm from './pages/empolyee_details/form';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Table/>}/></Routes></BrowserRouter>
    </>
  );
}

export default App;
