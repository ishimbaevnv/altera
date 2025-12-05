import React, { useState, useEffect } from 'react';
import { MessageSquare, TrendingUp, ShieldCheck, Zap, ChevronRight, BarChart3, Clock, CheckCircle2, Bot, ArrowRight, X } from 'lucide-react';

const AlteraLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Calculator State
  const [leads, setLeads] = useState(300);
  const [avgCheck, setAvgCheck] = useState(5000);
  const [currentConv, setCurrentConv] = useState(10);
  
  // ROI Calculation
  const predictedConv = currentConv * 1.3; // +30% improvement
  const currentRevenue = leads * (currentConv / 100) * avgCheck;
  const predictedRevenue = leads * (predictedConv / 100) * avgCheck;
  const lostProfit = predictedRevenue - currentRevenue;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Direct Telegram Redirect
  const handleAuditClick = () => {
    window.open('https://t.me/nikita_ishimbaev', '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#222]">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        {/* max-w-[1200px] applied here for content centering */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-tighter">ALTERA<span className="text-[#ff490c]">.</span></span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('problems')} className="text-sm font-medium hover:text-[#ff490c] transition-colors">Проблемы</button>
              <button onClick={() => scrollToSection('solution')} className="text-sm font-medium hover:text-[#ff490c] transition-colors">Решение</button>
              <button onClick={() => scrollToSection('calculator')} className="text-sm font-medium hover:text-[#ff490c] transition-colors">Калькулятор</button>
              <button 
                onClick={handleAuditClick}
                className="bg-[#222] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#ff490c] transition-all duration-300 transform hover:scale-105"
              >
                Получить аудит
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#222]">
                <div className="space-y-1.5">
                  <span className={`block w-8 h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`block w-8 h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-8 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full p-4 flex flex-col space-y-4 shadow-lg">
            <button onClick={() => scrollToSection('problems')} className="text-left font-medium">Проблемы</button>
            <button onClick={() => scrollToSection('solution')} className="text-left font-medium">Решение</button>
            <button onClick={() => scrollToSection('calculator')} className="text-left font-medium">Калькулятор</button>
            <button onClick={handleAuditClick} className="text-[#ff490c] font-bold text-left">Заказать аудит</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold tracking-wide uppercase mb-6 text-gray-600">
              <span className="w-2 h-2 rounded-full bg-[#ff490c] animate-pulse"></span>
              AI Technology 2.0
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Превращаем переписки в <span className="text-[#ff490c]">деньги</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Повышаем конверсию и прибыль B2C-бизнеса на 30% через автоматизацию общения с помощью ИИ-агента. Результат за 5-30 дней.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleAuditClick}
                className="bg-[#ff490c] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Получить аудит продаж <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4 px-4 py-2">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold">A</div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold">M</div>
                  <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-xs font-bold">K</div>
                </div>
                <p className="text-sm font-medium text-gray-500">Уже внедрили <br/>100+ компаний</p>
              </div>
            </div>
          </div>

          {/* Abstract Visualization of AI Agent */}
          <div className="relative z-10 lg:h-[600px] flex items-center justify-center">
             <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#222] to-[#ff490c]"></div>
                
                {/* Chat Simulation */}
                <div className="space-y-4 mt-4">
                  <div className="flex items-start gap-3 opacity-50">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none text-sm w-3/4">
                      Здравствуйте, сколько стоит доставка в Казань?
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-[#ff490c] flex items-center justify-center text-white flex-shrink-0">
                      <Bot size={18} />
                    </div>
                    <div className="bg-gray-900 text-white p-3 rounded-2xl rounded-tr-none text-sm w-3/4 shadow-lg">
                      Добрый день! 🚚 Доставка в Казань займет 2 дня, стоимость — 450₽. Если оформите заказ сейчас, добавим подарок. Оформляем?
                    </div>
                  </div>

                   <div className="flex items-start gap-3 opacity-50">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none text-sm w-2/3">
                      Да, давайте!
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-[#ff490c] uppercase">Результат</span>
                      <CheckCircle2 size={16} className="text-[#ff490c]" />
                    </div>
                    <div className="text-lg font-bold text-[#222]">Заказ №4932 оплачен</div>
                    <div className="text-xs text-gray-500">Время реакции: 0.2 сек</div>
                  </div>
                </div>
             </div>
             
             {/* Decor elements */}
             <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>
      </section>

      {/* Pain Points Section - Background Stretches, Content Centered */}
      <section id="problems" className="py-20 bg-[#222] text-white w-full">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ваш бизнес теряет деньги, <br/>
                <span className="text-[#ff490c]">пока менеджеры думают.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Если у вас больше 200 заявок в месяц, ручная обработка становится узким горлышком. Клиенты уходят туда, где отвечают мгновенно.
              </p>
              
              <div className="space-y-6">
                {[
                  "Менеджеры забывают отвечать или отвечают долго",
                  "Слив заявок в нерабочее время и выходные",
                  "Низкая конверсия из переписки в продажу",
                  "Раздутый штат отдела продаж съедает маржу"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full border border-[#ff490c] flex items-center justify-center flex-shrink-0 text-[#ff490c] text-xs">✕</div>
                    <p className="text-lg font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#2a2a2a] p-6 rounded-2xl border border-gray-800">
                    <Clock className="text-[#ff490c] w-10 h-10 mb-4" />
                    <h3 className="text-xl font-bold">15-60 мин</h3>
                    <p className="text-sm text-gray-500 mt-2">Среднее время ответа менеджера</p>
                </div>
                <div className="bg-[#2a2a2a] p-6 rounded-2xl border border-gray-800">
                    <Zap className="text-[#ff490c] w-10 h-10 mb-4" />
                    <h3 className="text-xl font-bold">3 секунды</h3>
                    <p className="text-sm text-gray-500 mt-2">Время ответа AI Altera</p>
                </div>
                 <div className="bg-[#2a2a2a] p-6 rounded-2xl border border-gray-800 col-span-2">
                    <TrendingUp className="text-[#ff490c] w-10 h-10 mb-4" />
                    <h3 className="text-xl font-bold text-red-500">-20% прибыли</h3>
                    <p className="text-sm text-gray-500 mt-2">Теряется ежемесячно на упущенных лидах</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution / USP */}
      <section id="solution" className="py-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Технология Altera</h2>
            <p className="text-xl text-gray-600">
              Это не чат-бот с кнопками. Это полноценный цифровой сотрудник, который продает, а не просто консультирует.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare size={32} />,
                title: "Квалификация 24/7",
                desc: "AI-агент мгновенно выявляет потребности клиента, даже в 3 часа ночи, и ведет по скрипту продаж."
              },
              {
                icon: <ShieldCheck size={32} />,
                title: "Без человеческого фактора",
                desc: "Не болеет, не выгорает, не забывает перезвонить и всегда в хорошем настроении."
              },
              {
                icon: <BarChart3 size={32} />,
                title: "Рост конверсии на 30%",
                desc: "За счет скорости реакции и точного следования скриптам лучших продавцов."
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#222] shadow-sm mb-6 group-hover:text-[#ff490c] transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator - Stretched bg, centered content */}
      <section id="calculator" className="py-20 bg-gray-50 border-y border-gray-200 w-full">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-2">Сколько денег вы теряете сейчас?</h2>
            <p className="text-center text-gray-500 mb-10">Посчитайте потенциальный рост прибыли с Altera</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Количество заявок в месяц</label>
                  <input 
                    type="range" min="100" max="2000" step="50" 
                    value={leads} onChange={(e) => setLeads(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ff490c]"
                  />
                  <div className="text-right font-mono font-bold text-xl mt-2">{leads} шт.</div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Средний чек (RUB)</label>
                  <input 
                    type="range" min="1000" max="50000" step="1000" 
                    value={avgCheck} onChange={(e) => setAvgCheck(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ff490c]"
                  />
                  <div className="text-right font-mono font-bold text-xl mt-2">{avgCheck.toLocaleString()} ₽</div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Текущая конверсия в продажу (%)</label>
                  <input 
                    type="range" min="1" max="30" step="1" 
                    value={currentConv} onChange={(e) => setCurrentConv(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ff490c]"
                  />
                  <div className="text-right font-mono font-bold text-xl mt-2">{currentConv}%</div>
                </div>
              </div>

              <div className="bg-[#222] text-white rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden">
                <div className="relative z-10">
                    <div className="mb-6">
                        <div className="text-gray-400 text-sm mb-1">Ваша текущая выручка:</div>
                        <div className="text-2xl font-mono text-gray-300">{Math.round(currentRevenue).toLocaleString()} ₽</div>
                    </div>
                    
                    <div className="mb-2">
                        <div className="text-[#ff490c] text-sm font-bold mb-1 uppercase tracking-wider">Потенциал с Altera (+30%):</div>
                        <div className="text-4xl font-bold font-mono text-white">{Math.round(predictedRevenue).toLocaleString()} ₽</div>
                    </div>

                    <div className="h-px w-full bg-gray-700 my-4"></div>

                    <div>
                        <div className="text-gray-400 text-xs mb-1">Упущенная прибыль ежемесячно:</div>
                        <div className="text-xl font-bold text-[#ff490c]">+{Math.round(lostProfit).toLocaleString()} ₽</div>
                    </div>
                </div>
                {/* Background glow */}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-40 h-40 bg-[#ff490c] blur-[80px] opacity-30"></div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
                 <button 
                    onClick={handleAuditClick}
                    className="bg-[#ff490c] text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
                  >
                    Забрать эти деньги (Аудит)
                  </button>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Как мы работаем <span className="text-gray-400 text-2xl ml-2 font-normal">(5-30 дней)</span>
            </h2>
            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { step: "01", title: "Аудит", text: "Анализируем ваши переписки и скрипты продаж" },
                        { step: "02", title: "Настройка", text: "Обучаем AI на базе ваших лучших кейсов" },
                        { step: "03", title: "Интеграция", text: "Подключаем к вашей CRM и мессенджерам" },
                        { step: "04", title: "Результат", text: "Запуск трафика и контроль конверсии" }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm md:shadow-none text-center md:text-left">
                            <div className="text-5xl font-bold text-gray-100 mb-4">{item.step}</div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#222] text-white relative overflow-hidden w-full">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Хватит терять клиентов.</h2>
          <p className="text-xl text-gray-400 mb-10">
            Запишитесь на аудит продаж. Мы покажем точки роста и рассчитаем точную смету внедрения AI-агента для вашего бизнеса.
          </p>
          <button 
            onClick={handleAuditClick}
            className="bg-[#ff490c] text-white px-12 py-5 rounded-full text-xl font-bold shadow-xl shadow-orange-500/20 hover:bg-white hover:text-[#ff490c] transition-all duration-300"
          >
            Получить аудит продаж
          </button>
          <p className="mt-6 text-sm text-gray-500">Это бесплатно и ни к чему вас не обязывает.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter">ALTERA<span className="text-[#ff490c]">.</span></div>
          <div className="text-gray-500 text-sm">© 2024 Altera AI. Все права защищены.</div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-[#ff490c] transition-colors">Telegram</a>
            <a href="#" className="text-gray-400 hover:text-[#ff490c] transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* Removed jsx and global attributes to fix React warning */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AlteraLanding;