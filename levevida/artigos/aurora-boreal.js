export const slug = "aurora-boreal";
export const path = "/artigos/aurora-boreal";
export const seo = {
  title: "A Magia da Aurora Boreal: Um Espetáculo de Luzes no Céu",
  description: "Guia sobre onde, quando e como ver a aurora boreal; dicas práticas para a viagem.",
  canonical: "https://www.levevida.blog.br/artigos/aurora-boreal"
};
export const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": seo.title,
  "description": seo.description,
  "url": seo.canonical,
  "author": { "@type": "Organization", "name": "Leve Vida" }
};

export const css = `
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.8; color: #fff; background: linear-gradient(180deg, #0a1628 0%, #1a3a52 50%, #2d5f7e 100%); padding: 20px; position: relative; overflow-x: hidden; }
body::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(ellipse at top, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(59, 130, 246, 0.15) 0%, transparent 50%); pointer-events: none; z-index: 0; }
.container { max-width: 900px; margin: 0 auto; background: rgba(255, 255, 255, 0.95); padding: 50px; border-radius: 20px; box-shadow: 0 25px 80px rgba(0,0,0,0.4); position: relative; z-index: 1; color: #333; }
.header-section { text-align: center; margin-bottom: 40px; padding: 30px; background: linear-gradient(135deg, #0f766e 0%, #10b981 50%, #3b82f6 100%); border-radius: 15px; color: white; box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3); }
h1 { font-size: 2.5em; margin-bottom: 15px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
.subtitle { font-size: 1.2em; font-style: italic; opacity: 0.95; }
h2 { color: #0f766e; font-size: 1.9em; margin-top: 40px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 3px solid #10b981; position: relative; }
h2::before { content: '✨'; margin-right: 10px; }
h3 { color: #0891b2; font-size: 1.4em; margin-top: 25px; margin-bottom: 12px; }
p { margin-bottom: 18px; text-align: justify; color: #444; }
.intro-box { background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #10b981; margin: 25px 0; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2); }
.divider { height: 3px; background: linear-gradient(90deg, transparent, #10b981, #3b82f6, transparent); margin: 35px 0; border-radius: 2px; }
.locations-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 25px 0; }
.location-card { background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%); padding: 20px; border-radius: 12px; border-left: 4px solid #14b8a6; transition: transform 0.3s ease, box-shadow 0.3s ease; box-shadow: 0 3px 10px rgba(0,0,0,0.1); }
.location-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(20, 184, 166, 0.3); }
.location-card strong { color: #0f766e; font-size: 1.2em; display: block; margin-bottom: 8px; }
.season-box { background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 5px solid #3b82f6; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2); }
.tips-section { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 30px; border-radius: 12px; margin: 30px 0; border-left: 5px solid #f59e0b; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2); }
.tips-section h2 { color: #92400e; border-bottom-color: #f59e0b; }
.tip-item { background: white; padding: 18px; margin: 15px 0; border-radius: 10px; border-left: 4px solid #f59e0b; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
.tip-item strong { color: #92400e; font-size: 1.1em; display: block; margin-bottom: 8px; }
.curiosities-box { background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%); padding: 30px; border-radius: 12px; margin: 30px 0; border-left: 5px solid #a855f7; box-shadow: 0 4px 12px rgba(168, 85, 247, 0.2); }
.curiosities-box h2 { color: #6b21a8; border-bottom-color: #a855f7; }
.curiosity-item { background: white; padding: 18px; margin: 15px 0; border-radius: 10px; border-left: 4px solid #a855f7; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
.curiosity-item strong { color: #6b21a8; font-size: 1.1em; display: block; margin-bottom: 8px; }
.conclusion-box { background: linear-gradient(135deg, #0f766e 0%, #10b981 100%); color: white; padding: 30px; border-radius: 12px; margin: 40px 0; text-align: center; box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3); }
.conclusion-box p { color: white; font-size: 1.1em; text-align: center; margin-bottom: 15px; }
.cta-button { display: inline-block; background: white; color: #0f766e; padding: 15px 35px; border-radius: 30px; font-weight: bold; text-decoration: none; margin-top: 20px; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
.cta-button:hover { transform: scale(1.05); box-shadow: 0 6px 20px rgba(0,0,0,0.3); }
footer { text-align: center; margin-top: 40px; padding-top: 25px; border-top: 2px solid #e5e7eb; color: #6b7280; font-style: italic; }
.icon { font-size: 1.3em; margin-right: 8px; }
@media (max-width: 768px) {
  .container { padding: 25px; }
  h1 { font-size: 1.9em; }
  h2 { font-size: 1.5em; }
  .locations-grid { grid-template-columns: 1fr; }
}
`;

