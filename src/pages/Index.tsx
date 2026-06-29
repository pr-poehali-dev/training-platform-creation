import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/f17dec88-35c4-4179-a9f6-0ff9079588d1/files/18e0c339-f171-47f8-a7b9-fa0e0ae63a97.jpg';

const NAV = [
  { id: 'retraining', label: 'Переподготовка' },
  { id: 'qualification', label: 'Повышение квалификации' },
  { id: 'custom', label: 'Тренинги' },
  { id: 'assessment', label: 'Оценка компетенций' },
  { id: 'documents', label: 'Документы' },
];

const QUAL_COURSES = [
  { title: 'Заканчивание скважин', price: '85 000 ₽', dates: '14–18 июля 2026' },
  { title: 'Буровые растворы и промывочные жидкости', price: '72 000 ₽', dates: '21–25 июля 2026' },
  { title: 'Контроль скважины и ГНВП', price: '64 000 ₽', dates: '4–8 августа 2026' },
  { title: 'Цементирование обсадных колонн', price: '78 000 ₽', dates: '18–22 августа 2026' },
  { title: 'Телеметрия и геонавигация (MWD/LWD)', price: '94 000 ₽', dates: '1–5 сентября 2026' },
  { title: 'Супервайзинг буровых работ', price: '110 000 ₽', dates: '15–19 сентября 2026' },
];

const CUSTOM_DISCIPLINES = [
  'Наклонно-направленное бурение',
  'Гидравлика буровых растворов',
  'Заканчивание и освоение скважин',
  'Геомеханика ствола скважины',
  'Управление давлением (MPD)',
  'Капитальный ремонт скважин',
  'Бурение горизонтальных секций',
  'Промысловая геофизика',
];

const ASSESSMENT_DISCIPLINES = [
  'Технология бурения',
  'Буровое оборудование',
  'Контроль скважины',
  'Буровые растворы',
  'Заканчивание скважин',
  'Промышленная безопасность',
];

