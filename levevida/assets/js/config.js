/**
 * CONFIGURAÇÃO GLOBAL DO SITE LEVE VIDA
 * 
 * Este arquivo controla TODO o conteúdo do site.
 * Atualize apenas este arquivo para modificar textos, imagens, links, etc.
 * SEM necessidade de editar HTML!
 * 
 * @version 3.0
 */

// ============================================
// CONFIGURAÇÃO GERAL DO SITE
// ============================================

const SITE_CONFIG = {
    // Informações básicas
    nome: "Leve Vida",
    slogan: "Voe alto, Viva Leve! ✈️",
    descricao: "Seu guia completo para viajar mais gastando menos. Descubra como usar milhas aéreas, encontrar passagens baratas e explorar destinos incríveis com economia.",
    
    // URLs
    url: "https://levevida.blog.br",
    dominio: "levevida.blog.br",
    
    // SEO
    palavrasChave: [
        "viagem barata",
        "milhas aéreas",
        "como viajar gastando pouco",
        "acumular milhas",
        "passagens baratas",
        "guia de viagem",
        "turismo econômico",
        "dicas de viagem"
    ],
    
    // Logos e Imagens
    logo: {
        principal: "assets/images/logo.png",
        favicon: "assets/images/favicon.ico",
        ogImage: "assets/images/og-image.jpg" // 1200x630px para redes sociais
    },
    
    // Contato
    contato: {
        email: "equipelevevida@gmail.com",
        whatsapp: "+5565999777000",
        whatsappLink: "https://wa.me/5565999777000",
        endereco: "Jardim Aclimaação, Cuiabá - MT",
        telefoneDisplay: "+55 (65) 99977-7000"
    },
    
    // Redes Sociais
    redesSociais: {
        instagram: {
            url: "https://instagram.com/levevida",
            usuario: "@levevida"
        },
        tiktok: {
            url: "https://tiktok.com/@levevida",
            usuario: "@levevida"
        },
        youtube: {
            url: "https://youtube.com/@levevida",
            usuario: "@levevida"
        },
        kwai: {
            url: "#",
            usuario: "@levevida"
        },
        facebook: {
            url: "https://facebook.com/levevida",
            usuario: "levevida"
        },
        pinterest: {
            url: "https://pinterest.com/levevida",
            usuario: "@levevida"
        }
    },
    
    // Google Analytics & AdSense
    analytics: {
        gaId: "G-XXXXXXXXXX", // Substitua pelo seu ID
        adsenseId: "ca-pub-XXXXXXXXXXXXXXXX" // Substitua pelo seu ID
    },
    
    // Políticas e Legal
    legal: {
        anoFundacao: 2024,
        cnpj: "", // Adicione se tiver
        responsavel: "Emerson Araujo"
    }
};

// ============================================
// CONFIGURAÇÃO DO MENU DE NAVEGAÇÃO
// ============================================

const MENU_CONFIG = {
    items: [
        {
            id: "inicio",
            texto: "INÍCIO",
            url: "index.html",
            descricao: "Página inicial",
            icone: "fa-home"
        },
        {
            id: "guias",
            texto: "GUIAS DE VIAGEM",
            url: "guias.html",
            descricao: "Roteiros completos e econômicos",
            icone: "fa-map-marked-alt",
            isPilar: true // Página pilar de conteúdo
        },
        {
            id: "milhas",
            texto: "MILHAS & PONTOS",
            url: "milhas.html",
            descricao: "Tudo sobre acúmulo de milhas",
            icone: "fa-plane",
            isPilar: true // Página pilar de conteúdo
        },
        {
            id: "artigos",
            texto: "BLOG",
            url: "artigos.html",
            descricao: "Dicas e estratégias atualizadas",
            icone: "fa-newspaper"
        },
        {
            id: "ebook",
            texto: "E-BOOK",
            url: "e-book.html",
            descricao: "ROTA DAS MILHAS - Guia definitivo",
            icone: "fa-book",
            destaque: true
        },
        {
            id: "downloads",
            texto: "DOWNLOADS",
            url: "downloads.html",
            descricao: "Materiais gratuitos",
            icone: "fa-download"
        },
        {
            id: "contato",
            texto: "CONTATO",
            url: "contato.html",
            descricao: "Fale conosco",
            icone: "fa-envelope"
        }
    ]
};

