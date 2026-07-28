// Projetos executados pela Akai. Fonte única: alimenta a galeria da home,
// os textos alternativos das imagens e o ItemList do schema.
//
// As descrições falam apenas do que é visível na foto. Não há cidade porque
// essa informação ainda não foi levantada — quando for, basta adicionar o
// campo `cidade` e ele entra na legenda e no SEO local automaticamente.

export const categorias = [
  {
    id: 'cozinhas',
    tituloLinha: 'Cozinhas planejadas e moduladas',
    nome: 'Cozinhas',
    descricao:
      'A cozinha é a nossa especialidade. Trabalhamos com projetos planejados, sob medida para o seu espaço, e modulados, que combinam módulos padronizados com entrega mais rápida. Em ambos aproveitamos toda a altura da parede, resolvemos os cantos e definimos o lugar de cada eletrodoméstico antes de fechar o pedido — de bancadas em L e ilhas a torres de forno e cristaleiras iluminadas.',
  },
  {
    id: 'quartos',
    tituloLinha: 'Dormitórios, closets e roupeiros',
    nome: 'Quartos',
    descricao:
      'Dormitórios, closets e roupeiros que aproveitam cada canto do quarto, inclusive os espaços que costumam ficar perdidos. Roupeiros de canto, armários sobre a cama, criados-mudos suspensos, bancadas de estudo e divisórias ripadas para separar o closet sem fechar o ambiente.',
  },
  {
    id: 'banheiros',
    tituloLinha: 'Banheiros e lavabos planejados',
    nome: 'Banheiros',
    descricao:
      'Gabinetes e painéis para banheiros e lavabos, planejados para o ponto hidráulico existente e para o tipo de cuba escolhido. Trabalhamos com gabinete suspenso, nichos abertos, espelheiras e armários aéreos, usando materiais adequados a ambientes úmidos.',
  },
  {
    id: 'modulados',
    porTipo: 'modulada',
    tituloLinha: 'Móveis modulados',
    nome: 'Modulados',
    descricao:
      'Os modulados usam módulos de medidas padronizadas que se combinam conforme o espaço: custam menos que o sob medida, são entregues mais rápido e ainda permitem escolher cor, puxador e a composição dos módulos. Reunimos aqui cozinhas e dormitórios modulados para você ver o que essa linha entrega na prática, e comparar com os projetos planejados das outras abas.',
  },
  {
    id: 'salas',
    tituloLinha: 'Salas, homes e painéis de TV',
    nome: 'Salas',
    descricao:
      'Painéis de TV, racks, cristaleiras e móveis para sala de estar e jantar, com iluminação em LED embutida e acabamento ripado quando o projeto pede. Também aproveitamos espaços difíceis, como o vão sob a escada, que costuma ser desperdiçado.',
  },
];

