import { useState } from "react";
import { ArrowRight, Check, CheckCircle2, Globe2, Megaphone, ShieldAlert, Star } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: ModernJornalVozPatriota,
});

const plans = [
  {
    name: "Plano Básico",
    price: "19,90",
    description: "O essencial para acompanhar as principais notícias e análises da direita brasileira.",
    featured: false,
    features: [
      "Notícias diárias do Brasil",
      "Análises com perspectiva conservadora",
      "Acesso ao conteúdo exclusivo para assinantes",
      "Resumo das principais decisões políticas",
    ],
  },
  {
    name: "Plano Patriota",
    price: "29,90",
    description: "A cobertura completa da direita no Brasil e no mundo, em um só lugar.",
    featured: true,
    features: [
      "Tudo do Plano Básico",
      "Notícias sobre Donald Trump e líderes da direita mundial",
      "Cobertura da direita em outros países",
      "Análises especiais e conteúdos aprofundados",
      "Acesso antecipado a reportagens exclusivas",
    ],
  },
];

function JornalVozPatriota() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="border-b border-primary/30 bg-primary px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground md:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
          <ShieldAlert className="hidden h-4 w-4 shrink-0 md:block" aria-hidden />
          <span>
            Liberdade de imprensa em alerta: o Jornal Voz Patriota denuncia pressão e tentativas de
            silenciamento por políticos de esquerda.
          </span>
        </div>
      </div>

      <header className="border-b border-border/70 bg-background/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="#inicio" className="font-display text-xl font-black italic tracking-tight">
            VOZ <span className="text-primary">PATRIOTA</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#por-que">
              Por que assinar
            </a>
            <a className="transition-colors hover:text-foreground" href="#planos">
              Planos
            </a>
            <a className="transition-colors hover:text-foreground" href="#manifesto">
              Manifesto
            </a>
          </nav>
          <Button asChild size="sm">
            <a href="#planos">Assinar agora</a>
          </Button>
        </div>
      </header>

      <section id="inicio" className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,oklch(0.652_0.226_39.5_/_0.16),transparent_32%),linear-gradient(180deg,var(--background),var(--surface))]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
          <div className="reveal">
            <div className="mb-6 inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <Megaphone className="h-4 w-4" aria-hidden />
              Informação sem filtro
            </div>
            <h1 className="max-w-4xl text-5xl leading-[0.95] sm:text-6xl lg:text-8xl">
              Notícias de direita para quem não aceita ser{" "}
              <span className="heat-text">silenciado.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              O Jornal Voz Patriota reúne notícias, fatos e análises sob uma perspectiva
              conservadora. Entenda o Brasil, acompanhe a política e forme sua própria opinião
              longe da narrativa única.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="shadow-[var(--shadow-heat)]">
                <a href="#planos">
                  Quero ver notícias de direita
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#por-que">Conheça o jornal</a>
              </Button>
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Informação independente • Leitura rápida • Conteúdo exclusivo
            </p>
          </div>

          <div className="angular-clip rubber-texture relative border border-border bg-surface p-7 shadow-[var(--shadow-hard)] sm:p-10">
            <div className="absolute right-0 top-0 h-24 w-24 bg-primary/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between border-b border-border pb-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Edição de hoje
                </span>
                <span className="text-xs text-muted-foreground">VOZ PATRIOTA</span>
              </div>
              <h2 className="mt-8 text-3xl leading-tight sm:text-4xl">
                A notícia que chega até você antes da opinião pronta.
              </h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                Acompanhe os acontecimentos que realmente importam e tenha acesso a uma leitura
                direta, crítica e alinhada aos valores de liberdade, família e responsabilidade.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="border border-border bg-background/60 p-4">
                  <div className="text-2xl font-black text-primary">24h</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    Informação
                  </div>
                </div>
                <div className="border border-border bg-background/60 p-4">
                  <div className="text-2xl font-black text-primary">360°</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    Cobertura
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="por-que" className="border-y border-border bg-surface/60">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Por que o Voz Patriota?</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Sua visão de mundo merece informação à altura.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Feature
              icon={<Star className="h-6 w-6" aria-hidden />}
              title="Perspectiva clara"
              text="Notícias e análises que apresentam os fatos sem esconder os pontos de vista que a grande mídia costuma ignorar."
            />
            <Feature
              icon={<Globe2 className="h-6 w-6" aria-hidden />}
              title="Brasil e mundo"
              text="Acompanhe os movimentos conservadores no Brasil e as principais lideranças da direita internacional."
            />
            <Feature
              icon={<ShieldAlert className="h-6 w-6" aria-hidden />}
              title="Jornalismo independente"
              text="Apoie uma redação comprometida com a liberdade de expressão e com o direito de informar."
            />
          </div>
        </div>
      </section>

      <section id="planos" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Escolha seu acesso</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Assine e pare de depender da narrativa única.</h2>
          <p className="mt-5 text-muted-foreground">
            Escolha o plano que combina com a sua rotina e comece a acompanhar as notícias da
            direita.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`angular-clip relative border p-7 sm:p-9 ${
                plan.featured
                  ? "border-primary bg-primary/10 shadow-[var(--shadow-heat)]"
                  : "border-border bg-surface"
              }`}
            >
              {plan.featured ? (
                <div className="absolute right-6 top-0 -translate-y-1/2 bg-primary px-3 py-1 text-xs font-black uppercase tracking-wider text-primary-foreground">
                  Mais completo
                </div>
              ) : null}
              <h3 className="text-2xl">{plan.name}</h3>
              <p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">{plan.description}</p>
              <div className="mt-7 flex items-end gap-1 border-b border-border pb-7">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-5xl font-black">{plan.price}</span>
                <span className="mb-1 text-sm text-muted-foreground">/mês</span>
              </div>
              <ul className="mt-7 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-8 w-full" variant={plan.featured ? "default" : "outline"}>
                <a href="#assinar">Assinar {plan.name}</a>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section id="manifesto" className="bg-primary px-5 py-16 text-primary-foreground lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground/75">
              O seu apoio faz diferença
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Liberdade para informar. Coragem para publicar.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-primary-foreground/80">
              Em um cenário de pressão política e tentativas de silenciamento, assinar é fortalecer
              o jornalismo que você quer continuar lendo.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary" className="shrink-0">
            <a id="assinar" href="#planos">
              Quero fazer parte
              <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <div className="font-display text-lg font-black italic text-foreground">
              VOZ <span className="text-primary">PATRIOTA</span>
            </div>
            <p className="mt-1">Informação, opinião e liberdade.</p>
          </div>
          <p>© 2026 Jornal Voz Patriota. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}

