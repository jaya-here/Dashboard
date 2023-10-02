import logo from './logo.svg';
import './App.css';
import Header from './sections/Header';
import BudgetDashboard from './sections/BudgetDashboard';
import Analytics from './sections/Analytics';
import TransactionHistory from './sections/TransactionHistory';
import Sidebar from './sections/Sidebar';
import Calendar from './sections/Calendar';
import MenuModal from './sections/MenuModal'


function App() {
  return (
    <div className="App">
    <div className="container mx-auto p-4 min-w-700px">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
      <div className="col-span-1 text-left px-2 pr-2 lg:pr-0 hidden sm:hidden lg:block">
      <Sidebar></Sidebar>
      </div>

      <div class="col-span-3">
      <div className='sm:block md:block lg:hidden'>
      <MenuModal></MenuModal>
      </div>
      <Header></Header>
      <BudgetDashboard></BudgetDashboard>
      <Analytics></Analytics>
      <TransactionHistory></TransactionHistory>
      </div>

      <div class="col-span-2 px-11 pr-20 hidden sm:hidden lg:block">
        <Calendar></Calendar>
      </div>
      
    </div>

    </div>
    </div>
  );
}

export default App;
