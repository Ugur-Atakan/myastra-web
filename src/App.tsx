import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Register from './pages/Register';
import BirthChartForm from './pages/BirthChartForm';
import Dashboard from './pages/Dashboard';
import BirthChartAnalysis from './pages/BirthChartAnalysis';
import Astrologers from './pages/Astrologers';
import SingleQuestionAstrology from './pages/SingleQuestionAstrology';
import SingleQuestionChat from './pages/SingleQuestionChat';
import RelationshipAnalysis from './pages/RelationshipAnalysis';
import Support from './pages/Support';
import TicketDetail from './pages/TicketDetail';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/birth-chart" element={<BirthChartForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/birth-chart" element={<BirthChartAnalysis />} />
          <Route path="/dashboard/astrologers" element={<Astrologers />} />
          <Route path="/dashboard/single-question" element={<SingleQuestionAstrology />} />
          <Route path="/dashboard/single-question/chat" element={<SingleQuestionChat />} />
          <Route path="/dashboard/relationship" element={<RelationshipAnalysis />} />
          <Route path="/dashboard/support" element={<Support />} />
          <Route path="/dashboard/support/:ticketId" element={<TicketDetail />} />
        </Routes>
        <Toaster position="top-center" />
      </div>
    </Router>
    </Provider>
  );
}