export const contentHTML = `
<article class="article-module">
  <div class="container">
    <div class="header-section">
      <h1>🌌 A Magia da Aurora Boreal</h1>
      <p class="subtitle">Um Espetáculo de Luzes no Céu</p>
    </div>

    <div class="intro-box">
      <p>Se você já sonhou em presenciar um dos mais espetaculares e misteriosos fenômenos da natureza, a aurora boreal certamente está no topo de sua lista.</p>
    </div>

    <div class="divider"></div>

    <h2>O que é a Aurora Boreal?</h2>
    <p>A aurora boreal, também conhecida como <strong>luzes do norte</strong>, ocorre nas regiões próximas aos polos magnéticos da Terra. Este efeito é resultado de partículas carregadas do Sol que interagem com o campo magnético do nosso planeta, criando um show de luzes coloridas que iluminam o céu noturno.</p>
    <p>Essas luzes variam de verdes e amarelos a vermelhos, azuis e violetas, podendo formar uma dança hipnotizante que encanta todos que têm a sorte de vê-la.</p>

    <div class="divider"></div>

    <h2>Onde ver a Aurora Boreal?</h2>
    <p>Os melhores lugares para observar a aurora boreal estão localizados nas regiões árticas e subárticas, como:</p>

    <div class="locations-grid">
      <div class="location-card">
        <strong>Noruega</strong>
        <p>A cidade de Tromsø é famosa por suas frequentes aparições da aurora boreal.</p>
      </div>

      <div class="location-card">
        <strong>Suécia</strong>
        <p>Abisko é um destino popular entre os caçadores de auroras.</p>
      </div>

      <div class="location-card">
        <strong>Finlândia</strong>
        <p>A Lapônia finlandesa oferece uma experiência mágica com suas cabanas de vidro.</p>
      </div>

      <div class="location-card">
        <strong>Islândia</strong>
        <p>Reykjavik e áreas ao redor são pontos privilegiados.</p>
      </div>

      <div class="location-card">
        <strong>Canadá</strong>
        <p>O Yukon e os Territórios do Noroeste são ótimos lugares para observar as auroras.</p>
      </div>

      <div class="location-card">
        <strong>Alasca</strong>
        <p>Fairbanks é um dos destinos mais acessíveis.</p>
      </div>
    </div>

    <div class="divider"></div>

    <h2>Quando ver a Aurora Boreal?</h2>
    <div class="season-box">
      <p>A melhor época para ver a aurora boreal é durante os <strong>meses de inverno, de setembro a abril</strong>, quando as noites são mais longas e escuras.</p>
      <p>No entanto, é importante lembrar que esta é uma característica natural imprevisível, e fatores como a atividade solar e as condições climáticas influenciam a visibilidade.</p>
    </div>

    <div class="divider"></div>

    <div class="tips-section">
      <h2>Dicas para uma Experiência Inesquecível</h2>

      <div class="tip-item">
        <strong><span class="icon">📅</span>1. Planeje com Antecedência</strong>
        <p>Escolha destinos conhecidos pela alta atividade de auroras e verifique a previsão de atividade solar.</p>
      </div>

      <div class="tip-item">
        <strong><span class="icon">🧥</span>2. Prepare-se para o Frio</strong>
        <p>Como as temperaturas nas regiões árticas podem ser extremamente baixas, vista-se em camadas e use roupas térmicas.</p>
      </div>

      <div class="tip-item">
        <strong><span class="icon">🌃</span>3. Fique Longe das Luzes da Cidade</strong>
        <p>A poluição luminosa pode prejudicar a visibilidade das auroras, então escolha locais afastados das cidades.</p>
      </div>

      <div class="tip-item">
        <strong><span class="icon">📸</span>4. Use Equipamento Fotográfico Adequado</strong>
        <p>Para capturar fotos deslumbrantes, use uma câmera com controle manual e um tripé.</p>
      </div>

      <div class="tip-item">
        <strong><span class="icon">⏰</span>5. Seja Paciente</strong>
        <p>A aurora boreal é imprevisível, então prepare-se para esperar e aproveitar o momento quando ela aparecer.</p>
      </div>
    </div>

    <div class="divider"></div>

    <div class="curiosities-box">
      <h2>Curiosidades Sobre a Aurora Boreal</h2>

      <div class="curiosity-item">
        <strong><span class="icon">📚</span>Lendas e Mitos</strong>
        <p>Em várias culturas, as auroras eram vistas como espíritos dançantes ou portais para o além.</p>
      </div>

      <div class="curiosity-item">
        <strong><span class="icon">🌍</span>Aurora Austral</strong>
        <p>Além da aurora boreal, existe a aurora austral, que ocorre no hemisfério sul.</p>
      </div>

      <div class="curiosity-item">
        <strong><span class="icon">📡</span>Impacto na Tecnologia</strong>
        <p>Em grandes intensidades, as auroras podem interferir em satélites e comunicações de rádio.</p>
      </div>
    </div>

    <div class="divider"></div>

    <div class="conclusion-box">
      <p>Testemunhar a aurora boreal é uma experiência de vida que deixa qualquer um sem palavras. É um lembrete da beleza e do poder da natureza, um espetáculo que nos conecta com o universo e nos faz sentir humildes diante de sua grandiosidade.</p>
      <p><strong>Prepare-se para uma aventura inesquecível e deixe-se encantar pelas luzes do norte.</strong> Quem sabe, você pode se tornar um dos poucos sortudos a testemunhar essa dança celestial em toda a sua glória.</p>
      <a href="#" class="cta-button">✨ Comece a Planejar Sua Viagem</a>
    </div>

    <footer>
      <p>Artigo publicado em www.levevida.blog.br</p>
    </footer>
  </div>
</article>
`;
