/**
 * Sistema de Artigos Dinâmicos - Leve Vida
 * 
 * Carrega e renderiza artigos .js dinamicamente
 * Aplica SEO, CSS inline e Schema.org
 * 
 * @version 3.0
 */

// ============================================
// LISTA DE ARTIGOS DISPONÍVEIS
// ============================================

const ARTIGOS_DISPONIVEIS = [
    {
        slug: 'acumulo-milhas',
        titulo: 'Acúmulo de Milhas: Transforme seus Pontos em Viagens Incríveis',
        resumo: 'Aprenda como acumular milhas, escolher cartões e viajar mais pagando menos.',
        categoria: 'milhas',
        data: '2024-11-10',
        imagem: 'assets/images/artigos/acumulo-milhas.jpg',
        destaque: true
    },
    {
        slug: 'aurora-boreal',
        titulo: 'A Magia da Aurora Boreal: Um Espetáculo de Luzes no Céu',
        resumo: 'Guia sobre onde, quando e como ver a aurora boreal; dicas práticas para a viagem.',
        categoria: 'destinos',
        data: '2024-11-12',
        imagem: 'assets/images/artigos/aurora-boreal.jpg',
        destaque: true
    },
    {
        slug: 'seguro-protecao-preco',
        titulo: 'Economize Sempre: Tudo Sobre o Seguro Proteção de Preço',
        resumo: 'Entenda como funciona o seguro proteção de preço, condições, limites e como solicitar reembolso.',
        categoria: 'dicas',
        data: '2024-11-14',
        imagem: 'assets/images/artigos/seguro-protecao-preco.jpg',
        destaque: false
    }
];

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

async function carregarArtigo() {
    // Obter slug da URL
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    
    if (!slug) {
        mostrarErro('Artigo não encontrado');
        return;
    }
    
    // Verificar se artigo existe
    const artigoInfo = ARTIGOS_DISPONIVEIS.find(a => a.slug === slug);
    if (!artigoInfo) {
        mostrarErro('Artigo não encontrado');
        return;
    }
    
    try {
        // Carregar módulo do artigo dinamicamente
        const modulo = await import(`../artigos/${slug}.js`);
        
        // Aplicar SEO
        aplicarSEOArtigo(modulo.seo, modulo.schema);
        
        // Aplicar CSS inline
        aplicarCSSArtigo(modulo.css);
        
        // Renderizar conteúdo
        renderizarConteudoArtigo(modulo.contentHTML);
        
        // Adicionar links relacionados
        adicionarArtigosRelacionados(artigoInfo.categoria, slug);
        
        // Rastrear visualização
        rastrearVisualizacao(slug);
        
    } catch (error) {
        console.error('Erro ao carregar artigo:', error);
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
}

/**
 * Aplicar CSS inline do artigo
 */
function aplicarCSSArtigo(css) {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
}

/**
 * Renderizar conteúdo HTML
 */
function renderizarConteudoArtigo(html) {
    const container = document.getElementById('artigo-conteudo');
    if (container) {
        container.innerHTML = html;
    }
}

/**
 * Adicionar artigos relacionados
 */
function adicionarArtigosRelacionados(categoria, slugAtual) {
    const relacionados = ARTIGOS_DISPONIVEIS
        .filter(a => a.categoria === categoria && a.slug !== slugAtual)
        .slice(0, 3);
    
    if (relacionados.length === 0) return;
    
    const container = document.getElementById('artigos-relacionados');
    if (!container) return;
    
    let html = '<section class="artigos-relacionados"><h2 class="section-title">📚 Artigos Relacionados</h2><div class="artigos-grid">';
    
    relacionados.forEach(artigo => {
        html += criarCardArtigo(artigo, false);
    });
    
    html += '</div></section>';
    
    container.innerHTML = html;
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
    // Se estiver na página de lista
    if (document.getElementById('artigos-lista')) {
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
        carregarArtigo();
    }
});

// Exportar para uso global
window.LEVE_VIDA_ARTIGOS = {
    listaArtigos: ARTIGOS_DISPONIVEIS,
    renderizar: renderizarListaArtigos,
    buscar: buscarArtigos
};
