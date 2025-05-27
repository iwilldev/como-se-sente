// sugestoes.js

const sugestoes = [
  {
    descricao: "Respire fundo por 1 minuto, prestando atenção ao ar entrando e saindo.",
    publico: "adulto",
    sentimento: ["ansiedade", "não sei definir", "raiva"]
  },
  {
    descricao: "Conte até 10 devagar, prestando atenção na sua respiração.",
    publico: "crianca",
    sentimento: ["raiva", "ansiedade"]
  },
  {
    descricao: "Abrace um travesseiro bem forte por 30 segundos.",
    publico: "crianca",
    sentimento: ["medo", "tristeza"]
  },
  {
    descricao: "Caminhe pela casa ou quintal por 2 minutos.",
    publico: "adulto",
    sentimento: ["cansaço", "frustração"]
  },
  {
    descricao: "Leia uma página de um livro que você gosta.",
    publico: "adolescente",
    sentimento: ["tristeza", "não sei definir"]
  },
  {
    descricao: "Desenhe algo livremente por 5 minutos.",
    publico: "crianca",
    sentimento: ["confusão", "ansiedade"]
  },
  {
    descricao: "Escreva em um papel o que você está sentindo.",
    publico: "adulto",
    sentimento: ["frustração", "confusão"]
  },
  {
    descricao: "Tome um copo de água devagar, sentindo a temperatura.",
    publico: "todos",
    sentimento: ["ansiedade", "não sei definir"]
  },
  {
    descricao: "Ouça uma música calma com fones de ouvido.",
    publico: "todos",
    sentimento: ["raiva", "tristeza"]
  },
  {
    descricao: "Dê nomes para as emoções que você está sentindo agora.",
    publico: "adolescente",
    sentimento: ["confusão", "não sei definir"]
  },
  {
    descricao: "Brinque com um brinquedo ou objeto sensorial.",
    publico: "crianca",
    sentimento: ["ansiedade", "medo"]
  },
  {
    descricao: "Descreva 5 coisas que você vê ao seu redor.",
    publico: "todos",
    sentimento: ["medo", "confusão"]
  },
  {
    descricao: "Dance uma música por 1 minuto.",
    publico: "adolescente",
    sentimento: ["tristeza", "cansaço"]
  },
  {
    descricao: "Acaricie um animal de estimação.",
    publico: "todos",
    sentimento: ["solidão", "frustração"]
  },
  {
    descricao: "Faça um café ou chá e tome com calma.",
    publico: "adulto",
    sentimento: ["cansaço", "não sei definir"]
  },
  {
    descricao: "Desenhe um rosto feliz.",
    publico: "crianca",
    sentimento: ["tristeza"]
  },
  {
    descricao: "Feche os olhos e imagine um lugar tranquilo.",
    publico: "todos",
    sentimento: ["vergonha", "medo"]
  },
  {
    descricao: "Conte uma história para si mesmo ou para alguém.",
    publico: "crianca",
    sentimento: ["solidão", "tristeza"]
  },
  {
    descricao: "Lave o rosto com água fria.",
    publico: "adolescente",
    sentimento: ["raiva", "confusão"]
  },
  {
    descricao: "Organize um pequeno espaço do seu ambiente.",
    publico: "adulto",
    sentimento: ["confusão", "frustração"]
  },
  {
    descricao: "Coloque os pés descalços no chão e perceba a textura.",
    publico: "todos",
    sentimento: ["não sei definir", "medo"]
  },
  {
    descricao: "Chupe um gelo lentamente.",
    publico: "adolescente",
    sentimento: ["raiva", "ansiedade"]
  },
  {
    descricao: "Conte até 20 de trás pra frente.",
    publico: "crianca",
    sentimento: ["raiva", "confusão"]
  },
  {
    descricao: "Escreva três coisas pelas quais você é grato.",
    publico: "adulto",
    sentimento: ["tristeza", "solidão"]
  },
  {
    descricao: "Faça 10 polichinelos.",
    publico: "adolescente",
    sentimento: ["cansaço", "frustração"]
  },
  {
    descricao: "Imagine uma bolha protegendo você.",
    publico: "crianca",
    sentimento: ["medo", "vergonha"]
  },
  {
    descricao: "Aperte e solte os punhos 5 vezes.",
    publico: "todos",
    sentimento: ["ansiedade", "raiva"]
  },
  {
    descricao: "Veja fotos que te fazem sorrir.",
    publico: "adulto",
    sentimento: ["tristeza", "solidão"]
  },
  {
    descricao: "Pinte uma mandala ou desenho com cores calmas.",
    publico: "adolescente",
    sentimento: ["não sei definir", "confusão"]
  },
  {
    descricao: "Assista a um vídeo engraçado de 1 minuto.",
    publico: "todos",
    sentimento: ["tristeza", "cansaço"]
  },
  {
    descricao: "Sente-se com a coluna ereta e observe sua postura.",
    publico: "todos",
    sentimento: ["confusão", "não sei definir"]
  },
  {
    descricao: "Escreva uma carta para você mesmo do futuro.",
    publico: "adolescente",
    sentimento: ["tristeza", "solidão"]
  },
  {
    descricao: "Monte um quebra-cabeça ou jogo simples.",
    publico: "crianca",
    sentimento: ["confusão", "frustração"]
  },
  {
    descricao: "Cheire algo com aroma agradável, como uma fruta ou perfume.",
    publico: "todos",
    sentimento: ["ansiedade", "tristeza"]
  },
  {
    descricao: "Construa algo com blocos ou objetos disponíveis.",
    publico: "crianca",
    sentimento: ["confusão", "frustração"]
  },
  {
    descricao: "Use uma toalha quente ou fria no rosto por 1 minuto.",
    publico: "adulto",
    sentimento: ["raiva", "vergonha"]
  },
  {
    descricao: "Escreva um poema ou uma frase livre.",
    publico: "adolescente",
    sentimento: ["solidão", "tristeza"]
  },
  {
    descricao: "Faça uma careta no espelho e observe sua expressão.",
    publico: "crianca",
    sentimento: ["vergonha", "confusão"]
  },
  {
    descricao: "Leia um quadrinho divertido ou um gibi.",
    publico: "adolescente",
    sentimento: ["cansaço", "tristeza"]
  },
  {
    descricao: "Fique em silêncio por 1 minuto e observe os sons ao redor.",
    publico: "todos",
    sentimento: ["ansiedade", "confusão"]
  },
  {
    descricao: "Escreva uma memória feliz.",
    publico: "adulto",
    sentimento: ["tristeza", "solidão"]
  },
  {
    descricao: "Estique os braços e pernas bem devagar.",
    publico: "todos",
    sentimento: ["cansaço", "raiva"]
  },
  {
    descricao: "Assista a um vídeo de natureza.",
    publico: "todos",
    sentimento: ["ansiedade", "não sei definir"]
  },
  {
    descricao: "Desenhe seu dia com imagens simples.",
    publico: "crianca",
    sentimento: ["confusão", "ansiedade"]
  },
  {
    descricao: "Imite um animal e movimente-se como ele.",
    publico: "crianca",
    sentimento: ["raiva", "medo"]
  },
  {
    descricao: "Escreva uma lista de desejos ou sonhos.",
    publico: "adolescente",
    sentimento: ["frustração", "tristeza"]
  },
  {
    descricao: "Faça massagem leve nos seus ombros ou pescoço.",
    publico: "adulto",
    sentimento: ["cansaço", "ansiedade"]
  },
  {
    descricao: "Desenhe um mapa imaginário.",
    publico: "crianca",
    sentimento: ["confusão", "não sei definir"]
  },
  {
    descricao: "Crie um ritmo batucando com as mãos.",
    publico: "todos",
    sentimento: ["raiva", "frustração"]
  },
  {
    descricao: "Sussurre uma frase positiva várias vezes.",
    publico: "todos",
    sentimento: ["tristeza", "medo"]
  },
  {
    descricao: "Toque um instrumento ou objeto que faz som.",
    publico: "adolescente",
    sentimento: ["confusão", "cansaço"]
  },
  {
    descricao: "Sinta a diferença entre quente e frio com as mãos.",
    publico: "todos",
    sentimento: ["não sei definir", "ansiedade"]
  }
];


