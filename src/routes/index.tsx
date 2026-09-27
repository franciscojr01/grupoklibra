import { useState } from "react";
import { ArrowRight, Check, CheckCircle2, Globe2, Megaphone, ShieldAlert, Star } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
          <Button type="button" size="lg" variant="secondary" className="shrink-0" onClick={openBallot}>
            Quero fazer parte
            <ArrowRight className="h-5 w-5" aria-hidden />
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

const ballotCandidates = [
  {
    number: "13",
    name: "Lula",
    party: "PT",
    photo:
      "https://s2-g1.glbimg.com/51hBXbK2_M17AGAQXZCbNuZfdsA=/0x0:1990x2048/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/S/F/YA8OqrR9KQlikqWk4XMA/55450527845-c28450c581-k.jpg",
  },
  {
    number: "22",
    name: "Flávio Bolsonaro",
    party: "PL",
    photo: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/candidates/2026/280002551544_e6be99.jpg",
  },
  {
    number: "55",
    name: "Ronaldo Caiado",
    party: "PSD",
    photo: "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/20322002026/280002551932/BR",
  },
  {
    number: "29",
    name: "Rui Costa Pimenta",
    party: "PCO",
    photo: "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/20322002026/280002552487/BR",
  },
  {
    number: "80",
    name: "Samara",
    party: "UP",
    photo: "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/20322002026/280002538811/BR",
  },
  {
    number: "30",
    name: "Romeu Zema",
    party: "NOVO",
    photo: "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/20322002026/280002539826/BR",
  },
  {
    number: "16",
    name: "Hertz Dias",
    party: "PSTU",
    photo: "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/20322002026/280002541457/BR",
  },
  {
    number: "21",
    name: "Edmilson Costa",
    party: "PCB",
    photo: "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/20322002026/280002551975/BR",
  },
  {
    number: "14",
    name: "Renan Santos",
    party: "MISSÃO",
    photo: "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/20322002026/280002540694/BR",
  },
  {
    number: "35",
    name: "Wilson Grassi",
    party: "DEMOCRATA",
    photo: "https://picsum.photos/seed/wilson-grassi/240/300",
  },
  {
    number: "27",
    name: "Clariana Barão",
    party: "DC",
    photo: "https://picsum.photos/seed/clariana-barao/240/300",
  },
  {
    number: "70",
    name: "Augusto Cury",
    party: "AVANTE",
    photo: "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/20322002026/280002551547/BR",
  },
  {
    number: "28",
    name: "Leonardo Avalanche",
    party: "PRTB",
    photo: "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/20322002026/280002554479/BR",
  },
] as const;

function playVotingSound() {
  const AudioContextClass = window.AudioContext || (
    window as typeof window & {
      webkitAudioContext?: typeof AudioContext;
    }
  ).webkitAudioContext;

  if (!AudioContextClass) return;

  const context = new AudioContextClass();
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(740, context.currentTime);
  oscillator.frequency.setValueAtTime(520, context.currentTime + 0.12);
  gain.gain.setValueAtTime(0.08, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.28);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.28);
}