// ============================================
// CONFIGURAÇÃO DO E-BOOK
// ============================================

const EBOOK_CONFIG = {
    // Informações do produto
    titulo: "ROTA DAS MILHAS: Pague Menos, Voe Mais",
    subtitulo: "O Guia Definitivo para Dominar o Mundo das Milhas Aéreas",
    autor: "Emerson Araujo",
    
    // Preços
    precos: {
        de: 97.00,
        por: 47.00,
        desconto: 52,
        moeda: "R$"
    },
    
    // Arquivos (colocar em /ebook/files/)
    arquivos: {
        completo: "ebook/files/ROTA-DAS-MILHAS-Completo.pdf",
        amostra: "ebook/files/ROTA-DAS-MILHAS-Amostra-Gratis.pdf",
        planilha: "ebook/files/Planilha-Controle-Milhas.xlsx",
        bonus1: "ebook/files/Calculadora-Milhas.xlsx",
        bonus2: "ebook/files/Comparativo-Cartoes.pdf"
    },
    
    // Capa (1200x1600px recomendado)
    imagens: {
        capa: "ebook/images/capa-ebook.jpg",
        capaThumb: "ebook/images/capa-ebook-thumb.jpg"
    },
    
    // Descrição e benefícios
    descricao: "Descubra todos os segredos para acumular milhas rapidamente e viajar pagando apenas as taxas! Este e-book completo revela estratégias comprovadas para você realizar seus sonhos de viagem usando o poder das milhas aéreas.",
    
    beneficios: [
        {
            icone: "📘",
            texto: "E-book completo em PDF (150+ páginas)"
        },
        {
            icone: "✈️",
            texto: "Guia completo de programas de milhas (LATAM, Azul, Gol, Smiles)"
        },
        {
            icone: "💳",
            texto: "Estratégias avançadas com cartões de crédito"
        },
        {
            icone: "🎯",
            texto: "Como acumular 100 mil milhas em 6 meses"
        },
        {
            icone: "🔄",
            texto: "Transferência entre programas de fidelidade"
        },
        {
            icone: "📊",
            texto: "Planilhas de controle de milhas (Excel)"
        },
        {
            icone: "🎁",
            texto: "Bônus: Calculadora de milhas necessárias"
        },
        {
            icone: "🆕",
            texto: "Atualizações gratuitas para sempre"
        }
    ],
    
    // Depoimentos
    depoimentos: [
        {
            nome: "Maria Silva",
            cidade: "São Paulo - SP",
            foto: "assets/images/depoimentos/avatar1.jpg",
            texto: "Já economizei mais de R$ 5.000 em passagens! O e-book mudou minha forma de viajar.",
            estrelas: 5
        },
        {
            nome: "João Santos",
            cidade: "Rio de Janeiro - RJ",
            foto: "assets/images/depoimentos/avatar2.jpg",
            texto: "Em 4 meses acumulei 80 mil milhas seguindo as estratégias do livro. Recomendo!",
            estrelas: 5
        },
        {
            nome: "Ana Costa",
            cidade: "Belo Horizonte - MG",
            foto: "assets/images/depoimentos/avatar3.jpg",
            texto: "Informações claras e diretas. Consegui minha primeira viagem internacional usando milhas!",
            estrelas: 5
        }
    ],
    
    // Link de pagamento (Mercado Pago, Hotmart, etc)
    linkPagamento: "https://mpago.la/2Zbmgga", // SUBSTITUA pelo seu link real
    
    // Garantia
    garantia: {
        dias: 7,
        texto: "Se você não gostar do conteúdo, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia!"
    }
};

