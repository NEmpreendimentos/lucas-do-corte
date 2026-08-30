/* Design: Black & Gold Atelier — composição editorial assimétrica, textura carvão, dourado lâmina #D89B2B, tipografia Bebas Neue + DM Sans, CTAs diretos e interações curtas. */
import { useEffect, useState } from "react";
import { ArrowUpRight, CalendarDays, Check, Clock3, Crown, Menu, MapPin, MessageCircle, Scissors, Sparkles, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const WHATSAPP = "https://wa.me/5562981025908";

const services = [
  { name: "Corte social + degrade", note: "Máquina, tesoura e acabamento", price: "R$ 30", icon: Scissors },
  { name: "Navalhado", note: "Ritual clássico com toalha quente", price: "R$ 35", icon: Sparkles },
  { name: "Barba", note: "Modelagem, toalha quente e hidratação", price: "R$ 10", icon: Crown },
];

const highlights = [
  ["01", "Precisão em cada linha", "Do primeiro risco ao acabamento, cada detalhe recebe o tempo certo."],
  ["02", "Atendimento sem pressa", "Uma cadeira, uma conversa e um resultado que combina com você."],
  ["03", "Também em domicílio", "Todos os cortes da casa disponíveis no conforto da sua casa."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Corte social + degrade");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Lucas do Corte — Estilo, precisão e confiança";
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleBooking = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const day = String(data.get("day") || "");
    const message = `Olá, Lucas! Sou ${name}. Quero agendar ${selectedService}${day ? ` para ${day}` : ""}.`;
    setSent(true);
    toast.success("Pedido preparado", { description: "Abrindo o WhatsApp para concluir seu horário." });
    window.open(`${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0a] text-[#f4f0e8]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0b0a]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <button className="group flex items-center gap-3" onClick={() => scrollTo("top")} aria-label="Voltar ao topo">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#d89b2b]/70 text-[#d89b2b] transition group-hover:bg-[#d89b2b] group-hover:text-[#0b0b0a]"><Scissors size={19} className="rotate-[-28deg]" /><span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#d89b2b]" /></span>
            <span className="text-left leading-none"><span className="block font-script text-[25px] leading-5 text-[#e2a632]">Lucas</span><span className="block mt-1 text-[10px] font-bold tracking-[0.32em] text-[#f4f0e8]/75">DO CORTE</span></span>
          </button>
          <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f4f0e8]/65 lg:flex">
            <button onClick={() => scrollTo("servicos")} className="transition hover:text-[#e2a632]">Serviços</button>
            <button onClick={() => scrollTo("experiencia")} className="transition hover:text-[#e2a632]">A experiência</button>
            <button onClick={() => scrollTo("localizacao")} className="transition hover:text-[#e2a632]">Onde estamos</button>
          </nav>
          <div className="flex items-center gap-3"><a href={WHATSAPP} target="_blank" rel="noreferrer" className="hidden text-xs font-bold uppercase tracking-[0.15em] text-[#e2a632] sm:block">WhatsApp</a><Button onClick={() => setBookingOpen(true)} className="h-10 rounded-none border border-[#d89b2b] bg-[#d89b2b] px-4 text-xs font-bold uppercase tracking-[0.12em] text-[#0b0b0a] hover:bg-[#f2bb52]">Agendar <ArrowUpRight size={15} /></Button><button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden" aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button></div>
        </div>
        {menuOpen && <div className="border-t border-white/10 bg-[#121210] px-5 py-5 lg:hidden"><div className="flex flex-col gap-5 text-sm uppercase tracking-[0.18em] text-white/80"><button onClick={() => scrollTo("servicos")} className="text-left">Serviços</button><button onClick={() => scrollTo("experiencia")} className="text-left">A experiência</button><button onClick={() => scrollTo("localizacao")} className="text-left">Onde estamos</button></div></div>}
      </header>

      <section id="top" className="relative flex min-h-[720px] items-end border-b border-[#d89b2b]/20 bg-[#0b0b0a] pt-28 lg:min-h-[790px] lg:items-center">
        <div className="absolute inset-0 bg-[url('/manus-storage/lucas-hero_e5982153.jpg')] bg-cover bg-center opacity-55" /><div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0a] via-[#0b0b0a]/78 to-[#0b0b0a]/10" /><div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0a] via-transparent to-[#0b0b0a]/40" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:pb-0">
          <div className="max-w-2xl animate-fade-up"><div className="mb-7 flex items-center gap-3 text-[#e2a632]"><span className="h-px w-12 bg-[#d89b2b]" /><span className="text-xs font-bold uppercase tracking-[0.3em]">Barbearia & atendimento em domicílio</span></div><h1 className="font-display text-[clamp(4.7rem,11vw,9.5rem)] leading-[.78] tracking-[.02em] text-[#f4f0e8]">SEU CORTE.<br /><span className="text-[#e2a632]">SUA MARCA.</span></h1><p className="mt-8 max-w-md text-base leading-7 text-[#f4f0e8]/70 sm:text-lg">Estilo, precisão e confiança em cada atendimento. A cadeira está pronta — agora falta você.</p><div className="mt-9 flex flex-wrap gap-4"><Button onClick={() => setBookingOpen(true)} className="h-14 rounded-none bg-[#d89b2b] px-7 font-bold uppercase tracking-[0.16em] text-[#0b0b0a] hover:bg-[#f2bb52]">Reservar meu horário <ArrowUpRight size={18} /></Button><button onClick={() => scrollTo("servicos")} className="flex h-14 items-center gap-2 border border-white/25 px-6 text-sm font-bold uppercase tracking-[0.12em] transition hover:border-[#d89b2b] hover:text-[#e2a632]">Ver serviços <ArrowUpRight size={17} /></button></div></div>
          <div className="relative ml-auto w-full max-w-sm border border-[#d89b2b]/50 bg-[#10100e]/90 p-5 backdrop-blur-sm lg:translate-y-14"><div className="flex items-center justify-between border-b border-white/15 pb-4"><div><p className="font-display text-2xl tracking-wide text-[#e2a632]">A CARTA</p><p className="text-[10px] uppercase tracking-[0.25em] text-white/45">Serviços essenciais</p></div><Scissors className="text-[#d89b2b]" size={24} /></div>{services.map((service) => <button key={service.name} onClick={() => { setSelectedService(service.name); setBookingOpen(true); }} className="group flex w-full items-center justify-between border-b border-white/10 py-5 text-left last:border-0"><span className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d89b2b]/60 text-[#e2a632]"><service.icon size={16} /></span><span><span className="block text-sm font-bold text-white/90 group-hover:text-[#e2a632]">{service.name}</span><span className="mt-1 block text-xs text-white/45">{service.note}</span></span></span><span className="price-tag font-display text-3xl text-[#e2a632]">{service.price}</span></button>)}<div className="mt-2 border-t border-[#d89b2b]/40 pt-4 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">Todos os cortes em domicílio</div></div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#11110f] py-6"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 sm:px-8"><p className="text-xs font-bold uppercase tracking-[0.22em] text-white/55">O acabamento fala por você</p><div className="flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-[#e2a632]"><span className="flex items-center gap-2"><Clock3 size={15} /> Atendimento com hora marcada</span><span className="hidden items-center gap-2 sm:flex"><MapPin size={15} /> Goiânia & região</span></div></div></section>

      <section id="servicos" className="relative bg-[#f0ece3] py-24 text-[#11110f] sm:py-32"><div className="absolute right-0 top-0 h-64 w-1/3 bg-[#d89b2b]/10" /><div className="relative mx-auto max-w-7xl px-5 sm:px-8"><div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#9c6b16]">A carta do dia</p><h2 className="font-display text-6xl leading-none tracking-wide sm:text-8xl">SEM EXCESSO.<br /><span className="text-[#b47d1d]">SÓ O ESSENCIAL.</span></h2></div><p className="max-w-xs border-l-2 border-[#d89b2b] pl-5 text-sm leading-6 text-[#5b574f]">Serviços que respeitam a tradição, mas entregam o acabamento que o seu estilo pede.</p></div><div className="grid gap-0 border-y border-[#151512]/20 lg:grid-cols-3">{services.map((service, index) => <div key={service.name} className="group relative border-b border-[#151512]/20 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"><span className="font-display text-5xl text-[#d89b2b]/40">0{index + 1}</span><div className="mt-5 flex items-start justify-between gap-4"><div><h3 className="font-display text-3xl tracking-wide">{service.name}</h3><p className="mt-2 max-w-[230px] text-sm leading-6 text-[#69645a]">{service.note}</p></div><span className="price-tag font-display text-3xl text-[#a97317]">{service.price}</span></div><button onClick={() => { setSelectedService(service.name); setBookingOpen(true); }} className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#9c6b16] transition group-hover:gap-4">Escolher serviço <ArrowUpRight size={15} /></button></div>)}</div></div></section>

      <section id="experiencia" className="bg-[#0b0b0a] py-24 sm:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-24"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#e2a632]">O jeito Lucas do Corte</p><h2 className="font-display text-6xl leading-[.9] tracking-wide sm:text-8xl">UMA BOA<br /><span className="text-[#e2a632]">PRESENÇA</span><br />COMEÇA AQUI.</h2><p className="mt-8 max-w-sm text-base leading-7 text-white/60">Não é só sobre cortar. É sobre sair da cadeira sentindo que tudo está no lugar.</p></div><div className="space-y-0 border-t border-white/15">{highlights.map(([number, title, text]) => <div key={number} className="group grid gap-5 border-b border-white/15 py-7 sm:grid-cols-[70px_1fr] sm:gap-8"><span className="font-display text-4xl text-[#d89b2b]">{number}</span><div><h3 className="font-display text-3xl tracking-wide text-white transition group-hover:text-[#e2a632]">{title}</h3><p className="mt-2 max-w-lg text-sm leading-6 text-white/55">{text}</p></div></div>)}</div></div></section>

      <section className="bg-[#151512] py-5"><div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-[1.1fr_.9fr]"><div className="relative min-h-[460px] overflow-hidden border border-white/10 bg-[#0b0b0a]"><img src="/manus-storage/lucas-poster_6ed8ba75.png" alt="Arte de serviços Lucas do Corte" className="absolute inset-0 h-full w-full object-cover object-center opacity-60 transition duration-700 hover:scale-105" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-7"><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e2a632]">01 / O ambiente</p><p className="mt-2 font-display text-4xl tracking-wide">A CADEIRA É SUA.</p></div></div><div className="relative min-h-[460px] overflow-hidden border border-white/10 bg-[#0b0b0a]"><img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=85" alt="Ferramentas de barbeiro" className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 hover:scale-105" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-7"><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e2a632]">02 / O detalhe</p><p className="mt-2 font-display text-4xl tracking-wide">PRECISÃO NA LÂMINA.</p></div></div></div></section>

      <section id="localizacao" className="bg-[#e8e2d6] py-24 text-[#11110f] sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.8fr] lg:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#9c6b16]">Vamos marcar?</p><h2 className="font-display text-7xl leading-[.85] tracking-wide sm:text-9xl">A PRÓXIMA<br /><span className="text-[#b47d1d]">É SUA.</span></h2><Button onClick={() => setBookingOpen(true)} className="mt-9 h-14 rounded-none bg-[#11110f] px-7 font-bold uppercase tracking-[0.15em] text-[#f0ece3] hover:bg-[#d89b2b] hover:text-[#11110f]">Agendar agora <CalendarDays size={17} /></Button></div><div className="border-t-2 border-[#d89b2b] pt-5 text-sm leading-7 text-[#5b574f]"><div className="mb-7 flex items-start gap-3"><MapPin className="mt-1 shrink-0 text-[#b47d1d]" size={20} /><div><strong className="block uppercase tracking-[0.13em] text-[#11110f]">Atendimento em Goiânia</strong><span>Na barbearia ou no conforto da sua casa.</span></div></div><div className="mb-7 flex items-start gap-3"><Clock3 className="mt-1 shrink-0 text-[#b47d1d]" size={20} /><div><strong className="block uppercase tracking-[0.13em] text-[#11110f]">Horários</strong><span>Seg a sáb · 08h às 20h<br />Domingos sob consulta</span></div></div><div className="flex items-start gap-3"><MessageCircle className="mt-1 shrink-0 text-[#b47d1d]" size={20} /><div><strong className="block uppercase tracking-[0.13em] text-[#11110f]">WhatsApp</strong><a href={WHATSAPP} target="_blank" rel="noreferrer" className="font-bold text-[#9c6b16]">(62) 98102-5908</a></div></div></div></div></section>

      <footer className="border-t border-[#d89b2b]/30 bg-[#0b0b0a] py-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 text-xs uppercase tracking-[0.15em] text-white/40 sm:flex-row sm:px-8"><span>© 2026 Lucas do Corte</span><span className="text-[#e2a632]">Estilo · Precisão · Confiança</span></div></footer>

      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#d89b2b] text-[#0b0b0a] shadow-[0_10px_30px_rgba(216,155,43,.24)] transition hover:scale-105 hover:bg-[#f2bb52]"><MessageCircle size={25} /></a>

      {bookingOpen && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm" role="dialog" aria-modal="true"><div className="relative w-full max-w-lg border border-[#d89b2b]/60 bg-[#141411] p-6 shadow-2xl sm:p-9"><button onClick={() => setBookingOpen(false)} className="absolute right-5 top-5 text-white/60 hover:text-white" aria-label="Fechar"><X size={20} /></button><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e2a632]">Reserva rápida</p><h2 className="mt-3 font-display text-5xl tracking-wide">RESERVE SUA CADEIRA.</h2><p className="mt-3 text-sm leading-6 text-white/55">Preencha seus dados e continue pelo WhatsApp para combinar o melhor horário.</p><form onSubmit={handleBooking} className="mt-7 space-y-4"><input required name="name" placeholder="Seu nome" className="h-12 w-full border border-white/15 bg-black/20 px-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#d89b2b]" /><select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="h-12 w-full border border-white/15 bg-[#191914] px-4 text-sm text-white outline-none focus:border-[#d89b2b]">{services.map((service) => <option key={service.name}>{service.name}</option>)}</select><input name="day" placeholder="Dia ou período de preferência" className="h-12 w-full border border-white/15 bg-black/20 px-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#d89b2b]" /><Button type="submit" className="h-13 w-full rounded-none bg-[#d89b2b] font-bold uppercase tracking-[0.16em] text-[#0b0b0a] hover:bg-[#f2bb52]">{sent ? <><Check size={18} /> Mensagem preparada</> : <>Continuar no WhatsApp <ArrowUpRight size={17} /></>}</Button></form></div></div>}
    </main>
  );
}
