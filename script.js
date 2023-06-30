
function TranslateForPTBR() {
    var languageSelect = document.querySelector('#lang')
    var value = languageSelect.options[languageSelect.selectedIndex].value;
    var text = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var textText = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var go = document.querySelector("#go");
    var goText;
    var buttonGo = document.querySelector("#button-go");
    var buttonGoText;
    var languageText = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var language = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var button = [0, 1, 2, 3];
    var buttonText;
    for(var i = 0; i <= 9; i++){
        language[i] = document.querySelector('.p-' + (i));
        if(i <= 8){
            text[i+1] = document.querySelector('#t' + (i+1));
        }
        if(i <= 3){
            button[i] = document.querySelector('#button' + (i));
        }
    }
    if (value === "Pt-Br") {
        languageText[0] = "Venho desenvolvendo com a C Sharp há pouco mais de 1 ano. No entanto, o maior tempo foi denro do Unity. Mas tenho pequenos projetos no GitHub onde usei essa ferramenta. E claro, a cada dia eu aprendo mais, porque meus estudos com C Sharp não param.";
        languageText[1] = "Eu uso Adobe photoshop para criar minhas artes digitais. A versão em que estou trabalhando atualmente é 2019. Toda a arte que criei nos meus projetos foi 97% através do Photoshop. Como disse sobre mim, migrei há cerca de 2 anos para a arte digital. Porque passei a vida inteira desenhando e pintando de forma convencional";
        languageText[2] = "E para completar o trio front-end, não poderia deixar de fora o CSS. Além de Javascript e HTML, estudo CSS desde setembro de 2020. E junto com as outras tecnologias, criei alguns projetos que estão no meu GitHub, e também usei na Big2be.";
        languageText[3] = "A tecnologia que eu mais uso agora. Com Unity criei e publiquei meu primeiro jogo na Steam, Magus Pocus. Unity é um motor de desenvolvimento que utiliza a linguagem de programação C Sharp, muito comum para criar jogos 2D e 3D.";
        languageText[4] = "Estou aprendendo sobre Javascript desde setembro de 2020. Apesar de focar mais em C# e Unity, trabalhei em uma empresa localizada em Ribeirão Preto - SP chamada Big2be, utilizando meus conhecimentos em Javascript. Empresa especializada em e-commerce para supermercados, restaurantes e similares.";
        languageText[5] = "Venho estudando e me aprimorando em HTML junto com Javascript. E assim como no JS, usei HTML em meus projetos pessoais e na empresa citada acima.";
        languageText[6] = "Magus Pocus é um jogo de plataforma 2D. Eu o criei há alguns meses e levou 6 meses para ser concluído. Eu desenvolvi do zero toda a arte e a programação.";
        languageText[7] = "Paradise Beach são Assets que contêm algumas imagens para criação de cenários em jogos. Contém 3 variações de caules e copas de coqueiros para você combinar e criar diferentes tipos de coqueiros, arbustos, fundo de praia, pedras e chão";
        languageText[8] = "Recriei a página da Netflix no dia 7 de janeiro. 2021, para aprimorar meus conhecimentos em Javascript, HTML e CSS. Acesse meu GitHub se quiser o código-fonte.";
        languageText[9] = "Um jogo simples que simula rolagem de dados feita em Unity 2D. O jogo é de código aberto e para usar crie um novo projeto e substitua a pasta Assets. Acesse meu GitHub se quiser o código-fonte.";
        textText[1] = "Desenvolvedor de jogos e designer digital";
        textText[2] = "Sobre mim";
        textText[3] = "Meu nome é Vitor Gonçalves Rodrigues, nasci no Rio de Janeiro em 2 de maio de 1982, moro em Ribeirão Preto no estado de São Paulo. Sou desenvolvedor e designer de jogos. Há pouco mais de 2 anos resolvi migrar para a arte digital. Trabalhei em uma startup que tem um projeto de e-commerce por 9 meses. Hoje trabalho em projetos de jogos como freelancer, um deles é um jogo chamado Kami Kaido para um estúdio localizado no Porto - Portugal. Também estou criando e vendendo assets na Unity Assets Store. Sou apaixonado pelo que faço, tanto que considero mais um hobby do que um trabalho.";
        textText[4] = "Tecnologias";
        textText[5] = "Projetos";
        textText[6] = "Jogo que desenvolvi e vendo na Steam";
        textText[7] = "Paradise Beach Assets para jogos";
        textText[8] = "Clone do Netflix";
        textText[9] = "Roll Dices Game";
        buttonText = "Saiba mais";
        goText = "Acesse minha página criada com React.js";
        buttonGoText = "Acesse";
    }
    else {
        languageText[0] = "I've been developing with C Sharp for just over 1 year. However, the longest time was within Unity. But I have small projects on GitHub where I used this tool. And of course, every day I learn more because my studies with C Sharp don't stop.";
        languageText[1] = "Adobe photoshop is used to create digital art. The version I'm currently working on is 2019. All the art I created in my projects was 97% through Photoshop. As I said about myself, I migrated about 2 years ago to digital art. Because I spent my whole life drawing and painting in a conventional way";
        languageText[2] = "And to complete the front-end trio, I couldn't leave out the CSS. As well as Javascript and HTML, I've been studying CSS since September 2020. And along with the other technologies, I created some projects that are on my GitHub, and I also used them at Big2be.";
        languageText[3] = "The technology I use the most right now. With Unity I created and published my first game on Steam, Magus Pocus. Unity is a development engine that uses the C Sharp programming language, very common to create 2D and 3D games.";
        languageText[4] = "I've been learning about Javascript since September 2020. Despite focusing more on C# and Unity, I worked at a company located in Ribeirão Preto - SP called Big2be, using my knowledge and Javascript. Company specialized in e-commerce for supermarkets, restaurants and the like.";
        languageText[5] = "I've been studying and improving myself in HTML along with Javascript. And just like in JS, I used HTML in my personal projects and in the company mentioned above.";
        languageText[6] = "Magus Pocus is a 2D platform game. I created it a few months ago and it took 6 months for it to be completed. I developed it from scratch and all art and programming was done by me.";
        languageText[7] = "Paradise Beach are assets that contain some images for creating scenarios in games. Contains 3 variations of stems and coconut tree tops for you to combine and create different types of coconut trees, bushes, beach background, rocks and ground.";
        languageText[8] = "I recreated the Netflix page on Jan 7th. 2021, to improve my knowledge in Javascript, HTML and CSS. Access my GitHub if you want the source code.";
        languageText[9] = "A simple game that simulates dice scrolling made in Unity 2D. The game is open source and to use create a new project and replace the 'Assets' folder. Access my GitHub if you want the source code.";
        textText[1] = "Game developer and digital designer";
        textText[2] = "About me";
        textText[3] = "My name is Vitor Gonçalves Rodrigues, I was born in Rio de Janeiro on May 2, 1982, I live in Ribeirão Preto in the state of São Paulo. I'm a developer and game designer. A little over 2 years ago I decided to migrate to digital art. I worked in a startup that has an e-commerce project for 9 months. Today I work on game projects as a freelance, one of them is a game called Kami Kaido for a studio located in Porto - Portugal. Also I'm creating and selling assets on the Unity Assets Store. I am passionate about what I do, so much so that I consider it a hobby rather than a job..";
        textText[4] = "Features";
        textText[5] = "Projets";
        textText[6] = "Game I developed and sell on Steam";
        textText[7] = "Paradise Beach Assets for Games";
        textText[8] = "Netflix Clone";
        textText[9] = "Roll Dices Game";
        buttonText = "know more";
        goText = "Go to my page created with React.js";
        buttonGoText = "Access";
    }
    go.innerHTML = goText;
    buttonGo.innerHTML = buttonGoText;
    for(var i = 0; i <= 9; i++){
        language[i].innerHTML = languageText[i];
        if(i <= 8){
            text[i+1].innerHTML = textText[i+1];
        }
        if(i <= 3){
            button[i].innerHTML = buttonText;
        }
    }
}