// ============================================
// CONFIGURAÇÃO DE DOWNLOADS GRATUITOS
// ============================================

const DOWNLOADS_GRATUITOS = [
    {
        id: "amostra-ebook",
        titulo: "Amostra Grátis - ROTA DAS MILHAS",
        descricao: "Primeiros capítulos do e-book + introdução ao mundo das milhas",
        icone: "fa-file-pdf",
        arquivo: EBOOK_CONFIG.arquivos.amostra,
        tamanho: "2.5 MB",
        tipo: "PDF",
        imagem: "assets/images/downloads/amostra-thumb.jpg",
        categoria: "e-book"
    },
    {
        id: "planilha-milhas",
        titulo: "Planilha de Controle de Milhas",
        descricao: "Organize e monitore todas as suas milhas em um só lugar",
        icone: "fa-file-excel",
        arquivo: EBOOK_CONFIG.arquivos.planilha,
        tamanho: "185 KB",
        tipo: "XLSX",
        imagem: "assets/images/downloads/planilha-thumb.jpg",
        categoria: "ferramenta"
    },
    {
        id: "checklist-viagem",
        titulo: "Checklist Completo de Viagem",
        descricao: "Lista definitiva do que levar em cada tipo de viagem",
        icone: "fa-list-check",
        arquivo: "assets/downloads/checklist-viagem.pdf",
        tamanho: "1.2 MB",
        tipo: "PDF",
        imagem: "assets/images/downloads/checklist-thumb.jpg",
        categoria: "guia"
    }
];

// ============================================
// CONFIGURAÇÃO SEO POR PÁGINA
// ============================================

const SEO_CONFIG = {
    // Página Inicial
    "index.html": {
        titulo: "Leve Vida - Viaje Mais Gastando Menos | Milhas e Dicas de Viagem",
        descricao: "Aprenda a viajar mais gastando menos com milhas aéreas, passagens baratas e roteiros econômicos. Guias completos, dicas práticas e estratégias comprovadas.",
        palavrasChave: "viagem barata, milhas aéreas, como viajar gastando pouco, passagens baratas, guia de viagem",
        imagemOG: "assets/images/og-home.jpg",
        tipo: "website"
    },
    
    // Guias de Viagem (Página Pilar)
    "guias.html": {
        titulo: "Guias de Viagem Completos | Roteiros Econômicos - Leve Vida",
        descricao: "Guias detalhados dos melhores destinos do Brasil e mundo. Roteiros completos, orçamentos, dicas de economia e tudo que você precisa saber antes de viajar.",
        palavrasChave: "guia de viagem, roteiro de viagem, viagem econômica, turismo barato, destinos Brasil",
        imagemOG: "assets/images/og-guias.jpg",
        tipo: "website"
    },
    
    // Milhas & Pontos (Página Pilar)
    "milhas.html": {
        titulo: "Milhas Aéreas: Guia Completo para Acumular e Usar | Leve Vida",
        descricao: "Tudo sobre milhas aéreas: como acumular rápido, melhores cartões de crédito, programas de fidelidade, transferências e como viajar de graça.",
        palavrasChave: "milhas aéreas, acumular milhas, cartão de crédito milhas, programas de milhagem, smiles, latam pass",
        imagemOG: "assets/images/og-milhas.jpg",
        tipo: "article"
    },
    
    // Blog
    "artigos.html": {
        titulo: "Blog de Viagens | Dicas e Estratégias Atualizadas - Leve Vida",
        descricao: "Artigos sobre viagens, milhas aéreas, economia em turismo e muito mais. Conteúdo atualizado semanalmente com as melhores dicas.",
        palavrasChave: "blog de viagem, dicas de viagem, turismo, viajar barato",
        imagemOG: "assets/images/og-blog.jpg",
        tipo: "blog"
    },
    
    // E-book
    "e-book.html": {
        titulo: "ROTA DAS MILHAS: E-book Completo Sobre Milhas Aéreas | Leve Vida",
        descricao: "E-book definitivo: aprenda a acumular 100 mil milhas em 6 meses, economize milhares em passagens e viaje o mundo pagando apenas taxas. Mais de 150 páginas de conteúdo.",
        palavrasChave: "e-book milhas, livro milhas aéreas, como acumular milhas, guia de milhas",
        imagemOG: EBOOK_CONFIG.imagens.capa,
        tipo: "product"
    },
    
    // Downloads
    "downloads.html": {
        titulo: "Downloads Gratuitos - Planilhas, Guias e Checklists | Leve Vida",
        descricao: "Baixe gratuitamente planilhas de controle de milhas, checklists de viagem, guias e muito mais. Materiais práticos para sua próxima viagem.",
        palavrasChave: "planilha milhas gratis, checklist viagem, materiais gratuitos viagem",
        imagemOG: "assets/images/og-downloads.jpg",
        tipo: "website"
    },
    
    // Contato
    "contato.html": {
        titulo: "Entre em Contato | Leve Vida - Dúvidas e Parcerias",
        descricao: "Tem dúvidas sobre viagens ou milhas? Entre em contato conosco. Respondemos em até 24 horas.",
        palavrasChave: "contato leve vida, falar com leve vida",
        imagemOG: "assets/images/og-contato.jpg",
        tipo: "website"
    },
    
    // Artigos Dinâmicos
    "artigo.html": {
        titulo: "Artigos | Leve Vida",
        descricao: "Artigos sobre viagens, milhas aéreas e dicas de economia. Conteúdo atualizado regularmente.",
        palavrasChave: "artigos viagem, blog viagem, dicas viagem",
        imagemOG: "assets/images/og-blog.jpg",
        tipo: "article"
    }
};

