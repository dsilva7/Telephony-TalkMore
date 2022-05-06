# Telephony-TalkMore

# Getting Started

Visual Studio Code: necessário para desenvolvimento do projeto.

# Development

Para iniciar o desenvolvimento é necessário clonar o projeto:
-Abrir o terminal;
-cd "pasta de sua escolha";
- git clone https://github.com/dsilva7/Telephony-TalkMore.git

# Settings

Será necessário utilizar o editor de texto "Visual Studio Code".

Após abrir o projeto no editor de texto, será necessário a instalação do Express para o back-end e o Vite pro front-end.

Para instalar no back-end será necessário acessar o terminal:
- cd Telephony-TalkMore/server;
- npm install Express;

A instalação no front-end é necessário abrir um segundo terminal:
- cd Telephony-TalkMore/client;
- npm install Vite;

# Running

Para rodar o sistema é necessário acessar dois terminais um para o back-end e um ao front-end.
Iniciando o back-end:
- Acessar o terminal: cd Telephony-TalkMore/server - npm run start

Iniciando o front-end:
- Acessar o terminal: cd Telephony-TalkMore/client - npm run dev

Após rodar esses dois códigos no terminal o projeto estará em funcionamento.

# Using

Para acessar o projeto é necessário acessar via navegador "localhost:3002".

Ao acessar irá mostrar o projeto, poderá ser fornecido os dados como "DDD Origin", "Target DDD", "Plan" e os "Minutes" que terá a ligação.
Obs: o DDD "011" será obrigatório estar ou no "DDD Origin" ou "Target DDD".
Após preencher todos os campos, clicando no botão "Submit" será realizado o cálculo e apresentado em uma listagem.
