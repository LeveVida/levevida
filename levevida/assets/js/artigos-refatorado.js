/**
 * Sistema de Artigos Dinâmicos - Leve Vida (REFATORADO)
 * 
 * Versão otimizada usando JSON em vez de módulos ES6
 * Maior compatibilidade e melhor performance
 * 
 * @version 4.0
 */

// ============================================
// BANCO DE DADOS DE ARTIGOS (JSON)
// ============================================

const ARTIGOS_DATABASE = {
    'acumulo-milhas': {
        slug: 'acumulo-milhas',
        titulo: 'Acúmulo de Milhas: Transforme seus Pontos em Viagens Incríveis',
        resumo: 'Aprenda como acumular milhas, escolher cartões e viajar mais pagando menos.',
        categoria: 'milhas',
        data: '2024-11-10',
        imagem: 'assets/images/artigos/acumulo-milhas.jpg',
        destaque: true,
        seo: {
            title: 'Acúmulo de Milhas: Transforme seus Pontos em Viagens Incríveis',
            description: 'Aprenda como acumular milhas, escolher cartões e viajar mais pagando menos.',
            canonical: 'https://www.levevida.blog.br/artigo.html?slug=acumulo-milhas'
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Acúmulo de Milhas: Transforme seus Pontos em Viagens Incríveis",
            "description": "Aprenda como acumular milhas, escolher cartões e viajar mais pagando menos.",
            "url": "https://www.levevida.blog.br/artigo.html?slug=acumulo-milhas",
            "author": { "@type": "Organization", "name": "Leve Vida" }
        },
        css: `
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.8; color: #333; background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%); padding: 20px; }
.container { max-width: 950px; margin: 0 auto; background: white; padding: 50px; border-radius: 20px; box-shadow: 0 25px 80px rgba(0,0,0,0.3); }
.header-section { text-align: center; margin-bottom: 40px; padding: 40px; background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%); border-radius: 15px; color: white; box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4); }
h1 { font-size: 2.6em; margin-bottom: 15px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
.subtitle { font-size: 1.2em; opacity: 0.95; font-weight: 300; }
h2 { color: #1e40af; font-size: 1.9em; margin-top: 40px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 3px solid #3b82f6; position: relative; }
h2::before { content: '✈️'; margin-right: 12px; }
h3 { color: #2563eb; font-size: 1.4em; margin-top: 25px; margin-bottom: 12px; }
p { margin-bottom: 18px; text-align: justify; color: #444; }
.intro-box { background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 30px; border-radius: 12px; border-left: 5px solid #3b82f6; margin: 30px 0; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2); }
.intro-box p { font-size: 1.1em; color: #1e40af; font-weight: 500; }
.divider { height: 3px; background: linear-gradient(90deg, transparent, #3b82f6, #60a5fa, transparent); margin: 35px 0; border-radius: 2px; }
.cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 30px 0; }
.credit-card { background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); color: white; padding: 25px; border-radius: 15px; box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3); transition: transform 0.3s ease, box-shadow 0.3s ease; }
.credit-card:hover { transform: translateY(-8px); box-shadow: 0 12px 30px rgba(37, 99, 235, 0.5); }
.credit-card h4 { font-size: 1.2em; margin-bottom: 10px; }
.advantage-item { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 25px; margin: 20px 0; border-radius: 12px; border-left: 5px solid #f59e0b; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2); }
.conclusion-box { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 40px; border-radius: 15px; margin: 40px 0; }
footer { text-align: center; margin-top: 50px; padding-top: 30px; border-top: 2px solid #e5e7eb; color: #6b7280; font-style: italic; }
@media (max-width: 768px) { .container { padding: 25px; } h1 { font-size: 2em; } }
        `,
        contentHTML: `
<article class="article-module">
  <div class="container">
    <div class="header-section">
      <h1>✈️ Acúmulo de Milhas</h1>
      <p class="subtitle">Transforme seus Pontos em Viagens Incríveis</p>
    </div>

    <div class="intro-box">
      <p>Viajar sem gastar uma fortuna em passagens aéreas parece um sonho, mas com um bom planejamento e o uso inteligente de milhas, isso pode se tornar realidade!</p>
    </div>

    <div class="divider"></div>

    <h2>O que é Acúmulo de Milhas?</h2>
    <p>O acúmulo de milhas no Brasil é um processo que permite aos consumidores ganhar pontos ou milhas com suas compras diárias, que podem ser trocadas por passagens aéreas, produtos, serviços ou até mesmo dinheiro.</p>

    <h2>Como Acumular Milhas?</h2>
    <p>Existem duas formas principais:</p>

    <h3>💳 Cartões de Crédito</h3>
    <p>Muitos cartões oferecem programas de fidelidade que recompensam os usuários com pontos por cada compra. Esses pontos podem ser transferidos para programas de milhas.</p>

    <div class="cards-grid">
      <div class="credit-card">
        <h4>💳 Smiles Premium</h4>
        <p>Um dos mais populares, oferece milhas por cada compra.</p>
      </div>
      <div class="credit-card">
        <h4>💎 Mastercard Black</h4>
        <p>Programa robusto de acúmulo de milhas.</p>
      </div>
      <div class="credit-card">
        <h4>🌟 Ourocard Platinum</h4>
        <p>Milhas e benefícios exclusivos.</p>
      </div>
    </div>

    <div class="divider"></div>

    <h2>Vantagens de Acumular Milhas</h2>

    <div class="advantage-item">
      <h3>💰 Economia em Passagens</h3>
      <p>Com milhas suficientes, você pode obter passagens gratuitas ou com grandes descontos.</p>
    </div>

    <div class="advantage-item">
      <h3>🎫 Upgrades de Classe</h3>
      <p>Transforme voos econômicos em experiências de classe executiva.</p>
    </div>

    <div class="advantage-item">
      <h3>📈 Facilidade de Acúmulo</h3>
      <p>Acumule milhas com suas compras diárias em diversos estabelecimentos.</p>
    </div>

    <div class="divider"></div>

    <div class="conclusion-box">
      <h2>Conclusão</h2>
      <p>Acumular milhas oferece inúmeras vantagens, desde economias significativas até benefícios exclusivos. Com facilidade de acumulação e flexibilidade de utilização, as milhas se tornaram uma moeda valiosa.</p>
      <p><strong>Se você ainda não está aproveitando, agora é o momento perfeito para começar!</strong></p>
    </div>

    <footer>
      <p>Artigo publicado em www.levevida.blog.br</p>
    </footer>
  </div>
</article>
        `
    },
    
    'aurora-boreal': {
        slug: 'aurora-boreal',
        titulo: 'A Magia da Aurora Boreal: Um Espetáculo de Luzes no Céu',
        resumo: 'Guia sobre onde, quando e como ver a aurora boreal; dicas práticas para a viagem.',
        categoria: 'destinos',
        data: '2024-11-12',
        imagem: 'assets/images/artigos/aurora-boreal.jpg',
        destaque: true,
        seo: {
            title: 'A Magia da Aurora Boreal: Um Espetáculo de Luzes no Céu',
            description: 'Guia sobre onde, quando e como ver a aurora boreal; dicas práticas para a viagem.',
            canonical: 'https://www.levevida.blog.br/artigo.html?slug=aurora-boreal'
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "A Magia da Aurora Boreal",
            "url": "https://www.levevida.blog.br/artigo.html?slug=aurora-boreal"
        },
        css: `
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.8; color: #fff; background: linear-gradient(180deg, #0a1628 0%, #1a3a52 50%, #2d5f7e 100%); padding: 20px; }
.container { max-width: 900px; margin: 0 auto; background: rgba(255, 255, 255, 0.95); padding: 50px; border-radius: 20px; box-shadow: 0 25px 80px rgba(0,0,0,0.4); color: #333; }
.header-section { text-align: center; margin-bottom: 40px; padding: 30px; background: linear-gradient(135deg, #0f766e 0%, #10b981 50%, #3b82f6 100%); border-radius: 15px; color: white; }
h1 { font-size: 2.5em; margin-bottom: 15px; }
h2 { color: #0f766e; font-size: 1.9em; margin-top: 40px; margin-bottom: 20px; border-bottom: 3px solid #10b981; }
p { margin-bottom: 18px; text-align: justify; color: #444; }
.intro-box { background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #10b981; margin: 25px 0; }
.locations-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 25px 0; }
.location-card { background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%); padding: 20px; border-radius: 12px; border-left: 4px solid #14b8a6; }
.tips-section { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 30px; border-radius: 12px; margin: 30px 0; }
footer { text-align: center; margin-top: 40px; padding-top: 25px; border-top: 2px solid #e5e7eb; color: #6b7280; }
@media (max-width: 768px) { .container { padding: 25px; } }
        `,
        contentHTML: `
<article class="article-module">
  <div class="container">
    <div class="header-section">
      <h1>🌌 A Magia da Aurora Boreal</h1>
      <p class="subtitle">Um Espetáculo de Luzes no Céu</p>
    </div>

    <div class="intro-box">
      <p>Se você já sonhou em presenciar um dos mais espetaculares fenômenos da natureza, a aurora boreal certamente está no topo de sua lista.</p>
    </div>

    <h2>O que é a Aurora Boreal?</h2>
    <p>A aurora boreal, também conhecida como luzes do norte, ocorre nas regiões próximas aos polos magnéticos da Terra. Este efeito é resultado de partículas carregadas do Sol que interagem com o campo magnético do nosso planeta.</p>

    <h2>Onde ver a Aurora Boreal?</h2>
    <div class="locations-grid">
      <div class="location-card">
        <strong>Noruega</strong>
        <p>Tromsø é famosa por suas frequentes auroras.</p>
      </div>
      <div class="location-card">
        <strong>Islândia</strong>
        <p>Reykjavik oferece vistas privilegiadas.</p>
      </div>
      <div class="location-card">
        <strong>Finlândia</strong>
        <p>Lapônia com cabanas de vidro.</p>
      </div>
    </div>

    <div class="tips-section">
      <h2>Dicas para uma Experiência Inesquecível</h2>
      <p><strong>📅 Planeje com Antecedência:</strong> Escolha destinos conhecidos e verifique a previsão solar.</p>
      <p><strong>🧥 Prepare-se para o Frio:</strong> Use roupas térmicas em camadas.</p>
      <p><strong>📸 Equipamento Fotográfico:</strong> Use câmera com controle manual e tripé.</p>
    </div>

    <footer>
      <p>Artigo publicado em www.levevida.blog.br</p>
    </footer>
  </div>
</article>
        `
    },
    
    'seguro-protecao-preco': {
        slug: 'seguro-protecao-preco',
        titulo: 'Economize Sempre: Tudo Sobre o Seguro Proteção de Preço',
        resumo: 'Entenda como funciona o seguro proteção de preço, condições, limites e como solicitar reembolso.',
        categoria: 'dicas',
        data: '2024-11-14',
        imagem: 'assets/images/artigos/seguro-protecao-preco.jpg',
        destaque: false,
        seo: {
            title: 'Economize Sempre: Tudo Sobre o Seguro Proteção de Preço',
            description: 'Entenda como funciona o seguro proteção de preço e como economizar.',
            canonical: 'https://www.levevida.blog.br/artigo.html?slug=seguro-protecao-preco'
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Seguro Proteção de Preço",
            "url": "https://www.levevida.blog.br/artigo.html?slug=seguro-protecao-preco"
        },
        css: `
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.8; color: #333; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; }
.container { max-width: 900px; margin: 0 auto; background: white; padding: 40px; border-radius: 15px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
h1 { color: #667eea; font-size: 2.5em; margin-bottom: 10px; text-align: center; }
h2 { color: #764ba2; font-size: 1.8em; margin-top: 40px; margin-bottom: 15px; border-bottom: 3px solid #667eea; padding-bottom: 10px; }
p { margin-bottom: 15px; text-align: justify; }
.intro { font-size: 1.1em; color: #555; text-align: center; margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px; }
.info-box { background: #e8f4f8; border-left: 5px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 5px; }
footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid #eee; color: #666; }
@media (max-width: 768px) { .container { padding: 20px; } }
        `,
        contentHTML: `
<article class="article-module">
  <div class="container">
    <h1>Economize Sempre: Seguro Proteção de Preço</h1>

    <div class="intro">
      <h2>Garantia de Economizar nas Compras</h2>
      <p>O Seguro Proteção de Preço garante o reembolso da diferença se o item que você comprou for encontrado por um preço menor.</p>
    </div>

    <h2>Como funciona?</h2>
    <p><strong>1. Compra do Produto:</strong> Você compra usando um cartão que oferece o benefício.</p>
    <p><strong>2. Comparação de Preços:</strong> Se encontrar mais barato em até 30-60 dias, solicite reembolso.</p>
    <p><strong>3. Reembolso:</strong> Após verificação, receba a diferença na sua conta.</p>

    <h2>Quais cartões oferecem?</h2>
    <div class="info-box">
      <p>Atualmente, apenas os cartões <strong>Visa Gold</strong> e <strong>Mastercard Gold</strong> oferecem este serviço.</p>
    </div>

    <h2>Condições</h2>
    <p><strong>Valor Mínimo:</strong></p>
    <ul>
      <li>Mastercard: US$ 50</li>
      <li>Visa: R$ 150</li>
    </ul>
    
    <p><strong>Período:</strong> 30 dias a partir da compra</p>

    <h2>Vantagens</h2>
    <p><strong>💸 Economia Garantida:</strong> Nunca pague mais do que o preço mais baixo disponível.</p>
    <p><strong>😌 Tranquilidade:</strong> Reduza o estresse na busca pelo melhor negócio.</p>

    <footer>
      <p>Artigo publicado em www.levevida.blog.br</p>
    </footer>
  </div>
</article>
        `
    }
};