function ModernJornalVozPatriota() {
  const [showBallot, setShowBallot] = useState(false);
  const [selectedCandidate, setSelectedCandidate] =
    useState<(typeof ballotCandidates)[number] | null>(null);
  const [typedNumber, setTypedNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [eliminated, setEliminated] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFailed, setQuizFailed] = useState(false);
  const [showPlans, setShowPlans] = useState(false);

  const openBallot = () => {
    if (eliminated) {
      setShowBallot(true);
      return;
    }

    setSelectedCandidate(null);
    setTypedNumber("");
    setConfirmed(false);
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizScore(0);
    setQuizFailed(false);
    setShowQuiz(false);
    setShowPlans(false);
    setShowBallot(true);
  };

  const typeNumber = (number: string) => {
    if (eliminated || typedNumber.length >= 2) return;

    const nextNumber = `${typedNumber}${number}`;
    setTypedNumber(nextNumber);

    // A foto só aparece quando os dois dígitos correspondem exatamente
    // ao número de um candidato.
    if (nextNumber.length === 2) {
      const candidate = ballotCandidates.find((item) => item.number === nextNumber);
      setSelectedCandidate(candidate ?? null);
    } else {
      setSelectedCandidate(null);
    }
  };

  const clearNumber = () => {
    if (eliminated) return;

    setTypedNumber("");
    setSelectedCandidate(null);
  };

  const correctNumber = () => {
    if (eliminated) return;

    const nextNumber = typedNumber.slice(0, -1);
    setTypedNumber(nextNumber);
    setSelectedCandidate(null);
  };

  const selectCandidate = (candidate: (typeof ballotCandidates)[number]) => {
    setTypedNumber(candidate.number);
    setSelectedCandidate(candidate);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="border-b border-destructive/40 bg-destructive px-3 py-1 text-center text-[9px] font-black tracking-[0.04em] text-destructive-foreground sm:text-[10px]">
        Jornal sob risco de censura por políticos de esquerda.
      </div>

      <Dialog open={showBallot} onOpenChange={setShowBallot}>
        <DialogContent className="max-h-[92vh] overflow-y-auto border-secondary/50 bg-surface p-4 sm:max-w-2xl sm:p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl sm:text-3xl">
              Simulação de urna eletrônica
            </DialogTitle>
            <DialogDescription className="leading-6 text-muted-foreground">
              Escolha um candidato demonstrativo para testar o funcionamento da urna. Esta
              experiência não representa uma eleição real nem registra nenhum voto.
            </DialogDescription>
          </DialogHeader>

          <div className="overflow-hidden rounded-xl border border-border bg-muted text-foreground shadow-2xl">
            <div className="flex items-center justify-between border-b border-border bg-surface-2 px-5 py-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                  Simulação demonstrativa
                </p>
                <p className="mt-1 text-sm font-bold">Presidente da República</p>
              </div>
              <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_14px_var(--primary)]" />
            </div>

            <div className="grid min-w-0 gap-5 p-4 sm:grid-cols-[minmax(0,1fr)_190px] sm:gap-6 sm:p-5">
              <div className="min-h-[220px] min-w-0 border-8 border-background bg-muted p-4 text-foreground shadow-inner sm:min-h-56">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      Seu voto para
                    </p>
                    <p className="mt-1 text-sm font-black uppercase">Presidente</p>
                  </div>

                  <div className="mt-6 flex min-w-0 items-start gap-3 sm:gap-4">
                    {selectedCandidate ? (
                      <div className="flex min-w-0 items-center gap-3">
                        <img
                          src={selectedCandidate.photo}
                          alt={`Foto de ${selectedCandidate.name}`}
                          className="h-24 w-20 shrink-0 rounded-sm border-2 border-foreground/40 object-cover shadow-md sm:h-28 sm:w-24"
                        />
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase text-muted-foreground">
                            Candidato
                          </p>
                          <p className="truncate text-sm font-black uppercase">
                            {selectedCandidate.name}
                          </p>
                          <p className="mt-1 text-[10px] font-bold text-muted-foreground">
                            {selectedCandidate.party}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex h-24 w-20 items-center justify-center rounded-sm border-2 border-dashed border-border text-center text-[9px] font-bold uppercase text-muted-foreground">
                        Foto do candidato
                      </div>
                    )}

                    <div className="flex shrink-0 gap-2">
                      {[0, 1].map((index) => (
                        <span
                          key={index}
                          className="flex h-12 w-10 items-center justify-center border-2 border-foreground bg-background text-2xl font-black text-foreground shadow-inner"
                        >
                          {typedNumber[index] ?? ""}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="mt-4 text-[10px] font-bold uppercase text-muted-foreground">
                    {selectedCandidate
                      ? "Confira os dados e confirme seu voto"
                      : "Digite o número exato do candidato"}
                  </p>
                </div>
              </div>

              <div className="mx-auto grid w-full max-w-[280px] grid-cols-3 gap-2">
                {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((number) => (
                  <button
                    key={number}
                    type="button"
                    disabled={eliminated}
                    className="min-h-12 rounded-sm border border-border bg-background text-lg font-black text-foreground shadow-[0_3px_0_var(--border),inset_0_1px_0_var(--surface-2)] transition hover:bg-surface-2 active:translate-y-0.5 active:shadow-none disabled:cursor-not-allowed disabled:opacity-50"
                    onClick={() => typeNumber(number)}
                  >
                    {number}
                  </button>
                ))}
                <button
                  type="button"
                  disabled={eliminated}
                  className="min-h-12 rounded-sm border border-border bg-background text-xs font-black uppercase text-foreground shadow-[0_3px_0_var(--border),inset_0_1px_0_var(--surface-2)] transition hover:bg-surface-2 active:translate-y-0.5 active:shadow-none disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={clearNumber}
                >
                  Branco
                </button>
                <button
                  type="button"
                  disabled={eliminated}
                  className="min-h-12 rounded-sm border border-border bg-background text-lg font-black text-foreground shadow-[0_3px_0_var(--border),inset_0_1px_0_var(--surface-2)] transition hover:bg-surface-2 active:translate-y-0.5 active:shadow-none disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => typeNumber("0")}
                >
                  0
                </button>
                <button
                  type="button"
                  disabled={eliminated}
                  className="min-h-12 rounded-sm border border-border bg-background text-xs font-black uppercase text-foreground shadow-[0_3px_0_var(--border),inset_0_1px_0_var(--surface-2)] transition hover:bg-surface-2 active:translate-y-0.5 active:shadow-none disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={correctNumber}
                >
                  Corrige
                </button>
              </div>
            </div>

            <div className="border-t border-border bg-surface-2 px-5 py-4 text-xs text-muted-foreground">
              Esta tela é uma simulação visual e não registra nenhum voto oficial. As informações
              dos candidatos devem ser conferidas nas fontes eleitorais oficiais.
            </div>
          </div>

          <DialogFooter className="flex-col items-stretch gap-3 border-t border-border/70 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              Simulação meramente ilustrativa.
            </p>
            <Button
              type="button"
              disabled={!selectedCandidate || confirmed || eliminated}
              onClick={() => {
                if (selectedCandidate?.number !== "22") {
                  setEliminated(true);
                  setSelectedCandidate(null);
                  setTypedNumber("");
                  setShowQuiz(false);
                  return;
                }

                playVotingSound();
                setConfirmed(true);
                setShowBallot(false);
                setQuizStep(0);
                setQuizAnswers([]);
                setQuizScore(0);
                setQuizFailed(false);
                setShowQuiz(true);
              }}
            >
              {confirmed ? "VOTO REALIZADO" : "CONFIRMA"}
              {!confirmed ? <ArrowRight className="h-4 w-4" aria-hidden /> : null}
            </Button>
          </DialogFooter>

          {confirmed ? (
            <div className="rounded-lg border border-primary/40 bg-primary/10 px-4 py-3 text-center text-sm font-bold text-primary">
              Voto demonstrativo confirmado. A simulação foi concluída.
            </div>
          ) : null}


        </DialogContent>
      </Dialog>

      <Dialog
        open={quizFailed}
        onOpenChange={(open) => {
          if (!open) setQuizFailed(true);
        }}
      >
        <DialogContent
          className="border-destructive/50 bg-surface sm:max-w-md"
          onEscapeKeyDown={(event) => event.preventDefault()}
          onPointerDownOutside={(event) => event.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl">Acesso não liberado</DialogTitle>
            <DialogDescription className="leading-6 text-muted-foreground">
              Para continuar, você precisa concluir o quiz patriota demonstrando conhecimento,
              responsabilidade e compromisso com o Brasil.
            </DialogDescription>
          </DialogHeader>
          <Button
            type="button"
            className="w-full"
            onClick={() => {
              setQuizFailed(false);
              setQuizStep(0);
              setQuizAnswers([]);
              setQuizScore(0);
              setShowQuiz(true);
            }}
          >
            Refazer o quiz
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog open={showQuiz} onOpenChange={setShowQuiz}>
        <DialogContent className="max-h-[calc(100dvh-1rem)] w-[calc(100%-1rem)] overflow-y-auto rounded-[2rem] border-secondary/50 bg-surface p-0 shadow-2xl sm:max-w-lg">
          <div className="bg-gradient-to-br from-primary/15 via-surface to-secondary/10 px-6 pb-6 pt-7 sm:px-8">
            <DialogHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl border border-secondary/30 bg-secondary/15 text-3xl shadow-lg">
                🇧🇷
              </div>
              <DialogTitle className="text-3xl sm:text-4xl">
                Quiz patriota
              </DialogTitle>
              <DialogDescription className="mt-2 leading-6 text-muted-foreground">
                Responda a 6 perguntas rápidas e mostre o que o Brasil representa para você.
              </DialogDescription>
            </DialogHeader>
          </div>

          {(() => {
            const questions = [
              {
                emoji: "🇧🇷",
                question: "O que patriotismo significa na prática?",
                answers: [
                  "Cuidar do Brasil, defender sua liberdade e assumir responsabilidades.",
                  "Respeitar a história, os símbolos e as pessoas do país.",
                  "Usar a palavra patriotismo apenas como uma identidade.",
                ],
              },
              {
                emoji: "🦅",
                question: "Qual valor deve orientar as decisões sobre o futuro do Brasil?",
                answers: [
                  "Liberdade, responsabilidade e respeito às leis.",
                  "Família, trabalho e compromisso com a comunidade.",
                  "Nenhum valor deve orientar as decisões do país.",
                ],
              },
              {
                emoji: "🗳️",
                question: "Como você forma sua opinião política?",
                answers: [
                  "Comparo fontes, verifico informações e penso de forma independente.",
                  "Acompanho notícias e debates com frequência.",
                  "Repito o que vejo sem verificar os fatos.",
                ],
              },
              {
                emoji: "⚖️",
                question: "O que deve acontecer quando uma autoridade desrespeita a lei?",
                answers: [
                  "Deve responder pelos seus atos dentro das instituições.",
                  "A sociedade deve cobrar explicações e transparência.",
                  "Autoridades devem estar acima das regras comuns.",
                ],
              },
              {
                emoji: "📰",
                question: "Por que a liberdade de imprensa é importante?",
                answers: [
                  "Porque permite fiscalizar o poder e conhecer diferentes fatos e opiniões.",
                  "Porque ajuda as pessoas a acompanhar os acontecimentos.",
                  "Porque qualquer informação deve ser aceita sem responsabilidade.",
                ],
              },
              {
                emoji: "🤝",
                question: "Como um patriota deve tratar quem pensa diferente?",
                answers: [
                  "Com respeito, diálogo e disposição para defender suas ideias com argumentos.",
                  "Com tolerância, desde que as regras democráticas sejam respeitadas.",
                  "Como um inimigo que não merece ser ouvido.",
                ],
              },
              {
                emoji: "💪",
                question: "O que mais contribui para um país forte?",
                answers: [
                  "Educação, trabalho, segurança e responsabilidade dos cidadãos.",
                  "Participação social e respeito às instituições.",
                  "Esperar que outras pessoas resolvam todos os problemas.",
                ],
              },
              {
                emoji: "🌎",
                question: "Qual deve ser a postura do Brasil diante do mundo?",
                answers: [
                  "Defender seus interesses, sua soberania e cooperar quando for necessário.",
                  "Construir relações respeitosas com outros países.",
                  "Aceitar qualquer decisão externa sem questionar.",
                ],
              },
              {
                emoji: "🔎",
                question: "O que você faz ao encontrar uma notícia que confirma sua opinião?",
                answers: [
                  "Verifico a origem, o contexto e procuro outras fontes.",
                  "Leio a matéria completa antes de compartilhar.",
                  "Compartilho imediatamente porque concordo com ela.",
                ],
              },
              {
                emoji: "🌟",
                question: "O que você deseja para o futuro do Brasil?",
                answers: [
                  "Um país livre, seguro, próspero e responsável com seu povo.",
                  "Um país forte, unido e respeitado.",
                  "Não tenho nenhum compromisso com o futuro do país.",
                ],
              },
            ];
            const currentQuestion = questions[quizStep];
            const currentAnswer = quizAnswers[quizStep];

            return (
              <>
                <div className="space-y-6 px-6 pb-2 pt-6 sm:px-8">
                  <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-muted-foreground">
                    <span>Pergunta {quizStep + 1} de {questions.length}</span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                      {Math.round(((quizStep + 1) / questions.length) * 100)}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500"
                      style={{ width: `${((quizStep + 1) / questions.length) * 100}%` }}
                    />
                  </div>

                  <div className="rounded-[1.75rem] border border-border/80 bg-background/50 p-5 shadow-inner sm:p-6">
                    <div className="mb-4 text-4xl" aria-hidden="true">
                      {currentQuestion.emoji}
                    </div>
                    <p className="text-xl font-black leading-tight sm:text-2xl">
                      {currentQuestion.question}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {currentQuestion.answers.map((answer, answerIndex) => (
                      <Button
                        key={answer}
                        type="button"
                        variant={currentAnswer === answer ? "default" : "outline"}
                        className={`h-auto min-h-14 w-full justify-between rounded-2xl px-5 py-4 text-left text-sm transition-all duration-200 ${
                          currentAnswer === answer
                            ? "scale-[1.02] shadow-lg shadow-primary/20"
                            : "border-border/80 bg-background/40 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/5"
                        }`}
                        onClick={() => {
                          const nextAnswers = [...quizAnswers];
                          nextAnswers[quizStep] = answer;
                          setQuizAnswers(nextAnswers);

                          const nextScore = nextAnswers.reduce((score, selectedAnswer, index) => {
                            if (!selectedAnswer) return score;
                            const selectedIndex = questions[index].answers.indexOf(selectedAnswer);
                            return score + (selectedIndex === 0 ? 2 : selectedIndex === 1 ? 1 : 0);
                          }, 0);

                          setQuizScore(nextScore);
                        }}
                      >
                        <span className="whitespace-normal">{answer}</span>
                        <span className="ml-3 shrink-0 text-lg" aria-hidden="true">
                          {currentAnswer === answer ? "✅" : "👉"}
                        </span>
                      </Button>
                    ))}
                  </div>
                </div>

                <DialogFooter className="mt-6 flex-col gap-3 border-t border-border/70 bg-background/30 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                  <p className="text-xs text-muted-foreground">
                    🔒 Quiz simbólico e sem coleta de respostas.
                  </p>
                  <Button
                    type="button"
                    size="lg"
                    className="w-full rounded-full px-6 sm:w-auto"
                    disabled={!currentAnswer}
                    onClick={() => {
                      const finalScore = nextAnswers.reduce((score, selectedAnswer, index) => {
                        if (!selectedAnswer) return score;
                        const selectedIndex = questions[index].answers.indexOf(selectedAnswer);
                        return score + (selectedIndex === 0 ? 2 : selectedIndex === 1 ? 1 : 0);
                      }, 0);

                      setQuizScore(finalScore);

                      if (quizStep < questions.length - 1) {
                        setQuizStep((step) => step + 1);
                      } else if (finalScore >= 16) {
                        setShowQuiz(false);
                        setShowPlans(true);
                      } else {
                        setShowQuiz(false);
                        setShowPlans(false);
                        setQuizFailed(true);
                      }
                    }}
                  >
                    {quizStep < questions.length - 1 ? "Continuar" : "Ver planos"}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                </DialogFooter>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>

      {showPlans ? (
        <section className="border-y border-primary/30 bg-surface px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-secondary">
                Você concluiu a experiência
              </p>
              <h2 className="mt-3 text-4xl sm:text-5xl">
                Escolha como apoiar o Jornal Voz Patriota
              </h2>
              <p className="mt-5 text-muted-foreground">
                Tenha acesso a notícias, análises e conteúdos exclusivos da direita no Brasil e no mundo.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative rounded-3xl border p-7 sm:p-9 ${
                    plan.featured
                      ? "border-primary bg-primary/10 shadow-[var(--shadow-heat)]"
                      : "border-border bg-background"
                  }`}
                >
                  {plan.featured ? (
                    <div className="absolute right-6 top-0 -translate-y-1/2 bg-primary px-3 py-1 text-xs font-black uppercase tracking-wider text-primary-foreground">
                      Mais completo
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
                    type="button"
                    size="lg"
                    className="mt-8 w-full"
                    variant={plan.featured ? "default" : "outline"}
                    onClick={() => setShowPlans(false)}
                  >
                    Assinar {plan.name}
                    <ArrowRight className="h-5 w-5" aria-hidden />
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section id="inicio" className="relative isolate min-h-[680px] overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-20 bg-[url('https://picsum.photos/seed/manifestacao-patriota-brasil/1800/1200')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,color-mix(in_oklch,var(--background)_97%,transparent)_0%,color-mix(in_oklch,var(--background)_86%,transparent)_46%,color-mix(in_oklch,var(--background)_45%,transparent)_100%),linear-gradient(0deg,var(--background),transparent_65%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-background/60 px-4 py-2 text-xs font-black tracking-[0.12em] text-secondary shadow-lg shadow-black/10 backdrop-blur">
              <Megaphone className="h-4 w-4" aria-hidden />
              A notícia antes da narrativa
            </div>
            <h1 className="max-w-4xl text-5xl leading-[0.98] sm:text-6xl lg:text-8xl">
              Veja notícias de direita.{" "}
              <span className="heat-text">Pense por conta própria.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              O Jornal Voz Patriota entrega notícias, contexto e análises conservadoras para quem
              está cansado de receber apenas um lado da história.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button type="button" size="lg" className="rounded-full px-7 shadow-[var(--shadow-heat)]" onClick={openBallot}>
                Quero acesso às notícias
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Button>
              <Button type="button" size="lg" variant="outline" className="rounded-full px-7" onClick={openBallot}>
                Apoiar o jornal
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
              <span>✓ Leitura rápida</span>
              <span>✓ Brasil e mundo</span>
              <span>✓ Conteúdo exclusivo</span>
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />
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

      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-secondary">
              Depoimentos de leitores
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl">
              Quem comprou o jornal não voltou para a narrativa única
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
              Pessoas que escolheram acompanhar o Brasil e o mundo com mais contexto, liberdade e
              uma perspectiva conservadora.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl border border-border/80 bg-surface/90 p-6 shadow-[var(--shadow-hard)]">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Foto de perfil de Marcelo Ribeiro"
                  className="h-12 w-12 rounded-full border-2 border-primary/50 object-cover"
                />
                <div>
                  <p className="font-black">Marcelo Ribeiro</p>
                  <p className="text-sm text-muted-foreground">@marceloribeiro</p>
                </div>
              </div>
              <div className="mt-5 flex gap-1 text-secondary" aria-label="5 estrelas">
                {"★★★★★"}
              </div>
              <blockquote className="mt-5 text-lg leading-8">
                “Finalmente encontrei um jornal que apresenta os fatos de forma direta e não trata o
                leitor como alguém incapaz de pensar.”
              </blockquote>
              <p className="mt-6 text-sm font-black uppercase tracking-wider text-primary">
                Leitor assinante
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-hard)]">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/32288633/pexels-photo-32288633.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Foto de perfil de Patrícia Alves"
                  className="h-12 w-12 rounded-full border-2 border-primary/50 object-cover"
                />
                <div>
                  <p className="font-black">Patrícia Alves</p>
                  <p className="text-sm text-muted-foreground">@patricia.alves</p>
                </div>
              </div>
              <div className="mt-5 flex gap-1 text-secondary" aria-label="5 estrelas">
                {"★★★★★"}
              </div>
              <blockquote className="mt-5 text-lg leading-8">
                “Passei a acompanhar o Brasil e o mundo com muito mais contexto. A leitura é rápida,
                clara e alinhada aos valores da minha família.”
              </blockquote>
              <p className="mt-6 text-sm font-black uppercase tracking-wider text-primary">
                Leitora assinante
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-hard)]">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Foto de perfil de Eduardo Martins"
                  className="h-12 w-12 rounded-full border-2 border-primary/50 object-cover"
                />
                <div>
                  <p className="font-black">Eduardo Martins</p>
                  <p className="text-sm text-muted-foreground">@eduardomartins</p>
                </div>
              </div>
              <div className="mt-5 flex gap-1 text-secondary" aria-label="5 estrelas">
                {"★★★★★"}
              </div>
              <blockquote className="mt-5 text-lg leading-8">
                “Assinar foi uma forma de apoiar um jornalismo independente e continuar informado
                sobre o que realmente importa.”
              </blockquote>
              <p className="mt-6 text-sm font-black uppercase tracking-wider text-primary">
                Leitor assinante
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-surface shadow-[var(--shadow-hard)]">
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
        <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-surface shadow-[var(--shadow-hard)]">
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

      <section id="apoie" className="border-y border-border bg-surface/60">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-secondary">
            Apoie o jornalismo independente
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl">
            Informação livre depende de leitores livres.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
            Conheça a nossa simulação de urna e continue para apoiar o Jornal Voz Patriota.
          </p>
          <Button type="button" size="lg" className="mt-8 rounded-full px-7 shadow-[var(--shadow-heat)]" onClick={openBallot}>
            Apoiar o Jornal Voz Patriota
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Button>
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
              Imagens: Pexels — Karolina Grabowska, Tochukwu Ekeh e Christina Morillo.
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
    <div className="rounded-3xl border border-border/80 bg-background/70 p-6 shadow-[var(--shadow-hard)] transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">{icon}</div>
      <h3 className="text-xl">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
    </div>
  );
}