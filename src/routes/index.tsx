import { useState } from "react";
import { ArrowRight, Check, CheckCircle2, Globe2, Megaphone, ShieldAlert, Star } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import ruasImage from "@/assets/uploads/3675.jpeg";
import economiaImage from "@/assets/uploads/3676.png";
import logoImage from "@/assets/uploads/3681.png";
import wilsonGrassiPhoto from "@/assets/uploads/3682.jpg";

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
    description: "Notícias e conteúdos exclusivos sobre Jair Bolsonaro e sua atuação política.",
    featured: false,
    features: [
      "Notícias sobre Flávio Bolsonaro",
      "Notícias da direita no Brasil",
      "Acesso a conteúdos exclusivos",
      "Resumo das principais decisões políticas",
    ],
  },
  {
    name: "Plano Patriota",
    price: "29,90",
    description: "Acompanhe as principais notícias da direita brasileira e mundial.",
    featured: true,
    features: [
      "Tudo do Plano Básico",
      "Notícias da direita no Brasil e no mundo",
      "Cobertura de líderes conservadores internacionais",
      "Notícias sobre Donald Trump e outros líderes mundiais",
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
    photo: wilsonGrassiPhoto,
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
  const votingAudio = new Audio(
    "https://www.myinstants.com/media/sounds/urna-eletronica-confirma.mp3",
  );

  votingAudio.volume = 1;
  votingAudio.currentTime = 0;

  void votingAudio.play().catch((error) => {
    console.error("Não foi possível reproduzir o som da urna:", error);
  });
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
  const [quizResult, setQuizResult] = useState<{ label: string } | null>(null);

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
    setQuizResult(null);
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
      <div
        className="overflow-hidden border-b border-destructive/50 bg-destructive px-3 py-1 text-[9px] font-black tracking-[0.04em] text-destructive-foreground sm:text-[10px]"
        role="status"
        aria-label="Aviso: jornal sob risco de censura por políticos de esquerda"
      >
        <div className="flex min-w-max animate-marquee whitespace-nowrap">
          <span className="px-8">⚠️ Jornal sob risco de censura por políticos de esquerda.</span>
          <span className="px-8" aria-hidden="true">
            ⚠️ Jornal sob risco de censura por políticos de esquerda.
          </span>
          <span className="px-8" aria-hidden="true">
            ⚠️ Jornal sob risco de censura por políticos de esquerda.
          </span>
          <span className="px-8" aria-hidden="true">
            ⚠️ Jornal sob risco de censura por políticos de esquerda.
          </span>
        </div>
      </div>

      <Dialog open={showBallot} onOpenChange={setShowBallot}>
        <DialogContent className="max-h-[92vh] overflow-y-auto border-secondary/50 bg-surface p-4 sm:max-w-2xl sm:p-6">

          <div className="overflow-hidden rounded-xl border border-ballot-edge bg-ballot-body text-ballot-foreground shadow-2xl">
            <div className="flex items-center justify-between border-b border-ballot-edge bg-ballot-body px-5 py-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                  Simulação demonstrativa
                </p>
                <p className="mt-1 text-sm font-bold">Presidente da República</p>
              </div>
              <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_14px_var(--primary)]" />
            </div>

            <div className="grid min-w-0 gap-5 p-4 sm:grid-cols-[minmax(0,1fr)_190px] sm:gap-6 sm:p-5">
              <div className="min-h-[220px] min-w-0 border-8 border-ballot-keypad bg-ballot-screen p-4 text-foreground shadow-inner sm:min-h-56">
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

              <div className="mx-auto grid w-full max-w-[280px] grid-cols-3 gap-2 rounded-lg bg-ballot-keypad/90 p-2">
                {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((number) => (
                  <button
                    key={number}
                    type="button"
                    disabled={eliminated}
                    className="min-h-14 rounded-md border-2 border-black/80 bg-transparent text-2xl font-black text-foreground shadow-[0_4px_0_oklch(0.08_0.012_90),inset_0_1px_0_oklch(1_0_0_/_0.22),inset_0_-3px_6px_oklch(0_0_0_/_0.55)] transition hover:bg-transparent active:translate-y-1 active:shadow-[inset_0_2px_5px_oklch(0_0_0_/_0.65)] disabled:cursor-not-allowed disabled:opacity-50"
                    onClick={() => typeNumber(number)}
                  >
                    {number}
                  </button>
                ))}
                <button
                  type="button"
                  disabled={eliminated}
                  className="min-h-14 rounded-md border-2 border-ballot-edge bg-transparent text-[8px] font-black uppercase leading-none tracking-[-0.04em] whitespace-nowrap text-ballot-foreground shadow-[0_4px_0_oklch(0.08_0.012_90),inset_0_1px_0_oklch(1_0_0_/_0.45),inset_0_-3px_6px_oklch(0_0_0_/_0.3)] transition hover:bg-transparent hover:brightness-105 active:translate-y-1 active:shadow-[inset_0_2px_5px_oklch(0_0_0_/_0.55)] disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={clearNumber}
                >
                  Branco
                </button>
                <button
                  type="button"
                  disabled={eliminated}
                  className="min-h-14 rounded-md border-2 border-black/80 bg-ballot-key text-2xl font-black text-foreground shadow-[0_4px_0_oklch(0.08_0.012_90),inset_0_1px_0_oklch(1_0_0_/_0.22),inset_0_-3px_6px_oklch(0_0_0_/_0.55)] transition hover:bg-ballot-key-hover active:translate-y-1 active:shadow-[inset_0_2px_5px_oklch(0_0_0_/_0.65)] disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => typeNumber("0")}
                >
                  0
                </button>
                <button
                  type="button"
                  disabled={!selectedCandidate || confirmed || eliminated}
                  className="min-h-14 min-w-0 overflow-hidden rounded-md border-2 border-black/50 bg-transparent px-0 text-[6px] font-black uppercase leading-none tracking-[-0.08em] whitespace-nowrap text-ballot-foreground shadow-[0_4px_0_oklch(0.08_0.012_90),inset_0_1px_0_oklch(1_0_0_/_0.3),inset_0_-3px_6px_oklch(0_0_0_/_0.4)] transition hover:bg-transparent hover:brightness-110 active:translate-y-1 active:shadow-[inset_0_2px_5px_oklch(0_0_0_/_0.6)] disabled:cursor-not-allowed disabled:opacity-50"
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
                  Confirmar
                </button>
              </div>
            </div>

            {eliminated ? (
              <div className="border-t border-destructive/40 bg-destructive/10 px-5 py-4 text-center text-sm font-black leading-6 text-destructive">
                Este jornal é somente para pessoas de direita e patriotas. Para continuar, selecione
                o número 22.
              </div>
            ) : null}

            <div className="border-t border-border bg-surface-2 px-5 py-4 text-xs text-muted-foreground">
              Esta tela é uma simulação visual e não registra nenhum voto oficial. As informações
              dos candidatos devem ser conferidas nas fontes eleitorais oficiais.
            </div>
          </div>

          <DialogFooter className="flex-col items-stretch gap-3 border-t border-border/70 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <p className="text-xs text-muted-foreground">
                Simulação meramente ilustrativa.
              </p>
              <iframe
                src="https://www.myinstants.com/instant/urna-eletronica-confirma/embed/"
                title="Fonte de áudio da urna eletrônica"
                aria-hidden="true"
                tabIndex={-1}
                className="pointer-events-none absolute h-px w-px opacity-0"
                frameBorder="0"
                scrolling="no"
              />
            </div>

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
              Para continuar, você precisa demonstrar coerência, responsabilidade e compromisso
              com o Brasil, com a liberdade de expressão e com o respeito ao processo democrático.
              O acesso não depende de apoiar um partido ou candidato específico.
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
        <DialogContent className="h-[calc(100dvh-1rem)] max-h-[calc(100dvh-1rem)] w-[calc(100%-1rem)] overflow-y-auto overscroll-contain rounded-[2rem] border-secondary/50 bg-surface p-0 shadow-2xl sm:h-auto sm:max-h-[min(860px,calc(100dvh-2rem))] sm:max-w-lg">
          <div className="bg-gradient-to-br from-primary/15 via-surface to-secondary/10 px-6 pb-6 pt-7 sm:px-8">
            <DialogHeader>
              <DialogTitle className="text-3xl sm:text-4xl">
                Teste Patriota
              </DialogTitle>
            </DialogHeader>
          </div>

          {(() => {
            const questions = [
              {
                question: "Qual a sua opinião sobre Jair Bolsonaro?",
                answers: [
                  "Foi o melhor presidente desde 1985",
                  "É o único que realmente enfrentou o sistema",
                  "Teve erros, mas defendeu o Brasil",
                  "Foi o pior presidente da história",
                ],
              },
              {
                question: "O que você acha de Lula?",
                answers: [
                  "É um político corrupto que prejudicou o país",
                  "Nunca deveria ter voltado ao poder",
                  "É o maior líder popular do Brasil",
                  "Tem méritos, mas errou muito",
                ],
              },
              {
                question: "Você se considera de qual lado político?",
                answers: [
                  "De direita",
                  "De direita e contra a esquerda",
                  "De esquerda",
                  "De centro / não me identifico com nenhum lado",
                ],
              },
              {
                question: "Sobre a esquerda brasileira, você pensa:",
                answers: [
                  "É uma corrente política autoritária, ideológica e que vive de privilégios",
                  "É o maior câncer político do Brasil: corrupta, desonesta e inimiga da liberdade",
                  "É essencial para o progresso do país",
                  "Tem boas intenções, mas erra na prática",
                ],
              },
              {
                question: "Em 2022, se você pudesse votar de novo, votaria em:",
                answers: [
                  "Bolsonaro no segundo turno",
                  "Bolsonaro desde o primeiro turno, sem dúvida",
                  "Lula no segundo turno",
                  "Branco/nulo",
                ],
              },
              {
                question: "Qual dessas afirmações mais te representa?",
                answers: [
                  "Prefiro a direita mesmo com defeitos",
                  "Sou de direita e não confio na esquerda",
                  "Prefiro um governo de esquerda a um de direita",
                  "Não me identifico com nenhum lado",
                ],
              },
            ];
            const currentQuestion = questions[quizStep];
            const currentAnswer = quizAnswers[quizStep];

            if (quizResult) {
            return (
              <div className="flex min-h-[520px] flex-col items-center justify-center px-6 py-10 text-center sm:px-8">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-secondary bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/30">
                  <span className="text-4xl" aria-hidden="true">
                    ★
                  </span>
                </div>

                <div className="mt-8 h-1.5 w-32 rounded-full bg-gradient-to-r from-accent via-primary to-secondary" />

                <p className="mt-7 text-2xl font-black leading-tight sm:text-3xl">
                  {quizResult.label}
                </p>

                  {quizScore >= 12 ? (
                    <Button
                      type="button"
                      size="lg"
                      className="mt-10 rounded-full bg-gradient-to-r from-accent via-primary to-secondary px-8 text-primary-foreground"
                      onClick={() => {
                        setShowQuiz(false);
                        setShowPlans(true);
                      }}
                    >
                      Ver planos
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Button>
                  ) : null}
                </div>
              );
            }

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
                            const points = [3, 2, 0, 1][selectedIndex] ?? 0;
                            return score + points;
                          }, 0);

                          setQuizScore(nextScore);
                        }}
                      >
                        <span className="whitespace-normal">{answer}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <DialogFooter className="mt-6 flex-col gap-3 border-t border-border/70 bg-background/30 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                  <p className="text-xs text-muted-foreground">
                    🔒 Avaliação simbólica, sem coleta de respostas e sem exigir apoio a partido.
                  </p>
                  <Button
                    type="button"
                    size="lg"
                    className="w-full rounded-full px-6 sm:w-auto"
                    disabled={!currentAnswer}
                    onClick={() => {
                      const answersForSubmission = [...quizAnswers];
                      answersForSubmission[quizStep] = currentAnswer;

                      const finalScore = answersForSubmission.reduce((score, selectedAnswer, index) => {
                        if (!selectedAnswer) return score;
                        const selectedIndex = questions[index].answers.indexOf(selectedAnswer);
                        const points = [3, 2, 0, 1][selectedIndex] ?? 0;
                        return score + points;
                      }, 0);

                      setQuizAnswers(answersForSubmission);
                      setQuizScore(finalScore);

                      if (quizStep < questions.length - 1) {
                        setQuizStep((step) => step + 1);
                      } else {
                        const label =
                          finalScore <= 15
                            ? "Direita moderada"
                            : "Direita forte";

                        if (finalScore < 12) {
                          setShowQuiz(false);
                          setQuizResult(null);
                          setQuizFailed(true);
                          return;
                        }

                        setQuizResult({ label });
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
                Você concluiu a avaliação
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
        <div className="absolute inset-0 -z-20 bg-[url('https://images.pexels.com/photos/14357047/pexels-photo-14357047.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-background/75" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-background/80 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-secondary shadow-lg shadow-black/10">
              <Megaphone className="h-4 w-4" aria-hidden />
              Informação para a reta final das eleições
            </div>
            <h1 className="max-w-4xl text-5xl leading-[0.94] sm:text-6xl lg:text-8xl">
              Fique atento.{" "}
              <span className="heat-text">
                A reta final das eleições <span className="text-primary">está chegando.</span>
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-foreground/80">
              Acompanhe as principais notícias, os acontecimentos e os debates que podem definir o
              futuro do Brasil — com informação clara, contexto e uma visão independente.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                type="button"
                size="lg"
                className="rounded-full bg-primary px-7 text-primary-foreground shadow-[var(--shadow-hard)] transition-transform hover:-translate-y-0.5 hover:bg-primary-deep"
                onClick={openBallot}
              >
                Quero assinar o jornal
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="rounded-full border-foreground/30 bg-background/35 px-7 backdrop-blur transition-transform hover:-translate-y-0.5"
              >
                Conhecer o jornal
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-[0.12em] text-foreground/70">
              <span>✓ NOTÍCIAS TODA SEMANA</span>
              <span>✓ Brasil e mundo</span>
              <span>✓ Análises exclusivas</span>
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden="true">
            <div className="ml-auto max-w-xs rounded-[2rem] border border-foreground/20 bg-background/35 p-6 shadow-2xl backdrop-blur-md">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-secondary">
                  Em perspectiva
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_16px_var(--secondary)]" />
              </div>
              <p className="text-2xl font-black leading-tight">
                Informação clara para decisões mais conscientes.
              </p>
              <div className="mt-8 h-1 rounded-full bg-secondary" />
              <p className="mt-4 text-sm leading-6 text-foreground/70">
                Brasil, mundo e política em uma leitura objetiva.
              </p>
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
                  src="https://images.pexels.com/photos/3778610/pexels-photo-3778610.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
                  src="https://images.pexels.com/photos/15869991/pexels-photo-15869991.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Pessoas patriotas reunidas com bandeiras do Brasil"
                  className="h-12 w-12 rounded-full border-2 border-primary/50 object-cover"
                />
                <div>
                  <p className="font-black">Terezinha</p>
                  <p className="text-sm text-muted-foreground">@dona.terezinha</p>
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
                  src="https://images.pexels.com/photos/10319758/pexels-photo-10319758.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
            src={ruasImage}
            alt="Notícia sobre investigação da Polícia Federal envolvendo integrantes do governo Lula"
            className="aspect-[4/3] h-auto w-full object-cover object-center sm:aspect-[16/10] sm:h-72"
          />
          <div className="p-7">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-secondary">
              NOTÍCIAS EM ALTA
            </p>
            <h2 className="mt-3 text-3xl">Quem não se informa, deixa outros decidirem por ele.</h2>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-surface shadow-[var(--shadow-hard)]">
          <img
            src={economiaImage}
            alt="Notícia sobre o aumento da dívida pública e a economia brasileira"
            className="aspect-[4/3] h-auto w-full object-cover object-center sm:aspect-[16/10] sm:h-72"
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
          <div className="text-center">
            <img
              src={logoImage}
              alt="Jornal Voz Patriota"
              className="mx-auto h-auto w-52 object-contain"
            />
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