// ============================================
// LISTA DE ARTIGOS DISPONÍVEIS
// ============================================

const ARTIGOS_DISPONIVEIS = Object.values(ARTIGOS_DATABASE);

// ============================================
// RENDERIZAR LISTA DE ARTIGOS
// ============================================

function renderizarListaArtigos() {
    const container = document.getElementById('artigos-lista');
    if (!container) return;
    
    const categorias = {
        'milhas': 'Milhas & Pontos',
        'destinos': 'Destinos',
        'dicas': 'Dicas de Viagem',
        'economia': 'Economia em Viagens'
    };
    
    // Agrupar por categoria
    const artigosPorCategoria = {};
    ARTIGOS_DISPONIVEIS.forEach(artigo => {
        if (!artigosPorCategoria[artigo.categoria]) {
            artigosPorCategoria[artigo.categoria] = [];
        }
        artigosPorCategoria[artigo.categoria].push(artigo);
    });
    
    // Renderizar
    let html = '';
    
    // Artigos em destaque primeiro
    const destaques = ARTIGOS_DISPONIVEIS.filter(a => a.destaque);
    if (destaques.length > 0) {
        html += '<section class="artigos-section"><h2 class="section-title">✨ Artigos em Destaque</h2><div class="artigos-grid destaque">';
        destaques.forEach(artigo => {
            html += criarCardArtigo(artigo, true);
        });
        html += '</div></section>';
    }
    
    // Por categoria
    Object.entries(artigosPorCategoria).forEach(([catId, artigos]) => {
        html += `<section class="artigos-section">
            <h2 class="section-title">${categorias[catId] || catId}</h2>
            <div class="artigos-grid">`;
        
        artigos.forEach(artigo => {
            html += criarCardArtigo(artigo, false);
        });
        
        html += '</div></section>';
    });
    
    container.innerHTML = html;
}

