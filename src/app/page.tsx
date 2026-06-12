const services = [
  {
    title: "Sistemas de gestão",
    description:
      "Plataformas internas para controlar processos, colaboradores, tarefas e performance com clareza.",
  },
  {
    title: "Automação inteligente",
    description:
      "Fluxos automáticos que eliminam trabalho manual repetitivo e reduzem erros operacionais.",
  },
  {
    title: "RH digital",
    description:
      "Ferramentas para recrutamento, onboarding, organização e acompanhamento de equipas com mais eficácia.",
  },
];

const benefits = [
  "Mais velocidade na execução dos processos",
  "Menos erros e maior controlo operacional",
  "Decisões mais rápidas com informação organizada",
  "Escalabilidade sem depender de esforço manual",
];

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Analisamos o negócio para encontrar gargalos, desperdícios e oportunidades reais.",
  },
  {
    number: "02",
    title: "Construção",
    description: "Criamos soluções sob medida, com foco em simplicidade, performance e usabilidade.",
  },
  {
    number: "03",
    title: "Otimização",
    description: "Ajustamos continuamente para garantir crescimento, eficiência e controlo no longo prazo.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(197,168,90,0.16),_transparent_45%),radial-gradient(circle_at_top_right,_rgba(26,115,232,0.12),_transparent_35%)]" />

        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl text-left">
              <span className="inline-flex items-center rounded-full border border-[#C5A85A]/20 bg-[#C5A85A]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A85A]">
                MAGRINHO SOLUTIONS
              </span>

              <h1 className="mt-8 text-4xl font-black tracking-tight text-black sm:text-5xl lg:text-7xl">
                Transforme processos em
                <span className="mt-3 block bg-gradient-to-r from-[#C5A85A] via-black to-[#1A73E8] bg-clip-text text-transparent">
                  vantagem competitiva
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
                Desenvolvemos sistemas, automações e soluções de gestão para empresas que querem crescer com mais organização, velocidade e controlo.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-xl bg-black px-7 py-4 text-base font-bold text-white transition-all hover:bg-[#1A73E8]"
                >
                  Solicitar diagnóstico
                </a>
                <a
                  href="https://wa.me/244921131848"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-7 py-4 text-base font-bold text-gray-900 transition-all hover:border-[#C5A85A]"
                >
                  Falar no WhatsApp
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="rounded-full border border-gray-200 bg-white px-4 py-2">+10 projetos entregues</div>
                <div className="rounded-full border border-gray-200 bg-white px-4 py-2">Foco em resultado real</div>
                <div className="rounded-full border border-gray-200 bg-white px-4 py-2">Processos claros e escaláveis</div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="rounded-2xl bg-gray-950 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C5A85A]">O que entregamos</p>
                <ul className="mt-5 space-y-3 text-sm text-gray-300">
                  {benefits.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#1A73E8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { label: "Tempo recuperado", value: "-60%" },
              { label: "Eficiência operacional", value: "+3x" },
              { label: "Disponibilidade", value: "24/7" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-gray-200 bg-white/80 p-5 backdrop-blur">
                <p className="text-3xl font-black text-black">{item.value}</p>
                <p className="mt-2 text-sm text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[#1A73E8]/20 bg-[#1A73E8]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#1A73E8]">
              O QUE FAZEMOS
            </span>
            <h2 className="mt-6 text-3xl font-black tracking-tight text-black sm:text-4xl">
              Soluções digitais pensadas para crescer com menos ruído e mais controlo
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Unimos tecnologia, automação e estratégia para transformar processos em vantagem competitiva.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-black text-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#C5A85A]/20 bg-[#C5A85A]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A85A]">
                COMO TRABALHAMOS
              </span>
              <h2 className="mt-6 text-3xl font-black tracking-tight text-black sm:text-4xl">
                Um processo simples, direto e orientado a resultados
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                A nossa abordagem mistura estratégia, execução e acompanhamento contínuo para que cada solução faça diferença desde o primeiro dia.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-black text-[#1A73E8]">{step.number}</p>
                  <h3 className="mt-3 text-lg font-black text-black">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-black py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#C5A85A]/30 bg-[#C5A85A]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A85A]">
                PRONTO PARA AVANÇAR?
              </span>
              <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">
                Vamos encontrar a melhor forma de modernizar o seu negócio
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Envie uma mensagem e diga o que precisa melhorar. Respondemos com uma análise inicial e uma proposta clara.
              </p>

              <div className="mt-8 space-y-3 text-sm text-gray-300">
                <p>Resposta rápida e objetiva</p>
                <p>Sem compromisso inicial</p>
                <p>Foco em soluções realmente úteis</p>
              </div>
            </div>

            <form className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="O teu nome"
                  className="w-full rounded-xl border border-gray-700 bg-transparent px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#1A73E8]"
                />
                <input
                  type="email"
                  placeholder="O teu email"
                  className="w-full rounded-xl border border-gray-700 bg-transparent px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#1A73E8]"
                />
                <textarea
                  placeholder="Descreve o teu problema ou necessidade"
                  rows={5}
                  className="w-full rounded-xl border border-gray-700 bg-transparent px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#1A73E8]"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-[#C5A85A] px-8 py-4 text-base font-black text-black transition-all hover:bg-white"
                >
                  Enviar pedido
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Magrinho Solutions. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a href="https://wa.me/244921131848" className="hover:text-[#C5A85A]" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href="#servicos" className="hover:text-[#C5A85A]">
              Serviços
            </a>
            <a href="#contacto" className="hover:text-[#C5A85A]">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}