
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Zap, Award, CheckCircle, Clock, CreditCard } from 'lucide-react';

const CurriculumPage: React.FC = () => {
  const courses = [
    {
      level: 'BASIC',
      title: '슈팅 베이직 (초급)',
      tagline: '슈팅의 기본기 정립과 습관 교정',
      image: 'https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&q=80&w=800',
      weeks: [
        { week: '1주차', content: '슈팅 그립 및 릴리즈 핑거의 이해' },
        { week: '2주차', content: '하체 파워의 전달 (DIP & Lift)' },
        { week: '3주차', content: '원 핸드 셋업 및 팔꿈치 각도 교정' },
        { week: '4주차', content: '정지 상태에서의 캐치 앤 슛 리듬' },
      ],
      price: '350,000원 (4주)',
      target: '슈팅 폼을 처음부터 배우고 싶은 초보자'
    },
    {
      level: 'INTERMEDIATE',
      title: '플로우 마스터 (중급)',
      tagline: '실전 상황에서의 리듬감 있는 슈팅',
      image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?auto=format&fit=crop&q=80&w=800',
      weeks: [
        { week: '1주차', content: '트리플 쓰렛 및 퍼스트 스텝 슈팅' },
        { week: '2주차', content: '드리블 투 슛 (풀업 점퍼) 메커니즘' },
        { week: '3주차', content: '스크린 활용 및 오프 볼 무브 슈팅' },
        { week: '4주차', content: '상황별 풋워크 (1-2 스텝 vs 홉)' },
      ],
      price: '450,000원 (4주)',
      target: '동호회 및 아마추어 리그에서 활동 중인 플레이어'
    },
    {
      level: 'ADVANCED',
      title: '킬러 슈터 (고급)',
      tagline: '어떤 수비 앞에서도 득점하는 기술',
      // This is a high-quality elite jump shot that represents a professional level shooter like Curry.
      image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800',
      weeks: [
        { week: '1주차', content: '스텝 백 및 사이드 스텝 슈팅' },
        { week: '2주차', content: '딥 쓰리 (로고 샷) 메커니즘' },
        { week: '3주차', content: '콘테스트 상황에서의 릴리즈 조절' },
        { week: '4주차', content: '클러치 타임 멘탈리티 및 슈팅 완성' },
      ],
      price: '550,000원 (4주)',
      target: '대학부 선수 혹은 최상위권 아마추어 플레이어'
    }
  ];

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <section className="bg-[#1A237E] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1505666287802-931dc8394b5f?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 italic uppercase">CURRICULUM</h1>
          <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
            방성윤의 20년 노하우가 집약된 단계별 슈팅 시스템을 소개합니다.<br />
            모든 수업은 영상 분석을 통해 맞춤형으로 진행됩니다.
          </p>
        </div>
      </section>

      <section className="py-20 court-lines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {courses.map((course, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#FF5722]/10 rounded-[3rem] -z-10 rotate-3"></div>
                    <img src={course.image} alt={course.title} className="rounded-[2.5rem] shadow-2xl w-full aspect-video object-cover" />
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-8">
                  <div>
                    <span className="text-[#FF5722] font-black tracking-widest text-sm mb-2 block uppercase">{course.level} COURSE</span>
                    <h2 className="text-4xl font-black text-[#1A237E] mb-2 italic">{course.title}</h2>
                    <p className="text-xl text-gray-500 font-bold">{course.tagline}</p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-black text-[#1A237E] mb-6 flex items-center gap-2 uppercase">
                      <Clock size={20} className="text-[#FF5722]" /> 주차별 핵심 강의
                    </h3>
                    <div className="space-y-4">
                      {course.weeks.map((w, i) => (
                        <div key={i} className="flex gap-4 items-start border-l-2 border-gray-100 pl-4 hover:border-[#FF5722] transition-colors">
                          <span className="text-[#FF5722] text-sm font-black shrink-0">{w.week}</span>
                          <p className="text-gray-600 font-medium pt-0.5">{w.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1 p-4 bg-white rounded-2xl">
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">수강 대상</p>
                      <p className="text-gray-700 font-bold text-sm leading-tight">{course.target}</p>
                    </div>
                    <div className="flex flex-col gap-1 p-4 bg-white rounded-2xl border-l-4 border-[#FF5722]">
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">수강료</p>
                      <p className="text-[#1A237E] font-black text-xl">{course.price}</p>
                    </div>
                  </div>

                  <Link to="/contact" className="w-full bg-[#1A237E] hover:bg-[#FF5722] text-white py-5 rounded-2xl font-black text-lg transition-all shadow-lg flex items-center justify-center gap-3">
                    <CreditCard size={20} /> 해당 클래스 신청하기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurriculumPage;