/**
 * Criar card de artigo
 */
function criarCardArtigo(artigo, isDestaque = false) {
    const dataFormatada = formatarData(artigo.data);
    const destaqueClass = isDestaque ? ' card-destaque' : '';
    
    return `
        <article class="artigo-card${destaqueClass}">
            <div class="artigo-imagem" style="background-image: url('${artigo.imagem}')"></div>
            <div class="artigo-conteudo">
                <span class="artigo-categoria">${artigo.categoria}</span>
                <h3 class="artigo-titulo">
                    <a href="artigo.html?slug=${artigo.slug}">${artigo.titulo}</a>
                </h3>
                <p class="artigo-resumo">${artigo.resumo}</p>
                <div class="artigo-footer">
                    <span class="artigo-data">${dataFormatada}</span>
                    <a href="artigo.html?slug=${artigo.slug}" class="artigo-link">
                        Ler artigo <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </article>
    `;
}

/**
 * Formatar data
 */
function formatarData(dataISO) {
    const data = new Date(dataISO);
    const opcoes = { year: 'numeric', month: 'long', day: 'numeric' };
    return data.toLocaleDateString('pt-BR', opcoes);
}

// ============================================
// CARREGAR E RENDERIZAR ARTIGO INDIVIDUAL
// ============================================