// ============================================
// ESTRUTURA DE CLUSTERS (SEO INTERNO)
// ============================================

const CLUSTERS_CONFIG = {
    // Cluster 1: Guias de Viagem
    guias: {
        paginaPilar: "guias.html",
        titulo: "Guias de Viagem",
        descricao: "Hub central de todos os guias de destinos",
        relacionados: [
            {
                titulo: "Fortaleza - Guia Completo",
                url: "guia.html?id=fortaleza",
                relevancia: "alta"
            },
            {
                titulo: "Como Usar Milhas",
                url: "milhas.html",
                relevancia: "alta"
            },
            {
                titulo: "E-book ROTA DAS MILHAS",
                url: "e-book.html",
                relevancia: "média"
            }
        ]
    },
    
    // Cluster 2: Milhas & Pontos
    milhas: {
        paginaPilar: "milhas.html",
        titulo: "Milhas & Pontos",
        descricao: "Hub central sobre acúmulo e uso de milhas",
        relacionados: [
            {
                titulo: "E-book ROTA DAS MILHAS",
                url: "e-book.html",
                relevancia: "alta"
            },
            {
                titulo: "Guias de Viagem",
                url: "guias.html",
                relevancia: "alta"
            },
            {
                titulo: "Downloads Gratuitos",
                url: "downloads.html",
                relevancia: "média"
            }
        ]
    }
};

// ============================================
// BREADCRUMBS (MIGALHAS DE PÃO)
// ============================================

const BREADCRUMBS_CONFIG = {
    "index.html": [
        { texto: "Início", url: "index.html" }
    ],
    "guias.html": [
        { texto: "Início", url: "index.html" },
        { texto: "Guias de Viagem", url: "guias.html" }
    ],
    "guia-detalhes": [ // Para páginas dinâmicas
        { texto: "Início", url: "index.html" },
        { texto: "Guias de Viagem", url: "guias.html" },
        { texto: "{TITULO_GUIA}", url: "#" }
    ],
    "milhas.html": [
        { texto: "Início", url: "index.html" },
        { texto: "Milhas & Pontos", url: "milhas.html" }
    ],
    "e-book.html": [
        { texto: "Início", url: "index.html" },
        { texto: "E-book", url: "e-book.html" }
    ]
};

