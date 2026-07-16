import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "tuna — personal notes & projects",
  description: "tunaの個人サイト。制作と文章を静かに記録しています。",
};

const projects = [
  {
    year: "2026",
    type: "Research",
    title: "Signals in Conversation",
    description: "会話するAIと、人の判断が変化する瞬間についての研究。",
  },
  {
    year: "2026",
    type: "Product",
    title: "Local Memory Map",
    description: "場所と記憶を結びつけ、日常の発見を残すためのツール。",
  },
  {
    year: "2025",
    type: "Experiment",
    title: "Quiet Interface Studies",
    description: "触れたときの気持ちよさを探る、小さなUI実験の記録。",
  },
] as const;

const writings = [
  ["2026.07", "自分のためのウェブサイトを、もう一度つくる"],
  ["2026.06", "会話するAIは、どこまで人を説得できるのか"],
  ["2026.05", "静かなインターフェースについて考えていること"],
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#content">
        本文へ移動
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="tuna ホーム">
          tuna
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#projects">Projects</a>
          <a href="#writing">Writing</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <p className="kicker">Personal notes &amp; selected work</p>
          <h1 id="hero-title">tuna</h1>
          <p className="hero-copy">
            テクノロジーと人のあいだで起きることを、考え、書き、つくっています。
          </p>
        </div>
        <div className="hero-foot">
          <p>Based in Tokyo</p>
          <p>
            Currently exploring <span>AI &amp; decision making</span>
          </p>
        </div>
      </section>

      <div className="content" id="content">
        <section className="section" id="projects">
          <header className="section-header">
            <p className="section-label">01 / Projects</p>
            <p>Selected work</p>
          </header>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.title} tabIndex={0}>
                <div className="project-meta">
                  <span>{project.year}</span>
                  <span>{project.type}</span>
                </div>
                <div className="project-main">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
                <Arrow />
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="writing">
          <header className="section-header">
            <p className="section-label">02 / Writing</p>
            <p>Notes and essays</p>
          </header>

          <div className="writing-list">
            {writings.map(([date, title]) => (
              <article className="writing" key={title}>
                <time>{date}</time>
                <h2>{title}</h2>
                <Arrow />
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <header className="section-header">
            <p className="section-label">03 / About</p>
            <p>A short introduction</p>
          </header>

          <div className="about-grid">
            <p className="about-lead">
              社会科学、デザイン、ソフトウェアの境界に興味があります。
            </p>
            <div className="about-detail">
              <p>
                わからないものを観察して、言葉にし、ときどき動くものにします。完成した成果だけでなく、途中の考えもここに残します。
              </p>
              <dl>
                <div>
                  <dt>Now</dt>
                  <dd>会話型AIと意思決定について研究中</dd>
                </div>
                <div>
                  <dt>Uses</dt>
                  <dd>MacBook Pro, Obsidian, Figma, GitHub</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <footer>
          <p>© 2026 tuna</p>
          <div>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>
            <a href="mailto:hello@example.com">
              Email <Arrow />
            </a>
          </div>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </main>
  );
}