function carregarArtigo() {
    console.log('🔍 Iniciando carregamento do artigo...');
    
    // Obter slug da URL
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    
    console.log('📌 Slug:', slug);
    
    if (!slug) {
        console.error('❌ Slug não encontrado na URL');
        mostrarErro('Artigo não encontrado');
        return;
    }
    
    // Buscar artigo no banco de dados
    const artigo = ARTIGOS_DATABASE[slug];
    
    if (!artigo) {
        console.error('❌ Artigo não encontrado no banco de dados:', slug);
        mostrarErro('Artigo não encontrado');
        return;
    }
    
    console.log('✅ Artigo encontrado:', artigo.titulo);
    
    try {
        // Aplicar SEO
        console.log('📝 Aplicando SEO...');
        aplicarSEOArtigo(artigo.seo, artigo.schema);
        
        // Aplicar CSS inline
        console.log('🎨 Aplicando CSS...');
        aplicarCSSArtigo(artigo.css);
        
        // Renderizar conteúdo
        console.log('🖼️ Renderizando conteúdo...');
        renderizarConteudoArtigo(artigo.contentHTML);
        
        // Adicionar links relacionados
        console.log('🔗 Adicionando artigos relacionados...');
        adicionarArtigosRelacionados(artigo.categoria, slug);
        
        // Rastrear visualização
        rastrearVisualizacao(slug);
        
        console.log('✅ Artigo carregado com sucesso!');
        
    } catch (error) {
        console.error('❌ Erro ao processar artigo:', error);
        mostrarErro('Erro ao carregar artigo');
    }
}

