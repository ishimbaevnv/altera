import React, { useState, useEffect } from 'react';
import { 
    MessageSquare, 
    TrendingUp, 
    Clock, 
    CheckCircle, 
    ArrowRight, 
    Zap, 
    Users, 
    X, 
    Menu,
    Bot,
    DollarSign,
    ShieldCheck
} from 'lucide-react';

const Button = ({ children, variant = 'primary', className = '', onClick }) => {
    const baseStyle = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2";
    // Mapped custom colors to standard Tailwind classes to ensure compatibility
    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30",
        secondary: "bg-white hover:bg-gray-50 text-slate-900 border border-slate-200 shadow-gray-200/50",
        accent: "bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/30"
    };
    
    return (
        <button 
            className={`${baseStyle} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-2xl animate-scale-up">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={24} />
                </button>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{title}</h3>
                {children}
            </div>
        </div>
    );
};

const LeadForm = ({ source, onSubmit }) => {
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            onSubmit();
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2">Заявка отправлена!</h4>
                <p className="text-gray-600">Мы свяжемся с вами в ближайшее время для аудита.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Иван Иванов" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Телефон / Мессенджер</label>
                <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="+7 (999) 000-00-00" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Сайт компании или ниша</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="b2c-shop.ru" />
            </div>
            <div className="text-sm text-gray-500 mb-2">
                Получаете более 200 заявок в месяц?
                <div className="flex gap-4 mt-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="leads" className="text-blue-600 focus:ring-blue-600" defaultChecked /> Да
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="leads" className="text-blue-600 focus:ring-blue-600" /> Нет
                    </label>
                </div>
            </div>
            <Button className="w-full" variant="primary">
                {status === 'loading' ? 'Отправка...' : 'Получить аудит переписок'}
            </Button>
            <p className="text-xs text-center text-gray-400 mt-2">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
        </form>
    );
};

const ChatSimulation = () => {
    return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 max-w-sm mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="bg-slate-900 p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                    AI
                </div>
                <div>
                    <p className="text-white font-medium text-sm">Altera Agent</p>
                    <p className="text-blue-200 text-xs">В сети 24/7</p>
                </div>
            </div>
            <div className="p-4 space-y-4 bg-gray-50 h-64 overflow-y-auto text-sm">
                <div className="flex justify-end">
                    <div className="bg-blue-100 text-blue-900 rounded-l-xl rounded-tr-xl p-3 max-w-[85%]">
                        Здравствуйте, сколько стоит курс?
                    </div>
                </div>
                <div className="flex justify-start animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
                    <div className="bg-white border border-gray-200 text-gray-800 rounded-r-xl rounded-tl-xl p-3 max-w-[85%] shadow-sm">
                        Добрый день! Курс стоит 25 000₽. Сейчас действует акция - скидка 20% при оплате сегодня. Хотите закрепить за собой скидку? 🎁
                    </div>
                </div>
                <div className="flex justify-end animate-fade-in" style={{animationDelay: '1.5s', animationFillMode: 'both'}}>
                    <div className="bg-blue-100 text-blue-900 rounded-l-xl rounded-tr-xl p-3 max-w-[85%]">
                        Да, было бы здорово!
                    </div>
                </div>
                <div className="flex justify-start animate-fade-in" style={{animationDelay: '2.5s', animationFillMode: 'both'}}>
                    <div className="bg-white border border-gray-200 text-gray-800 rounded-r-xl rounded-tl-xl p-3 max-w-[85%] shadow-sm">
                        Отлично! Отправляю ссылку на оплату. После оплаты доступ придет мгновенно. 👇
                    </div>
                </div>
            </div>
            <div className="p-3 border-t bg-white">
                <div className="h-2 w-full bg-gray-100 rounded animate-pulse"></div>
            </div>
        </div>
    );
};

// --- Main Sections ---

const Header = ({ onOpenModal }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                        <Zap size={20} fill="currentColor" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-slate-900">
                        Altera
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#problem" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Проблема</a>
                    <a href="#solution" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Решение</a>
                    <a href="#process" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Процесс</a>
                    <Button variant="primary" className="py-2 px-4 text-sm" onClick={onOpenModal}>
                        Обсудить внедрение
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t p-4 flex flex-col gap-4 animate-fade-in">
                    <a href="#problem" className="text-gray-800 py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Проблема</a>
                    <a href="#solution" className="text-gray-800 py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Решение</a>
                    <a href="#process" className="text-gray-800 py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Процесс</a>
                    <Button className="w-full" onClick={() => { setIsMobileMenuOpen(false); onOpenModal(); }}>
                        Обсудить внедрение
                    </Button>
                </div>
            )}
        </header>
    );
};

const Hero = ({ onOpenModal }) => {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 border border-blue-100">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Для B2C бизнеса с трафиком 200+ заявок
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                        Поднимите продажи <span className="text-blue-600">на 30%</span> с помощью ИИ-агента
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Автоматизируем общение с клиентами в мессенджерах за 5-30 дней. Ваши менеджеры отдыхают, Altera продает 24/7.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button onClick={onOpenModal} className="w-full sm:w-auto text-lg px-8">
                            Рассчитать рост прибыли
                            <ArrowRight size={20} />
                        </Button>
                        <div className="flex items-center gap-4 justify-center text-sm text-gray-500 py-3">
                            <div className="flex items-center gap-1">
                                <CheckCircle size={16} className="text-green-500" />
                                <span>Без кода</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCircle size={16} className="text-green-500" />
                                <span>Быстрый старт</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mt-8 lg:mt-0 chat-bubble">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 transform scale-90"></div>
                    <ChatSimulation />
                    
                    {/* Floating badges */}
                    <div className="absolute top-10 -right-4 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
                        <div className="bg-green-100 p-2 rounded-lg text-green-600">
                            <DollarSign size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Конверсия</p>
                            <p className="font-bold text-slate-900">+30%</p>
                        </div>
                    </div>

                    <div className="absolute bottom-20 -left-4 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
                        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                            <Clock size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Ответ</p>
                            <p className="font-bold text-slate-900">Мгновенно</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Audience = () => {
     return (
        <section className="py-16 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Для кого мы создали Altera?</h2>
                    <p className="text-gray-600">Наше решение идеально подходит для масштабируемого B2C бизнеса.</p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100">
                        <Users className="text-blue-600" size={24} />
                        <div>
                            <p className="font-semibold text-slate-900">Владельцы B2C</p>
                            <p className="text-xs text-gray-500">Товары, услуги, инфобизнес</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100">
                        <TrendingUp className="text-blue-600" size={24} />
                        <div>
                            <p className="font-semibold text-slate-900">РОПы</p>
                            <p className="text-xs text-gray-500">Устали от текучки кадров</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100 ring-2 ring-blue-600 ring-opacity-10">
                        <MessageSquare className="text-emerald-500" size={24} />
                        <div>
                            {/* Fixed the unescaped > character */}
                            <p className="font-semibold text-slate-900">Трафик &gt; 200/мес</p>
                            <p className="text-xs text-gray-500">Заявки в WhatsApp, TG, Insta</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Problem = () => {
    const problems = [
        {
            icon: <Clock size={32} className="text-red-500" />,
            title: "Долгие ответы",
            desc: "Менеджеры отвечают по 15-60 минут. Клиент остывает и уходит к конкурентам, которые ответили сразу."
        },
        {
            icon: <DollarSign size={32} className="text-red-500" />,
            title: "Слив бюджета",
            desc: "Вы платите за лиды, но 40% из них игнорируются или обрабатываются некачественно из-за нагрузки."
        },
        {
            icon: <Users size={32} className="text-red-500" />,
            title: "Человеческий фактор",
            desc: "Сотрудники болеют, спят, выгорают, забывают скрипты и не перезванивают вовремя."
        }
    ];

    return (
        <section id="problem" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Почему вы теряете деньги прямо сейчас?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        При большом потоке заявок (200+) "узким горлышком" становится отдел продаж.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, idx) => (
                        <div key={idx} className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100">
                            <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Solution = ({ onOpenModal }) => {
    return (
        <section id="solution" className="py-20 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium text-sm mb-6">
                            Решение Altera
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            Идеальный продавец, который не спит и не просит оклад
                        </h2>
                        <p className="text-slate-300 text-lg mb-8">
                            Наш ИИ-агент обучается на ваших лучших диалогах и продукте. Он ведет клиента по воронке от "Привет" до "Оплатил".
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <Zap className="text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-1">Мгновенная реакция</h4>
                                    <p className="text-slate-400">Ответ за 2 секунды в любое время суток. Удерживает внимание клиента сразу.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <Bot className="text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-1">Следование скрипту</h4>
                                    <p className="text-slate-400">Никакой отсебятины. ИИ ведет по воронке, отрабатывает возражения и закрывает на сделку.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <ShieldCheck className="text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-1">Полный контроль</h4>
                                    <p className="text-slate-400">Вся история сохраняется в CRM. Если клиент сложный — ИИ позовет человека.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Abstract graphics */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-30 blur-lg"></div>
                        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative">
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                                    <p className="text-3xl font-bold text-green-400 mb-1">+30%</p>
                                    <p className="text-sm text-slate-400">Конверсия в продажу</p>
                                </div>
                                <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                                    <p className="text-3xl font-bold text-blue-400 mb-1">0 сек</p>
                                    <p className="text-sm text-slate-400">Время ожидания</p>
                                </div>
                            </div>
                            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                                <h4 className="font-semibold mb-4 flex items-center gap-2">
                                    <TrendingUp size={18} className="text-blue-400"/> Результат внедрения
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Обработка заявок</span>
                                        <span className="text-white font-medium">100% (было 60%)</span>
                                    </div>
                                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                                        <div className="bg-green-500 h-full w-full"></div>
                                    </div>
                                    
                                    <div className="flex justify-between text-sm mt-4">
                                        <span className="text-slate-400">Стоимость лида</span>
                                        <span className="text-white font-medium">-25%</span>
                                    </div>
                                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                                        <div className="bg-blue-500 h-full w-[75%]"></div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-slate-700">
                                    <Button variant="accent" className="w-full" onClick={onOpenModal}>
                                        Хочу такой результат
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Process = () => {
    const steps = [
        {
            num: "01",
            title: "Аудит переписок",
            desc: "Анализируем ваши диалоги, CRM и скрипты продаж. Выявляем точки роста."
        },
        {
            num: "02",
            title: "Настройка ИИ",
            desc: "Создаем промпты, интегрируем базу знаний о вашем продукте и подключаем к CRM."
        },
        {
            num: "03",
            title: "Тест и запуск",
            desc: "Проводим тестовые диалоги, корректируем ответы и запускаем в бой на весь трафик."
        }
    ];

    return (
        <section id="process" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Внедрение за 5-30 дней</h2>
                    <p className="text-gray-600">Простая схема работы без остановки ваших текущих продаж.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0 transform translate-y-4"></div>
                    
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 bg-white p-6 pt-0 text-center group">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 border-4 border-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTA = ({ onOpenModal }) => {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Готовы увеличить прибыль компании?
                </h2>
                <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                    Оставьте заявку на бесплатный аудит ваших переписок. Покажем, где вы теряете деньги и сколько заработаете с Altera.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button variant="secondary" className="w-full sm:w-auto px-10 py-4 text-lg font-bold" onClick={onOpenModal}>
                        Оставить заявку
                    </Button>
                </div>
                <p className="mt-6 text-sm text-blue-200 opacity-80">
                    Подходит только для B2C с трафиком от 200 лидов
                </p>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <Zap size={24} className="text-blue-600" />
                    <span className="text-xl font-bold text-white">Altera</span>
                </div>
                <div className="text-sm text-center md:text-right">
                    <p className="mb-2">© {new Date().getFullYear()} Altera. Все права защищены.</p>
                    <p>Политика конфиденциальности</p>
                </div>
            </div>
        </footer>
    );
};

// --- Main App Component ---

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
            <style>
                {`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .chat-bubble {
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
                @keyframes scale-up {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-scale-up {
                    animation: scale-up 0.3s ease-out forwards;
                }
                `}
            </style>
            
            <Header onOpenModal={() => setIsModalOpen(true)} />
            
            <main>
                <Hero onOpenModal={() => setIsModalOpen(true)} />
                <Audience />
                <Problem />
                <Solution onOpenModal={() => setIsModalOpen(true)} />
                <Process />
                <CTA onOpenModal={() => setIsModalOpen(true)} />
            </main>

            <Footer />

            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                title="Рассчитать рост прибыли"
            >
                <div className="mb-4 text-sm text-gray-500">
                    Заполните форму, и мы свяжемся с вами, чтобы обсудить потенциал автоматизации для вашего бизнеса.
                </div>
                <LeadForm 
                    onSubmit={() => setTimeout(() => setIsModalOpen(false), 2000)} 
                />
            </Modal>
        </div>
    );
}
