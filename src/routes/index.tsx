import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Handshake,
  Layers,
  MapPin,
  MessageCircle,
  PackageX,
  Repeat,
  ShieldAlert,
  ShieldCheck,
  TrendingDown,
  Truck,
  Wallet,
} from "lucide-react";

import heroImgAsset from "@/assets/hero-tires.jpg.asset.json";
const heroImg = heroImgAsset.url;
import kLogoAsset from "@/assets/k-logo.png.asset.json";
const kLogo = kLogoAsset.url;
import agricolaImg from "@/assets/line-agricola.jpg";
import reparacaoImg from "@/assets/line-reparacao.jpg";
import motosImg from "@/assets/line-motos.jpg";
import logisticaImg from "@/assets/logistica.jpg";

import { Header } from "@/components/klibra/Header";
import { LeadForm } from "@/components/klibra/LeadForm";
import { Cta, Panel, SectionTitle } from "@/components/klibra/ui";
import { COMPANY, openWhatsApp } from "@/lib/klibra";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "K-Libra | Parceira de Abastecimento B2B em Pneus, Câmaras e Reparação" },
      {
        name: "description",
        content:
          "Distribuição B2B de pneus, câmaras de ar e materiais de reparação para revendas, borracharias e oficinas da Bahia. Estoque abastecido, margem protegida e reposição ágil.",
      },
      {
        property: "og:title",
        content: "K-Libra | Sua revenda abastecida. Sua margem protegida.",
      },
      {
        property: "og:description",
        content:
          "Parceira de abastecimento B2B para revendas, borracharias e oficinas da Bahia: disponibilidade, condições competitivas e reposição ágil.",
      },
    ],
  }),
  component: Landing,
});

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const scrollToForm = () => scrollTo("atendimento");

/* 02 — Problema / custo da falta */
const DORES = [
  {
    icon: PackageX,
    title: "Venda perdida",
    text: "Quando o cliente procura e você não tem, a venda pode ir para o concorrente.",
  },
  {
    icon: TrendingDown,
    title: "Margem pressionada",
    text: "Condições de compra ruins dificultam a competitividade da revenda.",
  },
  {
    icon: ShieldAlert,
    title: "Risco de garantia",
    text: "Produtos inadequados podem gerar devoluções, retrabalho e desgaste com o cliente.",
  },
];

/* 04 — Solução K-Libra (3 pilares) */
const PILARES = [
  {
    icon: Truck,
    title: "Eficiência logística",
    lead: "Produto disponível. Reposição no momento certo.",
    text: "Menos tempo procurando fornecedor e mais tempo com o estoque abastecido para atender o balcão.",
  },
  {
    icon: Wallet,
    title: "Blindagem de margem",
    lead: "Compre bem para continuar competitivo.",
    text: "Condições de compra que ajudam sua revenda a proteger o lucro e sustentar preços de mercado.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança técnica",
    lead: "Produtos que ajudam você a vender com confiança.",
    text: "Itens selecionados para aplicações exigentes, reduzindo risco de devolução e pós-venda.",
  },
];

/* 06 — Portfólio */
const LINHAS = [
  {
    img: agricolaImg,
    title: "Linha agrícola e pesada",
    text: "Pneus e câmaras de ar para aplicações agrícolas, pesadas e de alta exigência.",
  },
  {
    img: reparacaoImg,
    title: "Linha de reparação",
    text: "Produtos e acessórios essenciais para o dia a dia da borracharia e da revenda.",
  },
  {
    img: motosImg,
    title: "Linha motos",
    text: "Pneus e câmaras de ar para atender um mercado de alto giro.",
  },
];