export const projetos = [
  // ---------- COZINHAS ----------
  {
    id: 'cozinha-off-white-cooktop',
    categoria: 'cozinhas',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/proj_01.jpg' }],
    titulo: 'Cozinha em tom off-white com cooktop',
    descricao:
      'Marcenaria em tom off-white acetinado, sem puxadores aparentes, com armários até o teto para aproveitar toda a altura da parede. Bancada clara com cooktop e cuba embutidos, e iluminação linear embutida no forro.',
  },
  {
    id: 'cozinha-corredor-duas-cubas',
    categoria: 'cozinhas',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/proj_02.jpg' }],
    titulo: 'Cozinha corredor com duas cubas',
    descricao:
      'Layout em linha única que aproveita toda a extensão da parede, com duas cubas e cooktop na mesma bancada. Os armários superiores acompanham a janela sem bloquear a entrada de luz natural.',
  },
  {
    id: 'cozinha-cinza-ripado',
    categoria: 'cozinhas',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/proj_06.jpg' }],
    titulo: 'Cozinha cinza com painel ripado',
    descricao:
      'Combinação de cinza fosco com painel ripado em tom amadeirado, que separa os ambientes sem fechar o espaço. Cristaleira com portas de vidro e bancada auxiliar em madeira.',
  },
  {
    id: 'cozinha-cristaleira-iluminada',
    categoria: 'cozinhas',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/proj_07.jpg' }],
    titulo: 'Cozinha com cristaleira iluminada',
    descricao:
      'Torre de geladeira embutida na marcenaria, deixando o conjunto alinhado. Ao lado, cristaleira com prateleiras de vidro e fita de LED interna, que ilumina as peças e serve como ponto de destaque do ambiente.',
  },
  {
    id: 'cozinha-cinza-amadeirado-montagem',
    categoria: 'cozinhas',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/proj_11.jpg' }],
    titulo: 'Cozinha cinza e amadeirada durante a montagem',
    descricao:
      'Registro feito no dia da instalação, com as gavetas ainda sendo ajustadas pela nossa equipe. Mostra a estrutura interna dos módulos e as corrediças, além do contraste entre as portas cinza e as laterais amadeiradas.',
  },
  {
    id: 'cozinha-branca-em-l',
    categoria: 'cozinhas',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/proj_12.jpg' }],
    titulo: 'Cozinha branca em L com bancada de granito',
    descricao:
      'Layout em L que aproveita duas paredes e amplia a área de trabalho. Bancada em granito claro, revestimento marmorizado até os armários e portas de vidro com perfil de alumínio em um dos módulos superiores.',
  },

  {
    id: 'cozinha-nichos-iluminados',
    categoria: 'cozinhas',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/akai-cozinha-nichos-iluminados.jpg', largura: 1600, altura: 1066 }],
    fabricante: true,
    titulo: 'Cozinha com nichos iluminados e cristaleiras',
    descricao:
      'Marcenaria em tom natural com nichos abertos e fitas de LED embutidas nas prateleiras. As cristaleiras usam vidro canelado com perfil preto, e a bancada em pedra clara se estende como bancada de apoio com cantos arredondados.',
  },

  {
    id: 'reforma-cozinha-antes-depois',
    categoria: 'cozinhas',
    tipo: 'planejada',
    imagens: [
      { src: '/projetos/akai-reforma-cozinha-capa.jpg', largura: 1440, altura: 1440 },
      { src: '/projetos/akai-reforma-cozinha-antes-1.jpg', largura: 1440, altura: 1440, legenda: 'Antes' },
      { src: '/projetos/akai-reforma-cozinha-antes-2.jpg', largura: 1440, altura: 1440, legenda: 'Antes' },
      { src: '/projetos/akai-reforma-cozinha-depois-1.jpg', largura: 1440, altura: 1440, legenda: 'Depois' },
      { src: '/projetos/akai-reforma-cozinha-depois-2.jpg', largura: 1440, altura: 1440, legenda: 'Depois' },
    ],
    titulo: 'Reforma de cozinha: antes e depois',
    descricao:
      'A mesma cozinha antes e depois da reforma. No lugar dos armários de madeira escura e da bancada antiga, entrou marcenaria em cinza fosco até o teto, bancada em granito claro e layout em L que aproveita as duas paredes. As janelas em arco deram lugar a esquadrias retas, com pastilhas no rodabancada e trilho de spots no lugar da luminária central.',
  },

  {
    id: 'cozinha-cinza-lavanderia-acoplada',
    categoria: 'cozinhas',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/akai-cozinha-cinza-lavanderia.jpg', largura: 1440, altura: 1920 }],
    titulo: 'Cozinha com lavanderia acoplada',
    descricao:
      'Cozinha linear que incorpora a lavanderia na mesma bancada, com a máquina de lavar embutida na marcenaria. Armários superiores em duas alturas, combinando off-white e cinza escuro, com fita de LED iluminando a bancada de granito preto e revestimento 3D branco no rodabancada.',
  },
  {
    id: 'cozinha-offwhite-adega-amadeirada',
    categoria: 'cozinhas',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/akai-cozinha-offwhite-adega.jpg', largura: 1440, altura: 1440 }],
    titulo: 'Cozinha off-white com nichos para taças',
    descricao:
      'Marcenaria off-white com puxadores tipo concha em dourado e forno embutido na altura da bancada. Na ponta, uma torre amadeirada com nichos iluminados para taças fecha a composição e serve de apoio, com fita de LED acompanhando a lateral inteira.',
  },
  {
    id: 'cozinha-confeitaria-balcao-central',
    categoria: 'cozinhas',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/akai-cozinha-confeitaria-balcao.jpg', largura: 1440, altura: 1440 }],
    titulo: 'Espaço de confeitaria com balcão central',
    descricao:
      'Projeto para espaço de confeitaria, com balcão central de bancada em granito preto e frente iluminada por LED. Ao fundo, bancada de trabalho corrida, nichos abertos para exposição e torre com forno combinado embutido — a mesma marcenaria usada em cozinha residencial, dimensionada para uso profissional.',
  },

  // ---------- QUARTOS ----------
  {
    id: 'dormitorio-roupeiro-canto-branco',
    categoria: 'quartos',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/proj_03.jpg' }],
    titulo: 'Dormitório com roupeiro de canto',
    descricao:
      'Roupeiro que contorna o canto do quarto e elimina o espaço morto entre as duas paredes. Portas brancas com puxadores em perfil escuro e cômoda amadeirada com nicho central embutido.',
  },
  {
    id: 'dormitorio-roupeiro-bancada-estudo',
    categoria: 'quartos',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/proj_08.jpg' }],
    titulo: 'Dormitório com roupeiro e bancada de estudo',
    descricao:
      'Roupeiro de canto em tom amadeirado somado a uma bancada de estudo que aproveita a parede livre. Painel para TV com iluminação embutida e gaveteiro de apoio sob a bancada.',
  },
  {
    id: 'dormitorio-casal-completo',
    categoria: 'quartos',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/proj_13.jpg' }],
    titulo: 'Dormitório de casal planejado por completo',
    descricao:
      'Conjunto que integra roupeiro, armários sobre a cama e criados-mudos suspensos com nichos iluminados. A marcenaria contorna a cabeceira estofada e aproveita a altura do quarto até o teto.',
  },
  {
    id: 'closet-divisoria-ripada',
    categoria: 'quartos',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/proj_17.jpg' }],
    titulo: 'Closet com divisória ripada',
    descricao:
      'Closet delimitado por painéis ripados em madeira escura, que separam o ambiente sem uso de porta. Internamente, prateleiras, cabideiro e sapateira em gavetas aramadas, com iluminação embutida no forro.',
  },

  {
    id: 'dormitorio-cabeceira-ripada-roupeiro',
    categoria: 'quartos',
    tipo: 'planejada',
    imagens: [
      { src: '/projetos/akai-dormitorio-cabeceira-ripada-1.jpg', largura: 3024, altura: 4032 },
      { src: '/projetos/akai-dormitorio-cabeceira-ripada-2.jpg', largura: 3024, altura: 4032 },
    ],
    titulo: 'Dormitório de casal com cabeceira ripada',
    descricao:
      'Cabeceira ripada em tom areia que percorre a parede inteira e continua como criado-mudo com gavetas, integrado à marcenaria. Na parede oposta, roupeiro de quatro portas até o teto, com nichos abertos junto à cama e fita de LED embutida na sanca.',
  },
  {
    id: 'quarto-cabeceira-estofada',
    categoria: 'quartos',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/akai-quarto-cabeceira-estofada.jpg', largura: 1600, altura: 1066 }],
    fabricante: true,
    titulo: 'Quarto com cabeceira estofada e painéis ripados',
    descricao:
      'Cabeceira estofada em linho integrada a painéis ripados nas laterais, com criados-mudos suspensos de uma gaveta. O painel amadeirado sobe pela parede e serve de fundo para a composição inteira.',
  },
  {
    id: 'closet-amadeirado-sapateira',
    categoria: 'quartos',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/akai-closet-amadeirado.jpg', largura: 852, altura: 1280 }],
    fabricante: true,
    titulo: 'Closet amadeirado com sapateira',
    descricao:
      'Closet aberto em tom natural, com prateleiras, cabideiro iluminado por LED linear e gavetas com puxadores cilíndricos. Na base, gavetas rasas inclinadas próprias para calçados.',
  },

  // ---------- BANHEIROS ----------
  {
    id: 'banheiro-verde-gabinete-amadeirado',
    categoria: 'banheiros',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/proj_05.jpg' }],
    titulo: 'Banheiro verde com gabinete amadeirado',
    descricao:
      'Gabinete suspenso em tom amadeirado com tampo de madeira e cuba de apoio, combinado ao revestimento verde da parede. Armário aéreo com portas de abrir e prateleiras internas, para ganhar espaço de guarda.',
  },
  {
    id: 'lavabo-espelho-oval',
    categoria: 'banheiros',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/proj_10.jpg' }],
    titulo: 'Lavabo com painel amadeirado e espelho oval',
    descricao:
      'Painel amadeirado que percorre a parede e integra espelho oval, prateleiras e o tampo em pedra. Gabinete com nicho aberto na base e ripado de madeira complementando a parede lateral.',
  },
  {
    id: 'banheiro-marmore-cuba-esculpida',
    categoria: 'banheiros',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/proj_15.jpg' }],
    titulo: 'Banheiro em mármore com cuba esculpida',
    descricao:
      'Bancada com cuba esculpida no próprio tampo, sem emendas, e gabinete amadeirado com puxadores em preto fosco. Espelho redondo sobre revestimento marmorizado e prateleira embutida ao longo da parede.',
  },

  {
    id: 'banheiro-duas-cubas-gabinete-escuro',
    categoria: 'banheiros',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/akai-banheiro-duas-cubas-preto.jpg', largura: 1440, altura: 1800 }],
    titulo: 'Banheiro de casal com duas cubas',
    descricao:
      'Gabinete suspenso em tom escuro com bancada de granito preto e duas cubas esculpidas no próprio tampo, sem emenda. Acima, dois espelhos de moldura preta com cantos arredondados e iluminação de LED por trás, que ilumina o rosto sem ofuscar.',
  },
  {
    id: 'banheiro-branco-espelheira-tres-portas',
    categoria: 'banheiros',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/akai-banheiro-branco-espelheira.jpg', largura: 1440, altura: 1920 }],
    titulo: 'Banheiro compacto com espelheira de três portas',
    descricao:
      'Solução para banheiro estreito: gabinete de gavetas com tampo branco e cuba de apoio oval, e uma espelheira de três portas que ocupa toda a parede acima. Uma prateleira estreita avança sobre a caixa acoplada, aproveitando o espaço que costuma ficar vazio.',
  },
  {
    id: 'banheiro-espelheira-bancada-granito',
    categoria: 'banheiros',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/akai-banheiro-espelheira-granito.jpg', largura: 1440, altura: 1920 }],
    titulo: 'Banheiro com espelheira e bancada em granito',
    descricao:
      'Bancada em granito preto que se estende sobre a caixa acoplada e vira prateleira, com cuba de apoio branca e gabinete de gavetas em branco. A espelheira de portas espelhadas cobre a parede inteira e amplia a sensação de espaço no ambiente.',
  },

  {
    id: 'lavabo-cuba-branca-dourada',
    categoria: 'banheiros',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/akai-lavabo-cuba-branca.jpg', largura: 1066, altura: 1600 }],
    fabricante: true,
    titulo: 'Lavabo com bancada em pedra e cuba de apoio',
    descricao:
      'Bancada em pedra clara suspensa, com cuba de apoio redonda e torneira alta dourada. Ao fundo, painel ripado vazado com iluminação indireta; abaixo, gaveteiro amadeirado com puxador embutido.',
  },

  // ---------- SALAS ----------
  {
    id: 'painel-tv-ripado-led',
    categoria: 'salas',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/proj_04.jpg' }],
    titulo: 'Painel de TV com ripado e LED',
    descricao:
      'Painel suspenso para TV com rack alongado e iluminação em LED sob a bancada. Ao lado, ripado de madeira com fitas de LED verticais embutidas entre as réguas.',
  },
  {
    id: 'movel-sob-escada',
    categoria: 'salas',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/proj_09.jpg' }],
    titulo: 'Móvel sob a escada',
    descricao:
      'Aproveitamento do vão sob a escada com um móvel de linhas retas e portas sem puxador. A fita de LED sobre o tampo destaca a parede em acabamento rústico e transforma um espaço normalmente perdido em área de guarda.',
  },
  {
    id: 'home-cristaleira-iluminada',
    categoria: 'salas',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/proj_14.jpg' }],
    titulo: 'Home com cristaleira iluminada',
    descricao:
      'Conjunto amadeirado que integra rack, painel de TV, nichos verticais e cristaleira com prateleiras de vidro iluminadas. As fitas de LED contornam o painel e a bancada, criando iluminação indireta.',
  },
  {
    id: 'painel-tv-ripado-escuro',
    categoria: 'salas',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/proj_16.jpg' }],
    titulo: 'Painel de TV com ripado escuro',
    descricao:
      'Painel de TV emoldurado por marcenaria clara, com iluminação embutida no recuo. O ripado em madeira escura ocupa a parede lateral e recebe fitas de LED verticais entre as réguas.',
  },
  {
    id: 'home-painel-divisoria-ripada',
    categoria: 'salas',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/akai-home-painel-divisoria-ripada.jpg', largura: 1080, altura: 1440 }],
    titulo: 'Home com divisória ripada iluminada',
    descricao:
      'Painel branco suspenso para a TV sobre rack alongado, com um nicho amadeirado iluminado correndo por toda a extensão. Na lateral, uma divisória ripada em madeira clara separa o ambiente e recebe fitas de LED verticais entre as réguas, repetidas na sanca do teto.',
  },
  {
    id: 'hall-espelho-redondo-aparador',
    categoria: 'salas',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/akai-hall-espelho-redondo.jpg', largura: 1440, altura: 1920 }],
    titulo: 'Hall de entrada com espelho redondo e aparador',
    descricao:
      'Entrada resolvida em pouco espaço: espelho redondo grande contornado por LED, aparador suspenso amadeirado com gaveta e nicho aberto, e uma prateleira superior iluminada. Ao lado, painel ripado em madeira delimita a passagem sem fechar o ambiente.',
  },

  {
    id: 'sala-painel-tv-adega',
    categoria: 'salas',
    tipo: 'planejada',
    imagens: [{ src: '/projetos/akai-sala-painel-tv-adega.jpg', largura: 1600, altura: 1066 }],
    fabricante: true,
    titulo: 'Sala com painel de TV e adega de parede',
    descricao:
      'Painel amadeirado de piso a teto para a TV, com rack baixo em tom areia sem puxadores. Ao lado, adega de parede com suportes metálicos sobre nicho iluminado, e jardineira embutida na marcenaria.',
  },

  // ---------- MODULADOS (aparecem apenas na aba Modulados) ----------
  {
    id: 'mod-cozinha-linear-granito',
    categoria: 'cozinhas',
    tipo: 'modulada',
    imagens: [{ src: '/projetos/akai-mod-cozinha-linear-granito.jpg', largura: 1440, altura: 1800 }],
    titulo: 'Cozinha modulada linear com bancada de granito',
    descricao:
      'Layout em linha única com bancada em granito preto e revestimento marmorizado até os armários. Nichos abertos em tom amadeirado quebram a sequência de portas, e o rodapé acompanha o mesmo acabamento.',
  },
  {
    id: 'mod-cozinha-em-l-sidebyside',
    categoria: 'cozinhas',
    tipo: 'modulada',
    imagens: [{ src: '/projetos/akai-mod-cozinha-em-l-sidebyside.jpg', largura: 1440, altura: 1440 }],
    titulo: 'Cozinha modulada em L com espaço para side by side',
    descricao:
      'Layout em L com bancada em granito preto e nicho dimensionado para geladeira side by side. Revestimento 3D no rodabancada e iluminação embutida no forro de gesso.',
  },
  {
    id: 'mod-cozinha-em-u-amadeirada',
    categoria: 'cozinhas',
    tipo: 'modulada',
    imagens: [{ src: '/projetos/akai-mod-cozinha-em-u-amadeirada.jpg', largura: 1440, altura: 1440 }],
    titulo: 'Cozinha modulada em U com balcão amadeirado',
    descricao:
      'Layout em U que aproveita três paredes, com balcão de apoio separando a cozinha do ambiente vizinho. Armários superiores e bancada em tom amadeirado, com iluminação linear no forro.',
  },
  {
    id: 'mod-cozinha-balcao-ripado',
    categoria: 'cozinhas',
    tipo: 'modulada',
    imagens: [{ src: '/projetos/akai-mod-cozinha-balcao-ripado.jpg', largura: 1440, altura: 1440 }],
    titulo: 'Cozinha modulada com balcão ripado',
    descricao:
      'Balcão de apoio com frente ripada em tom claro, combinado a armários em cinza e azul. Revestimento branco tipo metrô no rodabancada, com fita de LED sob os armários superiores.',
  },
  {
    id: 'mod-cozinha-cristaleira-espelhada',
    categoria: 'cozinhas',
    tipo: 'modulada',
    imagens: [{ src: '/projetos/akai-mod-cozinha-cristaleira-espelhada.jpg', largura: 1440, altura: 1920 }],
    titulo: 'Cozinha modulada com torre e portas espelhadas',
    descricao:
      'Cozinha ampla em L, com armários off-white e detalhes em cinza. A torre lateral recebe portas espelhadas com perfil, que ampliam a sensação de espaço, e a bancada é em granito preto.',
  },
  {
    id: 'mod-cozinha-peninsula-ripada',
    categoria: 'cozinhas',
    tipo: 'modulada',
    imagens: [{ src: '/projetos/akai-mod-cozinha-peninsula-ripada.jpg', largura: 1440, altura: 1800 }],
    fabricante: true,
    titulo: 'Cozinha modulada com península ripada',
    descricao:
      'Layout em U fechado por uma península com frente ripada em madeira clara, que separa a cozinha da sala e serve de balcão. Armários em cinza e azul, revestimento branco tipo metrô, nichos abertos amadeirados e torre com portas de vidro na entrada.',
  },
  {
    id: 'mod-cozinha-em-l-offwhite',
    categoria: 'cozinhas',
    tipo: 'modulada',
    imagens: [{ src: '/projetos/akai-mod-cozinha-em-l-offwhite.jpg', largura: 1440, altura: 1800 }],
    fabricante: true,
    titulo: 'Cozinha modulada em L off-white',
    descricao:
      'Layout em L com portas off-white e perfil cinza como puxador embutido, sobre revestimento marmorizado cinza. À direita, torre alta prevendo o vão da geladeira, e um aéreo com porta basculante de vidro sobre a bancada.',
  },
  {
    id: 'mod-dormitorio-solteiro',
    categoria: 'quartos',
    tipo: 'modulada',
    imagens: [{ src: '/projetos/akai-mod-dormitorio-solteiro.jpg', largura: 1414, altura: 1785 }],
    titulo: 'Dormitório modulado de solteiro',
    descricao:
      'Armários sobre a cama e roupeiro de canto que aproveitam a parede inteira. Portas em tom claro com filetes amadeirados nas bordas e puxadores em perfil escuro.',
  },
  {
    id: 'mod-dormitorio-painel-ripado',
    categoria: 'quartos',
    tipo: 'modulada',
    imagens: [{ src: '/projetos/akai-mod-dormitorio-painel-ripado.jpg', largura: 1440, altura: 1800 }],
    titulo: 'Dormitório modulado com painel ripado e bancada',
    descricao:
      'Roupeiro alto de um lado e, ao centro, painel ripado com fita de LED que faz as vezes de cabeceira. Criados-mudos com gavetas dos dois lados e bancada de apoio aproveitando a parede livre.',
  },
  {
    id: 'mod-dormitorio-casal-canto',
    categoria: 'quartos',
    tipo: 'modulada',
    imagens: [{ src: '/projetos/akai-mod-dormitorio-casal-canto.jpg', largura: 1440, altura: 1800 }],
    titulo: 'Dormitório modulado de casal com roupeiro de canto',
    descricao:
      'Roupeiro que contorna o canto do quarto e segue por cima da cama, com nichos abertos na cabeceira. Portas claras com bordas amadeiradas e puxadores em perfil escuro.',
  },
];
