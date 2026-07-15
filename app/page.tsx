import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "tuna — personal notes & projects",
  description:
    "tunaの個人サイト。制作、研究、日々の観察を記録しています。",
};

const projects = [
  {
    number: "01",
    year: "2026",
    title: "Signals in Conversation",
    description:
      "会話のなかで、人の判断や態度がどのように変化するのかを観察するリサーチプロジェクト。",
    tags: ["Research", "AI", "Interaction"],
    accent: "blue",
  },
  {
    number: "02",
    year: "2026",
    title: "Local Memory Map",
    description:
      "場所と記憶を結びつけ、日常の小さな発見を蓄積するためのデジタルツール。",
    tags: ["Product", "Prototype", "Maps"],
    accent: "violet",
  },
  {
    number: "03",
    year: "2025",
    title: "Quiet Interface Studies",
    description:
      "目立つことよりも、触れたときの気持ちよさを優先したインターフェース実験集。",
    tags: ["Web", "Motion", "Design"],
    accent: "cyan",
  },
] as const;

const writings = [
  {
    date: "2026.07.12",
    title: "自分のためのウェブサイトを、もう一度つくる",
    category: "Note",
  },
  {
    date: "2026.06.28",
    title: "会話するAIは、どこまで人を説得できるのか",
    category: "Essay",
  },
  {
    date: "2026.05.09",
    title: "静かなインターフェースについて考えていること",
    category: "Design",
  },
] as const;

const timeline = [
  {
    period: "2025 — Now",
    role: "Independent Research & Making",
    detail: "AI、情報環境、人の意思決定をテーマに研究と制作を進めています。",
  },
  {
    period: "2023 — 2025",
    role: "Study & Experiments",
    detail: "社会科学とデジタルプロダクトの交点を探り、小さな実験を重ねました。",
  },
  {
    period: "Before 2023",
    role: "Learning in Public",
    detail: "興味を持ったことを調べ、書き、つくることから活動を始めました。",
  },
] as const;

const tools = [
  ["Desk", "MacBook Pro / Studio Display / HHKB"],
  ["Create", "Figma / VS Code / GitHub / Blender"],
  ["Think", "Obsidian / Notebook / Readwise"],
  ["Everyday", "iPhone / AirPods / Ricoh GR"],
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">
        本文へ移動
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="tuna ホーム">
          <span className="wordmark-mark" aria-hidden="true">
            t
          </span>
          <span>tuna</span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#projects">Projects</a>
          <a href="#writing">Writing</a>
          <a href="#about">About</a>
          <a href="#uses">Uses</a>
        </nav>
        <span className="availability">
          <span className="availability-dot" aria-hidden="true" />
          Tokyo, JP
        </span>
      </header>

      <div className="page-shell" id="top">
        <aside className="intro" aria-labelledby="intro-title">
          <div>
            <p className="eyebrow">Personal notes &amp; selected work</p>
            <h1 id="intro-title">
              Hello, I&apos;m <span>tuna.</span>
            </h1>
            <p className="intro-copy">
              テクノロジーと人のあいだで起きることを観察し、考え、つくっています。
              ここは、プロジェクトと文章、日々の興味をひとつにまとめる場所です。
            </p>
          </div>

          <div className="now-card">
            <p className="mini-label">Now</p>
            <p>会話型AIと意思決定についてリサーチ中。</p>
            <time dateTime="2026-07">Updated July 2026</time>
          </div>

          <div className="intro-footer">
            <div className="social-links" aria-label="ソーシャルリンク">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
              <a href="mailto:hello@example.com">
                Email <Arrow />
              </a>
            </div>
            <p>Scroll to explore</p>
          </div>
        </aside>

        <div className="content" id="content">
          <section id="projects" className="content-section">
            <div className="section-heading">
              <p className="section-index">01</p>
              <div>
                <p className="eyebrow">Selected work</p>
                <h2>Projects</h2>
              </div>
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <article
                  className={`project-card project-card-${project.accent}`}
                  key={project.number}
                  tabIndex={0}
                >
                  <div className="project-meta">
                    <span>{project.number}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <Arrow />
                  </div>
                  <p>{project.description}</p>
                  <ul aria-label={`${project.title} のカテゴリー`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="project-glow" aria-hidden="true" />
                </article>
              ))}
            </div>
          </section>

          <section id="writing" className="content-section">
            <div className="section-heading">
              <p className="section-index">02</p>
              <div>
                <p className="eyebrow">Ideas in progress</p>
                <h2>Writing</h2>
              </div>
            </div>

            <div className="writing-list">
              {writings.map((writing) => (
                <article className="writing-item" key={writing.title}>
                  <div>
                    <p className="writing-meta">
                      <time>{writing.date}</time>
                      <span>{writing.category}</span>
                    </p>
                    <h3>{writing.title}</h3>
                  </div>
                  <Arrow />
                </article>
              ))}
            </div>
            <a className="text-link" href="#writing">
              すべての記事を見る <Arrow />
            </a>
          </section>

          <section id="about" className="content-section">
            <div className="section-heading">
              <p className="section-index">03</p>
              <div>
                <p className="eyebrow">A short history</p>
                <h2>About</h2>
              </div>
            </div>

            <div className="about-copy">
              <p>
                社会科学、デザイン、ソフトウェアの境界に興味があります。わからないものを観察し、言葉にし、ときどき動くものにします。
              </p>
              <p>
                完成した成果だけでなく、途中の考えや失敗も残していくための個人サイトを育てています。
              </p>
            </div>

            <div className="timeline">
              {timeline.map((item) => (
                <article className="timeline-item" key={item.period}>
                  <time>{item.period}</time>
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="uses" className="content-section">
            <div className="section-heading">
              <p className="section-index">04</p>
              <div>
                <p className="eyebrow">Things I use</p>
                <h2>Uses</h2>
              </div>
            </div>

            <div className="uses-grid">
              {tools.map(([label, value]) => (
                <article key={label}>
                  <p className="mini-label">{label}</p>
                  <p>{value}</p>
                </article>
              ))}
            </div>
          </section>

          <footer>
            <p>Designed to evolve.</p>
            <p>© 2026 tuna</p>
            <a href="#top" aria-label="ページ上部へ戻る">
              Back to top ↑
            </a>
          </footer>
        </div>
      </div>
    </main>
  );
}