/* 08 — Diferenciais */
const DIFERENCIAIS = [
  {
    icon: Wallet,
    title: "Poder de compra",
    text: "Escala para buscar condições competitivas no mercado B2B.",
  },
  {
    icon: Truck,
    title: "Distribuição",
    text: "Mais proximidade e agilidade para atender o lojista.",
  },
  {
    icon: Layers,
    title: "Portfólio",
    text: "Produtos para diferentes necessidades em um único parceiro.",
  },
  {
    icon: BadgeCheck,
    title: "Marcas",
    text: "Produtos selecionados para aplicações que exigem confiança.",
  },
  {
    icon: Handshake,
    title: "Atendimento B2B",
    text: "Relacionamento comercial focado na operação do cliente.",
  },
];

/* 09 — Como funciona */
const PASSOS = [
  {
    title: "Você apresenta sua demanda",
    text: "Nossa equipe entende os produtos e volumes que sua operação precisa.",
  },
  {
    title: "Montamos sua condição comercial",
    text: "Disponibilidade, mix e condições alinhadas à sua necessidade.",
  },
  {
    title: "A K-Libra separa e entrega",
    text: "Seu pedido segue para distribuição até sua empresa.",
  },
  {
    title: "Você mantém seu estoque girando",
    text: "Menos tempo procurando fornecedor. Mais tempo focado na sua operação.",
  },
];

/* 10 — Prova / autoridade (apenas afirmações verdadeiras já presentes no projeto) */
const PROVA = [
  {
    title: "Foco B2B",
    text: "Atendimento dedicado a revendas, borracharias e oficinas — não vendemos para o consumidor final.",
  },
  {
    title: "Cobertura na Bahia",
    text: "Distribuição comercial voltada para o estado da Bahia.",
  },
  {
    title: "Portfólio abrangente",
    text: "Linhas agrícola e pesada, reparação e motos reunidas em um só fornecedor.",
  },
];

/* 12 — FAQ / quebra de objeções */
const FAQ = [
  {
    q: "Quem pode comprar da K-Libra?",
    a: "O atendimento é direcionado a empresas do segmento — principalmente revendas, borracharias e oficinas.",
  },
  {
    q: "Quais produtos a K-Libra distribui?",
    a: "Pneus, câmaras de ar e materiais de reparação, nas linhas agrícola e pesada, reparação e motos.",
  },
  {
    q: "Quais regiões a K-Libra atende?",
    a: "O atendimento comercial é voltado para o estado da Bahia.",
  },
  {
    q: "Como funciona a entrega?",
    a: "Após alinhar disponibilidade e condição comercial, seu pedido é separado e segue para distribuição até sua empresa. Fale com nossa equipe para os detalhes da sua região.",
  },
  {
    q: "Como solicitar uma cotação?",
    a: "Preencha o formulário de atendimento comercial ou fale diretamente com nossa equipe pelo WhatsApp.",
  },
  {
    q: "Como posso conhecer o portfólio?",
    a: "Informe seus produtos de interesse no formulário e nossa equipe apresenta as linhas disponíveis para sua operação.",
  },
  {
    q: "A K-Libra atende pessoa física?",
    a: "O foco é o atendimento B2B a empresas do segmento. Consulte nossa equipe sobre o seu caso.",
  },
];

