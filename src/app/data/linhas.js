// Páginas dedicadas por ambiente e tipo de móvel.
//
// Cada linha aqui vira uma página em /<slug>, entra no sitemap, no rodapé e no
// llms.txt. O recorte de fotos sai de data/projetos.js pelo par categoria+tipo,
// então nenhuma foto precisa ser cadastrada duas vezes.
//
// O texto de cada página é próprio. Repetir a home em seis endereços diferentes
// criaria páginas concorrendo entre si pelo mesmo termo, que é justamente o que
// essas páginas existem para evitar.

export const linhas = [
  {
    slug: "cozinhas-planejadas",
    categoria: "cozinhas",
    tipo: "planejada",
    nome: "Cozinhas planejadas",
    ambiente: "cozinha",
    h1: "Cozinhas planejadas em Sapucaia do Sul",
    title: "Cozinhas Planejadas em Sapucaia do Sul | Akai Móveis",
    description:
      "Cozinhas planejadas sob medida em Sapucaia do Sul, em 100% MDF com fita de borda em PVC. Projeto e orçamento gratuitos, montagem por equipe própria e até 18x sem juros.",
    intro: [
      "Cozinha planejada é a cozinha desenhada a partir das medidas do seu ambiente, e não escolhida dentro de um catálogo de tamanhos prontos. É isso que permite subir a marcenaria até o teto, resolver o canto onde duas paredes se encontram e contornar o que já existe no local — a viga baixa, o quadro de luz, o cano que não pode sair do lugar.",
      "É a nossa especialidade desde 2009. Nos planejados trabalhamos com 100% MDF e fita de borda em PVC, que é a parte do móvel por onde a água entra e faz o painel inchar quando a fita é de papel.",
    ],
    secoes: [
      {
        titulo: "O que decidimos antes de fechar o pedido",
        texto: [
          "Numa cozinha, quase todo problema de montagem nasce de uma decisão que ficou para depois. Por isso o lugar de cada eletrodoméstico é definido ainda no projeto: geladeira, cooktop, forno, coifa, micro-ondas, máquina de lavar quando a lavanderia é acoplada.",
          "Isso vale principalmente para o que já é seu. Se você vai reaproveitar a geladeira ou o forno que tem em casa, traga as medidas na primeira conversa: o vão é dimensionado para o aparelho que vai ocupá-lo, não para uma medida genérica.",
        ],
      },
      {
        titulo: "Onde o sob medida faz mais diferença",
        texto: [
          "Cozinha pequena é onde o planejado se paga mais rápido, porque é onde cada centímetro perdido pesa. O armário que vai até o teto transforma o vão morto em armário de coisas de pouco uso. O canto em L, que num móvel de medida fixa vira um buraco inacessível, recebe uma solução que abre.",
          "Cozinha grande usa o sob medida de outro jeito: bancada em L ou ilha para separar o preparo do convívio, torre de forno alinhada com a altura dos armários e cristaleira iluminada como ponto de destaque.",
        ],
      },
    ],
    checklist: {
      titulo: "O que entra no projeto",
      itens: [
        "Layout do ambiente com o lugar de cada eletrodoméstico definido",
        "Aproveitamento da altura da parede, com armários superiores até o teto",
        "Solução para os cantos, que costumam virar espaço morto",
        "100% MDF, com fita de borda em PVC",
        "Iluminação em LED embutida, quando o projeto pede",
        "Montagem pela nossa própria equipe, não terceirizada",
      ],
    },
    faq: [
      {
        pergunta: "Cozinha planejada vale a pena em apartamento pequeno?",
        resposta: [
          "É justamente onde ela rende mais. Em ambiente pequeno, o espaço que um móvel de medida fixa desperdiça — o vão acima do armário, o canto entre duas paredes, a faixa estreita ao lado da geladeira — é grande demais para ser ignorado.",
          "O planejado transforma esses pedaços soltos em espaço de guarda, o que muda bastante a sensação de aperto na cozinha.",
        ],
      },
      {
        pergunta: "Consigo aproveitar meu cooktop, forno e geladeira atuais?",
        resposta: [
          "Sim, e é o mais comum. O projeto dimensiona o vão para o aparelho que vai ocupá-lo, então basta trazer as medidas de cada um logo na primeira conversa.",
          "Se você ainda vai comprar algum aparelho, vale decidir o modelo antes de fechar o pedido: mudar a medida de um vão depois de a peça estar produzida não é uma alteração simples.",
        ],
      },
      {
        pergunta: "Como funciona o orçamento de uma cozinha planejada?",
        resposta: [
          "Você envia as medidas do ambiente e a gente monta a proposta sem custo nenhum. O valor depende principalmente do tamanho e da quantidade de módulos, e depois das escolhas de acabamento, ferragens e acessórios internos.",
          "Quando o orçamento é aprovado, um especialista vai até o local conferir as medidas com precisão. Essa visita técnica tem custo, que varia conforme a distância, e é a etapa que evita erro de medida na hora da montagem.",
        ],
      },
    ],
    irma: {
      slug: "cozinhas-moduladas",
      texto:
        "Se o prazo ou o orçamento estiverem apertados, vale comparar com a linha modulada antes de decidir.",
      rotulo: "Ver cozinhas moduladas",
    },
  },

  {
    slug: "cozinhas-moduladas",
    categoria: "cozinhas",
    tipo: "modulada",
    nome: "Cozinhas moduladas",
    ambiente: "cozinha",
    h1: "Cozinhas moduladas em Sapucaia do Sul",
    title: "Cozinhas Moduladas em Sapucaia do Sul | Akai Móveis",
    description:
      "Cozinhas moduladas em Sapucaia do Sul: módulos de medidas padronizadas, entrega mais rápida e melhor custo-benefício. Projeto gratuito e até 18x sem juros.",
    intro: [
      "A cozinha modulada é montada a partir de módulos de medidas padronizadas, combinados conforme o espaço disponível. Como as peças já são produzidas em série, ela custa menos que o sob medida e chega mais rápido.",
      "Você continua escolhendo bastante coisa: a cor, o puxador, quais módulos entram e como eles se organizam na parede. O que não muda são as medidas de cada módulo — e é essa a diferença real entre as duas linhas.",
    ],
    secoes: [
      {
        titulo: "O que você ganha e o que abre mão",
        texto: [
          "Ganha preço e prazo. A mesma cozinha sai por um valor menor do que sairia sob medida, e não depende de uma produção individual para começar a ser fabricada.",
          "Abre mão do encaixe milimétrico. Quando a soma dos módulos não fecha exatamente a largura da parede, sobra uma folga — que pode ser resolvida com arremate, mas não deixa de existir. Em ambiente com canto irregular, viga aparente ou parede fora de esquadro, esse é o ponto a olhar com atenção antes de decidir.",
        ],
      },
      {
        titulo: "Modulado não quer dizer material inferior",
        texto: [
          "Nos modulados o material varia conforme a linha e o fornecedor: há opções 100% MDF e opções que combinam portas em MDF com caixas em MDP.",
          "Essa combinação não é uma versão econômica. O MDF permite usinagem e frisos, o que o torna melhor para portas; o MDP suporta melhor peso e flexão em prateleiras longas e resiste mais à umidade que o MDF comum. Para cozinha, muitos fabricantes consideram essa a composição tecnicamente mais adequada.",
          "Seja qual for a linha escolhida, informamos exatamente qual é a composição antes de você fechar o pedido.",
        ],
      },
    ],
    checklist: {
      titulo: "O que dá para escolher",
      itens: [
        "A cor e o acabamento, dentro das opções da linha",
        "O modelo do puxador",
        "Quais módulos entram e como são combinados na parede",
        "A largura de cada módulo, entre as medidas disponíveis",
        "Acessórios internos, como gaveteiros e iluminação em LED",
        "Montagem pela nossa própria equipe, não terceirizada",
      ],
    },
    faq: [
      {
        pergunta: "Cozinha modulada dura menos que a planejada?",
        resposta: [
          "Não é o tipo do móvel que determina isso, e sim o material e o acabamento. O que faz um móvel de cozinha envelhecer mal quase sempre é a borda: é pelo corte do painel que a água entra e faz a peça inchar.",
          "Por isso, ao comparar orçamentos de linhas moduladas, pergunte sempre qual é o revestimento e qual é a fita de borda incluída. Fita de PVC resiste à umidade e ao impacto; fita de papel, usada em móveis de linha mais barata, descola.",
        ],
      },
      {
        pergunta: "Quanto tempo leva para receber uma cozinha modulada?",
        resposta: [
          "Depois que o projeto é aprovado e a entrada é paga, o fornecedor leva em torno de 30 dias para produzir e entregar.",
          "Assim que a entrega chega, entramos em contato para agendar a montagem na data que for melhor para você.",
        ],
      },
      {
        pergunta: "Quanto custa uma cozinha modulada?",
        resposta: [
          "Depende do tamanho do ambiente e da quantidade de módulos. Para dar uma referência concreta de ordem de grandeza: um apartamento completo de 49 m² em móveis modulados — cozinha com lavanderia acoplada, quarto de casal, quarto de solteiro, home e banheiro — fica a partir de R$ 19.990 à vista, ou 18x de R$ 1.207,13.",
          "Uma cozinha isolada custa bem menos que esse conjunto. O valor exato sai depois do projeto, que é gratuito.",
        ],
      },
    ],
    irma: {
      slug: "cozinhas-planejadas",
      texto:
        "Se o seu ambiente tem canto irregular, viga aparente ou pé-direito alto, o sob medida costuma aproveitar melhor o espaço.",
      rotulo: "Ver cozinhas planejadas",
    },
  },

  {
    slug: "dormitorios-planejados",
    categoria: "quartos",
    tipo: "planejada",
    nome: "Dormitórios e closets planejados",
    ambiente: "dormitório",
    h1: "Dormitórios, closets e roupeiros planejados",
    title: "Dormitórios e Closets Planejados em Sapucaia do Sul | Akai",
    description:
      "Dormitórios, closets e roupeiros planejados sob medida em Sapucaia do Sul. Roupeiro de canto, armário sobre a cama e closet, em 100% MDF. Projeto gratuito.",
    intro: [
      "No quarto, o espaço desperdiçado quase nunca está no meio do ambiente: está no canto entre duas paredes, na faixa acima da cama e na altura que sobra entre o topo do guarda-roupa e o teto.",
      "É aí que o dormitório planejado se diferencia de um guarda-roupa de loja. A marcenaria contorna a cama, fecha o canto e sobe até onde o teto permite, transformando esses vãos em espaço de guarda de verdade.",
    ],
    secoes: [
      {
        titulo: "Soluções que aparecem na maioria dos projetos",
        texto: [
          "O roupeiro de canto elimina o espaço morto onde duas paredes se encontram — normalmente o pedaço mais desperdiçado do quarto. Os armários sobre a cama aproveitam a parede da cabeceira, que costuma ficar vazia. Os criados-mudos suspensos liberam o chão, o que facilita a limpeza e deixa o quarto visualmente mais leve.",
          "Quando sobra uma parede livre, ela vira bancada de estudo ou de trabalho, com gaveteiro de apoio embaixo e painel para a TV acima.",
        ],
      },
      {
        titulo: "Closet não precisa de um cômodo só para ele",
        texto: [
          "Dá para separar o closet dentro do próprio quarto com uma divisória ripada, que delimita o ambiente sem porta e sem fechar a passagem de luz.",
          "Por dentro, a divisão é escolhida a partir do que você guarda: proporção entre cabideiro e prateleira, gavetas para peças dobradas, gavetas rasas inclinadas para calçados e iluminação em LED no cabideiro, que resolve o problema de escolher roupa em armário escuro.",
        ],
      },
    ],
    checklist: {
      titulo: "O que costuma entrar",
      itens: [
        "Roupeiro de canto, que fecha o espaço morto entre duas paredes",
        "Armários sobre a cama, aproveitando a parede da cabeceira",
        "Criados-mudos suspensos, com ou sem nicho iluminado",
        "Bancada de estudo ou trabalho na parede livre",
        "Divisória ripada para separar o closet sem fechar o ambiente",
        "100% MDF, com fita de borda em PVC",
      ],
    },
    faq: [
      {
        pergunta: "Dá para fazer um dormitório planejado em quarto pequeno?",
        resposta: [
          "Dá, e é onde a diferença aparece mais. Num quarto pequeno, o guarda-roupa de medida fixa costuma deixar uma faixa inútil de um lado e não chegar ao teto do outro.",
          "O planejado ocupa exatamente a parede disponível e sobe até a altura que o quarto permite, o que muda bastante o volume de espaço de guarda no mesmo metro quadrado.",
        ],
      },
      {
        pergunta: "Consigo fazer o quarto por partes?",
        resposta: [
          "Sim. Muita gente começa pelo roupeiro, que é a peça que resolve o problema mais urgente, e deixa a cabeceira, os criados-mudos ou a bancada para um segundo momento.",
          "Vale avisar isso já no primeiro projeto, para que o desenho do conjunto seja pensado inteiro desde o começo e as peças que vierem depois encaixem no que já foi montado.",
        ],
      },
      {
        pergunta: "Vocês fazem a medição no local?",
        resposta: [
          "O orçamento inicial é feito a partir das medidas que você envia, sem custo. Depois que ele é aprovado, um especialista vai até o imóvel conferir tudo com precisão.",
          "Essa visita técnica tem custo, que varia conforme a distância. É ela que garante que a marcenaria encaixe no vão real do quarto, incluindo desníveis de piso e paredes fora de esquadro.",
        ],
      },
    ],
    irma: {
      slug: "dormitorios-modulados",
      texto:
        "Para quarto de formato regular, a linha modulada costuma resolver por um valor menor e com entrega mais rápida.",
      rotulo: "Ver dormitórios modulados",
    },
  },

  {
    slug: "dormitorios-modulados",
    categoria: "quartos",
    tipo: "modulada",
    nome: "Dormitórios modulados",
    ambiente: "dormitório",
    h1: "Dormitórios modulados em Sapucaia do Sul",
    title: "Dormitórios Modulados em Sapucaia do Sul | Akai Móveis",
    description:
      "Dormitórios modulados em Sapucaia do Sul: roupeiro, armários sobre a cama e criados-mudos em módulos padronizados, com entrega mais rápida e melhor preço.",
    intro: [
      "O dormitório modulado monta o quarto a partir de módulos de medidas padronizadas: roupeiro, armários sobre a cama, criados-mudos e, quando cabe, bancada de apoio.",
      "É a linha que costuma resolver melhor quando o quarto tem formato regular, sem canto quebrado nem viga atravessando a parede — que é o caso da maioria dos quartos de apartamento.",
    ],
    secoes: [
      {
        titulo: "Quando o modulado resolve bem o quarto",
        texto: [
          "Quarto retangular, parede inteira livre para o roupeiro e nenhum obstáculo no caminho: nessa situação, a diferença de aproveitamento entre o modulado e o sob medida é pequena, e a diferença de preço não é.",
          "A situação muda quando existe um canto a fechar, um pé-direito alto que deixaria um vão grande acima do armário, ou uma parede fora de esquadro. Aí o sob medida volta a compensar.",
        ],
      },
      {
        titulo: "Composição típica de um quarto modulado",
        texto: [
          "Na maior parte dos projetos o conjunto é o mesmo: roupeiro alto ocupando a parede principal, armários sobre a cama para aproveitar a parede da cabeceira e criados-mudos dos dois lados.",
          "A partir daí entram as escolhas: cor das portas, modelo do puxador, painel ripado como cabeceira, nichos abertos e iluminação em LED.",
        ],
      },
    ],
    checklist: {
      titulo: "O que dá para escolher",
      itens: [
        "Roupeiro alto ou roupeiro de canto, conforme a parede disponível",
        "Armários sobre a cama, aproveitando a parede da cabeceira",
        "Criados-mudos com gavetas, de um lado ou dos dois",
        "Painel ripado de cabeceira, com ou sem fita de LED",
        "Cor, acabamento e modelo de puxador, dentro das opções da linha",
        "Montagem pela nossa própria equipe, não terceirizada",
      ],
    },
    faq: [
      {
        pergunta: "Qual a diferença entre dormitório modulado e planejado?",
        resposta: [
          "O modulado usa módulos de medidas padronizadas, combinados conforme o espaço. O planejado é desenhado a partir das medidas exatas do seu quarto.",
          "Na prática, isso aparece nas sobras: o modulado pode deixar uma folga onde a soma dos módulos não fecha a largura da parede, e costuma deixar um vão entre o topo do armário e o teto. Em compensação, custa menos e chega mais rápido.",
        ],
      },
      {
        pergunta: "O quarto modulado vem completo ou posso comprar por partes?",
        resposta: [
          "Você escolhe quais módulos entram. É comum começar pelo roupeiro e acrescentar depois os armários sobre a cama, os criados-mudos ou a bancada.",
          "Como as medidas são padronizadas, acrescentar peças da mesma linha mais tarde tende a ser mais simples do que num projeto sob medida.",
        ],
      },
      {
        pergunta: "Dá para ver os móveis pessoalmente antes de comprar?",
        resposta: [
          "Dá. A loja fica em Sapucaia do Sul, na R. Otaviano Silveira, 545, no Centro, e lá você vê os acabamentos de perto e conversa com a equipe.",
          "Aproveite para pedir o teste da chave: passamos uma chave na superfície do revestimento na sua frente, para você ver como ele se comporta.",
        ],
      },
    ],
    irma: {
      slug: "dormitorios-planejados",
      texto:
        "Se o quarto tem canto a fechar ou pé-direito alto, vale comparar com o sob medida.",
      rotulo: "Ver dormitórios planejados",
    },
  },

  {
    slug: "banheiros-planejados",
    categoria: "banheiros",
    tipo: "planejada",
    nome: "Banheiros e lavabos planejados",
    ambiente: "banheiro",
    h1: "Banheiros e lavabos planejados",
    title: "Banheiros e Lavabos Planejados em Sapucaia do Sul | Akai",
    description:
      "Gabinetes, espelheiras e painéis planejados para banheiros e lavabos em Sapucaia do Sul, com materiais adequados a ambiente úmido. Projeto e orçamento gratuitos.",
    intro: [
      "Banheiro é o ambiente com menos espaço livre e mais restrição fixa da casa: o ponto hidráulico está onde está, o box não muda de lugar e a porta abre para um lado só.",
      "Por isso o gabinete de banheiro é quase sempre um projeto sob medida. O móvel é desenhado em torno do ponto de água existente e do tipo de cuba escolhido — de apoio, embutida ou esculpida no próprio tampo.",
    ],
    secoes: [
      {
        titulo: "A cuba define o móvel, não o contrário",
        texto: [
          "Cuba de apoio fica sobre o tampo e libera o espaço interno do gabinete, mas ocupa área útil da bancada. Cuba embutida deixa a bancada livre e exige um recorte preciso no tampo. Cuba esculpida no próprio tampo elimina a emenda entre os dois, que é justamente onde a sujeira se acumula.",
          "Cada opção muda a altura útil do gabinete e o espaço aproveitável por dentro. Por isso a escolha entra no projeto antes do desenho do móvel, e não depois.",
        ],
      },
      {
        titulo: "Ambiente úmido pede atenção ao acabamento",
        texto: [
          "Banheiro combina respingo constante com vapor, o que exige atenção às bordas do painel. É pelo corte que a água entra e faz a peça inchar, e é por isso que usamos fita de borda em PVC, que resiste à umidade e não descola como a fita de papel.",
          "Onde o espaço é curto, o gabinete suspenso ajuda duas vezes: libera o chão para a limpeza e evita que a base do móvel fique em contato direto com a água que escorre.",
        ],
      },
    ],
    checklist: {
      titulo: "O que costuma entrar",
      itens: [
        "Gabinete projetado a partir do ponto hidráulico existente",
        "Gabinete suspenso, que libera o chão e evita contato com a água",
        "Espelheira ou espelho integrado ao painel",
        "Nichos abertos e prateleiras embutidas",
        "Armário aéreo, quando há parede disponível",
        "Fita de borda em PVC, adequada a ambiente úmido",
      ],
    },
    faq: [
      {
        pergunta: "Preciso mudar o ponto de água para fazer o gabinete?",
        resposta: [
          "Na maioria dos casos não. O projeto é desenhado a partir do ponto hidráulico que já existe, o que evita obra e reduz bastante o custo total.",
          "Se você quiser mudar a cuba de parede, aí sim há obra envolvida — e é melhor resolver isso antes da medição, para que a marcenaria seja desenhada já na posição definitiva.",
        ],
      },
      {
        pergunta: "Que material vocês usam em banheiro?",
        resposta: [
          "Nos planejados trabalhamos com 100% MDF, com fita de borda em PVC. Num ambiente úmido, é a borda que mais importa: é pelo corte do painel que a água entra e faz o móvel inchar.",
          "Fita de papel, usada em móveis de linha mais barata, descola com o tempo e abre exatamente esse caminho para a água.",
        ],
      },
      {
        pergunta: "Vocês fazem lavabo, que é ainda menor?",
        resposta: [
          "Fazemos, e é um dos ambientes onde o sob medida rende mais, porque cada centímetro conta.",
          "No lavabo é comum o painel ocupar a parede inteira e integrar espelho, prateleiras e o tampo em pedra numa peça só, o que faz o ambiente parecer maior do que é.",
        ],
      },
    ],
    irma: {
      slug: "cozinhas-planejadas",
      texto:
        "Quem está reformando o banheiro costuma estar reformando a cozinha na mesma obra.",
      rotulo: "Ver cozinhas planejadas",
    },
  },

  {
    slug: "salas-planejadas",
    categoria: "salas",
    tipo: "planejada",
    nome: "Salas, homes e painéis de TV",
    ambiente: "sala",
    h1: "Salas, homes e painéis de TV planejados",
    title: "Painéis de TV e Homes Planejados em Sapucaia do Sul | Akai",
    description:
      "Painéis de TV, racks, homes e cristaleiras planejados em Sapucaia do Sul, com iluminação em LED embutida. Projeto e orçamento gratuitos, montagem própria.",
    intro: [
      "Na sala, o móvel planejado costuma resolver duas coisas ao mesmo tempo: organizar a parede da TV, que é para onde todo mundo olha, e dar destino aos espaços que a arquitetura deixou soltos.",
      "O painel suspenso esconde a fiação e alinha a TV com o resto da marcenaria. O rack alongado abaixo dele vira espaço de guarda. E a iluminação em LED embutida no recuo ou sob a bancada muda bastante o ambiente à noite.",
    ],
    secoes: [
      {
        titulo: "O vão sob a escada e outros espaços perdidos",
        texto: [
          "O vão sob a escada é o caso mais claro de espaço que quase sempre se perde. Com um móvel desenhado para o formato exato dele, esse triângulo vira armário fechado, adega ou área de guarda — sem parecer um remendo.",
          "A mesma lógica vale para a faixa estreita entre a sala e o corredor, ou para o recuo que sobra ao lado de uma janela: são pedaços que só um móvel sob medida consegue ocupar inteiro.",
        ],
      },
      {
        titulo: "Iluminação faz parte do móvel",
        texto: [
          "Fitas de LED embutidas no recuo do painel, sob a bancada do rack ou entre as réguas de um ripado criam iluminação indireta e mudam o clima da sala sem depender da luz do teto.",
          "Em cristaleiras e nichos, o LED tem função dupla: ilumina o que está exposto e transforma o móvel em ponto de destaque do ambiente.",
        ],
      },
    ],
    checklist: {
      titulo: "O que costuma entrar",
      itens: [
        "Painel suspenso para a TV, com a fiação embutida",
        "Rack alongado com espaço de guarda fechado",
        "Ripado de madeira com fitas de LED verticais",
        "Cristaleira com prateleiras de vidro iluminadas",
        "Aproveitamento do vão sob a escada",
        "Iluminação em LED embutida no recuo ou sob a bancada",
      ],
    },
    faq: [
      {
        pergunta: "O painel aguenta TV grande?",
        resposta: [
          "Aguenta, desde que o suporte seja fixado na estrutura correta. Por isso o tamanho e o peso da TV entram no projeto: a fixação é dimensionada para o aparelho que vai ficar ali.",
          "Se você pretende trocar de TV em breve, vale já dizer o tamanho pretendido, para que o painel seja dimensionado para o aparelho maior desde o começo.",
        ],
      },
      {
        pergunta: "Dá para embutir a fiação da TV no painel?",
        resposta: [
          "Dá, e é o motivo mais comum para escolher um painel em vez de fixar a TV direto na parede. Os cabos passam por dentro da marcenaria e saem no rack, onde ficam os aparelhos.",
          "Para isso funcionar bem, é importante definir no projeto quais aparelhos ficarão ali: receptor, videogame, som, roteador.",
        ],
      },
      {
        pergunta: "Vocês fazem móvel para o vão sob a escada?",
        resposta: [
          "Fazemos. É um dos casos em que o sob medida se justifica sozinho, porque nenhum móvel de medida fixa ocupa esse formato inteiro.",
          "O móvel acompanha a inclinação da escada e pode ser fechado com portas sem puxador, o que deixa o conjunto discreto em vez de virar um volume estranho na sala.",
        ],
      },
    ],
    irma: {
      slug: "dormitorios-planejados",
      texto:
        "Painel de TV e marcenaria com LED também aparecem muito nos projetos de dormitório.",
      rotulo: "Ver dormitórios planejados",
    },
  },
];

export const porSlug = (slug) => linhas.find((l) => l.slug === slug);
