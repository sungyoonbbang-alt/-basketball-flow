
import React from 'react';
import { Award, Zap, Star, Trophy, Users, History } from 'lucide-react';

const AboutPage: React.FC = () => {
  const timeline = [
    { year: '2002', title: '부산 아시안게임 금메달', desc: '대한민국 국가대표팀 주전 가드/포워드로 활약' },
    { year: '2004', title: 'NBA NBDL 진출', desc: '로어노크 대즐 소속으로 한국인 최초 하위리그 진출' },
    { year: '2005', title: 'KBL 신인 드래프트 전체 1순위', desc: '서울 SK 나이츠 입단 및 데뷔전 강렬한 인상' },
    { year: '2005-2006', title: 'KBL 신인상 수상', desc: '압도적인 득점력과 슈팅 능력으로 리그 평정' },
    { year: '2007-2008', title: 'KBL 올스타전 MVP', desc: '축제의 장에서도 빛난 최고의 슈팅 퍼포먼스' },
    { year: '2023-Present', title: 'BASKETBALL FLOW 설립', desc: '자신만의 슈팅 철학을 후배들과 팬들에게 전수 시작' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="relative py-32 bg-[#1A237E] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1600" 
            alt="Bang Portrait" 
            className="w-full h-full object-cover opacity-30 grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A237E]/20 to-[#1A237E]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-8xl font-black text-white italic mb-6 tracking-tighter uppercase">Bang Sung Yoon</h1>
          <p className="text-2xl text-[#FF5722] font-black tracking-[0.2em] mb-12 italic underline underline-offset-8">THE LEGENDARY SHOOTER</p>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="text-center">
              <p className="text-4xl font-black text-white">1,311</p>
              <p className="text-sm font-bold text-gray-400 uppercase mt-2">KBL Career Points</p>
            </div>
            <div className="w-px h-16 bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <p className="text-4xl font-black text-white">41.2%</p>
              <p className="text-sm font-bold text-gray-400 uppercase mt-2">Peak 3PT Accuracy</p>
            </div>
            <div className="w-px h-16 bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <p className="text-4xl font-black text-white">1ST</p>
              <p className="text-sm font-bold text-gray-400 uppercase mt-2">Overall Draft Pick</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-[#1A237E] italic">"단 한 번의 슛도 우연은 없습니다."</h2>
              <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed">
                <p>
                  현역 시절 저는 매일 500개 이상의 슛을 던졌습니다. 하지만 어느 날 깨달았습니다. 
                  단순히 많이 던지는 것보다 중요한 것은 <strong>'어떻게'</strong> 던지느냐는 것이었습니다.
                </p>
                <p>
                  몸의 중심축, 하체의 추진력, 손끝의 섬세함, 그리고 이 모든 것이 하나로 이어지는 'Flow(흐름)'. 
                  이 리듬을 이해했을 때 저는 비로소 진정한 슈터가 될 수 있었습니다.
                </p>
                <p>
                  이제 저의 모든 경험과 노하우를 'BASKETBALL FLOW'라는 이름으로 여러분께 공유하려 합니다. 
                  선수 생활 중 겪었던 시행착오와 성공의 열쇠를 모두 담았습니다.
                </p>
              </div>
              <div className="pt-6">
                <p className="text-2xl font-black italic text-[#1A237E]">방 성 윤</p>
                <p className="text-gray-400 font-bold">BASKETBALL FLOW HEAD COACH</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-full h-full bg-[#F5F5F5] rounded-[3rem] -z-10"></div>
              <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800" alt="Bang Coaching" className="rounded-[2.5rem] shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F5F5] court-lines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <History className="text-[#FF5722]" size={40} />
            <h2 className="text-4xl font-black text-[#1A237E] uppercase italic">Career Timeline</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2 hidden lg:block"></div>
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className={`relative flex flex-col lg:flex-row items-center gap-8 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FF5722] border-4 border-white shadow-md"></div>
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className={`p-8 bg-white rounded-3xl shadow-sm border border-gray-100 ${idx % 2 === 1 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <span className="text-[#FF5722] font-black text-2xl mb-2 block">{item.year}</span>
                      <h3 className="text-xl font-bold text-[#1A237E] mb-3">{item.title}</h3>
                      <p className="text-gray-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-[#1A237E] mb-12 uppercase italic">Key Achievement & Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Award className="text-[#FF5722] mx-auto mb-4" size={40} />, title: '슈팅 분석', desc: '독자적인 폼 분석 솔루션' },
              { icon: <Trophy className="text-[#FF5722] mx-auto mb-4" size={40} />, title: '커리어 기록', desc: 'KBL 레전드 슈터' },
              { icon: <Users className="text-[#FF5722] mx-auto mb-4" size={40} />, title: '지도 능력', desc: '1,000명 이상의 코칭' },
              { icon: <Zap className="text-[#FF5722] mx-auto mb-4" size={40} />, title: '실전 전술', desc: '실전형 슈팅 메커니즘' },
            ].map((skill, idx) => (
              <div key={idx}>
                {skill.icon}
                <h3 className="text-lg font-bold text-[#1A237E] mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm font-medium">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
