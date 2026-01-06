# 🚀 Guia Completo: Deploy do Alta CRM no GitHub + Netlify

## 📋 O que você precisa antes de começar

- [ ] Conta no GitHub (gratuita) - [criar aqui](https://github.com/join)
- [ ] Conta no Netlify (gratuita) - [criar aqui](https://app.netlify.com/signup)
- [ ] Git instalado no seu computador - [baixar aqui](https://git-scm.com/downloads)

---

## 🎯 Passo 1: Criar Repositório no GitHub

### 1.1 Criar o Repositório

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Configure:
   - **Repository name:** `alta-crm-site`
   - **Description:** "Site oficial do Alta CRM - Agente de IA para vendas"
   - **Visibilidade:** Selecione **Public** (grátis) ou **Private** (pago)
   - **Não marque** as opções de README, .gitignore ou license
5. Clique em **"Create repository"**

### 1.2 Copiar a URL do Repositório

Após criar, copie a URL que aparece (algo como: `https://github.com/seu-usuario/alta-crm-site.git`)

---

## 💻 Passo 2: Preparar os Arquivos Localmente

### 2.1 Organizar os Arquivos

Crie uma pasta no seu computador chamada `alta-crm-site` e coloque todos os arquivos dentro:

```
alta-crm-site/
├── index.html
├── contato.html
├── sobre.html
├── privacidade.html
├── termos.html
└── README.md (opcional)
```

### 2.2 Inicializar Git

Abra o terminal/prompt de comando na pasta do projeto e execute:

```bash
# Entre na pasta do projeto
cd caminho/para/alta-crm-site

# Inicializa o Git
git init

# Adiciona todos os arquivos
git add .

# Cria o primeiro commit
git commit -m "Primeira versão do site Alta CRM"

# Adiciona o repositório remoto (cole a URL que você copiou)
git remote add origin https://github.com/seu-usuario/alta-crm-site.git

# Envia para o GitHub
git branch -M main
git push -u origin main
```

**⚠️ Importante:** Substitua `seu-usuario` pelo seu nome de usuário do GitHub!

---

## 🌐 Passo 3: Deploy no Netlify

### Opção A: Deploy via GitHub (Recomendado)

#### 3.1 Conectar Netlify ao GitHub

1. Acesse [app.netlify.com](https://app.netlify.com)
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Escolha **"Deploy with GitHub"**
4. Autorize o Netlify a acessar sua conta GitHub
5. Selecione o repositório `alta-crm-site`

#### 3.2 Configurar o Deploy

1. **Branch to deploy:** `main`
2. **Build command:** deixe em branco
3. **Publish directory:** deixe em branco
4. Clique em **"Deploy site"**

#### 3.3 Aguardar o Deploy

O Netlify vai processar e em 1-2 minutos seu site estará no ar! 🎉

Você receberá uma URL temporária tipo: `https://random-name-123456.netlify.app`

### Opção B: Deploy Manual (mais rápido para testar)

1. Acesse [app.netlify.com](https://app.netlify.com)
2. Na página inicial, você verá uma área escrita **"Want to deploy a new site without connecting to Git?"**
3. Arraste a pasta `alta-crm-site` para essa área
4. Pronto! Em segundos seu site está no ar

---

## 🎨 Passo 4: Personalizar o Domínio

### 4.1 Mudar o Nome do Site (gratuito)

1. No painel do Netlify, vá em **"Site settings"**
2. Clique em **"Change site name"**
3. Digite um nome (exemplo: `altacrm` → vai ficar `altacrm.netlify.app`)
4. Clique em **"Save"**

### 4.2 Usar Domínio Próprio (pago)

Se você tiver um domínio próprio (exemplo: `altacrm.com.br`):

1. No painel do Netlify, vá em **"Domain settings"**
2. Clique em **"Add custom domain"**
3. Digite seu domínio
4. Siga as instruções para configurar o DNS

**Onde comprar domínio .com.br:**
- [Registro.br](https://registro.br) - oficial para .com.br
- [HostGator](https://www.hostgator.com.br)
- [Locaweb](https://www.locaweb.com.br)

---

## 🔄 Passo 5: Atualizar o Site (Workflow)

Sempre que quiser fazer mudanças no site:

### 5.1 Editar os Arquivos

Abra os arquivos HTML no seu editor de código favorito (VS Code, Sublime, etc.) e faça as alterações.

### 5.2 Enviar Atualizações

No terminal, execute:

```bash
# Adiciona as mudanças
git add .

# Cria um commit com descrição
git commit -m "Descrição da mudança"

# Envia para o GitHub
git push
```

### 5.3 Deploy Automático

Se você usou a Opção A (GitHub), o Netlify detecta automaticamente as mudanças e atualiza o site em 1-2 minutos! ✨

Se usou a Opção B (manual), você precisa arrastar a pasta novamente.

---

## ✅ Verificação Final - Checklist

Depois do deploy, teste tudo:

- [ ] Site está acessível pela URL do Netlify
- [ ] Logo aparece corretamente no header e footer
- [ ] Favicon aparece na aba do navegador
- [ ] Link "Contato" abre a página de contato
- [ ] Link "Sobre" abre a página sobre
- [ ] Links "Privacidade" e "Termos" abrem as respectivas páginas
- [ ] Botão WhatsApp funciona (abre conversa com o número correto)
- [ ] Site está responsivo no celular
- [ ] Todas as animações funcionam

---

## 🛠️ Configurações Adicionais do Netlify

### Configurar Formulário de Contato (Opcional)

Se você quiser adicionar um formulário que funciona:

1. No Netlify, vá em **"Forms"**
2. Ative o **"Form detection"**
3. No seu HTML, adicione `netlify` no formulário:

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Enviar</button>
</form>
```

### Ativar HTTPS (Automático e Grátis)

O Netlify ativa HTTPS automaticamente! Seu site já estará seguro com certificado SSL.

### Configurar Redirects

Crie um arquivo `_redirects` na raiz do projeto:

```
# Redirect 404 para home
/* /index.html 404

# Redirect para www (se usar domínio próprio)
http://altacrm.com.br https://www.altacrm.com.br 301!
```

---

## 📊 Próximos Passos Recomendados

### 1. Google Analytics (Grátis)

Para acompanhar visitantes:

1. Crie uma conta em [analytics.google.com](https://analytics.google.com)
2. Adicione o código de tracking no `<head>` de todas as páginas

### 2. Google Search Console (Grátis)

Para aparecer no Google:

1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione sua propriedade (URL do site)
3. Verifique a propriedade
4. Envie o sitemap

### 3. Meta Tags para Redes Sociais

Adicione no `<head>` do `index.html`:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://seu-site.netlify.app/">
<meta property="og:title" content="Alta CRM - Agente de IA que Vende por Você">
<meta property="og:description" content="Automatize suas vendas com Inteligência Artificial">
<meta property="og:image" content="https://i.postimg.cc/s2ZgVGSD/Logo-Alta-CRM-4x1-branco.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://seu-site.netlify.app/">
<meta property="twitter:title" content="Alta CRM - Agente de IA que Vende por Você">
<meta property="twitter:description" content="Automatize suas vendas com Inteligência Artificial">
<meta property="twitter:image" content="https://i.postimg.cc/s2ZgVGSD/Logo-Alta-CRM-4x1-branco.png">
```

---

## 🆘 Problemas Comuns e Soluções

### "Permission denied" no Git

**Solução:** Configure suas credenciais do GitHub:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### Site não atualiza depois do push

**Solução:** 
1. Verifique se o commit foi enviado: `git log`
2. No Netlify, vá em "Deploys" e veja se há erros
3. Faça um "Clear cache and deploy site"

### Imagens não aparecem

**Solução:** Verifique se as URLs das imagens estão corretas (logo e favicon)

### Links quebrados

**Solução:** Certifique-se que todos os arquivos HTML estão na mesma pasta raiz

---

## 📞 Suporte

Se precisar de ajuda:

- **GitHub:** [docs.github.com](https://docs.github.com)
- **Netlify:** [docs.netlify.com](https://docs.netlify.com)
- **Git:** [git-scm.com/doc](https://git-scm.com/doc)

---

## 🎉 Parabéns!

Seu site Alta CRM está no ar! 🚀

**URL do seu site:** `https://seu-site.netlify.app`

Compartilhe com seus clientes e comece a vender!
