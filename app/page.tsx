import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <nav className={styles.nav}>
          <span className={styles.navBrand}>PORTFOLIO</span>
          <span className={`${styles.navBrand} ${styles.navBrandYear}`}>&apos;26</span>
          <ul className={styles.navLinks}>
            <li><a href="#about">about</a></li>
            <li><a href="#work">work</a></li>
            <li><a href="#shelf">shelf</a></li>
            <li><a href="#contact" className={styles.navLinkContact}>contact</a></li>
          </ul>
        </nav>

        <section id="about" className={styles.hero}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.heroBadge}>
                <span>★ HI, I&apos;M WAFA ★</span>
              </div>
              <h1 className={styles.heroTitle}>
                TECH
                <br />
                ENTHUSIAST
              </h1>
              <p className={styles.heroTagline}>building things, one bug fix at a time!!</p>
              <p className={styles.heroDesc}>
                <strong className={styles.heroDescStrong}>Web dev, cybersec, data — SHE WANTS IT ALL.</strong> 🌱
                A <strong className={styles.heroDescStrong}>rookie with too many tabs open</strong>, she&apos;s
                still at the very beginning of her tech journey, figuring out where she wants to grow (and
                refusing to pick just one lane yet). Curious about the intersection of technology, people, and
                sustainability, she&apos;s especially interested in how innovations shape — and sometimes
                manipulate — the way people think and behave. One day, she might even turn those rabbit holes
                into a PhD. For now, she&apos;s here to learn, explore, and see where the tabs take her.
              </p>
              <div className={styles.heroButtons}>
                <a href="#work" className={styles.btnPrimary}>VIEW MY WORK</a>
                <a href="/resume.pdf" className={styles.btnSecondary}>RESUME PDF</a>
              </div>
            </div>

            <div className={styles.heroCollage}>
              <div className={styles.photocard}>
                <div className={styles.photocardImage}>
                  <img src="/hero-photo.jpg" alt="Wafa" />
                </div>
                <p className={styles.photocardCaption}>me @ 3am, debugging</p>
              </div>
              <span className={styles.tapeOne} />

              <div className={styles.stickyNote}>
                <p>
                  hot girls love
                  <br />
                  clean code!!! ♡
                </p>
              </div>
              <span className={styles.tapeTwo} />

              <div className={styles.heroDecorRow}>
                <div className={styles.starBig}>
                  <div className={styles.starInner} />
                </div>
                <div className={styles.starSmall}>
                  <div className={styles.starInner} />
                </div>
                <span className={styles.heroNumber}>37.5</span>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.divider} />

        <section className={styles.section}>
          <div className={styles.sectionHeadingRow}>
            <span className={styles.sectionLabel}>THE TOOLKIT</span>
            <span className={styles.sectionNote}>(stuff i actually use)</span>
          </div>
          <div className={styles.tagRow}>
            <span className={styles.tagPink}>PYTHON</span>
            <span className={styles.tagOutline}>REACT</span>
            <span className={styles.tagRed}>SQL</span>
            <span className={styles.tagBlack}>GIT</span>
            <span className={styles.tagOutlinePink}>JAVA</span>
            <span className={styles.tagLight}>FIGMA</span>
          </div>
        </section>

        <section id="work" className={styles.projectsSection}>
          <div className={styles.projectsHeadingRow}>
            <span className={styles.projectsTitle}>THE PROJECTS</span>
            <span className={styles.projectsPill}>3 PAGES ONLY</span>
          </div>

          <div className={styles.projectsGrid}>
            <div className={styles.featuredCard}>
              <div className={styles.featuredImage}>[ project screenshot ]</div>
              <div className={styles.featuredBody}>
                <span className={styles.badgeSmall}>FEATURED</span>
                <h3 className={styles.featuredTitle}>PROJECT NAME ONE</h3>
                <p className={styles.projectDesc}>
                  One or two sentences on what it does and the problem it solves.
                </p>
                <div className={styles.techTagRow}>
                  <span className={styles.techTagPink}>PYTHON</span>
                  <span className={styles.techTagBlack}>FLASK</span>
                  <span className={styles.techTagLight}>SQLITE</span>
                </div>
                <a href="https://github.com/yourusername/project-one" className={styles.viewRepoLink}>
                  VIEW REPO →
                </a>
              </div>
              <span className={styles.cornerStar}>
                <span />
              </span>
            </div>

            <div className={styles.sideProjects}>
              <div className={styles.sideCardPink}>
                <h3 className={styles.sideTitle}>PROJECT NAME TWO</h3>
                <p className={styles.sideDesc}>
                  One or two sentences on what it does and the problem it solves.
                </p>
                <p className={styles.faveNote}>← my fave one</p>
                <div className={styles.techTagRow}>
                  <span className={styles.techTagBlack}>REACT</span>
                  <span className={styles.techTagPink}>NODE</span>
                </div>
              </div>
              <div className={styles.sideCardRed}>
                <h3 className={styles.sideTitle}>PROJECT NAME THREE</h3>
                <p className={styles.sideDesc}>
                  One or two sentences on what it does and the problem it solves.
                </p>
                <div className={styles.techTagRow}>
                  <span className={styles.techTagLight}>JAVA</span>
                  <span className={styles.techTagBlack}>DSA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="shelf" className={styles.deskCrewSection}>
          <div className={styles.sectionHeadingRow} style={{ marginBottom: 6 }}>
            <span style={{ fontFamily: "var(--font-anton)", fontSize: 30, color: "#111" }}>
              THE DESK CREW
            </span>
            <span className={styles.sectionNote}>they supervise every commit</span>
          </div>
          <div className={styles.deskCrewGrid}>
            {[
              { rotation: -2.5, src: "/jjopoo.jpg", alt: "jjopoo" },
              { rotation: 1.8, src: "/eong.jpg", alt: "eong" },
              { rotation: -1.2, src: "/jjed.jpg", alt: "jjed" },
              { rotation: 2.4, src: null, alt: "" },
            ].map((item, i) => (
              <div key={i} className={styles.deskCrewItem} style={{ transform: `rotate(${item.rotation}deg)` }}>
                <div className={styles.deskCrewImage}>
                  {item.src ? <img src={item.src} alt={item.alt} /> : <span>figure {i + 1}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.contactBanner}>
          <p className={styles.contactTitle}>LET&apos;S BUILD SOMETHING</p>
          <p className={styles.contactSubtitle}>put me on your team ♡</p>
          <div className={styles.contactButtons}>
            <a href="mailto:your@email.com" className={styles.contactBtnEmail}>EMAIL ME</a>
            <a href="https://github.com/wafamanii56" className={styles.contactBtnGithub}>GITHUB</a>
            <a href="https://linkedin.com/in/yourusername" className={styles.contactBtnLinkedin}>LINKEDIN</a>
          </div>
        </section>

        <p className={styles.footerBar}>© yourname — made with too much pink and not enough sleep</p>
      </div>
    </main>
  );
}
