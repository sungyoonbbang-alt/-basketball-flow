
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Zap, Users, Award, PlayCircle, Star } from 'lucide-react';

const HeroSection = () => (
  <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#1A237E]">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1600" 
        alt="Hero Basketball Action" 
        className="w-full h-full object-cover opacity-60 mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A237E] via-[#1A237E]/70 to-transparent"></div>
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-[#FF5722] text-white px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
          <Zap size={16} fill="white" />
          <span>New Class Open: 방성윤의 슈팅클리닉 2기 모집 중</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter mb-8 italic">
          슛에 <span className="text-[#FF5722]">리듬</span>을 더하다,<br />
          BASKETBALL FLOW
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-medium">
          대한민국 최고 슈터 방성윤의 비밀은 'Flow'에 있습니다.<br />
          단순한 폼 교정을 넘어, 림을 가르는 완벽한 리듬을 완성하세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/curriculum" 
            className="px-10 py-5 bg-[#FF5722] hover:bg-[#e64a19] text-white text-lg font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
          >
            지금 바로 클래스 시작하기
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/about" 
            className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white text-lg font-bold rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            방성윤 코치 소개
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const ProblemSolution = () => (
  <section className="py-24 bg-white court-lines">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-[#1A237E] mb-6 tracking-tight uppercase">당신의 슛이 안 들어가는 진짜 이유</h2>
        <p className="text-xl text-gray-600 font-medium">단순히 팔 힘이 부족해서일까요? 아님 운이 나빠서?</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Zap className="text-[#FF5722]" size={32} />, title: '끊어진 리듬', desc: '하체에서 손끝으로 에너지가 부드럽게 전달되지 않고 중간에 멈춥니다.' },
          { icon: <Target className="text-[#FF5722]" size={32} />, title: '불안정한 릴리즈', desc: '매번 다른 타점과 릴리즈 포인트가 슛의 일관성을 떨어뜨립니다.' },
          { icon: <Users className="text-[#FF5722]" size={32} />, title: '피드백의 부재', desc: '자신의 문제점을 모른 채 잘못된 폼으로 수천 개의 공을 던지고 있습니다.' },
        ].map((item, idx) => (
          <div key={idx} className="p-8 bg-white rounded-3xl border-2 border-gray-50 hover:border-[#FF5722] hover:shadow-2xl transition-all group">
            <div className="mb-6 p-4 bg-[#F5F5F5] rounded-2xl inline-block group-hover:scale-110 group-hover:bg-[#FF5722]/10 transition-transform">{item.icon}</div>
            <h3 className="text-2xl font-bold text-[#1A237E] mb-4">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 p-10 bg-[#1A237E] rounded-3xl text-white relative overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=1200" 
          alt="Court Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-2/3">
            <h3 className="text-3xl font-black mb-4 italic">SOLUTION: FLOW MECHANISM</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 font-medium">
              방성윤 바스켓볼 플로우는 단순히 '좋은 폼'을 외우는 것이 아닙니다. 
              자신의 신체 조건에 맞는 최적의 리듬을 찾고, 어떤 상황에서도 무너지지 않는 슈팅 메커니즘을 뇌와 근육에 각인시킵니다.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-bold text-[#FF5722]">
              <li className="flex items-center gap-2">✓ 1:1 정밀 슈팅 폼 영상 분석</li>
              <li className="flex items-center gap-2">✓ 구간별 슛 터치 교정</li>
              <li className="flex items-center gap-2">✓ 무빙 슛 리듬 정립</li>
              <li className="flex items-center gap-2">✓ 실전 클러치 멘탈리티</li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <img src="https://images.unsplash.com/photo-1518063311540-064020ff603a?auto=format&fit=crop&q=80&w=800" alt="Training" className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProgramHighlight = () => (
  <section className="py-24 bg-[#F5F5F5] court-lines">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A237E] mb-4 italic uppercase">Program Highlight</h2>
          <p className="text-xl text-gray-600 font-medium">당신에게 필요한 최적의 커리큘럼을 확인하세요.</p>
        </div>
        <Link to="/curriculum" className="text-[#FF5722] font-bold flex items-center gap-1 hover:underline underline-offset-4 transition-all">
          커리큘럼 전체 보기 <ChevronRight size={20}/>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { level: 'Level 1', title: '슈팅 베이직', desc: '그립법부터 하체 활용까지, 슈팅의 기초를 다집니다.', img: 'https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&q=80&w=600' },
          { level: 'Level 2', title: '플로우 마스터', desc: '캐치 앤 슛, 드리블 후 점퍼 등 실전 리듬을 익힙니다.', img: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?auto=format&fit=crop&q=80&w=600' },
          { level: 'Level 3', title: '킬러 슈터', desc: '무빙 슛, 스텝 백, 딥 쓰리 등 고난도 슈팅을 완성합니다.', img: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=600' },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-1 rounded-3xl overflow-hidden shadow-md group hover:-translate-y-2 transition-transform">
            <div className="h-48 overflow-hidden rounded-t-[1.4rem]">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <span className="text-sm font-black text-[#FF5722] mb-2 block uppercase">{item.level} COURSE</span>
              <h3 className="text-2xl font-bold text-[#1A237E] mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-6 font-medium h-12 overflow-hidden">{item.desc}</p>
              <Link to="/curriculum" className="w-full block text-center py-3 bg-[#1A237E] text-white rounded-xl font-bold hover:bg-[#FF5722] transition-colors">상세 정보</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CommunityTeaser = () => (
  <section className="py-24 bg-white overflow-hidden court-lines">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A237E] mb-8 leading-tight italic">
            혼자가 아닌,<br />
            함께 성장하는 <span className="text-[#FF5722]">Flow Zone</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
            연습은 코트 위에서만 하는 것이 아닙니다. 자신의 슈팅 영상을 공유하고, 코치와 동료들의 피드백을 받으며 매일매일 성장하세요. 
            Flow Zone 커뮤니티는 당신의 도전을 응원합니다.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="p-4 bg-[#F5F5F5] rounded-2xl text-center border-b-4 border-[#FF5722]">
              <p className="text-3xl font-black text-[#1A237E]">1,200+</p>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mt-1">Active Members</p>
            </div>
            <div className="p-4 bg-[#F5F5F5] rounded-2xl text-center border-b-4 border-[#1A237E]">
              <p className="text-3xl font-black text-[#1A237E]">5,000+</p>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mt-1">Shared Clips</p>
            </div>
          </div>
          <Link to="/community" className="inline-flex items-center gap-2 bg-[#FF5722] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all hover:scale-105">
            커뮤니티 입장하기 <ChevronRight size={20} />
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FF5722]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#1A237E]/10 rounded-full blur-3xl"></div>
          <div className="grid grid-cols-2 gap-4 relative z-10">
            <img src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&q=80&w=500" alt="Community 1" className="rounded-3xl shadow-lg mt-10 hover:scale-105 transition-transform" />
            <img src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&q=80&w=500" alt="Community 2" className="rounded-3xl shadow-lg hover:scale-105 transition-transform" />
            <img src="https://images.unsplash.com/photo-1579952318543-7bb54c66b681?auto=format&fit=crop&q=80&w=500" alt="Community 3" className="rounded-3xl shadow-lg -mt-10 hover:scale-105 transition-transform" />
            <img src="https://images.unsplash.com/photo-1606925797300-0b35e9d17400?auto=format&fit=crop&q=80&w=500" alt="Community 4" className="rounded-3xl shadow-lg hover:scale-105 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const InstructorSection = () => (
  <section className="py-24 bg-[#1A237E] text-white relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16 items-center">
      <div className="md:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A237E] via-transparent to-transparent z-10 h-1/4 bottom-0 top-auto"></div>
        <img 
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800" 
          alt="Coach Bang Action" 
          className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 aspect-[3/4] object-cover" 
        />
        <div className="absolute bottom-6 left-6 z-20">
          <p className="text-2xl font-black italic tracking-tighter text-[#FF5722]">THE LEGEND SHOOTER</p>
        </div>
      </div>
      <div className="md:w-1/2">
        <span className="text-[#FF5722] font-black text-lg tracking-widest uppercase mb-4 block">Head Coach</span>
        <h2 className="text-5xl md:text-6xl font-black mb-8 italic">BANG SUNG YOON</h2>
        <div className="space-y-6 text-lg text-gray-300 font-medium leading-relaxed">
          <p>
            대한민국 농구 역사상 가장 파괴력 있는 슈터, 방성윤입니다. 
            KBL 통산 3점슛 기록과 수많은 클러치 타임의 경험은 제 슈팅 철학의 바탕이 되었습니다.
          </p>
          <p>
            저는 여러분에게 단순한 자세가 아닌, 슛이 '들어갈 수밖에 없는' 원리를 가르칩니다. 
            저와 함께 코트 위에서 가장 위협적인 존재로 거듭나시길 바랍니다.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <div className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-2xl backdrop-blur-md border border-white/10">
            <Award className="text-[#FF5722]" size={32} />
            <div>
              <p className="text-sm text-gray-400 font-bold">KBL Career</p>
              <p className="text-lg font-bold">All-Star Game MVP</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-2xl backdrop-blur-md border border-white/10">
            <Star className="text-[#FF5722]" size={32} />
            <div>
              <p className="text-sm text-gray-400 font-bold">Experience</p>
              <p className="text-lg font-bold">NBA D-League (NBDL)</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Link to="/about" className="text-white font-bold flex items-center gap-2 group hover:text-[#FF5722] transition-colors">
            자세한 프로필 보기 <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform"/>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24 bg-[#FF5722] relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <img src="https://www.transparenttextures.com/patterns/basketball.png" alt="Pattern" className="w-full h-full object-repeat" />
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight italic uppercase">
        당신의 슛이 림을 가르는<br />
        그 짜릿한 순간을 현실로.
      </h2>
      <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium">
        지금 바로 상담 신청을 하고 무료 슈팅 폼 진단을 받아보세요.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link to="/contact" className="bg-white text-[#FF5722] px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl hover:scale-105 transition-all">
          무료 진단 신청하기
        </Link>
        <Link to="/contact" className="bg-[#1A237E] text-white px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
          상담 및 신청하기
        </Link>
      </div>
      <p className="mt-8 text-white/70 text-sm font-bold">
        * 선착순 등록 마감 주의 / 현재 방성윤의 슈팅클리닉 2기 잔여 4석
      </p>
    </div>
  </section>
);

const MainPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <ProblemSolution />
      <ProgramHighlight />
      <CommunityTeaser />
      <InstructorSection />
      <CTASection />
    </div>
  );
};

export default MainPage;
