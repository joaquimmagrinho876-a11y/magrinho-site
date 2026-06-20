'use client'
import { ArrowRight, Shield, Zap, Users, Palette, Check, Menu, X, Mail, MapPin, Linkedin, FileText, Target, Settings, Headphones, Briefcase, Bot, Award, Rocket } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const whatsappLink = "https://wa.me/244921131848?text=Ol%C3%A1%2C%20quero%20fazer%20o%20Diagn%C3%B3stico%20PONTE_MS%E2%84%A2"
  
  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Método PONTE_MS™', href: '#metodo' },
    { name: 'Diagnóstico PONTE_MS™', href: '#diagnostico' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contactos', href: '#contactos' },
  ]

  const ponteSteps = [
    { icon: "🔍", letra: "P", nome: "Perceber", desc: "Analisar e compreender a realidade atual da empresa." },
    { icon: "📋", letra: "O", nome: "Organizar", desc: "Estruturar processos, documentos e fluxos de trabalho." },
    { icon: "🧾", letra: "N", nome: "Normalizar", desc: "Criar padrões e procedimentos claros e repetíveis." },
    { icon: "⚙", letra: "T", nome: "Transformar", desc: "Aplicar melhorias, digitalização e tecnologia." },
    { icon: "🚀", letra: "E", nome: "Evoluir", desc: "Garantir melhoria contínua e crescimento sustentável." },
  ]

  const comoFunciona = [
    { icon: FileText, num: "1", titulo: "Diagnóstico PONTE_MS™", desc: "Identificamos falhas e oportunidades nos processos de RH." },
    { icon: Target, num: "2", titulo: "Plano de Ação", desc: "Entregamos um roadmap priorizado com ROI estimado." },
    { icon: Settings, num: "3", titulo: "Implementação", desc: "Executamos a organização e digitalização dos processos." },
    { icon: Headphones, num: "4", titulo: "Acompanhamento", desc: "Garantimos evolução contínua e suporte." },
  ]

  const servicos = [
    { icon: FileText, nome: "Diagnóstico PONTE_MS™", desc: "Avaliação completa da maturidade dos processos de RH." },
    { icon: Briefcase, nome: "Organização Documental", desc: "Estruturação e normalização de documentos de RH." },
    { icon: Users, nome: "Recrutamento e Seleção", desc: "Processos organizados de atração e seleção de talentos." },
    { icon: Zap, nome: "Automação de RH", desc: "Redução de trabalho manual com tecnologia." },
    { icon: Bot, nome: "Recepcionista Digital", desc: "Atendimento automatizado para RH." },
    { icon: Award, nome: "Consultoria de RH", desc: "Estratégia e melhoria contínua em gestão de pessoas." },
  ]

  const autoridade = [
    { icon: Award, titulo: "Metodologia própria", desc: "Método PONTE_MS™ validado e estruturado." },
    { icon: Target, titulo: "Foco em resultados", desc: "Cada ação tem impacto mensurável no negócio." },
    { icon: Zap, titulo: "Integração RH + Tecnologia", desc: "Unimos gestão de pessoas com digitalização." },
    { icon: Settings, titulo: "Soluções adaptadas", desc: "Personalizamos conforme a realidade empresarial." },
  ]

  const valores = [
    "Integridade", "Comprometimento", "Responsabilidade", "Serviço ao Cliente",
    "Simplicidade", "Organização", "Melhoria Contínua", "Crescimento Sustentável"
  ]

  return (
    <main className="bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold tracking-tight">
                MAGRINHO SOLUTIONS
              </Link>
            </div>
            <div className="hidden lg:flex lg:gap-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-semibold leading-6 text-slate-900 hover:text-[#D4AF37]">
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex">
              <Link href={whatsappLink} className="rounded-md bg-[#3B82C6] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2563EB]">
                Fale Connosco
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="lg:hidden py-6 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="block text-base font-semibold text-slate-900">
                  {link.name}
                </Link>
              ))}
              <Link href={whatsappLink} className="block rounded-md bg-[#3B82C6] px-4 py-2 text-center text-sm font-semibold text-white">
                Fale Connosco
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* 1. HOME - HERO */}
      <section id="inicio" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Transformamos processos de{' '}
            <span className="text-[#3B82C6]">RH</span> em{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent">
              sistemas eficientes
            </span>
            .
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
            Através do Método PONTE_MS™ ajudamos empresas a organizar, normalizar, transformar e evoluir os seus processos de gestão de pessoas.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
            <Link href="#diagnostico" className="w-full sm:w-auto rounded-md bg-gradient-to-r from-[#D4AF37] to-[#B8941F] px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:opacity-90">
              Solicitar Diagnóstico PONTE_MS™ <ArrowRight className="inline ml-1 h-4 w-4" />
            </Link>
            <Link href={whatsappLink} className="w-full sm:w-auto rounded-md bg-[#3B82C6] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#2563EB]">
              Falar no WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* 2. COMO FUNCIONA - NOVA */}
      <section id="como-funciona" className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Como Funciona
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {comoFunciona.map((item) => (
              <div key={item.num} className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                <div className="mx-auto w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div className="text-sm font-bold text-[#3B82C6] mb-2">PASSO {item.num}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.titulo}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOBRE NÓS */}
      <section id="sobre" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#D4AF37]">Sobre Nós</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Quem Somos
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A Magrinho Solutions é uma empresa de HR Tech focada em ajudar empresas a organizar, estruturar e modernizar os seus processos de Recursos Humanos através de métodos simples, claros e orientados a resultados.
            </p>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Missão</h3>
              <p className="text-lg leading-8 text-slate-600">
                Transformar a forma como as empresas gerem pessoas através de processos simples, organizados e eficientes.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Visão</h3>
              <p className="text-lg leading-8 text-slate-600">
                Ajudar a construir uma nova geração de empresas mais organizadas, eficientes e sustentáveis através da melhoria dos processos de Recursos Humanos.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Valores</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {valores.map((valor) => (
                  <div key={valor} className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
                    <span className="text-sm font-medium text-slate-900">{valor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MÉTODO PONTE_MS™ - CARDS GRANDES */}
      <section id="metodo" className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#D4AF37]">Nosso Diferencial</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Método PONTE_MS™
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {ponteSteps.map((step) => (
              <div key={step.letra} className="bg-white p-8 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-3xl font-bold text-[#D4AF37] mb-3">{step.letra}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.nome}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DIAGNÓSTICO PONTE_MS™ */}
      <section id="diagnostico" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Diagnóstico PONTE_MS™
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              O Diagnóstico PONTE_MS™ é o serviço de entrada da Magrinho Solutions. O seu objetivo é identificar falhas, oportunidades de melhoria e o nível de maturidade dos processos de RH da empresa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">O que avaliamos</h3>
              <ul className="space-y-3">
                {["Estrutura de RH", "Gestão documental", "Processos internos", "Tecnologia utilizada", "Capacidade de crescimento"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-[#3B82C6] flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#D4AF37]/5 to-[#B8941F]/5 p-8 rounded-xl border-2 border-[#D4AF37]">
              <h3 className="text-xl font-bold text-slate-900 mb-4">O que recebe ao final do diagnóstico?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Relatório completo</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Pontuação de maturidade</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Plano de ação</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Recomendações prioritárias</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link href={whatsappLink} className="inline-flex items-center rounded-md bg-gradient-to-r from-[#D4AF37] to-[#B8941F] px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:opacity-90">
              Solicitar Diagnóstico PONTE_MS™ <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. SERVIÇOS - CARDS */}
      <section id="servicos" className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Serviços
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((servico) => (
              <div key={servico.nome} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <servico.icon className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{servico.nome}</h3>
                <p className="text-sm text-slate-600">{servico.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROVA DE AUTORIDADE - NOVA */}
      <section id="autoridade" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Por que escolher a Magrinho Solutions?
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {autoridade.map((item) => (
              <div key={item.titulo} className="text-center">
                <div className="mx-auto w-16 h-16 bg-[#3B82C6]/10 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="h-8 w-8 text-[#3B82C6]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.titulo}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACTOS */}
      <section id="contactos" className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#D4AF37]">Contactos</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Fale Connosco
            </h2>
            <div className="mt-8 space-y-4">
              <Link href={whatsappLink} className="flex items-center gap-3 text-slate-900 hover:text-[#D4AF37]">
                <span className="font-semibold">WhatsApp</span>
              </Link>
              <Link href="https://linkedin.com" className="flex items-center gap-3 text-slate-900 hover:text-[#D4AF37]">
                <Linkedin className="h-5 w-5" />
                <span className="font-semibold">LinkedIn</span>
              </Link>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-slate-500" />
                <span>magrinhosolutions@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold mb-6">Formulário</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nome</label>
                <input type="text" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Empresa</label>
                <input type="text" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Telefone</label>
                <input type="tel" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">E-mail</label>
                <input type="email" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Mensagem</label>
                <textarea rows={4} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-[#D4AF37] focus:ring-[#D4AF37]" />
              </div>
              <button type="submit" className="w-full rounded-md bg-[#3B82C6] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2563EB]">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="px-4 py-12 sm:px-6 lg:px-8 border-t">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <p className="font-bold text-lg">MAGRINHO SOLUTIONS</p>
              <p className="mt-2 text-sm text-slate-600">
                Transformamos processos de RH em sistemas eficientes.
              </p>
              <div className="mt-4 space-y-1 text-sm text-slate-600">
                <p className="font-semibold text-[#D4AF37]">Método PONTE_MS™</p>
                <p>Diagnóstico PONTE_MS™</p>
                <p>Recepcionista Digital PONTE_MS™</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Links rápidos</h3>
              <ul className="mt-4 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-600 hover:text-[#D4AF37]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Redes sociais oficiais</h3>
              <div className="mt-4 flex gap-4">
                <Link href={whatsappLink} className="text-sm text-slate-600 hover:text-[#D4AF37]">WhatsApp</Link>
                <Link href="https://linkedin.com" className="text-sm text-slate-600 hover:text-[#D4AF37]">LinkedIn</Link>
                <Link href="mailto:magrinhosolutions@gmail.com" className="text-sm text-slate-600 hover:text-[#D4AF37]">E-mail</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-8 text-center">
            <p className="text-sm text-slate-500">© 2026 Magrinho Solutions. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

    </main>
  )
}