/**
 * Aplicar SEO do artigo
 */
function aplicarSEOArtigo(seo, schema) {
    // Title
    document.title = seo.title + ' | Leve Vida';
    
    // Meta description
    setMetaTag('description', seo.description);
    
    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
    }
    canonical.href = seo.canonical;
    
    // Open Graph
    setMetaProperty('og:title', seo.title);
    setMetaProperty('og:description', seo.description);
    setMetaProperty('og:url', seo.canonical);
    setMetaProperty('og:type', 'article');
    
    // Twitter
    setMetaName('twitter:title', seo.title);
    setMetaName('twitter:description', seo.description);
    
    // Schema.org
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaScript);
    
    console.log('✅ SEO aplicado');
}

/**
 * Aplicar CSS inline do artigo
 */
function aplicarCSSArtigo(css) {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    console.log('✅ CSS aplicado');
}

/**
 * Renderizar conteúdo HTML
 */
function renderizarConteudoArtigo(html) {
    const container = document.getElementById('artigo-conteudo');
    if (container) {
        container.innerHTML = html;
        console.log('✅ Conteúdo renderizado');
    } else {
        console.error('❌ Container #artigo-conteudo não encontrado');
    }
}

/**
 * Adicionar artigos relacionados
 */
function adicionarArtigosRelacionados(categoria, slugAtual) {
    const relacionados = ARTIGOS_DISPONIVEIS
        .filter(a => a.categoria === categoria && a.slug !== slugAtual)
        .slice(0, 3);
    
    if (relacionados.length === 0) {
        console.log('ℹ️ Nenhum artigo relacionado encontrado');
        return;
    }
    
    const container = document.getElementById('artigos-relacionados');
    if (!container) {
        console.log('ℹ️ Container de artigos relacionados não encontrado');
        return;
    }
    
    let html = '<section class="artigos-relacionados"><h2 class="section-title">📚 Artigos Relacionados</h2><div class="artigos-grid">';
    
    relacionados.forEach(artigo => {
        html += criarCardArtigo(artigo, false);
    });
    
    html += '</div></section>';
    
    container.innerHTML = html;
    console.log('✅ Artigos relacionados adicionados');
}

