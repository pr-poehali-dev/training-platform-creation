import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const NAV = [
  { id: 'retraining', label: 'Переподготовка' },
  { id: 'qualification', label: 'Повышение квалификации' },
  { id: 'custom', label: 'Тренинги' },
  { id: 'assessment', label: 'Оценка компетенций' },
  { id: 'documents', label: 'Документы' },
];

const QUAL_COURSES = [
  { title: 'Заканчивание скважин', price: 'ХХХ', dates: '14–18 июля 2026' },
  { title: 'Буровые растворы и промывочные жидкости', price: 'ХХХ', dates: '21–25 июля 2026' },
  { title: 'Контроль скважины и ГНВП', price: 'ХХХ', dates: '4–8 августа 2026' },
  { title: 'Цементирование обсадных колонн', price: 'ХХХ', dates: '18–22 августа 2026' },
  { title: 'Телеметрия и геонавигация (MWD/LWD)', price: 'ХХХ', dates: '1–5 сентября 2026' },
  { title: 'Супервайзинг буровых работ', price: 'ХХХ', dates: '15–19 сентября 2026' },
];

const CUSTOM_DISCIPLINES = [
  'Наклонно-направленное бурение',
  'Наклонно-направленное бурение',
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

interface LeadForm {
  name: string;
  phone: string;
  email: string;
  company: string;
}

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<LeadForm>({ name: '', phone: '', email: '', company: '' });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setTimeout(() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', company: '' }); }, 300);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-primary/95 backdrop-blur border-b border-white/10">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-accent flex items-center justify-center">
              <span className="font-display font-bold text-white text-lg">Т</span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-white tracking-wide text-lg">ШКОЛА ТОФС</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">Центр технических компетенций и обучения ГК ТОФС</div>
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

      {/* 1. Профессиональная переподготовка */}
      <Section id="retraining" num="01" title="Профессиональная переподготовка" first>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-card border border-border p-8 md:p-10">
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
              <InfoRow icon="Wallet" label="Стоимость" value="ХХХ" />
            </div>
            <Button
              onClick={() => setModalOpen(true)}
              className="bg-accent text-white hover:bg-accent/90 font-display uppercase tracking-wide rounded-none h-12 px-8 w-full sm:w-auto"
            >
              Приобрести курс
              <Icon name="ShoppingCart" size={18} className="ml-2" />
            </Button>
          </div>

          <div className="space-y-4">
            <div className="aspect-video bg-primary border border-border flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 hero-grid opacity-20" />
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon name="Play" size={28} className="text-white ml-1" />
                </div>
                <div className="text-white/80 font-display uppercase tracking-wide text-sm">
                  О профессии · 3 мин
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground px-1"></p>
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
        <div className="grid sm:grid-cols-2 gap-4">
          {CUSTOM_DISCIPLINES.map((d, i) => (
            <button
              key={i}
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
        <p className="text-white/70 mb-8 text-lg max-w-2xl">
          Проведём независимую оценку компетентности персонала Заказчика. Выявим сильные
          стороны и зоны роста, сформируем рекомендации по развитию команды.
        </p>
        <Button className="bg-accent text-white hover:bg-accent/90 font-display uppercase tracking-wide rounded-none h-12 px-8">
          <Icon name="MessageSquare" size={18} className="mr-2" />
          Связаться со Школой ТОФС
        </Button>
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
              <Icon name="ShieldCheck" size={28} className="text-white" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl mb-1">Образовательная лицензия</h4>
              <p className="text-white/60 text-sm max-w-xl">
                Школа ТОФС осуществляет образовательную деятельность на основании лицензии,
                выданной в установленном законом порядке.
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
                <span className="font-display font-bold text-white text-lg">Т</span>
              </div>
              <span className="font-display font-bold text-white tracking-wide text-lg">ШКОЛА ТОФС</span>
            </div>
            <p className="text-white/50 text-sm"></p>
          </div>
          <div>
            <div className="font-display uppercase tracking-wide text-white/40 text-xs mb-4"></div>
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
            <div className="font-display uppercase tracking-wide text-white/40 text-xs mb-4">Контакты</div>
            <div className="space-y-2 text-white/70 text-sm">
              <div className="flex items-center gap-2">school@tofsgroup.ru</div>
              <div className="flex items-center gap-2">Тюмень, Старый Тобольский тракт,
2-й километр, 8с25, офис 331</div>
            </div>
          </div>
        </div>
        <div className="container mt-10 pt-6 border-t border-white/10 text-white/40 text-xs">
          © 2026 Школа ТОФС. Все права защищены.
        </div>
      </footer>

      {/* Модальное окно заявки */}
      <Dialog open={modalOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md rounded-none border-border p-0 overflow-hidden">
          <div className="bg-primary px-8 py-6">
            <DialogHeader>
              <DialogTitle className="font-display font-bold text-white text-2xl uppercase tracking-wide">
                Оставьте заявку
              </DialogTitle>
            </DialogHeader>
            <p className="text-white/60 text-sm mt-1">
              Мы свяжемся с вами в течение рабочего дня
            </p>
          </div>

          {submitted ? (
            <div className="px-8 py-12 text-center">
              <div className="w-16 h-16 mx-auto bg-accent/15 rounded-full flex items-center justify-center mb-4">
                <Icon name="CircleCheck" size={32} className="text-accent" />
              </div>
              <h3 className="font-display font-bold text-primary text-2xl mb-2">Заявка отправлена</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Наш менеджер свяжется с вами в ближайшее время
              </p>
              <Button
                onClick={handleClose}
                className="bg-accent text-white hover:bg-accent/90 font-display uppercase tracking-wide rounded-none h-11 px-8"
              >
                Закрыть
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wide text-muted-foreground mb-1.5 block">
                  Имя и фамилия *
                </label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Иван Петров"
                  className="rounded-none border-border h-11"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-muted-foreground mb-1.5 block">
                  Телефон *
                </label>
                <Input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (900) 000-00-00"
                  className="rounded-none border-border h-11"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-muted-foreground mb-1.5 block">
                  Email
                </label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="ivan@company.ru"
                  className="rounded-none border-border h-11"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-muted-foreground mb-1.5 block">
                  Компания
                </label>
                <Input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="ООО «Нефтегаз»"
                  className="rounded-none border-border h-11"
                />
              </div>
              <div className="pt-2">
                <Button
                  type="submit"
                  className="bg-accent text-white hover:bg-accent/90 font-display uppercase tracking-wide rounded-none h-12 px-8 w-full"
                >
                  Отправить заявку
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const Section = ({
  id, num, title, children, dark, first,
}: {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
  first?: boolean;
}) => (
  <section
    id={id}
    className={`py-20 md:py-28 scroll-mt-16 ${first ? 'pt-28 md:pt-32' : ''} ${dark ? 'bg-primary' : 'bg-background'}`}
  >
    <div className="container">
      <div className="flex items-baseline gap-4 mb-12">
        <span className="font-display font-bold text-accent text-2xl">{num}</span>
        <span className={`h-px flex-1 max-w-[60px] ${dark ? 'bg-white/20' : 'bg-border'}`} />
        <h2 className={`font-display font-bold text-3xl md:text-4xl uppercase tracking-tight ${dark ? 'text-white' : 'text-primary'}`}>
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