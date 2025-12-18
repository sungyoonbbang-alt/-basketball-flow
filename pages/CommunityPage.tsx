
import React from 'react';
import { MessageCircle, Heart, Share2, Play, Search, Filter, Camera } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const feed = [
    { id: 1, user: 'BasketballLover', title: '클래스 3주차 비포애프터! 릴리즈가 훨씬 부드러워졌어요.', date: '2시간 전', likes: 24, comments: 8, image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600' },
    { id: 2, user: 'ShooterKing', title: '방코치님 챌린지 성공! 양재 코트에서의 짜릿한 딥쓰리입니다.', date: '5시간 전', likes: 156, comments: 22, image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=600' },
    { id: 3, user: 'FlowPlayer', title: '야외 코트에서 슈팅 리듬 연습중... 하체 활용이 정말 중요하네요.', date: '1일 전', likes: 45, comments: 3, image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=600' },
    { id: 4, user: 'NoBreak', title: '매일 300개 챌린지 10일차! 리듬이 몸에 익기 시작했습니다.', date: '2일 전', likes: 89, comments: 15, image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&q=80&w=600' },
    { id: 5, user: 'DunkDream', title: '슈팅 폼 피드백 부탁드립니다. 팔꿈치 각도가 맞을까요?', date: '3일 전', likes: 12, comments: 31, image: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?auto=format&fit=crop&q=80&w=600' },
    { id: 6, user: 'RimCleaner', title: '방성윤 코치님 레슨 2주차 무빙슛 성공 영상입니다!', date: '4일 전', likes: 201, comments: 45, image: 'https://images.unsplash.com/photo-1518063311540-064020ff603a?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <section className="bg-white border-b sticky top-20 z-40 px-4 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex-grow max-w-xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="슈팅 팁이나 연습 영상을 검색해보세요" 
              className="w-full bg-[#F5F5F5] border-none rounded-2xl py-3 pl-12 pr-4 font-medium focus:ring-2 focus:ring-[#FF5722] outline-none"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-6 py-3 bg-[#FF5722] text-white rounded-2xl font-bold shadow-lg shadow-[#FF5722]/20 hover:scale-105 transition-all">
              <Camera size={18} /> 업로드
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 court-lines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {['전체', '슈팅 분석', '성장 일기', '챌린지', '강의 Q&A'].map((tab, idx) => (
              <button 
                key={idx} 
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold transition-all border-2 ${
                  idx === 0 ? 'bg-[#1A237E] text-white border-[#1A237E]' : 'bg-white text-gray-500 border-transparent hover:border-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feed.map((post) => (
              <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 group">
                <div className="relative aspect-square overflow-hidden bg-gray-200">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 opacity-90 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/50">
                      <Play fill="white" size={24} />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#FF5722]/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Shooting Clip
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1A237E] to-[#FF5722] border-2 border-white shadow-md"></div>
                    <span className="text-sm font-black text-[#1A237E]">{post.user}</span>
                    <span className="text-xs text-gray-400 ml-auto">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-6 leading-tight h-12 overflow-hidden line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-4 text-gray-500">
                      <button className="flex items-center gap-1.5 hover:text-[#FF5722] transition-colors">
                        <Heart size={18} /> <span className="text-sm font-bold">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1.5 hover:text-[#1A237E] transition-colors">
                        <MessageCircle size={18} /> <span className="text-sm font-bold">{post.comments}</span>
                      </button>
                    </div>
                    <button className="text-gray-400 hover:text-gray-800 transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
