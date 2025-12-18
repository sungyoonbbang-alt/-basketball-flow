
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, MessageSquare, Instagram, Youtube, Phone, MapPin, Award, Users, Target, Zap } from 'lucide-react';
import MainPage from './pages/MainPage';
import CurriculumPage from './pages/CurriculumPage';
import CommunityPage from './pages/CommunityPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { name: '홈', path: '/' },
    { name: '슈팅 클래스', path: '/curriculum' },
    { name: 'Flow 커뮤니티', path: '/community' },
    { name: '코치 소개', path: '/about' },
    { name: '레슨 문의', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#1A237E]/95 backdrop-blur-sm text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0,0)}>
            <span className="text-2xl font-black tracking-tighter text-[#FF5722] italic">BASKETBALL FLOW</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-bold transition-colors ${
                    pathname === item.path ? 'text-[#FF5722]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" className="bg-[#FF5722] hover:bg-[#e64a19] px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105">
                레슨 신청하기
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1A237E] border-t border-white/10 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold border-b border-white/5"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-bold text-[#FF5722]"
            >
              레슨 신청하기
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A237E] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black tracking-tighter text-[#FF5722] italic mb-6">BASKETBALL FLOW</h3>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              대한민국 최고의 슈터 방성윤이 직접 전수하는 슈팅 메커니즘 아카데미. 
              우리는 단순한 기술을 넘어, 농구라는 스포츠의 리듬(Flow)을 이해하도록 돕습니다.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/bangga_shoot?igsh=bWQ3Nmd6NGI1a212" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF5722] transition-colors"><Instagram size={20} /></a>
              <a href="https://youtube.com/@user-bangga_shoot" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF5722] transition-colors"><Youtube size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF5722] transition-colors font-bold text-xs">CH+</a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link to="/curriculum" className="hover:text-white transition-colors">슈팅 클래스</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors">커뮤니티</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">코치 소개</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">상담 및 문의</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="flex items-center gap-2"><Phone size={18} /> 010-9245-1299</li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 shrink-0" /> 
                <span>서울특별시 강남구 남부순환로397길 57 지하 1층 (양재/구리)</span>
              </li>
              <li className="text-xs text-gray-500 mt-4 leading-loose">
                상호명: 방성윤의 슈팅클리닉 | 대표: 방성윤<br/>
                카카오톡: 방성윤의 슈팅클리닉
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          &copy; 2024 BASKETBALL FLOW Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/curriculum" element={<CurriculumPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