const DOCUMENTS = [
  { title: 'Диплом о профессиональной переподготовке', icon: 'GraduationCap', desc: 'Установленного образца, с правом ведения новой профессиональной деятельности' },
  { title: 'Удостоверение о повышении квалификации', icon: 'BadgeCheck', desc: 'Документ о прохождении курса повышения квалификации' },
  { title: 'Сертификат участника тренинга', icon: 'Award', desc: 'Подтверждение участия в кастомизированной программе' },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-primary/95 backdrop-blur border-b border-white/10">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-accent flex items-center justify-center">
              <span className="font-display font-bold text-primary text-lg">Т</span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-white tracking-wide text-lg">ШКОЛА ТОФС</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">Профессиональное обучение</div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm text-white/70 hover:text-accent transition-colors uppercase tracking-wide"
              >
                {n.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Буровая установка" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
          <div className="absolute inset-0 hero-grid opacity-40" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/40 text-accent text-xs uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 bg-accent" />
              Нефтегазовая отрасль
            </div>
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl leading-[1.05] mb-6 text-balance">
              ПОДГОТОВКА ИНЖЕНЕРОВ ДЛЯ БУРОВОЙ ОТРАСЛИ
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-xl">
              Профессиональная переподготовка, повышение квалификации и кастомизированные
              тренинги от практикующих экспертов нефтегазовой индустрии.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollTo('retraining')}
                className="bg-accent text-primary hover:bg-accent/90 font-display uppercase tracking-wide rounded-none h-12 px-8"
              >
                Программы обучения
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
              <Button
                onClick={() => scrollTo('documents')}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-display uppercase tracking-wide rounded-none h-12 px-8 bg-transparent"
              >
                Документы и лицензия
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-primary border-y border-white/10">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { n: '12+', l: 'Программ обучения' },
            { n: '500+', l: 'Выпускников' },
            { n: '15', l: 'Лет на рынке' },
            { n: '100%', l: 'Практикующих экспертов' },
          ].map((s) => (
            <div key={s.l} className="py-8 px-6 text-center">
              <div className="font-display font-bold text-accent text-4xl">{s.n}</div>
              <div className="text-white/60 text-sm mt-1 uppercase tracking-wide">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 1. Профессиональная переподготовка */}
      <Section id="retraining" num="01" title="Профессиональная переподготовка">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-card border border-border p-8 md:p-10">
            <div className="inline-block bg-accent/15 text-accent text-xs uppercase tracking-[0.15em] px-3 py-1 mb-5 font-medium">
              Флагманская программа
            </div>
            <h3 className="font-display font-bold text-3xl text-primary mb-4">
              Инженер по наклонно-направленному бурению
            </h3>
            <p className="text-muted-foreground mb-6">
              Программа готовит специалистов к самостоятельной работе на должности инженера
              ННБ: проектирование траектории, работа с телеметрией, сопровождение бурения
              горизонтальных и наклонных скважин.
            </p>
            <div className="space-y-4 mb-8">
              <InfoRow icon="Briefcase" label="Должность" value="Инженер по ННБ" />
              <InfoRow icon="Clock" label="Продолжительность" value="512 часов · 4 месяца" />
              <InfoRow icon="Wallet" label="Стоимость" value="180 000 ₽" />
            </div>
            <Button className="bg-primary text-white hover:bg-primary/90 font-display uppercase tracking-wide rounded-none h-12 px-8 w-full sm:w-auto">
              Приобрести курс
              <Icon name="ShoppingCart" size={18} className="ml-2" />
            </Button>
          </div>

          <div className="space-y-4">
            <div className="aspect-video bg-primary border border-border flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 hero-grid opacity-20" />
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon name="Play" size={28} className="text-primary ml-1" />
                </div>
                <div className="text-white/80 font-display uppercase tracking-wide text-sm">
                  О профессии · 3 мин
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground px-1">
              Короткое видео раскрывает суть профессии инженера по наклонно-направленному
              бурению и перспективы работы в отрасли.
            </p>
          </div>
        </div>
      </Section>

      {/* 2. Повышение квалификации */}
      <Section id="qualification" num="02" title="Повышение квалификации" dark>
        <p className="text-white/60 max-w-2xl mb-10">
          Краткосрочные курсы для действующих специалистов. Актуальные программы,
          современные методики и реальные кейсы из практики.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {QUAL_COURSES.map((c) => (
            <div
              key={c.title}
              className="bg-white/[0.04] border border-white/10 p-6 hover:border-accent/50 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <Icon name="BookOpen" size={24} className="text-accent" />
                <span className="text-xs text-white/40 uppercase tracking-wide">{c.dates}</span>
              </div>
              <h4 className="font-display font-semibold text-white text-xl mb-2 leading-snug flex-1">
                {c.title}
              </h4>
              <div className="font-display font-bold text-accent text-2xl mb-4">{c.price}</div>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white hover:text-primary rounded-none font-display uppercase tracking-wide text-sm bg-transparent"
              >
                Узнать больше
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Кастомизированные тренинги */}
      <Section id="custom" num="03" title="Кастомизированные тренинги">
        <p className="text-muted-foreground max-w-2xl mb-10">
          Разработаем курс под задачи вашей компании. Выберите дисциплину — мы подготовим
          программу под уровень и численность вашего персонала.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CUSTOM_DISCIPLINES.map((d) => (
            <button
              key={d}
              className="group text-left bg-card border border-border p-6 hover:border-accent hover:shadow-lg transition-all"
            >
              <Icon name="Layers" size={22} className="text-accent mb-4" />
              <div className="font-display font-semibold text-primary text-lg leading-snug mb-3">
                {d}
              </div>
              <span className="text-sm text-accent flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Оставить заявку <Icon name="ArrowRight" size={14} />
              </span>
            </button>
          ))}
        </div>
      </Section>

      {/* 4. Оценка технических компетенций */}
      <Section id="assessment" num="04" title="Оценка технических компетенций" dark>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-white/70 mb-6 text-lg">
              Проведём независимую оценку компетентности персонала Заказчика. Выявим сильные
              стороны и зоны роста, сформируем рекомендации по развитию команды.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {ASSESSMENT_DISCIPLINES.map((d) => (
                <div key={d} className="flex items-center gap-2 text-white/80">
                  <Icon name="CircleCheck" size={18} className="text-accent shrink-0" />
                  <span className="text-sm">{d}</span>
                </div>
              ))}
            </div>
            <Button className="bg-accent text-primary hover:bg-accent/90 font-display uppercase tracking-wide rounded-none h-12 px-8">
              <Icon name="MessageSquare" size={18} className="mr-2" />
              Связаться со Школой ТОФС
            </Button>
          </div>
          <div className="bg-white/[0.04] border border-white/10 p-10">
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { icon: 'ClipboardCheck', l: 'Тестирование' },
                { icon: 'Users', l: 'Интервью' },
                { icon: 'FileBarChart', l: 'Отчёт' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="w-14 h-14 mx-auto bg-accent/15 flex items-center justify-center mb-3">
                    <Icon name={s.icon} size={26} className="text-accent" />
                  </div>
                  <div className="text-white/70 text-sm uppercase tracking-wide">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center">
              <div className="font-display font-bold text-accent text-3xl mb-1">3 этапа</div>
              <div className="text-white/50 text-sm uppercase tracking-wide">
                комплексной оценки
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Документы */}
      <Section id="documents" num="05" title="Документы и лицензия">
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {DOCUMENTS.map((d) => (
            <div key={d.title} className="bg-card border border-border p-7 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/15 flex items-center justify-center mb-5">
                <Icon name={d.icon} size={24} className="text-accent" />
              </div>
              <h4 className="font-display font-semibold text-primary text-lg mb-2">{d.title}</h4>
              <p className="text-sm text-muted-foreground">{d.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-primary text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-accent shrink-0 flex items-center justify-center">
              <Icon name="ShieldCheck" size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl mb-1">Образовательная лицензия</h4>
              <p className="text-white/60 text-sm max-w-xl">
                Школа ТОФС осуществляет образовательную деятельность на основании лицензии,
                выданной в установленном законом порядке. Все выдаваемые документы имеют
                юридическую силу.
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 rounded-none font-display uppercase tracking-wide bg-transparent shrink-0"
          >
            <Icon name="FileText" size={18} className="mr-2" />
            Посмотреть лицензию
          </Button>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-primary border-t border-white/10 py-12">
        <div className="container grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-accent flex items-center justify-center">
                <span className="font-display font-bold text-primary text-lg">Т</span>
              </div>
              <span className="font-display font-bold text-white tracking-wide text-lg">
                ШКОЛА ТОФС
              </span>
            </div>
            <p className="text-white/50 text-sm">
              Профессиональное обучение специалистов нефтегазовой отрасли.
            </p>
          </div>
          <div>
            <div className="font-display uppercase tracking-wide text-white/40 text-xs mb-4">
              Разделы
            </div>
            <div className="space-y-2">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="block text-white/70 hover:text-accent text-sm transition-colors"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="font-display uppercase tracking-wide text-white/40 text-xs mb-4">
              Контакты
            </div>
            <div className="space-y-2 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-accent" />
                info@tofsgroup.ru
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-accent" />
                Россия, нефтегазовый регион
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-10 pt-6 border-t border-white/10 text-white/40 text-xs">
          © 2026 Школа ТОФС. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

const Section = ({
  id,
  num,
  title,
  children,
  dark,
}: {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <section
    id={id}
    className={`py-20 md:py-28 scroll-mt-16 ${dark ? 'bg-primary' : 'bg-background'}`}
  >
    <div className="container">
      <div className="flex items-baseline gap-4 mb-12">
        <span className="font-display font-bold text-accent text-2xl">{num}</span>
        <span className={`h-px flex-1 max-w-[60px] ${dark ? 'bg-white/20' : 'bg-border'}`} />
        <h2
          className={`font-display font-bold text-3xl md:text-4xl uppercase tracking-tight ${
            dark ? 'text-white' : 'text-primary'
          }`}
        >
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
);

const InfoRow = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
  <div className="flex items-center gap-4 border-b border-border pb-3">
    <div className="w-10 h-10 bg-secondary flex items-center justify-center shrink-0">
      <Icon name={icon} size={20} className="text-primary" />
    </div>
    <div>
      <div className="text-xs text-muted-foreground uppercase tracking-wide">{label}</div>
      <div className="font-display font-semibold text-primary text-lg">{value}</div>
    </div>
  </div>
);

export default Index;
