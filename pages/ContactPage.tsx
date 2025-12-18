
import React from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  React.useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <section className="bg-[#FF5722] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-6xl font-black italic mb-6 uppercase">CONTACT & APPLY</h1>
          <p className="text-xl font-medium opacity-90 max-w-2xl mx-auto">
            당신의 슈팅 리듬을 찾을 준비가 되셨나요?<br />
            방성윤 코치가 직접 확인하고 연락드립니다.
          </p>
        </div>
      </section>

      <section className="py-20 -mt-10 court-lines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100 relative">
                <h2 className="text-2xl font-black text-[#1A237E] mb-8 flex items-center gap-2 uppercase italic">
                  <Send className="text-[#FF5722]" size={24} /> 레슨 상담 신청
                </h2>
                
                {submitted ? (
                  <div className="bg-[#FF5722]/5 border-2 border-[#FF5722] text-[#FF5722] p-8 rounded-3xl text-center">
                    <h3 className="text-2xl font-bold mb-2">신청이 완료되었습니다!</h3>
                    <p className="font-medium text-[#1A237E]">방성윤 코치가 직접 확인 후 순차적으로 연락드리겠습니다.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400 ml-1">이름</label>
                        <input required type="text" placeholder="성함" className="w-full bg-[#F5F5F5] border-2 border-transparent rounded-2xl p-4 font-bold text-[#1A237E] focus:border-[#FF5722] focus:bg-white outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400 ml-1">연락처</label>
                        <input required type="tel" placeholder="010-0000-0000" className="w-full bg-[#F5F5F5] border-2 border-transparent rounded-2xl p-4 font-bold text-[#1A237E] focus:border-[#FF5722] focus:bg-white outline-none transition-all" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 ml-1">관심 클래스</label>
                      <select required className="w-full bg-[#F5F5F5] border-2 border-transparent rounded-2xl p-4 font-bold text-[#1A237E] focus:border-[#FF5722] focus:bg-white outline-none transition-all appearance-none">
                        <option value="">수강하고 싶은 코스를 선택하세요</option>
                        <option value="basic">슈팅 베이직 (초급)</option>
                        <option value="intermediate">플로우 마스터 (중급)</option>
                        <option value="advanced">킬러 슈터 (고급)</option>
                        <option value="personal">1:1 개인 레슨 (방성윤 코치)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 ml-1">상담 메시지</label>
                      <textarea rows={5} placeholder="현재 슈팅 고민이나 달성하고 싶은 목표를 적어주세요." className="w-full bg-[#F5F5F5] border-2 border-transparent rounded-2xl p-4 font-bold text-[#1A237E] focus:border-[#FF5722] focus:bg-white outline-none transition-all resize-none"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-[#1A237E] hover:bg-[#FF5722] text-white py-5 rounded-2xl font-black text-xl transition-all shadow-lg hover:shadow-2xl hover:scale-[1.01]">
                      상담 신청하기
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100">
                <h3 className="text-xl font-black text-[#1A237E] mb-8 uppercase italic border-l-4 border-[#FF5722] pl-4">Contact Detail</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F5F5] flex items-center justify-center shrink-0">
                      <Phone className="text-[#FF5722]" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase mb-1">전화번호</p>
                      <p className="text-lg font-black text-[#1A237E]">010-9245-1299</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F5F5] flex items-center justify-center shrink-0">
                      <MessageSquare className="text-[#FF5722]" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase mb-1">카카오톡</p>
                      <p className="text-lg font-black text-[#1A237E]">방성윤의 슈팅클리닉</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F5F5] flex items-center justify-center shrink-0">
                      <MapPin className="text-[#FF5722]" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase mb-1">주소</p>
                      <p className="text-sm font-bold text-[#1A237E] leading-relaxed">
                        서울특별시 강남구 남부순환로397길 57 지하 1층 (양재/구리)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A237E] rounded-[2.5rem] p-10 shadow-xl text-white relative overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000" />
                <div className="relative z-10">
                  <h3 className="text-xl font-black mb-6 uppercase italic">Operation Hours</h3>
                  <div className="space-y-4 font-bold mb-8">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                      <Clock className="text-[#FF5722] shrink-0" size={20} />
                      <p>평일 10:00 - 22:00</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="text-[#FF5722] shrink-0" size={20} />
                      <p>주말 09:00 - 18:00</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 leading-relaxed italic">
                    * 모든 레슨은 100% 사전 예약제로 운영됩니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
