# 🚀 Migração Leve Vida - Netlify

Guia completo para migração do site Leve Vida para o Netlify.

## 📋 Arquivos de Configuração

### 1. `netlify.toml` (Raiz do Repositório)
Arquivo principal de configuração do Netlify com:
- Configuração de build
- Redirecionamentos HTTP → HTTPS
- Redirecionamento apex → www
- Headers de segurança
- Configurações de cache otimizadas

### 2. `_redirects` (Dentro de `levevida/`)
Arquivo complementar com regras de redirecionamento simplificadas.

### 3. `_headers` (Dentro de `levevida/`)
Arquivo complementar com headers HTTP.

### 4. `.gitignore`
Arquivo para ignorar arquivos desnecessários no Git.

---

## 🔧 Ajustes Necessários no Repositório

### ✅ O que você precisa fazer:

1. **Adicionar arquivos à raiz do repositório:**
   ```bash
   # Na raiz do seu repositório local
   git add netlify.toml
   git add .gitignore
   ```

2. **Adicionar arquivos dentro de `levevida/`:**
   ```bash
   # Mova os arquivos _redirects e _headers para levevida/
   mv _redirects levevida/
   mv _headers levevida/
   git add levevida/_redirects
   git add levevida/_headers
   ```

3. **Remover o arquivo CNAME (opcional):**
   ```bash
   # O CNAME é usado pelo GitHub Pages, não pelo Netlify
   git rm CNAME
   ```

4. **Fazer commit e push:**
   ```bash
   git commit -m "feat: Configuração para Netlify"
   git push origin main
   ```

---

## 🌐 Configuração no Netlify

### Passo 1: Conectar o Repositório

1. Acesse [netlify.com](https://netlify.com)
2. Faça login ou crie uma conta
3. Clique em **"Add new site"** → **"Import an existing project"**
4. Escolha **GitHub** e autorize o acesso
5. Selecione o repositório `LeveVida/levevida`

### Passo 2: Configurar o Build

Na tela de configuração:
- **Branch to deploy:** `main`
- **Build command:** (deixe vazio)
- **Publish directory:** `levevida`

O Netlify detectará automaticamente o arquivo `netlify.toml` e usará essas configurações.

### Passo 3: Deploy Inicial

Clique em **"Deploy site"** e aguarde o primeiro deploy.

---

## 🔐 Configuração DNS no Registro.br

### Acesse o painel do Registro.br:

1. Acesse [registro.br](https://registro.br)
2. Faça login
3. Vá em **"Meus Domínios"** → **levevida.blog.br** → **"DNS"**

### Configure os seguintes registros:

#### Opção 1 - Usando www (Recomendado):

```
www     CNAME    seu-site-levevida.netlify.app    3600
@       A        75.2.60.5                          3600
@       A        99.83.190.102                      3600
@       A        13.248.212.111                     3600
@       A        76.76.21.22                        3600
```

#### Opção 2 - Apenas Apex Domain:

```
@       A        75.2.60.5                          3600
@       A        99.83.190.102                      3600
@       A        13.248.212.111                     3600
@       A        76.76.21.22                        3600
```

**Importante:** Substitua `seu-site-levevida.netlify.app` pelo domínio real que o Netlify forneceu.

---

## 🎯 Configuração do Domínio no Netlify

1. No painel do Netlify, vá em **"Domain settings"**
2. Clique em **"Add custom domain"**
3. Digite: `www.levevida.blog.br`
4. O Netlify verificará o DNS (pode levar até 24h)
5. Após verificação, ative **"HTTPS"** e **"Force HTTPS"**

---

## ✅ Verificação e Testes

### 1. Teste DNS (aguarde 4-48h para propagação completa):
```bash
nslookup www.levevida.blog.br
nslookup levevida.blog.br
```

### 2. Teste de Acesso:
- `http://levevida.blog.br` → deve redirecionar para `https://www.levevida.blog.br`
- `http://www.levevida.blog.br` → deve redirecionar para `https://www.levevida.blog.br`
- `https://levevida.blog.br` → deve redirecionar para `https://www.levevida.blog.br`
- `https://www.levevida.blog.br` → deve funcionar normalmente

### 3. Teste de HTTPS:
Verifique se o certificado SSL está ativo e o cadeado aparece no navegador.

---

## 🔄 Deploy Automático

A partir de agora, qualquer push para a branch `main` no GitHub disparará um deploy automático no Netlify.

```bash
# Fluxo de trabalho:
git add .
git commit -m "Atualização do site"
git push origin main
# → Deploy automático no Netlify em ~1-2 minutos
```

---

## 📊 Comparação: Vercel vs Netlify

| Recurso | Vercel | Netlify |
|---------|--------|---------|
| Deploy automático | ✅ | ✅ |
| HTTPS gratuito | ✅ | ✅ |
| CDN global | ✅ | ✅ |
| Domínio customizado | ✅ | ✅ |
| Redirects | ✅ | ✅ |
| Headers customizados | ✅ | ✅ |
| Forms nativos | ❌ | ✅ |
| Functions serverless | ✅ | ✅ |
| Analytics | Pago | Gratuito |

---

## 🆘 Troubleshooting

### Site não carrega após DNS configurado:
- Aguarde até 48h para propagação completa do DNS
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Teste em modo anônimo
- Use `dig www.levevida.blog.br` para verificar DNS

### Certificado SSL não ativa:
1. Remova o domínio customizado no Netlify
2. Aguarde 5 minutos
3. Adicione novamente o domínio
4. Aguarde até 1h para emissão do certificado

### Deploy falha:
- Verifique se o arquivo `netlify.toml` está na raiz
- Verifique se a pasta `levevida/` existe
- Verifique os logs do deploy no painel do Netlify

### Redirecionamentos não funcionam:
- Certifique-se de que `_redirects` está dentro de `levevida/`
- Verifique sintaxe no arquivo
- Force um novo deploy

---

## 📚 Recursos Úteis

- [Documentação do Netlify](https://docs.netlify.com/)
- [Netlify Community](https://answers.netlify.com/)
- [Registro.br - Gerenciador DNS](https://registro.br/gerenciador-dns/)
- [Status do Netlify](https://www.netlifystatus.com/)

---

## 🎉 Próximos Passos

Após a migração bem-sucedida:

1. ✅ Configure Netlify Analytics (gratuito)
2. ✅ Configure Netlify Forms se precisar (contato, newsletter)
3. ✅ Configure Deploy Previews para branches
4. ✅ Configure notificações de deploy (Slack, Discord, Email)
5. ✅ Adicione badge de status no README

---

**Desenvolvido por:** Emerson - Leve Vida
**Site:** www.levevida.blog.br
**Slogan:** Voe Alto, Viva Leve! ✈️