const sugestaoDiv = document.getElementById("sugestao");
const form = document.getElementById("formulario");

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", function () {
  form.style.display = "flex";
  document.getElementById("sugestao").textContent = "";
  document.getElementById("nome").focus();
  sugestaoDiv.textContent = "";
  resetBtn.style.display = "none";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const idade = parseInt(document.getElementById("idade").value);
  const sentimento = document.getElementById("sentimento").value;
  let publico;
  if (idade <= 12) {
    publico = "crianca";
  } else if (idade <= 17) {
    publico = "adolescente";
  } else {
    publico = "adulto";
  }
  const filtradas = sugestoes.filter(
    (s) =>
      s.sentimento.includes(sentimento) &&
      (s.publico === publico || s.publico === "todos")
  );
  const sugestao = filtradas[Math.floor(Math.random() * filtradas.length)];
  if (sugestao) {
    sugestaoDiv.innerHTML = `Oi, ${nome}. <br /> <br /> <b>${
      sugestao.descricao
    }</b> <br /> <br /> <small>Isso pode ajudar você a lidar com essa sensação.</small>`;
  } else {
    sugestaoDiv.textContent = `Desculpe, não encontrei uma sugestão agora. Tente novamente.`;
  }
  resetBtn.style.display = "block";
  form.style.display = "none";
});