// ============================================
// SCHEMA.ORG (RICH SNIPPETS)
// ============================================

const SCHEMA_CONFIG = {
    // Organization
    organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": SITE_CONFIG.nome,
        "url": SITE_CONFIG.url,
        "logo": SITE_CONFIG.url + "/" + SITE_CONFIG.logo.principal,
        "description": SITE_CONFIG.descricao,
        "sameAs": [
            SITE_CONFIG.redesSociais.instagram.url,
            SITE_CONFIG.redesSociais.facebook.url,
            SITE_CONFIG.redesSociais.youtube.url,
            SITE_CONFIG.redesSociais.tiktok.url
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": SITE_CONFIG.contato.whatsapp,
            "contactType": "Customer Service",
            "email": SITE_CONFIG.contato.email,
            "availableLanguage": "Portuguese"
        }
    },
    
    // Website
    website: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": SITE_CONFIG.nome,
        "url": SITE_CONFIG.url,
        "description": SITE_CONFIG.descricao,
        "potentialAction": {
            "@type": "SearchAction",
            "target": SITE_CONFIG.url + "/busca?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    },
    
    // E-book Product
    ebook: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": EBOOK_CONFIG.titulo,
        "description": EBOOK_CONFIG.descricao,
        "image": SITE_CONFIG.url + "/" + EBOOK_CONFIG.imagens.capa,
        "brand": {
            "@type": "Brand",
            "name": SITE_CONFIG.nome
        },
        "offers": {
            "@type": "Offer",
            "price": EBOOK_CONFIG.precos.por.toFixed(2),
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "url": SITE_CONFIG.url + "/e-book.html",
            "seller": {
                "@type": "Organization",
                "name": SITE_CONFIG.nome
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127"
        }
    }
};

// ============================================
// POLÍTICAS ADSENSE
// ============================================

const ADSENSE_CONFIG = {
    // Conteúdo proibido (NÃO incluir no site)
    conteudoProibido: [
        "conteúdo adulto",
        "conteúdo violento",
        "conteúdo ilegal",
        "drogas",
        "álcool (venda)",
        "tabaco",
        "armas"
    ],
    
    // Requisitos cumpridos
    requisitos: {
        idadeMinima: "6 meses", // Site deve ter pelo menos 6 meses
        conteudoOriginal: true,
        navegacaoClara: true,
        paginasObrigatorias: [
            "sobre.html",
            "contato.html", 
            "privacidade.html",
            "termos.html"
        ],
        trafego: "Orgânico e de qualidade"
    },
    
    // Posições de anúncios (melhores práticas)
    posicoesAnuncios: [
        {
            local: "Topo da página (após header)",
            formato: "display responsivo",
            tamanho: "leaderboard"
        },
        {
            local: "Dentro do conteúdo (após 2-3 parágrafos)",
            formato: "display responsivo",
            tamanho: "retângulo"
        },
        {
            local: "Sidebar (desktop)",
            formato: "display vertical",
            tamanho: "skyscraper"
        },
        {
            local: "Final do artigo",
            formato: "display responsivo",
            tamanho: "retângulo"
        }
    ]
};

// Exportar configurações
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SITE_CONFIG,
        MENU_CONFIG,
        EBOOK_CONFIG,
        DOWNLOADS_GRATUITOS,
        SEO_CONFIG,
        CLUSTERS_CONFIG,
        BREADCRUMBS_CONFIG,
        SCHEMA_CONFIG,
        ADSENSE_CONFIG
    };
}