function Landing() {
  return (
    <div id="topo" className="min-h-screen bg-background">
      <Header />

      <main>
        {/* 01 — HERO */}
        <section className="relative overflow-hidden pt-28 md:pt-32">
          <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
            <img
              src={heroImg}
              alt="Estoque de câmaras de ar e pneus carregado para distribuição"
              width={1280}
              height={1280}
              className="h-full w-full object-cover object-top"
            />
            <div
              className="absolute inset-0"
              style={{ background: "var(--gradient-fade)" }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-background/45" aria-hidden />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-8 md:px-8 lg:grid-cols-2 lg:pb-16">
            <div className="reveal max-w-[620px]">
              <p className="inline-flex items-center gap-2 border border-primary/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Distribuição B2B para todo o estado da Bahia
              </p>
              <h1 className="mt-5 text-4xl leading-[1.02] sm:text-5xl lg:mt-6 lg:text-[3.5rem]">
                Sua revenda abastecida.
                <br />
                <span className="text-primary">Sua margem protegida.</span>
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg lg:mt-5">
                Pneus, câmaras de ar e materiais de reparação para revendas, borracharias e oficinas
                que precisam de disponibilidade, condições competitivas e reposição ágil.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-7">
                <Cta size="lg" className="w-full sm:w-auto" onClick={scrollToForm}>
                  Solicitar atendimento B2B
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Cta>
                <Cta
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => scrollTo("solucao")}
                >
                  Conhecer a K-Libra
                </Cta>
              </div>

              <ul className="mt-7 grid gap-3 sm:grid-cols-3 lg:mt-8">
                {["Eficiência logística", "Blindagem de margem", "Segurança técnica"].map((s) => (
                  <li
                    key={s}
                    className="angular-clip border border-border bg-surface px-4 py-3 text-xs font-semibold uppercase tracking-wide text-foreground"
                  >
                    <span className="mr-2 inline-block h-2 w-2 rotate-45 bg-primary" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative lg:hidden">
              <img
                src={heroImg}
                alt="Estoque de câmaras de ar e pneus carregado para distribuição"
                width={1280}
                height={1280}
                className="angular-clip h-64 w-full object-cover object-top sm:h-80"
              />
            </div>
          </div>
        </section>

        {/* 02 — PROBLEMA / CUSTO DA FALTA */}
        <section id="problema" className="border-y border-border bg-surface/40">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
            <SectionTitle eyebrow="O custo da falta de estoque">
              Quanto custa ficar sem o produto certo?
            </SectionTitle>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {DORES.map(({ icon: Icon, title, text }) => (
                <Panel key={title} className="border-l-4 border-l-primary">
                  <Icon className="h-7 w-7 text-primary" aria-hidden />
                  <h3 className="mt-4 text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </Panel>
              ))}
            </div>
          </div>
        </section>

        {/* 03 — TESE / POSICIONAMENTO */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="border-l-4 border-primary pl-6 md:pl-10">
            <h2 className="max-w-4xl text-3xl leading-[1.05] sm:text-4xl lg:text-5xl">
              Você não vende apenas produto.{" "}
              <span className="text-primary">Você vende disponibilidade.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Quando seu cliente procura um produto e você não tem, a venda pode ir para outro lugar.
              Por isso, a K-Libra trabalha para facilitar sua reposição, preservar sua
              competitividade e reduzir os riscos de abastecimento.
            </p>
          </div>
        </section>

        {/* 04 — SOLUÇÃO K-LIBRA */}
        <section id="solucao" className="border-y border-border bg-surface/40">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
            <SectionTitle eyebrow="Solução K-Libra">
              Uma distribuição pensada para o seu negócio.
            </SectionTitle>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {PILARES.map(({ icon: Icon, title, lead, text }) => (
                <Panel key={title}>
                  <Icon className="h-8 w-8 text-primary" aria-hidden />
                  <h3 className="mt-4 text-2xl">{title}</h3>
                  <p className="mt-2 text-sm font-semibold text-foreground">{lead}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </Panel>
              ))}
            </div>
          </div>
        </section>

        {/* 05 — PODER DE COMPRA / BLINDAGEM DE MARGEM */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "var(--gradient-heat)" }} aria-hidden />
          <div className="rubber-texture absolute inset-0" aria-hidden />
          <div className="relative mx-auto max-w-5xl px-4 py-16 text-center md:px-8 md:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/80">
              Poder de compra
            </p>
            <h2 className="mx-auto mt-4 max-w-4xl text-3xl leading-[1.05] text-primary-foreground sm:text-4xl lg:text-5xl">
              O poder de compra que sua revenda não tem sozinha.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/90 md:text-lg">
              A escala de compras da K-Libra aumenta nossa capacidade de negociação e nos permite
              buscar condições competitivas para o lojista.
            </p>
            {/* Espaço reservado para números de poder de compra (ex.: volume, mix, marcas)
                assim que houver dados reais aprovados para divulgação. */}
            <div className="mt-8">
              <Cta variant="outline" size="lg" className="border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={scrollToForm}>
                Solicitar condições B2B
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Cta>
            </div>
          </div>
        </section>

        {/* 06 — PORTFÓLIO */}
        <section id="portfolio" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <SectionTitle eyebrow="Portfólio">
            Um portfólio para acompanhar o giro da sua revenda.
          </SectionTitle>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {LINHAS.map((l) => (
              <article
                key={l.title}
                className="angular-clip group flex flex-col border border-border bg-surface transition-colors hover:border-primary/60"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={l.img}
                    alt={l.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/40" aria-hidden />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl">{l.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {l.text}
                  </p>
                  <Cta variant="outline" className="mt-6 w-full" onClick={scrollToForm}>
                    Consultar disponibilidade
                  </Cta>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 07 — GIRO DE ESTOQUE */}
        <section className="border-y border-border bg-surface/40">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <SectionTitle eyebrow="Giro de estoque">
                Estoque parado não é estoque estratégico.
              </SectionTitle>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                O objetivo não é simplesmente ter mais produtos. É ter os produtos certos, na
                quantidade certa e no momento certo para atender sua demanda.
              </p>
            </div>
            <div className="angular-clip flex items-center gap-4 border border-border bg-surface p-8">
              <Repeat className="h-12 w-12 shrink-0 text-primary" aria-hidden />
              <p className="text-lg font-semibold text-foreground">
                Os produtos certos, na quantidade certa, no momento certo.
              </p>
            </div>
          </div>
        </section>

        {/* 08 — DIFERENCIAIS */}
        <section id="diferenciais" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <SectionTitle eyebrow="Diferenciais">
            Por que abastecer sua revenda com a K-Libra?
          </SectionTitle>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DIFERENCIAIS.map(({ icon: Icon, title, text }) => (
              <Panel key={title}>
                <Icon className="h-7 w-7 text-primary" aria-hidden />
                <h3 className="mt-4 text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </Panel>
            ))}
          </div>
        </section>

        {/* 09 — COMO FUNCIONA */}
        <section id="como-funciona" className="border-y border-border bg-surface/40">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
            <SectionTitle eyebrow="Como funciona a operação">Do pedido à sua prateleira.</SectionTitle>
            <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {PASSOS.map((p, i) => (
                <li key={p.title} className="angular-clip relative border border-border bg-surface p-6">
                  <span className="font-display text-5xl leading-none text-primary/30">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <Cta
                size="lg"
                onClick={() =>
                  openWhatsApp(
                    "Olá, quero consultar disponibilidade para minha empresa.",
                    "como_funciona",
                  )
                }
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Falar com um especialista
              </Cta>
            </div>
          </div>
        </section>

        {/* 10 — PROVA / AUTORIDADE */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionTitle eyebrow="Autoridade">Por que confiar na K-Libra?</SectionTitle>
              <div className="mt-8 space-y-4">
                {PROVA.map((p) => (
                  <div
                    key={p.title}
                    className="border-l-2 border-primary/60 bg-surface/60 px-5 py-4"
                  >
                    <h3 className="text-lg">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                ))}
              </div>
              {/* Espaço reservado para dados reais: tempo de mercado, número de produtos,
                  clientes, marcas e depoimentos — a preencher com informações aprovadas. */}
            </div>
            <img
              src={logisticaImg}
              alt="Caminhonete carregada de pneus em doca de distribuição"
              loading="lazy"
              width={1280}
              height={800}
              className="angular-clip h-72 w-full object-cover lg:h-[26rem]"
            />
          </div>
        </section>

        {/* 11 — ÁREA DE ATUAÇÃO */}
        <section className="border-y border-border bg-surface/40">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
            <SectionTitle eyebrow="Área de atuação">Distribuição onde o mercado precisa.</SectionTitle>
            <div className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Atendimento comercial voltado para o estado da Bahia, com foco em manter a revenda
                do lojista sempre abastecida.
              </p>
              <div className="angular-clip inline-flex items-center gap-3 border border-primary/50 bg-surface px-6 py-4">
                <MapPin className="h-7 w-7 text-primary" aria-hidden />
                <span className="font-display text-2xl uppercase italic text-foreground">
                  Estado da Bahia
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 12 — FAQ / QUEBRA DE OBJEÇÕES */}
        <section id="faq" className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
          <SectionTitle eyebrow="Perguntas frequentes">Tire suas dúvidas antes de comprar.</SectionTitle>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {FAQ.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground">
                  {item.q}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 13 — CTA FINAL */}
        <section className="border-t border-primary/40 bg-surface/40">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-8 md:py-24">
            <h2 className="mx-auto max-w-3xl text-3xl leading-[1.05] sm:text-4xl lg:text-5xl">
              Pronto para abastecer <span className="text-primary">sua revenda?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Fale com nossa equipe comercial e descubra o portfólio e as condições B2B disponíveis
              para sua empresa.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Cta size="lg" className="w-full sm:w-auto" onClick={scrollToForm}>
                Solicitar atendimento B2B
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Cta>
              <Cta
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() =>
                  openWhatsApp(
                    "Olá, quero consultar disponibilidade para minha empresa.",
                    "cta_final",
                  )
                }
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Falar no WhatsApp
              </Cta>
            </div>
          </div>
        </section>

        {/* 14 — FORMULÁRIO DE LEAD */}
        <section id="atendimento" className="border-y border-border bg-surface/40 scroll-mt-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_1.25fr] lg:items-start">
            <div>
              <SectionTitle eyebrow="Atendimento comercial">
                Solicite atendimento comercial.
              </SectionTitle>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Informe os dados da sua empresa. Nossa equipe entrará em contato para apresentar o
                portfólio e as condições disponíveis.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                Atendimento exclusivo para revendas, borracharias e oficinas no estado da Bahia.
              </p>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>

      <Footer />

      {/* CTA fixo mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
        <Cta
          className="w-full"
          size="lg"
          onClick={() =>
            openWhatsApp(
              "Olá, quero consultar disponibilidade para minha empresa.",
              "sticky_mobile",
            )
          }
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          Falar no WhatsApp
        </Cta>
      </div>
      <div className="h-20 lg:hidden" aria-hidden />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-primary/40 bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <img src={kLogo} alt="K-Libra" className="h-9 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Parceira de abastecimento B2B em pneus, câmaras de ar e materiais de reparação para
            revendas, borracharias e oficinas da Bahia.
          </p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-col gap-2 text-sm text-muted-foreground">
          <a className="hover:text-primary" href="#solucao">
            Solução
          </a>
          <a className="hover:text-primary" href="#portfolio">
            Portfólio
          </a>
          <a className="hover:text-primary" href="#diferenciais">
            Diferenciais
          </a>
          <a className="hover:text-primary" href="#como-funciona">
            Como funciona
          </a>
          <a className="hover:text-primary" href="#atendimento">
            Atendimento
          </a>
        </nav>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contato</p>
          <Cta
            size="sm"
            className="mt-3"
            onClick={() =>
              openWhatsApp("Olá, quero consultar disponibilidade para minha empresa.", "rodape")
            }
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp comercial
          </Cta>
          <p className="mt-4 text-sm text-muted-foreground">Atuação: Estado da Bahia.</p>
        </div>
      </div>
      <div className="border-t border-primary/20 py-5 text-center text-xs text-muted-foreground">
        © {COMPANY.year} {COMPANY.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
