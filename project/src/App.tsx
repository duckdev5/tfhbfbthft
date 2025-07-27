import Header from './components/Header';
import ProductViewer from './components/ProductViewer';
import Manifesto from './components/Manifesto';
import Roadmap from './components/Roadmap';
import BlogList from './components/BlogList';
import Footer from './components/Footer';
import Galery from './components/Galery';



function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/50 via-slate-950 to-slate-900/30 pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <ProductViewer />
        <Manifesto />
        <Galery />
        <Roadmap />
        <BlogList />
        <Footer />
      </div>
    </div>
  );
}

export default App;