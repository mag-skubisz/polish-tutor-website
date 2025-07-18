const translations = {
  en: {
    pageTitle: "Magdalena Skubisz – Polish Teacher",
    aboutTitle: "About Me",
    aboutText: `
    <p> Hi! My name is <strong><i>Magda</i></strong> and I study at Grenoble Alpes University in France.</p>
    <p>Besides my strong interest in science, I love sports – especially running, climbing, and anything connected to the mountains.</p>
    <p>I'm also passionate about learning foreign languages – I believe it's a great way to grow, better understand others, and open the door to many opportunities – not only in your career, but in life in general.
    It's also a wonderful chance to meet interesting people and collect unique experiences.</p>`,
    methodsTitle: "Learning together – what to expect?",
    methodsText: `
    <p>My main principle is simple: each lesson should be tailored to the student and their specific language goals.</p>
    <p>Everyone has a different reason for learning Polish — living in Poland, studying, working, joining an international exchange, or simply wanting to explore Polish culture.</p>
    <p>These different goals shape what we focus on during the lessons. Depending on your needs, we can work on grammar, vocabulary, simple or advanced conversations, Polish culture, films, music — or all of it at once! :)</p>
    <p>If you already have your own learning plan — great! I’ll adapt to it.</p>
    <p>And if not — we’ll create one together, based on your goals and learning style.</p>`,
    resourcesTitle: "Helpful learning materials",
    resourcesText: "<i>(mostly in English)</i>",
    apps: "<strong>Anki</strong> (very useful for creating spaced repetition flashcards)"
  },
  pl: {
    pageTitle: "Magdalena Skubisz – Nauczycielka Polskiego",
    aboutTitle: "O mnie",
    aboutText: `
    <p>Cześć! Mam na imię <strong><i>Magda</i></strong> i studiuję na Université Grenoble Alpes, we Francji.</p>
    <p>Poza naukami ścisłymi, które bardzo mnie interesują, uwielbiam sport – zwłaszcza bieganie, wspinaczkę i wszystko, co związane z górami.</p>
    <p>Kocham też uczyć się języków obcych – uważam, że to świetny sposób, by się rozwijać, lepiej rozumieć innych i otwierać sobie drzwi do wielu możliwości – nie tylko zawodowych, ale też życiowych.
    To także wspaniała okazja do poznawania ciekawych ludzi i zdobywania wyjątkowych doświadczeń.</p>`,
    methodsTitle: "Wspólna nauka – jak to wygląda?",
    methodsText: `
    <p>Moja główna zasada jest prosta: zajęcia powinny być dopasowane do ucznia i jego indywidualnych celów językowych.</p>
    <p>Każdy z Was może mieć inny powód, by uczyć się języka polskiego — życie w Polsce, studia, praca, udział w wymianie międzynarodowej, a może po prostu chęć poznania polskiej kultury.</p>
    <p>Właśnie te różne cele sprawiają, że na zajęciach skupiamy się na innych aspektach — w zależności od tego, czego Ty potrzebujesz.</p>
    <p>Możemy pracować nad gramatyką, słownictwem, prostymi lub zaawansowanymi dialogami, kulturą polską, filmami, muzyką — albo nad wszystkim naraz! :)</p>
    <p>Jeśli masz już swój plan nauki — świetnie, dostosuję się do niego.</p>
    <p>A jeśli nie — wspólnie stworzymy taki plan, który będzie odpowiadał Twoim potrzebom i stylowi nauki.</p>`,
    resourcesTitle: "Pomocne materiały do nauki",
    resourcesText: "<i>(głównie anglojęzyczne)</i>",
    apps: "<strong>Anki</strong> (bardzo przydatne do tworzenia fiszek z powtórkami)"
  },
  fr: {
    pageTitle: "Magdalena Skubisz – Enseignante de polonais",
    aboutTitle: "À propos de moi",
    aboutText: `
    <p>Salut ! Je m'appelle <strong><i>Magda</i></strong> et j'étudie à l’Université Grenoble Alpes (UGA), en France.</p>
    <p>En plus de mon intérêt pour les sciences, j'adore le sport – notamment la course à pied, l'escalade et tout ce qui est lié à la montagne.</p>
    <p>J’ai aussi une vraie passion pour l’apprentissage des langues étrangères – je pense que c’est une excellente manière de se développer, de mieux comprendre les autres et de s’ouvrir à de nombreuses opportunités – pas seulement professionnelles, mais aussi personnelles.
    C’est aussi une belle occasion de rencontrer des personnes intéressantes et de vivre des expériences uniques.</p>`,
    methodsTitle: "Apprendre ensemble – à quoi s’attendre?",
    methodsText: `
    <p>Ma règle principale est simple : chaque cours doit être adapté à l’élève et à ses objectifs linguistiques spécifiques.</p>
    <p>Chacun a une raison différente d’apprendre le polonais — vivre en Pologne, faire des études, travailler, participer à un échange international ou simplement découvrir la culture polonaise.</p>
    <p>Ces objectifs variés influencent ce sur quoi nous allons nous concentrer pendant les cours. Selon tes besoins, on peut travailler la grammaire, le vocabulaire, des dialogues simples ou avancés, la culture polonaise, le cinéma, la musique — ou tout en même temps ! :)</p>
    <p>Si tu as déjà ton propre plan d’apprentissage, je m’y adapterai avec plaisir.</p>
    <p>Sinon, nous en créerons un ensemble, en fonction de tes objectifs et de ta façon d’apprendre.</p>`,
    resourcesTitle: "Ressources utiles pour l’apprentissage",
    resourcesText: "<i>(principalement en anglais)</i>",
    apps: "<strong>Anki</strong> (très utile pour créer des fiches de révision avec répétition espacée)"
  }
};

function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];

    }
  });

  // chane language in <html lang="">
  document.documentElement.lang = lang;

  // change <title>
  const titleTag = document.querySelector('title');
  if (translations[lang]['pageTitle']) {
    titleTag.textContent = translations[lang]['pageTitle'];
  }
}

// automatic translation
window.addEventListener('DOMContentLoaded', () => {
  changeLanguage('en'); // par deafau eng
});
