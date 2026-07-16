import type { Metadata } from "next";
import { TableOfContents } from "./TableOfContents";

export const metadata: Metadata = {
  title: "tuna — personal notes & projects",
  description: "tunaの個人サイト。制作、研究、文章を記録しています。",
};

const tocItems = [
  { id: "introduction", label: "Introduction", level: 2 },
  { id: "projects", label: "Projects", level: 2 },
  { id: "signals-in-conversation", label: "Signals in Conversation", level: 3 },
  { id: "local-memory-map", label: "Local Memory Map", level: 3 },
  { id: "quiet-interface-studies", label: "Quiet Interface Studies", level: 3 },
  { id: "writing", label: "Writing", level: 2 },
  { id: "about", label: "About", level: 2 },
  { id: "uses", label: "Uses", level: 2 },
] as const;

export default function Home() {
  return (
    <>
      <TableOfContents items={tocItems} />

      <article>
        <div className="container">
          <a className="back" href="#introduction">
            ← Personal notes &amp; selected work
          </a>
          <h1 className="document-title">tuna</h1>
          <p className="subtitle">
            テクノロジーと人のあいだで起きることを、考え、書き、つくっています。
          </p>
          <p className="date">Personal site / Version 03 / Tokyo</p>

          <main className="prose">
            <h2 id="introduction">Introduction</h2>
            <p>
              このサイトは、制作したものと考えたことを、ひとつの場所に残すためにつくっています。完成した成果だけではなく、途中の問いや小さな実験も含みます。
            </p>
            <p>
              <mark>現在の関心。</mark>
              会話型AIが人の判断に与える影響と、テクノロジーを使う人が自分の意思を保つためのデザインを調べています。
            </p>

            <h2 id="projects">Projects</h2>
            <p>
              研究、プロダクト、インターフェースの実験から、現在の関心に近いものを選んでいます。
            </p>

            <h3 id="signals-in-conversation">Signals in Conversation</h3>
            <p className="item-meta">2026 · Research · AI and interaction</p>
            <p>
              会話のなかで、人の判断や態度がどのように変化するのかを観察するリサーチプロジェクトです。対話システムの表現と、受け手の自律性の関係を扱います。
            </p>

            <h3 id="local-memory-map">Local Memory Map</h3>
            <p className="item-meta">2026 · Product concept · Mapping</p>
            <p>
              場所と記憶を結びつけ、日常の小さな発見を蓄積するためのデジタルツール。効率ではなく、暮らしている場所への愛着を増やすことを目指しています。
            </p>

            <h3 id="quiet-interface-studies">Quiet Interface Studies</h3>
            <p className="item-meta">2025 · Interface experiments</p>
            <p>
              目立つ演出より、触れた瞬間の理解しやすさを優先した小さなUI実験集です。動き、余白、フィードバックの関係を検討しています。
            </p>

            <h2 id="writing">Writing</h2>
            <ul className="writing-list">
              <li>
                <time dateTime="2026-07">2026.07</time>
                <a href="#writing">自分のためのウェブサイトを、もう一度つくる</a>
              </li>
              <li>
                <time dateTime="2026-06">2026.06</time>
                <a href="#writing">会話するAIは、どこまで人を説得できるのか</a>
              </li>
              <li>
                <time dateTime="2026-05">2026.05</time>
                <a href="#writing">静かなインターフェースについて考えていること</a>
              </li>
            </ul>

            <h2 id="about">About</h2>
            <p>
              社会科学、デザイン、ソフトウェアの境界に興味があります。わからないものを観察して、言葉にし、ときどき動くものにします。
            </p>
            <blockquote>
              <p>
                ここは履歴書の代わりではなく、興味がどのようにつながり、変化してきたかを残す場所です。
              </p>
            </blockquote>
            <p>
              現在は東京を拠点に、会話型AI、情報環境、人の意思決定について研究と制作を進めています。
            </p>

            <h2 id="uses">Uses</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Things I use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Desk</td>
                    <td>MacBook Pro, Studio Display, HHKB</td>
                  </tr>
                  <tr>
                    <td>Think</td>
                    <td>Obsidian, notebook, Readwise</td>
                  </tr>
                  <tr>
                    <td>Create</td>
                    <td>Figma, VS Code, GitHub</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="contact">
              <mark>Contact.</mark> <a href="https://github.com/">GitHub</a> または
              <a href="mailto:hello@example.com"> email</a> から連絡できます。
            </p>
          </main>

          <footer>© 2026 tuna · Last updated July 2026</footer>
        </div>
      </article>
    </>
  );
}
