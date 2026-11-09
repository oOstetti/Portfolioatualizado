# Portfólio — Felipe Ostetti Ferri

Site completo com Next.js, TypeScript, CSS e imagens ilustrativas dos projetos.

## Iniciar no Windows (PowerShell)

1. Extraia o ZIP em uma pasta.
2. Abra **essa pasta** no VS Code (a que contém `package.json`).
3. No terminal rode:

```powershell
npm install
npm run dev
```

4. Acesse http://localhost:3000

> `npm install` é necessário uma vez para instalar as dependências. Se aparecer ENOENT, execute `dir` e confirme que você está na pasta com `package.json`.

## Imagens

As três artes ficam em `public/projects/` e são ilustrações geradas de como as aplicações podem parecer, **não capturas reais**. Substitua pelos prints verdadeiros quando disponíveis.

## Contato

O botão principal do cabeçalho e a seção Contato apontam para o número de WhatsApp informado anteriormente. Atualize a URL `https://wa.me/...` em `app/page.tsx` caso necessário.

## Publicação

Para gerar produção use `npm run build`.