function ModernJornalVozPatriota() {
  const [answer, setAnswer] = useState<number | null>(null);

  const quizOptions = [
    "Foi eleito presidente do Brasil em 2018",
    "Foi eleito presidente em 2002",
    "Nunca ocupou um cargo eletivo",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="border-b border-secondary/40 bg-primary px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground md:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
          <ShieldAlert className="hidden h-4 w-4 shrink-0 md:block" aria-hidden />
          <span>
            Tentam calar o jornalismo conservador. A sua assinatura mantém a informação livre.
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-20 border-b border-border/80 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" className="font-display text-xl font-black italic tracking-tight">
            VOZ <span className="text-secondary">PATRIOTA</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            <a className="transition-colors hover:text-secondary" href="#beneficios">
              Por que assinar
            </a>
            <a className="transition-colors hover:text-secondary" href="#planos">
              Planos
            </a>
            <a className="transition-colors hover:text-secondary" href="#quiz">
              Quiz
            </a>
          </nav>
          <Button asChild size="sm">
            <a href="#planos">Quero assinar</a>
          </Button>
        </div>
      </header>

      <section id="inicio" className="relative isolate border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_15%,color-mix(in_oklch,var(--accent)_24%,transparent),transparent_28%),radial-gradient(circle_at_10%_80%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_32%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 border border-secondary/60 bg-secondary/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
              <Megaphone className="h-4 w-4" aria-hidden />
              A notícia antes da narrativa
            </div>
            <h1 className="max-w-4xl text-5xl leading-[0.94] sm:text-6xl lg:text-8xl">
              Veja notícias de direita.{" "}
              <span className="heat-text">Pense por conta própria.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              O Jornal Voz Patriota entrega notícias, contexto e análises conservadoras para quem
              está cansado de receber apenas um lado da história.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="shadow-[var(--shadow-heat)]">
                <a href="#planos">
                  Quero acesso às notícias
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#quiz">Testar meus conhecimentos</a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
              <span>✓ Leitura rápida</span>
              <span>✓ Brasil e mundo</span>
              <span>✓ Conteúdo exclusivo</span>
            </div>
          </div>

          <div className="relative overflow-hidden border border-accent/50 bg-surface shadow-[var(--shadow-hard)]">
            <img
              src="https://images.pexels.com/photos/9216186/pexels-photo-9216186.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Bandeira do Brasil hasteada contra o céu"
              className="h-80 w-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">
                Jornalismo sem medo
              </p>
              <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
                Informação para quem não aceita ser silenciado.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="border-b border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-secondary">
              Você não precisa consumir notícia no automático
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl">
              Pare de depender da narrativa única.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Feature
              icon={<Star className="h-6 w-6" aria-hidden />}
              title="Perspectiva conservadora"
              text="Leia fatos e análises que levam a sério liberdade, família, responsabilidade e ordem."
            />
            <Feature
              icon={<Globe2 className="h-6 w-6" aria-hidden />}
              title="Brasil e mundo"
              text="Acompanhe as principais pautas e lideranças da direita brasileira e internacional."
            />
            <Feature
              icon={<ShieldAlert className="h-6 w-6" aria-hidden />}
              title="Acesso independente"
              text="Apoie uma redação que não quer pedir permissão para informar o que importa."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden border border-border bg-surface">
          <img
            src="https://images.pexels.com/photos/15869991/pexels-photo-15869991.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Pessoas reunidas em uma manifestação usando bandeiras brasileiras"
            className="h-72 w-full object-cover"
          />
          <div className="p-7">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-secondary">
              A voz das ruas
            </p>
            <h2 className="mt-3 text-3xl">Quem não se informa, deixa outros decidirem por ele.</h2>
          </div>
        </div>
        <div className="overflow-hidden border border-border bg-surface">
          <img
            src="https://images.pexels.com/photos/8849332/pexels-photo-8849332.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Letras formando a palavra voto sobre uma folha"
            className="h-72 w-full object-cover"
          />
          <div className="p-7">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
              Consciência política
            </p>
            <h2 className="mt-3 text-3xl">Entenda o jogo antes de escolher o seu lado.</h2>
          </div>
        </div>
      </section>

      <section id="quiz" className="border-y border-border bg-accent/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-secondary">
              Quiz Voz Patriota
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Você conhece a trajetória de Bolsonaro?</h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              Teste seus conhecimentos e descubra por que acompanhar política com contexto faz
              toda a diferença.
            </p>
          </div>
          <div className="border border-accent/50 bg-background p-7 sm:p-9">
            <p className="text-lg font-bold">
              Em que ano Jair Bolsonaro foi eleito presidente do Brasil?
            </p>
            <div className="mt-6 grid gap-3">
              {quizOptions.map((option, index) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setAnswer(index)}
                  className={`flex items-center gap-3 border p-4 text-left text-sm font-semibold transition-colors ${
                    answer === index
                      ? index === 0
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-destructive bg-destructive/10 text-destructive"
                      : "border-border bg-surface hover:border-secondary hover:bg-secondary/10"
                  }`}
                >
                  {answer === index && index === 0 ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden />
                  ) : null}
                  {option}
                </button>
              ))}
            </div>
            {answer !== null ? (
              <p className="mt-5 text-sm font-semibold text-muted-foreground">
                {answer === 0
                  ? "Acertou. Informação com contexto deixa você mais preparado."
                  : "Não foi dessa vez. Continue acompanhando política com fontes independentes."}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section id="planos" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-secondary">
            Escolha seu acesso
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl">
            Assine hoje. Leia mais. Dependa menos dos outros.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Duas formas de fortalecer o jornalismo de direita e receber informação alinhada aos
            valores que você defende.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative border p-7 sm:p-9 ${
                plan.featured
                  ? "border-secondary bg-secondary/10 shadow-[var(--shadow-heat)]"
                  : "border-border bg-surface"
              }`}
            >
              {plan.featured ? (
                <div className="absolute right-6 top-0 -translate-y-1/2 bg-secondary px-3 py-1 text-xs font-black uppercase tracking-wider text-secondary-foreground">
                  Mais escolhido
                </div>
              ) : null}
              <h3 className="text-2xl">{plan.name}</h3>
              <p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">
                {plan.description}
              </p>
              <div className="mt-7 flex items-end gap-1 border-b border-border pb-7">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-5xl font-black">{plan.price}</span>
                <span className="mb-1 text-sm text-muted-foreground">/mês</span>
              </div>
              <ul className="mt-7 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="mt-8 w-full"
                variant={plan.featured ? "default" : "outline"}
              >
                <a href="#assinar">Assinar {plan.name}</a>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-primary-foreground/75">
              O jornal precisa de você
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl">
              Se você não apoia a informação que quer ler, alguém escolherá por você.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-primary-foreground/80">
              Assine o Voz Patriota e tenha acesso a notícias de direita, análises e cobertura
              internacional sem depender da velha narrativa.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary" className="shrink-0">
            <a id="assinar" href="#planos">
              Quero fazer parte
              <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-end md:justify-between lg:px-8">
          <div>
            <div className="font-display text-lg font-black italic text-foreground">
              VOZ <span className="text-secondary">PATRIOTA</span>
            </div>
            <p className="mt-1">Informação, opinião e liberdade.</p>
            <p className="mt-3 text-xs">
              Imagens: Pexels — fotógrafos Waldir Évora e Marcello Sokal.
            </p>
          </div>
          <p>© 2026 Jornal Voz Patriota. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="border border-border bg-background p-6">
      <div className="mb-5 flex h-12 w-12 items-center justify-center bg-primary/15 text-primary">{icon}</div>
      <h3 className="text-xl">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
    </div>
  );
}