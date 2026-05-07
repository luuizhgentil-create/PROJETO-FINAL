# 🍔 Bahiano Burger - Site Completo

## 📁 Estrutura de Pastas

Crie exatamente assim no seu computador:

```
bahiano-burger/
│
├── index.html          ← Página principal
│
├── img/
│   └── logo.png        ← Coloque a logo aqui! (a imagem que você me mandou)
│
├── css/
│   └── style.css       ← Estilos visuais do site
│
└── js/
    ├── dados.js        ← Cardápio e bebidas (edite aqui!)
    └── app.js          ← Funcionamento do site
```

---

## 🚀 Como Abrir o Site

1. Crie a pasta `bahiano-burger` em algum lugar do seu computador
2. Cole os arquivos nas pastas corretas (veja estrutura acima)
3. **IMPORTANTE:** Salve a logo como `img/logo.png` dentro da pasta
4. Abra o arquivo `index.html` no navegador (clique duplo)

> 💡 **Dica pro VS Code:** Instale a extensão **"Live Server"**, clique com botão direito no `index.html` e escolha "Open with Live Server". O site atualiza automaticamente quando você salva!

---

## ✏️ Como Personalizar

### Trocar cores
Abra `css/style.css` e procure por `:root {` lá no início.
Mude os valores de cor:
```css
--cor-primaria: #d62828;    /* Vermelho */
--cor-secundaria: #f77f00;  /* Laranja */
```

### Adicionar item no cardápio
Abra `js/dados.js` e copie um bloco dentro de `ITENS`:
```javascript
{
  nome: "Nome do Lanche",
  descricao: "Descrição aqui.",
  preco: "R$ 00,00",
  categoria: "hamburguer",   // ou "porcao"
  imagem: "URL da imagem aqui"
}
```

### Trocar o número do WhatsApp
No `index.html`, procure por:
```
https://wa.me/5511999999999
```
Troque pelos seus dígitos (só números, com DDI 55 na frente).

### Atualizar endereço e redes sociais
No `index.html`, procure pela seção `id="contato"` e edite os textos diretamente.

---

## 📸 Imagens de Hambúrgueres Gratuitas

Você pode usar imagens do [Unsplash](https://unsplash.com) gratuitamente.
Pesquise "burger", "milkshake", "french fries" etc.
Clique na imagem → botão direito → "Copiar endereço da imagem" → cole no `dados.js`.

---

Feito com ❤️ pelo Claude | Bahiano Burger 🌴