/**
 * Mostrar erro
 */
function mostrarErro(mensagem) {
    const container = document.getElementById('artigo-conteudo');
    if (container) {
        container.innerHTML = `
            <div style="text-align: center; padding: 4rem 2rem;">
                <h1 style="color: var(--color-primary); font-size: 3rem; margin-bottom: 1rem;">😕</h1>
                <h2 style="color: var(--color-secondary);">${mensagem}</h2>
                <p style="margin: 2rem 0;">O artigo que você procura não existe ou foi removido.</p>
                <a href="artigos.html" class="btn btn-primary">Ver todos os artigos</a>
            </div>
        `;
    }
}

/**
 * Rastrear visualização
 */
function rastrearVisualizacao(slug) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            'page_title': document.title,
            'page_location': window.location.href,
            'page_path': `/artigo/${slug}`
        });
    }
}

/**
 * Helpers SEO
 */
function setMetaTag(name, content) {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
    }
    meta.content = content;
}

function setMetaProperty(property, content) {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
    }
    meta.content = content;
}

function setMetaName(name, content) {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
    }
    meta.content = content;
}

// ============================================
// BUSCA DE ARTIGOS
// ============================================

function buscarArtigos(termo) {
    if (!termo || termo.length < 3) {
        renderizarListaArtigos();
        return;
    }
    
    const termoLower = termo.toLowerCase();
    const resultados = ARTIGOS_DISPONIVEIS.filter(artigo => 
        artigo.titulo.toLowerCase().includes(termoLower) ||
        artigo.resumo.toLowerCase().includes(termoLower) ||
        artigo.categoria.toLowerCase().includes(termoLower)
    );
    
    const container = document.getElementById('artigos-lista');
    if (!container) return;
    
    if (resultados.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 4rem 2rem;">
                <h2>Nenhum artigo encontrado</h2>
                <p>Tente buscar por outros termos</p>
            </div>
        `;
        return;
    }
    
    let html = `<section class="artigos-section">
        <h2 class="section-title">Resultados da busca: "${termo}"</h2>
        <div class="artigos-grid">`;
    
    resultados.forEach(artigo => {
        html += criarCardArtigo(artigo, false);
    });
    
    html += '</div></section>';
    
    container.innerHTML = html;
}

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Sistema de artigos iniciado (Versão 4.0)');
    console.log('📚 Artigos disponíveis:', Object.keys(ARTIGOS_DATABASE).length);
    
    // Se estiver na página de lista
    if (document.getElementById('artigos-lista')) {
        console.log('📄 Renderizando lista de artigos...');
        renderizarListaArtigos();
        
        // Busca
        const inputBusca = document.getElementById('busca-artigos');
        if (inputBusca) {
            inputBusca.addEventListener('input', (e) => {
                buscarArtigos(e.target.value);
            });
        }
    }
    
    // Se estiver na página de artigo individual
    if (document.getElementById('artigo-conteudo')) {
        console.log('📖 Carregando artigo individual...');
        carregarArtigo();
    }
});

// Exportar para uso global
window.LEVE_VIDA_ARTIGOS = {
    listaArtigos: ARTIGOS_DISPONIVEIS,
    renderizar: renderizarListaArtigos,
    buscar: buscarArtigos,
    database: ARTIGOS_DATABASE
};

console.log('✅ Sistema de artigos carregado');
