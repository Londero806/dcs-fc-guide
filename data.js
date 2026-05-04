const DCS_DATA = {
  f15c: {
    id: 'f15c',
    name: 'F-15C Eagle',
    nation: 'USA',
    flag: '🇺🇸',
    role: 'Superioridade Aérea',
    era: 'Guerra Fria / Moderno',
    speed: 'Mach 2.5',
    engine: '2x Pratt & Whitney F100-PW-220',
    color: '#4a9eff',
    tag: 'BVR KING',
    briefing_real: `O F-15C Eagle é amplamente considerado o melhor caça de superioridade aérea puro da história ocidental. Desenvolvido pela McDonnell Douglas nos anos 1970 como resposta ao MiG-25 soviético, o Eagle foi projetado com um único objetivo: matar aviões inimigos antes que pudessem reagir.

Com mais de 100 vitórias ar-ar sem uma única perda em combate real — nas mãos de Israel, Arábia Saudita e EUA — o F-15C provou ser uma máquina de guerra sem igual. Seu radar APG-63 pulse-doppler foi revolucionário: capaz de detectar alvos em qualquer altitude, incluindo abaixo do horizonte (lookdown-shootdown).

A filosofia do Eagle é simples: chegar primeiro, atirar de longe, ir embora. O lema do 1st Fighter Wing resume tudo: "No guts, no glory."`,
    briefing_dcs: `No DCS, o F-15C Flaming Cliffs é o rei do BVR. Sua função é simples: ligar o radar, encontrar inimigos além do alcance visual e destruí-los com AIM-120 AMRAAM antes que possam reagir.

Com até 4 AMRAAMs de fogo e esqueça e um radar superior ao do Su-27, o Eagle domina o espaço aéreo em altitude média e alta. Em dogfight é competente mas não excepcional — se o inimigo fechar a distância, a vantagem diminui.

A chave é não deixar isso acontecer. Engaje de longe, recarregue e repita.`,
    weapons: [
      { cat: 'BVR', name: 'AIM-120C AMRAAM', sub: 'Míssil BVR principal', guidance: 'Radar Ativo — Fogo e Esqueça', range: '~105 km', main: true, ff: true, desc: 'O míssil mais importante do F-15C. Radar ativo — guia sozinho após o lançamento sem precisar manter o radar travado. Pode carregar até 4 simultaneamente. Permite engajar múltiplos alvos em sequência.' },
      { cat: 'BVR', name: 'AIM-7M/MH Sparrow', sub: 'Míssil BVR semi-ativo', guidance: 'Radar Semi-ativo', range: '~45 km', main: false, ff: false, desc: 'Míssil mais antigo que exige radar travado no alvo até o impacto. Mais vulnerável a manobras evasivas e chaff que o AMRAAM. Usado quando os AMRAAMs acabam. Pode ser disparado em modo FLOOD sem travamento em emergência.' },
      { cat: 'WVR', name: 'AIM-9M Sidewinder', sub: 'Míssil IR dogfight', guidance: 'Infravermelho', range: '~25 km', main: false, ff: true, desc: 'Míssil de curto alcance que busca o calor do motor inimigo. Até 2x nas pontas das asas. Versão M tem boa resistência a flares mas sem capacidade HOBS — precisa do nariz apontado para o alvo.' },
      { cat: 'WVR', name: 'AIM-9X Sidewinder', sub: 'Míssil IR HOBS', guidance: 'IR — Alta Manobrabilidade', range: '~35 km', main: false, ff: true, desc: 'Versão mais moderna do Sidewinder com capacidade HOBS (High Off-Boresight) — pode engajar alvos em ângulos extremos sem precisar apontar o nariz diretamente. Complementa o AMRAAM em combate próximo.' },
      { cat: 'Canhão', name: 'M61A1 Vulcan', sub: 'Canhão rotativo 20mm — interno', guidance: '—', range: '< 1 km', main: false, ff: false, desc: 'Canhão rotativo de 6 canos com 940 projéteis de 20mm. Cadência ~6.000 tiros/min. Último recurso quando todos os mísseis acabam. Selecione com a tecla C.' },
    ],
    hotkeys: [
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'RShift + L', action: 'Ligar Energia / APU', desc: 'Sempre o primeiro passo. Liga os sistemas elétricos.', essential: true },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'RShift + Home', action: 'Ligar Ambos os Motores', desc: 'Atalho rápido para ligar os dois motores simultaneamente.', essential: true },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'RAlt + Home', action: 'Ligar Motor Esquerdo', desc: 'Liga o motor esquerdo individualmente.', essential: false },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'RCtrl + Home', action: 'Ligar Motor Direito', desc: 'Liga o motor direito individualmente.', essential: false },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'LCtrl + C', action: 'Fechar Canopy', desc: 'Feche o cockpit antes de taxiar.', essential: false },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'LAlt + T', action: 'Trim de Decolagem', desc: 'Ajusta automaticamente o trim para decolagem.', essential: false },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'W', action: 'Freio de Roda', desc: 'Segure para manter o avião parado no solo.', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'G', action: 'Trem de Pouso', desc: 'Recolhe/estende. Recolha imediatamente após decolar.', essential: true },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'B', action: 'Freio Aerodinâmico', desc: 'Reduz velocidade. Mínimo ~160 kn para pouso seguro.', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'RAlt + R', action: 'Ejetar Tanques Externos', desc: 'Descarte antes do combate para maximizar performance.', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'RCtrl + .', action: 'Trim Nariz Acima', desc: 'Ajusta trim para subir.', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'RCtrl + ;', action: 'Trim Nariz Abaixo', desc: 'Ajusta trim para descer.', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'LAlt + 1', action: 'AP Altitude Hold', desc: 'Mantém altitude automaticamente.', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'LShift + A', action: 'Desligar Autopiloto', desc: 'Desativa qualquer modo AP ativo.', essential: false },
      { cat: 'radar', catLabel: 'Radar', catIcon: '📡', keys: 'I', action: 'Ligar/Desligar Radar', desc: 'Ativa o radar APG-63. Ligue ao entrar em zona de combate.', essential: true },
      { cat: 'radar', catLabel: 'Radar', catIcon: '📡', keys: '2', action: 'Modo BVR (TWS)', desc: 'Track While Scan — rastreia múltiplos alvos. Modo principal para AIM-120.', essential: true },
      { cat: 'radar', catLabel: 'Radar', catIcon: '📡', keys: '3', action: 'Modo Vertical Scan', desc: 'Varredura vertical automática para dogfight.', essential: false },
      { cat: 'radar', catLabel: 'Radar', catIcon: '📡', keys: '4', action: 'Modo Boresight', desc: 'Trava no primeiro contato à frente. Para AIM-9/AIM-7.', essential: false },
      { cat: 'radar', catLabel: 'Radar', catIcon: '📡', keys: '; . , /', action: 'Mover Cursor do Radar', desc: 'Direciona o cursor para selecionar alvos.', essential: false },
      { cat: 'radar', catLabel: 'Radar', catIcon: '📡', keys: 'Enter', action: 'Travar Alvo', desc: 'Trava o radar no contato selecionado.', essential: true },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'D', action: 'Ciclar Armas', desc: 'Alterna entre AIM-120, AIM-7, AIM-9 e canhão.', essential: true },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'LAlt + Space', action: 'Disparar', desc: 'Lança o míssil ou ativa o canhão.', essential: true },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'C', action: 'Selecionar Canhão Vulcan', desc: 'Ativa o canhão M61A1 de 20mm.', essential: false },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'LAlt + W', action: 'Launch Override', desc: 'Dispara AIM-120 sem travamento — emergência.', essential: false },
      { cat: 'cm', catLabel: 'Contramédidas', catIcon: '🛡️', keys: 'Q', action: 'Chaff + Flares Simultâneos', desc: 'O F-15C lança ambos com uma tecla. Combine com break turn.', essential: true },
    ]
  },

  su27: {
    id: 'su27',
    name: 'Su-27 Flanker',
    nation: 'Russia',
    flag: '🇷🇺',
    role: 'Interceptor / Superioridade Aérea',
    era: 'Guerra Fria / Moderno',
    speed: 'Mach 2.35',
    engine: '2x Saturn AL-31F',
    color: '#ff4a4a',
    tag: 'DOGFIGHT',
    briefing_real: `O Sukhoi Su-27 Flanker nasceu de um choque: quando a inteligência soviética descobriu o F-15 americano nos anos 1970, ficou claro que o MiG-23 era completamente obsoleto. O resultado foi o Su-27 — um caça radicalmente diferente de tudo que veio antes na aviação soviética.

Com sua configuração aerodinâmica única, o Flanker conseguiu algo extraordinário: ser tanto um interceptor de longo alcance quanto um dos melhores dogfighters do mundo. A Cobra de Pugachev — onde o avião levanta o nariz a 120° em pleno voo sem perder controle — é impossível para a maioria dos caças ocidentais da época.

O Su-27 foi o primeiro avião soviético com IRST passivo e capacete HMS, dando ao piloto a capacidade letal de olhar para um inimigo e disparar sem apontar o nariz do avião.`,
    briefing_dcs: `No DCS, o Su-27 é o contrapeso natural do F-15C — mas com filosofia diferente. Em BVR, sofre por não ter o R-77: o R-27 exige que você mantenha o radar travado no alvo até o impacto.

Mas se o combate fechar, o HMS combinado com R-73 é devastador: você literalmente olha para o inimigo e dispara. O IRST passivo é sua arma secreta — detecta alvos sem emitir sinais de radar, deixando o inimigo sem aviso no RWR.

Ideal para emboscadas silenciosas e dogfights agressivos de curta distância.`,
    weapons: [
      // BVR
      { cat: 'BVR', name: 'R-27ER / R-27R', sub: 'Míssil BVR radar', guidance: 'Radar Semi-ativo', range: '~80 km / ~45 km', main: true, ff: false, desc: 'Exige radar travado no alvo até o impacto. O ER é a versão estendida — mais rápido e com maior alcance. Principal arma BVR do Flanker. Desvantagem vs AMRAAM: não é fogo e esqueça.' },
      { cat: 'BVR', name: 'R-27ET / R-27T', sub: 'Míssil BVR infravermelho', guidance: 'Infravermelho', range: '~80 km / ~45 km', main: false, ff: true, desc: 'Ataca pelo calor sem emitir radar — o inimigo não vê no RWR. Arma de emboscada silenciosa. Combine com IRST para ataque completamente passivo. Fogo e esqueça após travamento.' },
      // WVR
      { cat: 'WVR', name: 'R-73 Archer', sub: 'Rei do dogfight', guidance: 'IR HOBS', range: '~30 km', main: true, ff: true, desc: 'Alta manobralidade e capacidade de engajar alvos até 45° fora do eixo do nariz. Combinado com HMS, você olha para o inimigo e dispara. A principal vantagem do Flanker em combate próximo.' },
      // Canhão
      { cat: 'Canhão', name: 'GSh-30-1', sub: 'Canhão interno 30mm', guidance: '—', range: '< 1 km', main: false, ff: false, desc: 'Canhão de 30mm com 150 projéteis no bordo direito da asa. Mais destrutivo por projétil que o Vulcan americano de 20mm. Usado como último recurso em combate muito próximo.' },
      // Bombas (uso secundário)
      { cat: 'Bombas AG', name: 'FAB-100 / FAB-250 / FAB-500 / FAB-1500', sub: 'Bombas propósito geral', guidance: 'Livre (Iron Bomb)', range: '—', main: false, ff: false, desc: 'Família de bombas de propósito geral de 100 a 1500 kg. O Su-27 pode carregar até 6 FAB-500 ou combinações maiores. Sem sistemas de mira avançados — ataque ao solo básico e impreciso.' },
      { cat: 'Bombas AG', name: 'BetAB-500ShP', sub: 'Bomba penetradora de concreto', guidance: 'Livre', range: '—', main: false, ff: false, desc: 'Bomba penetradora com foguete de aceleração para destruir pistas de pouso, bunkers e abrigos de concreto. Uso secundário e raro no Su-27.' },
      { cat: 'Bombas AG', name: 'RBK-250 / RBK-500', sub: 'Bombas cluster', guidance: 'Livre (Cluster)', range: '—', main: false, ff: false, desc: 'Bombas cluster com submunições PTAB antitanque ou AO antipessoal. Eficazes contra formações de veículos. Capacidade secundária do Flanker — sem targeting pod para precisão.' },
      { cat: 'Bombas AG', name: 'KMGU-2', sub: 'Dispenser de submunições', guidance: 'Livre', range: '—', main: false, ff: false, desc: 'Dispenser de 96 submunições AO-2.5RT ou PTAB-2.5KO. Satura área ampla com explosões. Uso de área — não requer precisão.' },
      // Foguetes (uso secundário)
      { cat: 'Foguetes AG', name: 'S-8 (B-8M1)', sub: '20x foguetes 70mm', guidance: 'Não guiado', range: '~4 km', main: false, ff: false, desc: 'Pods de foguetes S-8 de 70mm. Uso secundário para ataque ao solo. O Su-27 não tem sistemas de mira específicos para foguetes — ataque de área básico.' },
      { cat: 'Foguetes AG', name: 'S-13 (UB-13)', sub: '5x foguetes 122mm', guidance: 'Não guiado', range: '~3 km', main: false, ff: false, desc: 'Foguetes médios S-13 de 122mm em pods de 5 unidades. Mais potentes que o S-8. Uso secundário no Flanker.' },
      { cat: 'Foguetes AG', name: 'S-24B', sub: 'Foguete pesado 240mm', guidance: 'Não guiado', range: '~4 km', main: false, ff: false, desc: 'Foguete pesado individual de 240mm. Enorme poder destrutivo em disparo único. Raramente usado no Su-27 por falta de precisão sem targeting pod.' },
      { cat: 'Foguetes AG', name: 'S-25', sub: 'Foguete pesado 340mm', guidance: 'Não guiado', range: '~3 km', main: false, ff: false, desc: 'O maior foguete disponível no Su-27 em 340mm. Devastador contra instalações fixas e alvos grandes. Uso pontual em missões de ataque ao solo.' },
    ],
    hotkeys: [
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'RShift + L', action: 'Ligar Energia / APU', desc: 'Primeiro passo — idêntico ao F-15C.', essential: true },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'RAlt + Home', action: 'Ligar Motor Esquerdo', desc: 'Liga o motor esquerdo.', essential: true },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'RCtrl + Home', action: 'Ligar Motor Direito', desc: 'Liga o motor direito.', essential: true },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'Ctrl + C', action: 'Fechar Canopy', desc: 'Feche antes de taxiar.', essential: false },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'W', action: 'Freio de Roda', desc: 'Segure para manter parado.', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'G', action: 'Trem de Pouso', desc: 'Recolhe/estende.', essential: true },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'F', action: 'Flaps', desc: 'Cicla entre posições de decolagem e pouso.', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'B', action: 'Freio Aerodinâmico', desc: 'O Su-27 retém velocidade em curvas — use o airbrake para perder energia.', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'RAlt + R', action: 'Ejetar Tanques Externos', desc: 'Descarte antes do combate.', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'LAlt + 3', action: 'AP Voo Nivelado', desc: 'Botão do pânico — retorna ao voo reto e nivelado imediatamente.', essential: false },
      { cat: 'radar', catLabel: 'Radar / IRST', catIcon: '📡', keys: 'I', action: 'Ligar/Desligar Radar (N001)', desc: 'Radar pulse-doppler lookdown-shootdown. Pressione 2x rápido para piscar sem perder travamento.', essential: true },
      { cat: 'radar', catLabel: 'Radar / IRST', catIcon: '📡', keys: 'O', action: 'Ligar/Desligar IRST (OLS-27)', desc: 'Sensor IR passivo — detecta alvos sem emitir radar. Inimigo não recebe aviso no RWR.', essential: true },
      { cat: 'radar', catLabel: 'Radar / IRST', catIcon: '📡', keys: '5', action: 'Modo HMS (Helmet Sight)', desc: 'Mira do capacete. Olhe para o inimigo — o sensor trava automaticamente. Use com R-73.', essential: true },
      { cat: 'radar', catLabel: 'Radar / IRST', catIcon: '📡', keys: '4', action: 'Modo BVR (Longo Alcance)', desc: 'Modo principal para R-27. Rastreia alvos em distâncias maiores.', essential: false },
      { cat: 'radar', catLabel: 'Radar / IRST', catIcon: '📡', keys: '2', action: 'Modo BFR (Dogfight)', desc: 'Varredura vertical automática para combate próximo.', essential: false },
      { cat: 'radar', catLabel: 'Radar / IRST', catIcon: '📡', keys: 'Enter', action: 'Travar Alvo', desc: 'Trava radar/IRST no contato selecionado.', essential: true },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'P', action: 'Ciclar Armas Ar-Ar', desc: 'Alterna entre R-27R, R-27ER, R-27T, R-27ET e R-73. Note: é P, não D como no F-15C!', essential: true },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'Space', action: 'Disparar', desc: 'Lança o míssil selecionado.', essential: true },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'C', action: 'Selecionar Canhão GSh-30', desc: 'Ativa o canhão de 30mm em modo ar-ar.', essential: false },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: '7', action: 'Modo Ar-Terra', desc: 'Alterna para modo de ataque ao solo (uso secundário).', essential: false },
      { cat: 'cm', catLabel: 'Contramédidas', catIcon: '🛡️', keys: 'Insert', action: 'Lançar Chaff', desc: 'Contra mísseis guiados por radar. Use ao ouvir aviso de radar travado.', essential: true },
      { cat: 'cm', catLabel: 'Contramédidas', catIcon: '🛡️', keys: 'Delete', action: 'Lançar Flares', desc: 'Contra mísseis infravermelhos (AIM-9, R-73 inimigo).', essential: true },
      { cat: 'cm', catLabel: 'Contramédidas', catIcon: '🛡️', keys: 'Shift + E', action: 'Jammer IR Traseiro', desc: 'Interferência infravermelha no hemisfério traseiro.', essential: false },
    ]
  },

  su25t: {
    id: 'su25t',
    name: 'Su-25T Frogfoot',
    nation: 'Russia',
    flag: '🇷🇺',
    role: 'Ataque ao Solo / CAS',
    era: 'Guerra Fria / Moderno',
    speed: '~950 km/h',
    engine: '2x Turmansky R-195',
    color: '#4aff7a',
    tag: 'GRÁTIS',
    briefing_real: `O Sukhoi Su-25 Frogfoot é a resposta soviética ao A-10 americano — um avião projetado para sobreviver ao inferno das linhas de frente e destruir tudo que estiver no solo.

O Su-25 estreou em combate no Afeganistão (1980–1989) onde sua blindagem e robustez lendárias ficaram comprovadas: aviões voltavam para a base com a fuselagem crivada de balas. O Su-25T é a versão mais avançada, equipada com o sistema Shkval — uma câmera de TV/laser que permite engajamentos de precisão cirúrgica com mísseis guiados como o Vikhr antitanque.

Com ele, o Su-25T se tornou um dos sistemas de armas ar-terra mais eficazes do mundo, capaz de destruir tanques individuais a 8 km de distância.`,
    briefing_dcs: `No DCS, o Su-25T é gratuito e a melhor escola para aprender CAS (Close Air Support). O coração do avião é o Shkval — aprenda a operar essa câmera e você domina tudo.

O fluxo básico é: ativar modo Ar-Terra (7), ligar o Shkval (O), mover a câmera até o alvo, travar (Enter) e disparar. Para iniciantes, comece com o Kh-29T e KAB-500Kr que são fogo e esqueça. Quando ganhar confiança, o Vikhr é devastador contra tanques.

O Su-25T também pode fazer SEAD com o Kh-58 — destruindo radares SAM de até 120 km de distância.`,
    weapons: [
      // Mísseis Guiados AG
      { cat: 'Guiado AG', name: 'Vikhr (9A4172)', sub: 'Antitanque principal', guidance: 'Laser Beam-riding', range: '~8 km', main: true, ff: false, desc: 'O míssil antitanque principal do Su-25T. Voa dentro do feixe laser do Shkval como num túnel — não segue reflexo, segue o eixo do feixe. Até 16 por missão. Exige manter o Shkval travado no alvo até o impacto.' },
      { cat: 'Guiado AG', name: 'Kh-29T', sub: 'Míssil pesado TV', guidance: 'TV — Fogo e Esqueça', range: '~10 km', main: true, ff: true, desc: 'Versão TV do Kh-29 — trave o alvo na câmera e esqueça, o míssil guia sozinho. Ogiva pesada ideal para bunkers, pontes e estruturas fixas. Recomendado para iniciantes.' },
      { cat: 'Guiado AG', name: 'Kh-29L', sub: 'Míssil pesado laser', guidance: 'Laser Semi-ativo', range: '~10 km', main: false, ff: false, desc: 'Versão laser do Kh-29. Ogiva pesada (mais destrutiva que o Kh-25ML) para alvos hardened como bunkers e instalações. Exige manter o laser no alvo até o impacto.' },
      { cat: 'Guiado AG', name: 'Kh-25ML', sub: 'Míssil leve laser', guidance: 'Laser Semi-ativo', range: '~10 km', main: false, ff: false, desc: 'Versão laser do Kh-25. Leve e versátil — funciona contra bunkers, veículos blindados e posições de radar. Exige manter o laser no alvo até o impacto.' },
      { cat: 'Guiado AG', name: 'Kh-25MP', sub: 'Anti-radar curto alcance', guidance: 'Anti-Radar (Passivo)', range: '~40 km', main: false, ff: true, desc: 'Versão anti-radiação do Kh-25. Busca e ataca radares emissores. Alcance menor que o Kh-58, mas útil contra SAMs leves e AAA guiada por radar. Requer pod Fantasmagoria.' },
      { cat: 'Guiado AG', name: 'S-25L', sub: 'Foguete pesado laser 340mm', guidance: 'Laser Semi-ativo', range: '~7 km', main: false, ff: false, desc: 'Foguete pesado de 340mm com cabeça de guia laser. Enorme poder destrutivo contra alvos fixos fortemente blindados. Funciona como um míssil laser-guiado de grande calibre.' },
      { cat: 'Guiado AG', name: 'KAB-500Kr', sub: 'Bomba guiada TV 500kg', guidance: 'TV — Fogo e Esqueça', range: '—', main: false, ff: true, desc: 'Bomba de 500kg guiada por TV. Trave o alvo na câmera e solte — a bomba guia sozinha até o impacto. Devastadora contra alvos fixos como depósitos, hangares e quartéis.' },
      // SEAD
      { cat: 'SEAD', name: 'Kh-58', sub: 'Míssil anti-radar longo alcance', guidance: 'Anti-Radar — Fogo e Esqueça', range: '~120 km', main: true, ff: true, desc: 'O maior alcance do arsenal do Su-25T. Busca e destrói radares emissores automaticamente. Essencial para missões SEAD. Requer pod Fantasmagoria (tecla I) para ativar detecção de radar.' },
      // Autodefesa
      { cat: 'Autodefesa AA', name: 'R-73 Archer', sub: 'Míssil IR curto alcance', guidance: 'Infravermelho HOBS', range: '~30 km', main: false, ff: true, desc: 'Para autodefesa contra caças e helicópteros. Alta manobralidade — pode engajar alvos em ângulos extremos. Use o modo AA (tecla 6) para ativar.' },
      { cat: 'Autodefesa AA', name: 'R-60M Aphid', sub: 'Míssil IR — autodefesa', guidance: 'Infravermelho', range: '~8 km', main: false, ff: true, desc: 'Míssil de curto alcance mais antigo que o R-73. Menor e mais leve, ainda eficaz para autodefesa de emergência contra alvos lentos como helicópteros.' },
      // Canhão
      { cat: 'Canhão', name: 'GSh-30-2', sub: 'Canhão duplo 30mm — interno', guidance: '—', range: '< 1 km', main: false, ff: false, desc: 'Canhão duplo de 30mm com 200 projéteis. Eficaz contra veículos leves, tropas a descoberto e helicópteros em ataques rasantes. Selecione com a tecla C em modo AG.' },
      { cat: 'Canhão', name: 'SPPU-22 (GSh-23)', sub: 'Pod canhão 23mm inclinável', guidance: '—', range: '< 1 km', main: false, ff: false, desc: 'Pod de canhão com cano inclinável até -30°, permitindo ataques ao solo em voo nivelado sem precisar mergulhar. Alternativa tática ao canhão interno.' },
      // Foguetes
      { cat: 'Foguetes', name: 'S-8 (B-8M1)', sub: '20x foguetes 70mm', guidance: 'Não guiado', range: '~4 km', main: false, ff: false, desc: 'Foguetes leves S-8 em pods de 20 unidades. Disponível em variantes: KOM (antitanque HEAT), OFP2 (fragmentação pesada) e TsM (fumaça/marcação). Ótimos contra tropas e veículos leves.' },
      { cat: 'Foguetes', name: 'S-13 (UB-13)', sub: '5x foguetes 122mm', guidance: 'Não guiado', range: '~3 km', main: false, ff: false, desc: 'Foguetes médios S-13 em pods de 5 unidades. Mais potentes que o S-8. Variante APAM eficaz contra posições fortemente defendidas, bunkers e pistas de pouso.' },
      { cat: 'Foguetes', name: 'S-24B', sub: 'Foguete pesado 240mm', guidance: 'Não guiado', range: '~4 km', main: false, ff: false, desc: 'Foguete pesado individual de 240mm. Enorme poder destrutivo em disparo único. Usado contra alvos hardened, estruturas e veículos pesados.' },
      { cat: 'Foguetes', name: 'S-25OFM', sub: 'Foguete pesado 340mm', guidance: 'Não guiado', range: '~3 km', main: false, ff: false, desc: 'O maior foguete não-guiado do Su-25T em 340mm. Devastador contra instalações fixas e alvos grandes. Versão não-guiada do S-25L.' },
      // Bombas livres
      { cat: 'Bombas', name: 'FAB-100 / FAB-250 / FAB-500', sub: 'Bombas propósito geral', guidance: 'Livre (Iron Bomb)', range: '—', main: false, ff: false, desc: 'Família de bombas de propósito geral de 100, 250 e 500 kg. Ideais para destruição de área, depósitos, concentrações de veículos e instalações. Podem ser lançadas em salva (ripple).' },
      { cat: 'Bombas', name: 'BetAB-500 / BetAB-500ShP', sub: 'Bombas penetradoras de concreto', guidance: 'Livre', range: '—', main: false, ff: false, desc: 'Bombas penetradoras de 500kg para destruir pistas de pouso, bunkers subterrâneos e abrigos de concreto. A versão ShP tem foguete de aceleração para maior penetração.' },
      { cat: 'Bombas', name: 'RBK-250 / RBK-500', sub: 'Bombas cluster', guidance: 'Livre (Cluster)', range: '—', main: false, ff: false, desc: 'Bombas cluster que dispersam submunições sobre área. RBK-250 com PTAB-2.5M (antitanque) e RBK-500 com variantes PTAB-10-5 e PTAB-1M. Eficazes contra formações de tanques e veículos.' },
      { cat: 'Bombas', name: 'KMGU-2', sub: 'Dispenser de submunições', guidance: 'Livre', range: '—', main: false, ff: false, desc: 'Dispenser carregando 96 submunições AO-2.5RT (fragmentação) ou PTAB-2.5KO (antitanque). Satura ampla área com dezenas de explosões — ideal contra concentrações de tropas ou veículos leves.' },
      { cat: 'Bombas', name: 'SAB-100', sub: 'Bomba iluminadora', guidance: 'Livre', range: '—', main: false, ff: false, desc: 'Bomba iluminadora para missões noturnas. Queima por 2 minutos iluminando a área alvo. Use sobreposta ao alvo para permitir engajamentos noturnos sem Merkury.' },
    ],
    hotkeys: [
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'RShift + L', action: 'Iniciar APU', desc: 'Sempre o primeiro passo. Liga a unidade auxiliar de potência.', essential: true },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'RAlt + Home', action: 'Ligar Motor #1', desc: 'Após APU estar operacional.', essential: true },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'RCtrl + Home', action: 'Ligar Motor #2', desc: 'Ligue logo após o primeiro estabilizar.', essential: true },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'Ctrl + C', action: 'Fechar/Abrir Canopy', desc: 'Feche antes de taxiar.', essential: false },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'W', action: 'Freio de Roda', desc: 'Segure para frear no solo.', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'F', action: 'Flaps', desc: 'Baixar flaps para decolagem e pouso.', essential: true },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'G', action: 'Trem de Pouso', desc: 'Recolhe/estende. Recolha após decolar.', essential: true },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: '1', action: 'Modo Navegação', desc: 'Ativa navegação por waypoints no HUD.', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'RCtrl + .', action: 'Trim Nariz Acima', desc: '', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'RCtrl + ;', action: 'Trim Nariz Abaixo', desc: '', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'LCtrl + T', action: 'Reset do Trim', desc: 'Retorna todos os trims ao neutro.', essential: false },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: '7', action: 'Modo Ar-Terra', desc: 'DEVE ser ativado antes de qualquer ataque. Ativa o Shkval.', essential: true },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'D', action: 'Ciclar Estações de Armas', desc: 'Alterna entre pylons para selecionar a arma desejada.', essential: true },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'Space', action: 'Disparar', desc: 'Funciona para canhão, foguetes, bombas e mísseis.', essential: true },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'C', action: 'Selecionar Canhão GSh-30', desc: 'Ativa o canhão de 30mm.', essential: false },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'I', action: 'Fantasmagoria (ECM)', desc: 'Necessário para mísseis anti-radar Kh-25MPU e Kh-58.', essential: false },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'Ctrl + V', action: 'Modo Salva', desc: 'Lança arma em salva (ex: 4 pods de foguete simultâneos).', essential: false },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'Ctrl + W', action: 'Ejetar Armamentos', desc: 'Joga fora armas externas em emergência.', essential: false },
      { cat: 'shkval', catLabel: 'Shkval (Mira)', catIcon: '🎯', keys: 'O', action: 'Ligar/Desligar Shkval', desc: 'Ativa a câmera de TV de mira. ESSENCIAL — sem isso nada guiado funciona.', essential: true },
      { cat: 'shkval', catLabel: 'Shkval (Mira)', catIcon: '🎯', keys: 'Enter', action: 'Travar Alvo', desc: 'Trava o Shkval no alvo. O sistema rastreia automaticamente.', essential: true },
      { cat: 'shkval', catLabel: 'Shkval (Mira)', catIcon: '🎯', keys: ';', action: 'Mover Shkval Cima', desc: '', essential: false },
      { cat: 'shkval', catLabel: 'Shkval (Mira)', catIcon: '🎯', keys: '.', action: 'Mover Shkval Baixo', desc: '', essential: false },
      { cat: 'shkval', catLabel: 'Shkval (Mira)', catIcon: '🎯', keys: ',', action: 'Mover Shkval Esquerda', desc: '', essential: false },
      { cat: 'shkval', catLabel: 'Shkval (Mira)', catIcon: '🎯', keys: '/', action: 'Mover Shkval Direita', desc: '', essential: false },
      { cat: 'shkval', catLabel: 'Shkval (Mira)', catIcon: '🎯', keys: 'RAlt + F9', action: 'Auto-Travar Alvo Próximo', desc: 'O Shkval localiza e trava o alvo terrestre mais próximo automaticamente.', essential: false },
      { cat: 'cm', catLabel: 'Contramédidas', catIcon: '🛡️', keys: 'Insert', action: 'Lançar Chaff', desc: 'Contra mísseis guiados por radar. Use ao ouvir aviso de radar travado.', essential: true },
      { cat: 'cm', catLabel: 'Contramédidas', catIcon: '🛡️', keys: 'Delete', action: 'Lançar Flares', desc: 'Contra mísseis infravermelhos (MANPADS, AIM-9).', essential: true },
      { cat: 'cm', catLabel: 'Contramédidas', catIcon: '🛡️', keys: 'Shift + E', action: 'Jammer IR Traseiro', desc: 'Interferência IR no hemisfério traseiro.', essential: false },
      { cat: 'autopilot', catLabel: 'Autopiloto', catIcon: '🤖', keys: 'LAlt + 1', action: 'AP Attitude Hold', desc: 'Mantém pitch e bank. Use ao operar o Shkval.', essential: false },
      { cat: 'autopilot', catLabel: 'Autopiloto', catIcon: '🤖', keys: 'LAlt + 3', action: 'AP Voo Nivelado', desc: 'Botão do pânico — retorna ao voo reto e nivelado.', essential: true },
      { cat: 'autopilot', catLabel: 'Autopiloto', catIcon: '🤖', keys: 'LAlt + 9', action: 'Desligar Autopiloto', desc: 'Desativa qualquer modo AP. Sempre desative antes de manobrar.', essential: false },
    ]
  },

  su30: {
    id: 'su30',
    name: 'Su-30 Flanker-C/H',
    nation: 'Russia / Export',
    flag: '🇷🇺',
    role: 'Caça Multifunção Biplace',
    era: 'Pós-Guerra Fria / Moderno',
    speed: 'Mach 2.0 (~2.120 km/h)',
    engine: '2x Saturn AL-31FL/FP com vetorização de empuxo',
    color: '#c97aff',
    tag: 'MOD GRATUITO',
    briefing_real: `O Su-30 é o filho mais ambicioso do Su-27 — um caça biplace de longo alcance que conseguiu algo raro: ser ao mesmo tempo um interceptor de superioridade aérea e uma plataforma de ataque ao solo de precisão. Desenvolvido a partir do Su-27UB (versão de treinamento duplo), o Su-30 ganhou aviônica avançada, radar de phased array, vetorização de empuxo e canards que o tornam supermanobráveis mesmo com cargas pesadas.

O maior sucesso da família é o Su-30MKI indiano, que em 2004 durante o exercício Cope India venceu 90% das missões de combate simulado contra F-15C americanos — embora os parâmetros favorecessem os indianos. O modelo brasileiro da família é o MKI, que a FAB cogitou adquirir antes de optar pelo Gripen.

Com mais de 635 unidades produzidas e operado por mais de 13 países incluindo Índia, China, Malásia, Argélia e Venezuela, o Su-30 é hoje o espinha dorsal de várias forças aéreas ao redor do mundo.`,
    briefing_dcs: `No DCS, o Su-30 é um mod gratuito desenvolvido pela equipe Codename Flanker. Diferente dos outros aviões desta lista, ele tem cockpit totalmente clicável com UFCP (painel de controle digital frontal) — não é um avião Flaming Cliffs. Ele combina capacidade ar-ar do Su-33 com ar-terra do Su-25T em uma única plataforma, com EFM (Extended Flight Model) próprio que inclui fly-by-wire e vetorização de empuxo.

Com o DLC CWS (Custom Weapon System, também gratuito) você tem acesso a um arsenal enorme: BrahMos, R-77M de radar ativo, Kh-31 anti-radar supersônico e muito mais.

⚠️ Pré-requisitos: versões antigas do mod exigiam Su-25T + Su-33 ou FC3. As versões mais recentes (EFM v2.7.98b+) são standalone — apenas o DCS World base é necessário. Verifique no Discord oficial (discord.gg/codename-flanker) qual versão você tem e se precisa de algum módulo adicional.

Por ser um mod comunitário, pode parar de funcionar com atualizações do DCS. Para multiplayer, o servidor também precisa ter o mod ativo.`,
    weapons: [
      // BVR
      { cat: 'BVR', name: 'R-77M (AA-12 Adder)', sub: 'Míssil BVR radar ativo', guidance: 'Radar Ativo — Fogo e Esqueça', range: '~110 km', main: true, ff: true, desc: 'Versão modernizada do R-77 com radar ativo — equivalente ao AIM-120 AMRAAM. Fogo e esqueça: dispare e manobre para o próximo alvo. Grande upgrade em relação ao R-27 do Su-27 original.' },
      { cat: 'BVR', name: 'R-27ER / R-27R', sub: 'BVR radar semi-ativo', guidance: 'Radar Semi-ativo', range: '~80 km / ~45 km', main: false, ff: false, desc: 'Mísseis herdados da família Su-27. Exigem radar travado até o impacto. Ainda carregados como complemento ao R-77M em cargas mistas.' },
      { cat: 'BVR', name: 'R-27ET / R-27T', sub: 'BVR infravermelho', guidance: 'Infravermelho', range: '~80 km / ~40 km', main: false, ff: true, desc: 'Versão IR do R-27 — ataque silencioso sem alertar o RWR do inimigo. Combine com IRST para engajamento completamente passivo.' },
      // WVR
      { cat: 'WVR', name: 'R-73 Archer', sub: 'Dogfight principal', guidance: 'IR HOBS', range: '~30 km', main: true, ff: true, desc: 'Alta manobralidade + HMS. Olhe para o inimigo e dispare sem apontar o nariz. A combinação mais letal em combate visual próximo.' },
      { cat: 'WVR', name: 'Astra Mk1', sub: 'Míssil BVR indiano', guidance: 'Radar Ativo', range: '~80 km', main: false, ff: true, desc: 'Míssil ar-ar de radar ativo desenvolvido pela Índia para o Su-30MKI. Disponível no mod CWS como armamento de exportação exótico.' },
      // Canhão
      { cat: 'Canhão', name: 'GSh-30-1', sub: 'Canhão interno 30mm', guidance: '—', range: '< 1 km', main: false, ff: false, desc: 'Canhão de 30mm no bordo direito da asa. 150 projéteis. Mais destrutivo por projétil que o Vulcan americano de 20mm.' },
      // AG guiado
      { cat: 'Guiado AG', name: 'BrahMos', sub: 'Míssil supersônico de cruzeiro', guidance: 'Inercial + GPS + Ativo', range: '~290 km', main: true, ff: true, desc: 'O armamento mais poderoso do mod. Míssil de cruzeiro supersônico (Mach 3) desenvolvido por Índia e Rússia. Uma única unidade pode destruir instalações navais ou terrestres de grande porte. Requer CWS.' },
      { cat: 'Guiado AG', name: 'Kh-31P / Kh-31PD', sub: 'Anti-radar SEAD', guidance: 'Anti-Radar — Fogo e Esqueça', range: '~110 km / ~180 km', main: true, ff: true, desc: 'Míssil supersônico anti-radar. Muito mais rápido que o Kh-58 do Su-25T — difícil de interceptar. O PD é a versão de alcance estendido. Essencial para SEAD no Su-30.' },
      { cat: 'Guiado AG', name: 'Kh-29T / Kh-29L', sub: 'Míssil pesado ar-terra', guidance: 'TV / Laser Semi-ativo', range: '~10 km', main: false, ff: true, desc: 'Míssil pesado para alvos fixos. Versão T é fogo e esqueça (TV). Versão L exige laser no alvo. Operados via sistema Shkval em modo AG.' },
      { cat: 'Guiado AG', name: 'Kh-35', sub: 'Míssil anti-navio', guidance: 'Inercial + Radar Ativo', range: '~130 km', main: false, ff: true, desc: 'Míssil anti-navio subsônico similar ao Harpoon americano. Voa rente ao mar para evitar detecção. Disponível no mod CWS para missões navais.' },
      { cat: 'Guiado AG', name: 'Kh-38MLE', sub: 'Míssil modular laser/GPS', guidance: 'Laser / GPS', range: '~40 km', main: false, ff: true, desc: 'Míssil moderno de precisão com cabeça de guia laser ou GPS. Mais versátil que o Kh-29. Disponível no mod CWS.' },
      { cat: 'Guiado AG', name: 'Kh-59', sub: 'Míssil de cruzeiro tático', guidance: 'TV + Inercial', range: '~115 km', main: false, ff: true, desc: 'Míssil de cruzeiro tático de longo alcance para ataques a alvos fixos de alto valor. Guia por TV na fase terminal.' },
      // Bombas guiadas
      { cat: 'Bombas Guiadas', name: 'KAB-500L / KAB-500Kr', sub: 'Bomba guiada 500kg', guidance: 'Laser / TV', range: '—', main: false, ff: true, desc: 'Bomba de 500kg guiada por laser ou TV. A versão Kr é fogo e esqueça. Operadas via Shkval em modo AG.' },
      { cat: 'Bombas Guiadas', name: 'KAB-1500LG-PR', sub: 'Bomba penetradora guiada 1500kg', guidance: 'Laser', range: '—', main: false, ff: false, desc: 'Bomba pesada penetradora de 1500kg com guia laser. Para destruir instalações subterrâneas, bunkers profundos e estruturas fortemente reforçadas.' },
      { cat: 'Bombas Guiadas', name: 'GBU-12 / GBU-16 / GBU-24', sub: 'Bombas Paveway laser-guiadas', guidance: 'Laser (Paveway)', range: '—', main: false, ff: false, desc: 'Família de bombas guiadas americanas disponível em variantes de exportação via mod CWS. Requer JTAC ou auto-lase externo para funcionar no DCS.' },
      // Bombas livres
      { cat: 'Bombas', name: 'FAB-250 / FAB-500', sub: 'Bombas propósito geral', guidance: 'Livre', range: '—', main: false, ff: false, desc: 'Bombas não guiadas de 250 e 500kg para destruição de área. O Su-30 pode carregar até 8 FAB-500 em configuração bomba pura.' },
      { cat: 'Bombas', name: 'RBK-250 / RBK-500', sub: 'Bombas cluster', guidance: 'Livre', range: '—', main: false, ff: false, desc: 'Bombas cluster com submunições antitanque PTAB. Eficazes contra concentrações de veículos e equipamentos militares em campo aberto.' },
    ],
    hotkeys: [
      // Inicialização
      // Inicialização
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'Cockpit clicável', action: 'Cold Start via UFCP', desc: 'O Su-30 tem cockpit totalmente clicável. A inicialização é feita pelos switches físicos do cockpit, não por hotkeys como nos FC. Consulte o manual no kneeboard (K) ou os tutoriais oficiais no Discord/YouTube do Codename Flanker.', essential: true },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'RShift + Home', action: 'Ligar Motores (atalho)', desc: 'Pode funcionar como atalho rápido para ligar ambos os motores em algumas versões. Tente caso o cold start clicável seja muito complexo inicialmente.', essential: false },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'RShift + L', action: 'Ligar Sistemas Elétricos', desc: 'Atalho para ligar energia — pode funcionar como alternativa ao cockpit clicável em algumas versões.', essential: false },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'W', action: 'Freio de Roda', desc: 'Segure para manter o avião parado no solo durante o startup.', essential: false },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'RAlt + R', action: 'Ejetar Tanques Externos', desc: 'Descarte antes do combate para maximizar performance.', essential: false },
      // Voo
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'G', action: 'Trem de Pouso', desc: 'Recolhe/estende. Recolha imediatamente após decolar.', essential: true },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'F', action: 'Flaps', desc: 'Cicla entre posições de decolagem e pouso.', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'B', action: 'Freio Aerodinâmico', desc: 'Reduz velocidade. O Su-30 retém energia em curvas — use para perder velocidade antes do pouso.', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'RCtrl + .', action: 'Trim Nariz Acima', desc: '', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'RCtrl + ;', action: 'Trim Nariz Abaixo', desc: '', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'LAlt + 3', action: 'AP Voo Nivelado', desc: 'Botão do pânico — retorna ao voo reto e nivelado imediatamente.', essential: false },
      // Radar / IRST
      { cat: 'radar', catLabel: 'Radar / IRST', catIcon: '📡', keys: 'I', action: 'Ligar/Desligar Radar', desc: 'Ativa o radar do Su-30 via cockpit ou hotkey. Ligue ao entrar em zona de combate.', essential: true },
      { cat: 'radar', catLabel: 'Radar / IRST', catIcon: '📡', keys: 'O', action: 'Ligar/Desligar IRST (OLS)', desc: 'Sensor IR passivo — detecta alvos sem emitir radar. Exclusivo do Su-30, não presente em todos os FC.', essential: true },
      { cat: 'radar', catLabel: 'Radar / IRST', catIcon: '📡', keys: '5', action: 'Modo HMS (Helmet Sight)', desc: 'Mira do capacete. Olhe para o inimigo — o radar/IRST trava automaticamente. Use com R-73.', essential: true },
      { cat: 'radar', catLabel: 'Radar / IRST', catIcon: '📡', keys: '4', action: 'Modo BVR (Longo Alcance)', desc: 'Modo principal para R-77M e R-27. Rastreia alvos em distâncias maiores.', essential: false },
      { cat: 'radar', catLabel: 'Radar / IRST', catIcon: '📡', keys: '2', action: 'Modo BFR (Dogfight)', desc: 'Varredura vertical automática para combate próximo.', essential: false },
      { cat: 'radar', catLabel: 'Radar / IRST', catIcon: '📡', keys: '; . , /', action: 'Mover Cursor Radar/IRST', desc: 'Direciona a zona de varredura para onde você espera os alvos.', essential: false },
      { cat: 'radar', catLabel: 'Radar / IRST', catIcon: '📡', keys: 'Enter', action: 'Travar Alvo', desc: 'Trava radar/IRST no contato selecionado para engajamento.', essential: true },
      // Armas AA
      { cat: 'weapons_aa', catLabel: 'Armas AA', catIcon: '💥', keys: 'Botão A/A no UFCP', action: 'Ativar Modo Ar-Ar', desc: 'Clique no switch A/A do UFCP no cockpit para entrar em modo ar-ar. É o ponto de partida para todo engajamento AA.', essential: true },
      { cat: 'weapons_aa', catLabel: 'Armas AA', catIcon: '💥', keys: 'P', action: 'Ciclar Armas Ar-Ar', desc: 'Alterna entre os mísseis AA disponíveis (R-77M, R-27ER, R-27ET, R-73 etc.). Herdado do Su-33 base.', essential: true },
      { cat: 'weapons_aa', catLabel: 'Armas AA', catIcon: '💥', keys: 'Space', action: 'Disparar Míssil (Weapon Fire)', desc: 'Dispara o míssil AA selecionado após travamento de alvo. Keybind: "Weapon Fire" nos controles do DCS.', essential: true },
      { cat: 'weapons_aa', catLabel: 'Armas AA', catIcon: '💥', keys: 'C', action: 'Selecionar Canhão', desc: 'Seleciona o canhão GSh-30-1 como arma ativa em modo AA.', essential: false },
      { cat: 'weapons_aa', catLabel: 'Armas AA', catIcon: '💥', keys: 'LAlt + W', action: 'Launch Permission Override', desc: 'Necessário para lançar R-77M e mísseis que o sistema não autoriza automaticamente. Herdado do Su-33. Keybind: "Launch Permission Override".', essential: false },
      // Armas AG (CWS)
      { cat: 'weapons_ag', catLabel: 'Armas AG (CWS)', catIcon: '🎯', keys: '7 ou A/G no UFCP', action: 'Ativar Modo Ar-Terra', desc: 'Pressione 7 (keybind padrão) ou clique no switch A/G do UFCP. OBRIGATÓRIO antes de qualquer ataque ao solo com o CWS.', essential: true },
      { cat: 'weapons_ag', catLabel: 'Armas AG (CWS)', catIcon: '🎯', keys: 'EO System ON/OFF', action: 'Ligar TGP (Targeting Pod)', desc: 'Keybind mapeável: "Electro-Optical System ON/OFF" nos controles do DCS. Liga a câmera de targeting. Por padrão pode ser a tecla O dependendo da versão.', essential: true },
      { cat: 'weapons_ag', catLabel: 'Armas AG (CWS)', catIcon: '🎯', keys: '; . , /', action: 'Mover TGP (Target Designator)', desc: 'Keybinds: "Target Designator Up/Down/Left/Right". Move a câmera para encontrar o alvo. Teclas padrão: ; (cima), . (baixo), , (esquerda), / (direita).', essential: true },
      { cat: 'weapons_ag', catLabel: 'Armas AG (CWS)', catIcon: '🎯', keys: 'Target Lock', action: 'Travar Alvo / Modo Estabilização', desc: 'Keybind mapeável: "Target Lock". Trava o TGP no alvo e entra em modo estabilização, que alimenta coordenadas GPS/INS para as armas guiadas. Tecla padrão: Enter.', essential: true },
      { cat: 'weapons_ag', catLabel: 'Armas AG (CWS)', catIcon: '🎯', keys: 'D', action: 'Ciclar Armas AG (Select Weapon)', desc: 'Alterna entre as armas ar-terra no pylon ativo. Keybind: "Select Weapon" ou equivalente nos controles do DCS.', essential: true },
      { cat: 'weapons_ag', catLabel: 'Armas AG (CWS)', catIcon: '🎯', keys: 'Space / Weapon Fire', action: 'Lançar Arma AG', desc: 'Keybind: "Weapon Fire". Dispara o míssil ou lança a bomba. Para armas GPS/INS e anti-radar, use Launch Permission Override antes.', essential: true },
      { cat: 'weapons_ag', catLabel: 'Armas AG (CWS)', catIcon: '🎯', keys: 'LAlt + W', action: 'Launch Permission Override', desc: 'Essencial para lançar armas GPS, INS, BrahMos e anti-radar quando o CWS não autoriza o lançamento automaticamente.', essential: false },
      { cat: 'weapons_ag', catLabel: 'Armas AG (CWS)', catIcon: '🎯', keys: 'I', action: 'Modo ELINT (SEAD)', desc: 'Ativa detecção passiva de radares. Emissores SAM aparecem como diamantes no HUD. Use com Kh-31P anti-radar.', essential: false },
      { cat: 'weapons_ag', catLabel: 'Armas AG (CWS)', catIcon: '🎯', keys: 'Ctrl + W', action: 'Ejetar Armamentos', desc: 'Emergency jettison das armas externas.', essential: false },
      // Contramédidas
      { cat: 'cm', catLabel: 'Contramédidas', catIcon: '🛡️', keys: 'Insert', action: 'Lançar Chaff', desc: 'Contra mísseis guiados por radar (AIM-120, R-27R inimigo).', essential: true },
      { cat: 'cm', catLabel: 'Contramédidas', catIcon: '🛡️', keys: 'Delete', action: 'Lançar Flares', desc: 'Contra mísseis infravermelhos (AIM-9, R-73 inimigo).', essential: true },
      { cat: 'cm', catLabel: 'Contramédidas', catIcon: '🛡️', keys: 'Shift + E', action: 'Jammer IR Traseiro', desc: 'Interferência IR no hemisfério traseiro. Combine com flares e manobra evasiva.', essential: false },
    ]
  },

  a4e: {
    id: 'a4e',
    name: 'A-4E Skyhawk',
    nation: 'EUA / US Navy',
    flag: '🇺🇸',
    role: 'Ataque ao Solo / CAS Naval',
    era: 'Guerra Fria — Vietnam (1956–)',
    speed: '~1.077 km/h (Mach 0.9)',
    engine: '1x Pratt & Whitney J52-P-8A (8.500 lbf)',
    color: '#ffaa00',
    tag: 'MOD GRATUITO',
    briefing_real: `O Douglas A-4 Skyhawk, carinhosamente apelidado de "Scooter" pelos pilotos americanos, foi um dos maiores paradoxos da aviação militar: um avião pequeno, barato e simples que se tornou um dos mais versáteis e duradouros da Guerra Fria. Projetado por Ed Heinemann em apenas dois anos nos anos 1950, o A-4 pesava metade do peso máximo especificado pela Marinha americana — e ainda assim superou todas as expectativas.

O Skyhawk foi a espinha dorsal da aviação naval americana no Vietnam, participando de inúmeras missões de ataque ao solo, supressão de defesas aéreas e até combate ar-ar contra MiGs. Ficou famoso pela campanha das Malvinas em 1982, onde pilotos argentinos com A-4s afundaram três navios britânicos com bombas convencionais — em condições extremamente adversas.

O A-4 foi operado por EUA, Israel, Austrália, Argentina, Brasil, Cingapura e outros 12 países. A Marinha do Brasil operou o A-4 Skyhawk no NAe São Paulo até 2001. Com mais de 2.960 unidades produzidas e décadas de serviço em conflitos reais, o Scooter é um dos maiores legados da aviação de ataque do século XX.`,
    briefing_dcs: `O A-4E-C é amplamente considerado o melhor mod comunitário já feito para o DCS World — e muitos veteranos o colocam acima de vários módulos pagos em qualidade. É um módulo full-fidelity completo: cockpit totalmente clicável, sistemas simulados com precisão histórica, radar de ataque ao solo, computador de bombardeio CP-741/A, e reabastecimento aéreo (um dos únicos mods com essa capacidade).

Por ser full-fidelity, a curva de aprendizado é maior que os Flaming Cliffs. Mas a equipe comunidade desenvolveu um manual completo acessível via kneeboard no jogo (K), tornando o aprendizado muito mais acessível. O A-4E-C é ideal para quem quer aprender CAS naval, SEAD com AGM-45 Shrike, e operações de porta-aviões sem pagar por um módulo oficial.

Atenção: requer download separado do GitHub oficial. Não distribua o mod — é política da equipe desenvolvedora.`,
    weapons: [
      // AA
      { cat: 'Ar-Ar', name: 'AIM-9J / AIM-9P3 Sidewinder', sub: 'Autodefesa IR', guidance: 'Infravermelho', range: '~18 km', main: false, ff: true, desc: 'Mísseis de calor para autodefesa. Disponíveis nos pylons internos e externos. Lembre-se: o Scooter é um bombardeiro — AIM-9s são para emergência, não ofensiva.' },
      // SEAD
      { cat: 'SEAD', name: 'AGM-45B Shrike', sub: 'Míssil anti-radar', guidance: 'Anti-Radar (Passivo)', range: '~25-40 km', main: true, ff: true, desc: 'A arma mais única do A-4E no DCS. Busca e ataca radares emissores automaticamente. Na versão 2.3 você pode selecionar o tipo de seeker antes do voo (LShift+1/2/4/5 por estação). Extremamente eficaz contra SAMs em modo SEAD/IRONHAND.' },
      // Bombas guiadas
      { cat: 'Guiado AG', name: 'AGM-62 Walleye I / II', sub: 'Bomba guiada TV', guidance: 'TV — Fogo e Esqueça', range: '~20 km', main: true, ff: true, desc: 'Bomba planante guiada por TV — uma das primeiras armas "smart" americanas. Trave o alvo na TV antes do lançamento e ela guia sozinha. O A-4E é uma das poucas aeronaves do DCS que pode usar o Walleye.' },
      // Bombas livres
      { cat: 'Bombas', name: 'Mk-81 / Mk-82 / Mk-83 / Mk-84', sub: 'Série Mk-80 propósito geral', guidance: 'Livre', range: '—', main: true, ff: false, desc: 'A família completa de bombas americanas de 250 a 2.000 lb. O A-4E pode carregar mais de 6.000 lb de Mk-82 com racks MER/TER. Disponível em versões retardadas (AIR Ballute) para ataques a baixa altitude.' },
      { cat: 'Bombas', name: 'AN-M30 / AN-M57 / AN-M64 / AN-M65', sub: 'Bombas WWII (ainda explodem!)', guidance: 'Livre', range: '—', main: false, ff: false, desc: 'Munições remanescentes da Segunda Guerra Mundial disponíveis no loadout. Funcionam como bombas convencionais — curiosidade histórica com uso real em missões de área.' },
      { cat: 'Bombas', name: 'Mk-20 Rockeye', sub: 'Bomba cluster antitanque', guidance: 'Livre (Cluster)', range: '—', main: false, ff: false, desc: 'Bomba cluster com 247 submunições HEAT antitanque. Eficaz contra concentrações de blindados e veículos. Disponível em configurações simples ou múltiplas com racks MER.' },
      { cat: 'Bombas', name: 'CBU-1/A e CBU-2/A', sub: 'Dispensers de bomblets', guidance: 'Livre (Cluster)', range: '—', main: false, ff: false, desc: 'Dispensers de submunições que saturam áreas com dezenas de bomblets. Eficazes contra tropas, veículos leves e equipamentos ao ar livre. Atenção: lançar 40+ bomblets pode causar queda de FPS.' },
      // Foguetes
      { cat: 'Foguetes', name: 'Zuni (LAU-10) — 4x 127mm', sub: 'Foguete pesado naval', guidance: 'Não guiado', range: '~6 km', main: false, ff: false, desc: 'Foguetes Zuni de 127mm em pods de 4 unidades. Alta velocidade e poder destrutivo. Favoritos da US Navy e USMC para CAS próximo. Opção mais potente que os Hydras.' },
      { cat: 'Foguetes', name: 'Hydra 70 (LAU-3/LAU-68)', sub: '19x ou 7x foguetes 70mm', guidance: 'Não guiado', range: '~4 km', main: false, ff: false, desc: 'Foguetes de 70mm em pods de 7 ou 19 unidades. Múltiplas variantes: HE, HEAT, WP (fósforo branco), iluminação e fumaça. Versáteis para supressão e marcação de alvos.' },
      // Canhão
      { cat: 'Canhão', name: '2x Mk-12 20mm (interno)', sub: 'Canhões internos', guidance: '—', range: '< 1,5 km', main: false, ff: false, desc: 'Dois canhões Mk-12 de 20mm com 200 projéteis cada (400 total) embutidos na raiz das asas. Eficazes contra alvos leves, embarcações pequenas e helicópteros em combate próximo.' },
      { cat: 'Canhão', name: 'Mk-4 HIPEG Gun Pod (20mm)', sub: 'Pod de canhão externo', guidance: '—', range: '< 1,5 km', main: false, ff: false, desc: 'Pod de canhão adicional de 20mm para aumentar cadência de fogo. Montado nos pylons — aumenta a capacidade antitanque leve e anti-pessoal em passes rasantes.' },
      // Especial
      { cat: 'Especial', name: 'Reabastecimento Aéreo', sub: 'Drogue & probe', guidance: '—', range: '—', main: true, ff: false, desc: 'O A-4E-C é um dos únicos mods do DCS com reabastecimento aéreo funcional. Use os comandos de rádio (LShift+\\) para solicitar um tanker ao AWACS e pratique o engate no cone. Aumenta dramaticamente o raio de ação em missões longas.' },
      { cat: 'Especial', name: 'CP-741/A Bombing Computer', sub: 'Computador de bombardeio radar', guidance: 'Radar CCRP', range: '—', main: false, ff: false, desc: 'Sistema exclusivo do A-4E — use o radar de ataque para designar o alvo, ative o computador e mantenha a climb suave. Quando soar o tom, as bombas são liberadas automaticamente no ponto correto. Único no DCS para essa era.' },
    ],
    hotkeys: [
      // Inicialização
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'RShift + Home', action: 'Ligar Motor (J52)', desc: 'Liga o motor turbojato único. Aguarde o RPM estabilizar antes de prosseguir.', essential: true },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'RShift + L', action: 'Ligar Sistemas Elétricos', desc: 'Liga painéis elétricos e aviônica.', essential: true },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'LCtrl + W', action: 'Freio de Roda Esquerdo', desc: 'O A-4E não tem steering de nariz — usa frenagem diferencial para guiar no solo.', essential: false },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'LAlt + W', action: 'Freio de Roda Direito', desc: 'Frenagem diferencial direita. Essencial para manobrar no solo sem nose wheel steering.', essential: false },
      { cat: 'startup', catLabel: 'Inicialização', catIcon: '🔧', keys: 'LCtrl + J', action: 'Ejetar Armamentos (Jettison)', desc: 'Ejecta todas as armas em emergência. Antigo atalho do A-4E-C.', essential: false },
      // Voo
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'G', action: 'Trem de Pouso', desc: 'Recolhe/estende. Essencial para operações de porta-aviões — recolha imediatamente após o catapulta.', essential: true },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'F', action: 'Flaps', desc: 'Cicla posições. Use flap completo para apresamento no porta-aviões (aprox. 250 km/h em final).', essential: true },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'B', action: 'Freio Aerodinâmico / Spoilers', desc: 'Abre spoilers para reduzir velocidade rapidamente.', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'H', action: 'Gancho de Apresamento', desc: 'Baixa/recolhe o gancho para pousos em porta-aviões. Essencial para operações navais.', essential: true },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'U', action: 'Dobrar Asas', desc: 'Dobra/estende as asas para operações em convés de porta-aviões.', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'RCtrl + .', action: 'Trim Nariz Acima', desc: '', essential: false },
      { cat: 'flight', catLabel: 'Voo', catIcon: '✈️', keys: 'RCtrl + ;', action: 'Trim Nariz Abaixo', desc: '', essential: false },
      // Radar e sistemas
      { cat: 'radar', catLabel: 'Radar / Nav', catIcon: '📡', keys: 'K', action: 'Abrir Kneeboard Manual', desc: 'Abre o manual completo do A-4E-C diretamente no jogo. LEITURA ESSENCIAL para iniciantes — cobre todos os sistemas em detalhes.', essential: true },
      { cat: 'radar', catLabel: 'Radar / Nav', catIcon: '📡', keys: 'R', action: 'Ligar/Desligar Radar (AN/APG-53A)', desc: 'Ativa o radar de ataque ao solo. Usado para navegação, terrain clearance e como designador para o computador de bombardeio CP-741/A.', essential: false },
      { cat: 'radar', catLabel: 'Radar / Nav', catIcon: '📡', keys: 'Q', action: 'Modo RHWS (AN/APR-25)', desc: 'Radar Homing & Warning System — detecta radar inimigo via audio. Sem display visual, só som. Essencial para missões SEAD — aprenda a interpretar os tons.', essential: true },
      { cat: 'radar', catLabel: 'Radar / Nav', catIcon: '📡', keys: 'Num /', action: 'TACAN — Nav Rádio', desc: 'Sistema TACAN para navegação por referência de estações rádio e porta-aviões. Use para encontrar seu caminho de volta ao navio.', essential: false },
      // Armas
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'Space', action: 'Lançar / Disparar', desc: 'Dispara arma selecionada ou lança bomba no ponto correto. Para bombas com computador CP-741/A, aguarde o tom de lançamento automático.', essential: true },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'D', action: 'Ciclar Armas', desc: 'Alterna entre as armas disponíveis nos pylons.', essential: true },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'LCtrl + Space', action: 'Master Arm ON/OFF', desc: 'Liga/desliga a segurança das armas. Deve estar ON antes de qualquer disparo.', essential: true },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'LShift + 1', action: 'Seeker Head Estação 1 (Shrike)', desc: 'Seleciona o tipo de seeker do AGM-45 na estação 1. Use antes da decolagem. Disponível na v2.3.', essential: false },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'LShift + 2', action: 'Seeker Head Estação 2 (Shrike)', desc: 'Seleciona o tipo de seeker do AGM-45 na estação 2.', essential: false },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'LShift + 4', action: 'Seeker Head Estação 4 (Shrike)', desc: 'Seleciona o tipo de seeker do AGM-45 na estação 4.', essential: false },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'LShift + 5', action: 'Seeker Head Estação 5 (Shrike)', desc: 'Seleciona o tipo de seeker do AGM-45 na estação 5.', essential: false },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '💥', keys: 'Ctrl + W', action: 'Ejetar Armamentos', desc: 'Emergency jettison de todas as armas externas.', essential: false },
      // Contramédidas
      { cat: 'cm', catLabel: 'Contramédidas', catIcon: '🛡️', keys: 'Insert', action: 'Lançar Chaff', desc: 'O A-4E tem 30 chaff. Não são automáticos — preste atenção no RHWS (AN/APR-25) e atue manualmente.', essential: true },
      { cat: 'cm', catLabel: 'Contramédidas', catIcon: '🛡️', keys: 'Delete', action: 'Lançar Flares', desc: 'O A-4E tem 30 flares. Use ao detectar lançamento de míssil IR pelo som do RHWS.', essential: true },
      // Rádio
      { cat: 'radio', catLabel: 'Rádio / Carrier', catIcon: '📻', keys: '`', action: 'Abrir Menu Rádio', desc: 'Abre o menu de comunicações para chamar AWACS, tanker, JTAC e comandos de porta-aviões.', essential: true },
      { cat: 'radio', catLabel: 'Rádio / Carrier', catIcon: '📻', keys: 'LShift + \\', action: 'Solicitar Tanker ao AWACS', desc: 'Pergunta ao AWACS qual tanker está disponível para reabastecimento. O A-4E-C é um dos únicos mods com AAR funcional.', essential: false },
      { cat: 'radio', catLabel: 'Rádio / Carrier', catIcon: '📻', keys: 'F1–F12', action: 'Opções de Rádio', desc: 'Seleciona opções no menu de rádio — comunicações com AWACS, LSO (Landing Signal Officer), torre e outros.', essential: false },
    ]
  }

,

  uh60l: {
    id: 'uh60l',
    name: 'UH-60L Black Hawk',
    nation: 'EUA / US Army',
    flag: '\u{1F1FA}\u{1F1F8}',
    role: 'Transporte / CSAR / Ataque',
    era: 'Guerra Fria / Moderno (1979\u2013)',
    speed: '~280 km/h (150 kn)',
    engine: '2x GE T700-GE-701C (1.890 shp cada)',
    color: '#00c9a7',
    tag: 'MOD GRATUITO',
    briefing_real: `O Sikorsky UH-60 Black Hawk \u00e9 o helic\u00f3ptero utilit\u00e1rio militar mais ic\u00f4nico dos \u00faltimos 50 anos. Entrou em servi\u00e7o em 1979 para substituir o vener\u00e1vel UH-1 Huey, com capacidade de transportar 11 soldados, voar a 280 km/h e sobreviver a impactos de muni\u00e7\u00e3o de 23mm em sistemas cr\u00edticos.

O Black Hawk foi batizado de guerra em Granada (1983), Panam\u00e1 (1989), e tornou-se s\u00edmbolo da Guerra da Som\u00e1lia em 1993 \u2014 o incidente "Black Hawk Down" imortalizou o helic\u00f3ptero pela resili\u00eancia de suas tripula\u00e7\u00f5es. No Afeganist\u00e3o e Iraque foi onipresente: inser\u00e7\u00e3o de tropas, MEDEVAC, CSAR e apoio de fogos.

A variante L (Lima), presente no mod do DCS, \u00e9 a vers\u00e3o mais avan\u00e7ada com os motores T700-GE-701C de maior pot\u00eancia e o ESSS para armas externas. Mais de 4.000 unidades produzidas, operando em 30+ pa\u00edses.`,
    briefing_dcs: `No DCS, o UH-60L \u00e9 um mod comunit\u00e1rio gratuito desenvolvido por Kinkkujuustovoileipa. Tem cockpit quase totalmente clic\u00e1vel preciso ao modelo Lima de 2009, EFM pr\u00f3prio calibrado com dados de performance reais, e sistemas funcionais incluindo GPS Doppler, ILS, VOR, RWR e o AN/AVS-7 Helmet Mounted Display.

O grande diferencial \u00e9 o AFCS com SAS \u2014 isso torna o Black Hawk um dos helic\u00f3pteros mais f\u00e1ceis de voar no DCS, ideal para iniciantes em rotary-wing. O SAS amorte\u00e7os todos os eixos automaticamente, e o trim FPS mant\u00e9m a posi\u00e7\u00e3o de controle.

Para armamento completo com Hellfires, rockets e GAU-19, instale o Armed Black Hawk mod separado (gratuito, requer o UH-60L base).

\u26a0\ufe0f Instale SEMPRE na pasta Saved Games, nunca na pasta de instala\u00e7\u00e3o do DCS. Baixe em: discord.gg/8erxFUMXZh`,
    weapons: [
      { cat: 'Utilit\u00e1rio', name: 'Transporte de Tropas', sub: '11 soldados ou 4.100 kg carga interna', guidance: '\u2014', range: '\u2014', main: true, ff: false, desc: 'Fun\u00e7\u00e3o prim\u00e1ria do UH-60L. Transporta 11 soldados totalmente equipados ou 4.100 kg de carga interna. Em configura\u00e7\u00e3o MEDEVAC carrega 6 macas. Sling load externo de at\u00e9 4.000 kg.' },
      { cat: 'Utilit\u00e1rio', name: 'CSAR (Combat Search & Rescue)', sub: 'Papel especializado em multiplayer', guidance: '\u2014', range: '\u2014', main: true, ff: false, desc: 'O papel mais recompensador do Black Hawk no DCS multiplayer. Coordena com CAP e SEAD para entrar em LZ quente, resgatar pilotos abatidos e extrair sob fogo. Requer comunica\u00e7\u00e3o constante com o time.' },
      { cat: 'Door Guns', name: 'M60D / M240H (7.62mm)', sub: 'Metralhadoras laterais', guidance: 'Manual (door gunner)', range: '~800 m', main: false, ff: false, desc: 'Metralhadoras M60D ou M240H nas portas laterais operadas por door gunners. Posi\u00e7\u00e3o pivotante com amplo arco de cobertura no flanco. Usadas para supress\u00e3o em LZ quente.' },
      { cat: 'Armed BH (Mod)', name: 'GAU-19/B (.50 cal, 3 canos)', sub: 'Metralhadora rotativa no nariz', guidance: 'Manual (piloto)', range: '~1.500 m', main: true, ff: false, desc: 'Metralhadora rotativa de .50 caliber com 3 canos montada no ESSS. Cad\u00eancia de 1.300 tiros/min. Eficaz contra ve\u00edculos leves, tropas e helic\u00f3pteros. Requer Armed Black Hawk mod.' },
      { cat: 'Armed BH (Mod)', name: 'Hydra 70 (LAU-68 / LAU-61)', sub: '7x ou 19x foguetes 70mm', guidance: 'N\u00e3o guiado', range: '~4 km', main: false, ff: false, desc: 'Pods de foguetes Hydra 70mm no ESSS. Vari\u00e1veis HE, HEAT e WP para supress\u00e3o de \u00e1rea. Requer Armed Black Hawk mod.' },
      { cat: 'Armed BH (Mod)', name: 'AGM-114 Hellfire', sub: 'M\u00edssil anti-carro laser-guiado', guidance: 'Laser (buddy lase)', range: '~8 km', main: false, ff: false, desc: 'Hellfires no ESSS. Requer designa\u00e7\u00e3o laser externa de JTAC ou outro avi\u00e3o (c\u00f3digo padr\u00e3o 1688) \u2014 o Black Hawk n\u00e3o tem targeting pod pr\u00f3prio. Requer Armed Black Hawk mod.' },
      { cat: 'Armed BH (Mod)', name: 'AIM-92 Stinger (experimental)', sub: 'M\u00edssil AA MANPADS', guidance: 'Infravermelho', range: '~5 km', main: false, ff: true, desc: 'Capacidade AA experimental. Defesa leve contra helic\u00f3pteros e aeronaves lentas. Requer Armed Black Hawk mod.' },
    ],
    hotkeys: [
      { cat: 'startup', catLabel: 'Inicializa\u00e7\u00e3o', catIcon: '\uD83D\uDD27', keys: 'Cockpit clic\u00e1vel', action: 'Cold Start via cockpit', desc: 'O UH-60L tem cockpit quase totalmente clic\u00e1vel. A inicializa\u00e7\u00e3o completa \u00e9 feita pelos switches f\u00edsicos. Consulte o Quick Reference Guide no Discord do mod ou o kneeboard integrado (K).', essential: true },
      { cat: 'startup', catLabel: 'Inicializa\u00e7\u00e3o', catIcon: '\uD83D\uDD27', keys: 'RShift + Home', action: 'Ligar Motores (atalho r\u00e1pido)', desc: 'Atalho para ligar ambos os motores GE T700 rapidamente sem o procedimento completo. \u00datil para decolar r\u00e1pido em multiplayer.', essential: false },
      { cat: 'startup', catLabel: 'Inicializa\u00e7\u00e3o', catIcon: '\uD83D\uDD27', keys: 'RShift + L', action: 'Ligar Sistemas El\u00e9tricos', desc: 'Liga os pain\u00e9is el\u00e9tricos e avi\u00f4nica. Passo inicial antes dos motores.', essential: false },
      { cat: 'startup', catLabel: 'Inicializa\u00e7\u00e3o', catIcon: '\uD83D\uDD27', keys: 'L', action: 'Luzes de Navega\u00e7\u00e3o / Forma\u00e7\u00e3o', desc: 'Alterna luzes externas \u2014 essencial em miss\u00f5es noturnas e multiplayer.', essential: false },
      { cat: 'flight', catLabel: 'Voo B\u00e1sico', catIcon: '\uD83D\uDE81', keys: 'PgUp / PgDn', action: 'Coletivo (Altitude)', desc: 'CR\u00cdTICO: PgUp aumenta coletivo (sobe), PgDn diminui (desce). Recomendado usar joystick com eixo dedicado para controle suave.', essential: true },
      { cat: 'flight', catLabel: 'Voo B\u00e1sico', catIcon: '\uD83D\uDE81', keys: 'Z / X', action: 'Anti-Torque (Pedais)', desc: 'Z gira o nariz para a esquerda, X para a direita. Controla o rotor de cauda. Essencial para hovering est\u00e1vel.', essential: true },
      { cat: 'flight', catLabel: 'Voo B\u00e1sico', catIcon: '\uD83D\uDE81', keys: 'T', action: 'Trim Apply (FPS System)', desc: 'Aplica trim na posi\u00e7\u00e3o atual dos controles. Solte os controles ap\u00f3s pressionar T \u2014 o helic\u00f3ptero mant\u00e9m a atitude automaticamente.', essential: true },
      { cat: 'flight', catLabel: 'Voo B\u00e1sico', catIcon: '\uD83D\uDE81', keys: 'LAlt + C', action: 'Centralizar Trim', desc: 'Centraliza o trim. Use quando o helic\u00f3ptero estiver "puxando" para um lado inesperadamente.', essential: false },
      { cat: 'flight', catLabel: 'Voo B\u00e1sico', catIcon: '\uD83D\uDE81', keys: 'LAlt + 3', action: 'AP Voo Nivelado (panic button)', desc: 'Retorna ao voo nivelado imediatamente. Essencial para iniciantes que perdem controle da atitude.', essential: true },
      { cat: 'flight', catLabel: 'Voo B\u00e1sico', catIcon: '\uD83D\uDE81', keys: 'LAlt + 1', action: 'AP Altitude Hold', desc: 'Mant\u00e9m altitude atual automaticamente. Libera o piloto para operar sistemas.', essential: false },
      { cat: 'flight', catLabel: 'Voo B\u00e1sico', catIcon: '\uD83D\uDE81', keys: 'LAlt + 2', action: 'AP Heading Hold', desc: 'Mant\u00e9m o rumo atual. \u00datil em cruzeiro longo e aproxima\u00e7\u00f5es instrumentais.', essential: false },
      { cat: 'systems', catLabel: 'Sistemas / Nav', catIcon: '\uD83D\uDCE1', keys: 'K', action: 'Kneeboard / Quick Reference', desc: 'Abre o kneeboard com o Quick Reference Guide do mod. LEITURA OBRIGAT\u00d3RIA \u2014 cobre todos os sistemas e procedimentos.', essential: true },
      { cat: 'systems', catLabel: 'Sistemas / Nav', catIcon: '\uD83D\uDCE1', keys: 'AN/APR-39 (RWR)', action: 'Radar Warning Receiver', desc: 'O mod inclui RWR funcional. Sons e displays alertam sobre ameaças de radar. Reaja imediatamente a qualquer aviso \u2014 o UH-60L \u00e9 vulner\u00e1vel a SAMs.', essential: true },
      { cat: 'systems', catLabel: 'Sistemas / Nav', catIcon: '\uD83D\uDCE1', keys: 'AN/AVS-7 HMD', action: 'Helmet Mounted Display', desc: 'Display de capacete para opera\u00e7\u00f5es noturnas com NVG. Exibe altitude, velocidade e horizonte artificial sobrepostos. Essencial para CSAR noturno.', essential: false },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '\uD83D\uDCA5', keys: 'Space / Weapon Fire', action: 'Disparar Arma Selecionada', desc: 'Dispara a arma ativa. Para door gunners em multiplayer, o jogador na posi\u00e7\u00e3o controla diretamente.', essential: true },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '\uD83D\uDCA5', keys: 'D', action: 'Ciclar Armas (Armed BH)', desc: 'Alterna entre esta\u00e7\u00f5es de armas do Armed Black Hawk mod.', essential: false },
      { cat: 'weapons', catLabel: 'Armas', catIcon: '\uD83D\uDCA5', keys: 'LCtrl + Space', action: 'Master Arm', desc: 'Liga/desliga a seguran\u00e7a das armas. Deve estar ON para disparar qualquer armamento.', essential: false },
      { cat: 'cm', catLabel: 'Contram\u00e9didas', catIcon: '\uD83D\uDEE1\uFE0F', keys: 'Insert', action: 'Lan\u00e7ar Chaff', desc: 'Contra m\u00edsseis radar. O UH-60L \u00e9 extremamente vulner\u00e1vel a SAMs \u2014 reaja imediatamente ao aviso do RWR.', essential: true },
      { cat: 'cm', catLabel: 'Contram\u00e9didas', catIcon: '\uD83D\uDEE1\uFE0F', keys: 'Delete', action: 'Lan\u00e7ar Flares', desc: 'Contra MANPADS e m\u00edsseis IR \u2014 a amea\u00e7a mais comum para helic\u00f3pteros de baixa altitude. Lance em rajadas ao entrar em \u00e1rea de amea\u00e7a.', essential: true },
      { cat: 'radio', catLabel: 'R\u00e1dio / Miss\u00e3o', catIcon: '\uD83D\uDCFB', keys: '`', action: 'Menu de R\u00e1dio / Comunica\u00e7\u00f5es', desc: 'Acessa comunica\u00e7\u00f5es com JTAC, AWACS e outros pilotos. Em CSAR, coordene com CAP e solicite supress\u00e3o antes de entrar no LZ.', essential: true },
      { cat: 'radio', catLabel: 'R\u00e1dio / Miss\u00e3o', catIcon: '\uD83D\uDCFB', keys: 'F1\u2013F12', action: 'Sele\u00e7\u00e3o de Op\u00e7\u00f5es de R\u00e1dio', desc: 'Navega pelas op\u00e7\u00f5es do menu de comunica\u00e7\u00f5es.', essential: false },
    ]
  }
  ,

  f14b: {
    id: `f14b`,
    name: `F-14B Tomcat`,
    nation: `EUA / US Navy`,
    flag: `🇺🇸`,
    role: `Interceptor / Caca Multifuncao Naval`,
    era: `Guerra Fria / Moderno (1974–2006)`,
    speed: `Mach 2.34 (~2.485 km/h)`,
    engine: `2x GE F110-GE-400 (27.000 lbf com afterburner)`,
    color: `#f5a623`,
    tag: `MODULO PAGO`,
    briefing_real: `O Grumman F-14 Tomcat é um dos caças mais icônicos da história da aviação naval — e provavelmente o mais reconhecível do mundo graças ao filme Top Gun (1986). Com suas asas de geometria variável que se adaptam automaticamente à velocidade do voo, o Tomcat combina a velocidade de um interceptor com a agilidade de um dogfighter.

Desenvolvido na década de 1960 para defender a frota naval americana contra formações de bombardeiros soviéticos, o sistema AN/AWG-9 combinado com o AIM-54 Phoenix permitia engajar até 6 alvos simultaneamente a mais de 150 km — algo sem precedentes na época.

O F-14B serviu na Marinha Americana de 1987 até a aposentadoria em 2006. Participou de operações no Golfo Pérsico, Kosovo, Afeganistão e Iraque, onde foi adaptado para ataques ao solo com o pod LANTIRN. Curioso: o Irã ainda opera F-14s até hoje.`,
    briefing_dcs: `No DCS, o F-14B é desenvolvido pela Heatblur Simulations e é considerado tecnicamente o módulo mais impressionante do jogo — muitos veteranos o colocam acima dos módulos oficiais em qualidade.

O grande diferencial é o sistema biplace: você pode voar como Pilot (frente) ou RIO (Radar Intercept Officer, atrás). Em solo, o RIO é controlado pelo Jester AI — uma IA sofisticada que opera o radar, seleciona mísseis e avisa sobre ameaças. Em multiplayer, um segundo jogador pode ser o RIO.

O AIM-54 Phoenix é a estrela: pode engajar 6 alvos simultâneos a até 150 km. O LANTIRN permite ataques laser-guiados ao solo. Ponto de atenção: o F-14B NÃO tem fly-by-wire — é o último caça americano sem esse sistema, então o piloto sente tudo nas mãos, mas erros podem resultar em flat spin.`,
    weapons: [
      { cat: `BVR`, name: `AIM-54A/C Phoenix`, sub: `O missil mais letal do DCS`, guidance: `Radar Ativo (TWS + pitbull)`, range: `~150 km`, main: true, ff: true, desc: `O único míssil capaz de engajar 6 alvos simultaneamente no DCS. O AWG-9 guia os mísseis em TWS até ~16 segundos do impacto, quando o míssil ativa seu próprio radar (pitbull). Carga máxima: 6x Phoenix. Raramente usado em combate real americano, mas devastador no DCS.` },
      { cat: `BVR`, name: `AIM-7M/MH Sparrow`, sub: `BVR semi-ativo`, guidance: `Radar Semi-ativo`, range: `~45 km`, main: false, ff: false, desc: `Míssil de alcance médio que exige radar travado no alvo até o impacto. Usado como complemento ao Phoenix. Selecione SP/PH no HOTAS e pressione MSL PREP antes do lançamento.` },
      { cat: `WVR`, name: `AIM-9M/L Sidewinder`, sub: `Dogfight curto alcance`, guidance: `Infravermelho`, range: `~25 km`, main: false, ff: true, desc: `Míssil IR de curto alcance para combate visual. Montado nas ponteiras das asas. Ative SW COOL antes do lançamento para resfriamento do seeker.` },
      { cat: `Canhao`, name: `M61A1 Vulcan 20mm`, sub: `Canhão interno 675 projeteis`, guidance: `—`, range: `< 1 km`, main: false, ff: false, desc: `Canhão rotativo de 20mm com 675 projéteis (menos que o F-15C). Selecione GUN no HOTAS. Usado em dogfight próximo ou ataques rasantes ao solo.` },
      { cat: `Guiado AG`, name: `GBU-10 / GBU-12 / GBU-16`, sub: `Paveway laser-guiado`, guidance: `Laser (LANTIRN)`, range: `—`, main: true, ff: false, desc: `Família Paveway de 2.000, 500 e 1.000 lb. Requerem o pod LANTIRN na estação 8B e designação laser do RIO. A GBU-12 de 500 lb é a mais usada pelo equilíbrio entre precisão e carga útil.` },
      { cat: `Guiado AG`, name: `GBU-24 Paveway III`, sub: `Bomba penetradora 2.000 lb`, guidance: `Laser (LANTIRN)`, range: `—`, main: false, ff: false, desc: `Versão mais avançada com maior ângulo de planagem. Para alvos hardened como bunkers. Requer LANTIRN.` },
      { cat: `Bombas`, name: `Mk-82 / Mk-83 / Mk-84`, sub: `Bombas proposito geral`, guidance: `Livre`, range: `—`, main: false, ff: false, desc: `Família Mk-80 completa. O F-14B pode carregar combinações em racks duplos nas estações de Phoenix (1 GBU ou 2 Mk-82 por trilho).` },
      { cat: `Pods`, name: `LANTIRN Targeting Pod`, sub: `Pod de designacao laser`, guidance: `—`, range: `—`, main: true, ff: false, desc: `Pod de targeting laser montado na estação 8B (lado direito). Controlado pelo RIO no assento traseiro. Permite designação laser para GBUs e visão noturna IR. Essencial para missões AG.` },
      { cat: `Pods`, name: `TARPS (Reconhecimento)`, sub: `Pod fotografico tatico`, guidance: `—`, range: `—`, main: false, ff: false, desc: `Tactical Airborne Reconnaissance Pod System. Transforma o F-14 em aeronave de reconhecimento fotográfico. Único no DCS — permite missões ISR.` },
    ],
    hotkeys: [
      { cat: `startup`, catLabel: `Inicializacao`, catIcon: `🔧`, keys: `Cockpit clicavel`, action: `Cold Start completo`, desc: `O F-14B tem cold start completo via cockpit clicável com procedimentos autênticos. A Heatblur incluiu tutoriais em áudio dentro do jogo. Pressione K para o kneeboard com checklists.`, essential: true },
      { cat: `startup`, catLabel: `Inicializacao`, catIcon: `🔧`, keys: `RShift + Home`, action: `Autostart (atalho)`, desc: `Liga o avião automaticamente sem o procedimento completo. Útil para multiplayer rápido.`, essential: false },
      { cat: `startup`, catLabel: `Inicializacao`, catIcon: `🔧`, keys: `H`, action: `Gancho de apresamento`, desc: `Baixa/recolhe o gancho. Essencial para operações de porta-aviões.`, essential: true },
      { cat: `startup`, catLabel: `Inicializacao`, catIcon: `🔧`, keys: `U`, action: `Dobrar asas`, desc: `Dobra/estende as asas para operações em convés.`, essential: false },
      { cat: `flight`, catLabel: `Voo`, catIcon: `✈️`, keys: `G`, action: `Trem de pouso`, desc: `Recolhe/estende. Recolha imediatamente após a catapulta.`, essential: true },
      { cat: `flight`, catLabel: `Voo`, catIcon: `✈️`, keys: `F`, action: `Flaps`, desc: `Cicla posições. Full flap para abordagem no porta-aviões (~15 unidades AOA).`, essential: true },
      { cat: `flight`, catLabel: `Voo`, catIcon: `✈️`, keys: `B`, action: `Freio aerodinâmico`, desc: `Abre spoilers. O F-14 NÃO tem FBW — o piloto sente toda a resistência.`, essential: false },
      { cat: `radar`, catLabel: `Radar / Jester`, catIcon: `📡`, keys: `A`, action: `Menu do Jester AI`, desc: `Abre o menu radial do Jester — seu RIO AI. Use para comandar o radar, selecionar modos de combate e pedir designações. ESSENCIAL para solo.`, essential: true },
      { cat: `radar`, catLabel: `Radar / Jester`, catIcon: `📡`, keys: `A + (menu) TWS`, action: `Jester: Modo TWS`, desc: `Pelo menu Jester, selecione radar > TWS (Track While Scan). Permite rastrear múltiplos alvos e guiar Phoenix simultaneamente.`, essential: true },
      { cat: `radar`, catLabel: `Radar / Jester`, catIcon: `📡`, keys: `A + (menu) ACM`, action: `Jester: Modo ACM (dogfight)`, desc: `Pelo menu Jester, selecione ACM para combate próximo. O radar faz varredura vertical automática.`, essential: false },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `Master Arm (cockpit)`, action: `Master Arm ON`, desc: `Ligue o Master Arm no painel ACM abaixo do HUD. Obrigatório antes de qualquer disparo.`, essential: true },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `MSL PREP (cockpit)`, action: `Preparar misseis radar`, desc: `Pressione MSL PREP para preparar AIM-7 e AIM-54. Aguarde as janelas brancas nas estações.`, essential: true },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `SW COOL (cockpit)`, action: `Resfriar seeker AIM-9`, desc: `Pressione SW COOL para resfriar o seeker IR do AIM-9. Aguarde o tom áudio contínuo.`, essential: false },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `HOTAS SP/PH`, action: `Selecionar Sparrow ou Phoenix`, desc: `No manche: posição SP/PH alterna entre AIM-7 e AIM-54. GUN ativa o canhão. Sem hotkey de teclado — é no HOTAS.`, essential: true },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `Gatilho HOTAS`, action: `Disparar`, desc: `Disparo via gatilho do manche/joystick. Em modo GUN: segundo clique ativa o canhão.`, essential: true },
      { cat: `cm`, catLabel: `Contramédidas`, catIcon: `🛡️`, keys: `Insert`, action: `Chaff`, desc: `AN/ALE-39 contra mísseis radar.`, essential: true },
      { cat: `cm`, catLabel: `Contramédidas`, catIcon: `🛡️`, keys: `Delete`, action: `Flares`, desc: `Contra mísseis IR. Lance em rajadas com manobras evasivas.`, essential: true },
    ],
  }
  ,

  f16c: {
    id: `f16c`,
    name: `F-16C Viper`,
    nation: `EUA / USAF`,
    flag: `🇺🇸`,
    role: `Caca Multifuncao / SEAD`,
    era: `Guerra Fria / Moderno (1978–)`,
    speed: `Mach 2.0 (~2.120 km/h)`,
    engine: `1x GE F110-GE-129 (29.500 lbf com afterburner)`,
    color: `#7eceff`,
    tag: `MODULO PAGO`,
    briefing_real: `O General Dynamics F-16 Fighting Falcon — apelidado de Viper pelos pilotos — é o caça multifunção mais amplamente operado do mundo, com mais de 4.600 unidades para 25 países. Nasceu de um conceito radical nos anos 1970: um caça leve, barato e extremamente ágil que priorizava o combate visual.

Foi o primeiro caça operacional americano com controles fly-by-wire digitais — o piloto não tem ligação mecânica com as superfícies de voo. O computador de voo interpreta os inputs e mantém a estabilidade, permitindo um design aerodinamicamente instável porém muito mais ágil.

A versão no DCS é o Block 50 com motor GE F110-GE-129 e aviónica CCIP — a versão mais capaz do Viper nos anos 2000. O F-16 é famoso por missões Wild Weasel de SEAD, usando o AGM-88 HARM para destruir sistemas de defesa aérea.`,
    briefing_dcs: `No DCS, o F-16C é recomendado para quem quer começar no full fidelity por ser ligeiramente menos complexo que o F/A-18C. O cockpit é mais simples e o fluxo de trabalho para armas é mais direto. A comunidade considera o Viper o melhor para SEAD/DEAD com o AGM-88 HARM.

O sistema DED (Data Entry Display) é o coração da aviónica — você navega pelos menus com as teclas ao redor do display para configurar armas, waypoints e sistemas. Com o pod Litening para designação laser e o JHMCS para HMS, o Viper cobre todas as missões modernas.

Ponto forte: é o melhor avião de SEAD do DCS. O AGM-88 em modo HAS (HARM As Sensor) é devastador — detecta, classifica e ataca radares automaticamente. Ponto fraco: sem capacidade de porta-aviões.`,
    weapons: [
      { cat: `BVR`, name: `AIM-120B/C AMRAAM`, sub: `Missil BVR principal`, guidance: `Radar Ativo — Fogo e Esqueca`, range: `~105 km`, main: true, ff: true, desc: `Míssil radar ativo — dispara e esquece. Até 6x em combinação com AIM-9. O APG-68 em TWS rastreia 10 alvos simultaneamente para o AMRAAM.` },
      { cat: `WVR`, name: `AIM-9L/M/P/X Sidewinder`, sub: `Dogfight IR / HOBS (9X)`, guidance: `IR / HOBS com JHMCS`, range: `~18–35 km`, main: false, ff: true, desc: `AIM-9X com JHMCS (Helmet Mounted Sight) para ataques de alto offset — olhe para o inimigo e trave o 9X. Diferencial crucial do Viper.` },
      { cat: `Canhao`, name: `M61A1 Vulcan 20mm`, sub: `Canhão interno 511 projeteis`, guidance: `—`, range: `< 1 km`, main: false, ff: false, desc: `Canhão rotativo de 20mm com 511 projéteis. ~6.000 tiros/min.` },
      { cat: `SEAD`, name: `AGM-88C HARM`, sub: `Missil anti-radar supersonico`, guidance: `Anti-Radar (passivo)`, range: `~150 km`, main: true, ff: true, desc: `O melhor SEAD do DCS. Modos: SP (Self Protect via RWR), TOO (Target of Opportunity via HAS), PB (Pre-Briefed com coordenadas). O HTS pod expande dramaticamente a capacidade SEAD.` },
      { cat: `Guiado AG`, name: `AGM-65D/G/H/K Maverick`, sub: `Missil ar-terra TV/IR/Laser`, guidance: `TV / IR / Laser`, range: `~25 km`, main: false, ff: true, desc: `Família Maverick para ataques precisos. 65D/G: IR. 65H: CCD TV. 65K: laser com ogiva maior. Use o Litening para designar em modo laser.` },
      { cat: `Guiado AG`, name: `GBU-10 / GBU-12 / GBU-16`, sub: `Paveway laser-guiado`, guidance: `Laser (Litening pod)`, range: `—`, main: true, ff: false, desc: `Família Paveway de 2.000, 500 e 1.000 lb. O Litening no F-16 é controlado pelo piloto via MFD. GBU-12 é a mais usada pela versatilidade.` },
      { cat: `Guiado AG`, name: `GBU-31/A e GBU-38/B JDAM`, sub: `GPS-guiadas 2.000/500 lb`, guidance: `GPS/INS — Fogo e Esqueca`, range: `~25 km`, main: true, ff: true, desc: `JDAMs todo-clima. Programe as coordenadas no DED e largue. GBU-38 (500 lb) para precisão, GBU-31 (2.000 lb) para poder máximo.` },
      { cat: `Guiado AG`, name: `AGM-154A/B JSOW`, sub: `Planador GPS longo alcance`, guidance: `GPS/INS`, range: `~130 km`, main: false, ff: true, desc: `Planador guiado lançado de alta altitude fora da zona de ameaça. 154A tem submunições, 154B tem ogiva unitária penetradora.` },
      { cat: `Bombas`, name: `Mk-82 / Mk-82AIR / Mk-84`, sub: `Bombas proposito geral`, guidance: `Livre + CCIP/CCRP`, range: `—`, main: false, ff: false, desc: `Família Mk-80. Mk-82AIR tem retardador para baixa altitude. Use o modo CCIP do HUD para mira precisa em mergulho.` },
      { cat: `Bombas`, name: `CBU-87 CEM / CBU-97 SFW`, sub: `Bombas cluster`, guidance: `Livre (Cluster)`, range: `—`, main: false, ff: false, desc: `CBU-87 com submunições combinadas HE+incendiária+HEAT. CBU-97 Sensor Fuzed Weapon com submunições inteligentes que detectam blindados.` },
      { cat: `Pods`, name: `AN/AAQ-28 Litening II`, sub: `Targeting Pod`, guidance: `—`, range: `—`, main: true, ff: false, desc: `Pod de targeting com câmera IR, TV e laser designador. Operado pelo piloto via MFD. Essencial para GBUs, Maverick laser e buddy-lasing.` },
      { cat: `Pods`, name: `AN/ASQ-213 HTS`, sub: `HARM Targeting System`, guidance: `—`, range: `—`, main: false, ff: false, desc: `Pod especializado em detectar e classificar radares inimigos para o HARM. Apresenta emissores no HAD (HARM Attack Display).` },
    ],
    hotkeys: [
      { cat: `startup`, catLabel: `Inicializacao`, catIcon: `🔧`, keys: `Cockpit clicavel`, action: `Cold Start via cockpit`, desc: `O F-16C tem cold start completo. Leva ~5 minutos. Pressione K para kneeboard com checklists.`, essential: true },
      { cat: `startup`, catLabel: `Inicializacao`, catIcon: `🔧`, keys: `RShift + Home`, action: `Autostart`, desc: `Liga automaticamente. Mais rápido para ir direto ao combate.`, essential: false },
      { cat: `flight`, catLabel: `Voo`, catIcon: `✈️`, keys: `G`, action: `Trem de pouso`, desc: `Recolhe/estende. O FBW impede recolhimento abaixo de ~200 kn.`, essential: true },
      { cat: `flight`, catLabel: `Voo`, catIcon: `✈️`, keys: `B`, action: `Freio aerodinâmico`, desc: `Spoilers para redução de velocidade. O F-16 retém muito bem a velocidade — use no final.`, essential: false },
      { cat: `radar`, catLabel: `Radar / MFD`, catIcon: `📡`, keys: `I`, action: `Ligar radar APG-68`, desc: `Ativa o radar. Gerenciado via MFD e OSBs (Option Select Buttons) ao redor da tela — não por hotkeys fixas.`, essential: true },
      { cat: `radar`, catLabel: `Radar / MFD`, catIcon: `📡`, keys: `OSB no MFD (RWS/TWS/SAM)`, action: `Modos de radar via MFD`, desc: `RWS: Range While Search. TWS: Track While Scan para AMRAAM multi-alvo. SAM: Single Target Track. Via OSB na página FCR.`, essential: true },
      { cat: `radar`, catLabel: `Radar / MFD`, catIcon: `📡`, keys: `Enter`, action: `Travar alvo`, desc: `Trava o radar no contato selecionado pelo cursor do MFD.`, essential: true },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `Master Arm (cockpit)`, action: `Master Arm ON`, desc: `Chave no painel esquerdo. OBRIGATÓRIO antes de qualquer disparo.`, essential: true },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `D`, action: `Ciclar armas (SMS)`, desc: `Alterna entre as armas carregadas nas estações ativas do SMS.`, essential: true },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `Space / gatilho HOTAS`, action: `Disparar / Lancar`, desc: `Dispara a arma selecionada. Para bombas CCRP, o avião lança automaticamente quando os parâmetros são atingidos.`, essential: true },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `Num Ins`, action: `Modo AA`, desc: `Alterna para modo ar-ar.`, essential: false },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `Num Del`, action: `Modo AG`, desc: `Alterna para modo ar-terra.`, essential: false },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `C`, action: `Selecionar canhao`, desc: `Seleciona o M61A1 como arma ativa.`, essential: false },
      { cat: `cm`, catLabel: `Contramédidas`, catIcon: `🛡️`, keys: `Insert`, action: `Chaff`, desc: `Contra mísseis radar.`, essential: true },
      { cat: `cm`, catLabel: `Contramédidas`, catIcon: `🛡️`, keys: `Delete`, action: `Flares`, desc: `Contra mísseis IR.`, essential: true },
      { cat: `cm`, catLabel: `Contramédidas`, catIcon: `🛡️`, keys: `H`, action: `Programa CMDS automatico`, desc: `Ativa programa automático do CMDS — lança chaff e flares em sequência pré-programada.`, essential: false },
    ],
  }
  ,

  fa18c: {
    id: `fa18c`,
    name: `F/A-18C Hornet`,
    nation: `EUA / US Navy`,
    flag: `🇺🇸`,
    role: `Caca Multifuncao Naval`,
    era: `Guerra Fria / Moderno (1983–)`,
    speed: `Mach 1.8 (~1.915 km/h)`,
    engine: `2x GE F404-GE-402 (17.750 lbf com afterburner cada)`,
    color: `#4a9eff`,
    tag: `MODULO PAGO`,
    briefing_real: `O McDonnell Douglas F/A-18C Hornet é o único avião do inventário americano a carregar tanto a designação de caça (F) quanto a de ataque (A) — e isso não é simbólico. Foi projetado para ser igualmente letal no ar e contra alvos no solo.

Entrou em serviço em 1983 e batizou fogo em 1986 sobre a Líbia, onde Hornets realizaram tanto missões SEAD quanto ataques convencionais na mesma sortida — algo sem precedente até então. O modelo C do DCS representa um Lote 20 de meados dos anos 2000, com radar APG-73, ATFLIR targeting pod, Link 16 datalink e a suite completa de armas. É o avião com o maior número de tipos de armas no DCS.`,
    briefing_dcs: `No DCS, o F/A-18C é o módulo mais popular do jogo e o recomendado para a maioria dos iniciantes que querem full fidelity. Faz literalmente tudo: porta-aviões, SEAD com AGM-88, precisão com GBU e JDAM, anti-navio com Harpoon e combate ar-ar com AMRAAM.

O ATFLIR é um dos melhores targeting pods do DCS — longa autonomia, resolução excelente e controle via MFD. O reabastecimento aéreo e carrier ops com ICLS e ACLS são completamente funcionais.

O fluxo de trabalho é via MFDs com OSBs ao redor. Aprenda a página STORES para selecionar armas, TGP para o targeting pod e FCR para o radar. O Hornet é o rei do stand-off attack com o JSOW lançado de alta altitude fora da zona de ameaça.`,
    weapons: [
      { cat: `BVR`, name: `AIM-120B/C AMRAAM`, sub: `Missil BVR principal`, guidance: `Radar Ativo — Fogo e Esqueca`, range: `~105 km`, main: true, ff: true, desc: `Até 6x em configuração mista. APG-73 em TWS rastreia múltiplos alvos. Após o lançamento, mude de alvo imediatamente — o AMRAAM guia sozinho.` },
      { cat: `BVR`, name: `AIM-7M/MH Sparrow`, sub: `BVR semi-ativo`, guidance: `Radar Semi-ativo`, range: `~45 km`, main: false, ff: false, desc: `Complemento ao AMRAAM. Exige radar travado até o impacto. Montado nos flancos da fuselagem (estações 3 e 7).` },
      { cat: `WVR`, name: `AIM-9M/X Sidewinder`, sub: `Dogfight IR / HOBS (9X)`, guidance: `IR / HOBS com HMS`, range: `~18–35 km`, main: false, ff: true, desc: `AIM-9X com HMS para ataques de alto offset. O Hornet também pode usar o radar em modo ACM para travar no 9M.` },
      { cat: `Canhao`, name: `M61A1 Vulcan 20mm`, sub: `Canhão no nariz — 578 projeteis`, guidance: `—`, range: `< 1 km`, main: false, ff: false, desc: `Montado no nariz. 578 projéteis. Para combate próximo ou strafing de alvos terrestres leves.` },
      { cat: `SEAD`, name: `AGM-88C HARM`, sub: `Missil anti-radar`, guidance: `Anti-Radar (passivo)`, range: `~150 km`, main: true, ff: true, desc: `Modos SP (Self Protect via RWR), TOO (Target of Opportunity) e PB (Pre-Briefed). No Hornet você pode usar o HARM com o ADM-141 TALD como isca — combinação única no DCS.` },
      { cat: `Guiado AG`, name: `AGM-65E/F Maverick`, sub: `Missil ar-terra naval`, guidance: `Laser (65E) / IR (65F)`, range: `~25 km`, main: false, ff: true, desc: `Versões navais do Maverick. 65E: guia laser (requer ATFLIR). 65F: IR seeker de maior abertura, melhor contra navios e alvos quentes.` },
      { cat: `Guiado AG`, name: `GBU-10 / GBU-12 / GBU-16`, sub: `Paveway laser-guiado`, guidance: `Laser (ATFLIR)`, range: `—`, main: true, ff: false, desc: `GBU-12 é a mais usada. O ATFLIR designa o alvo com laser e a bomba segue. Funciona mesmo sem visada direta (loft delivery).` },
      { cat: `Guiado AG`, name: `GBU-31/A e GBU-38/B JDAM`, sub: `GPS-guiadas 2.000/500 lb`, guidance: `GPS/INS — Fogo e Esqueca`, range: `~25 km`, main: true, ff: true, desc: `JDAMs todo-clima. O Hornet pode usar o ATFLIR para designar e converter para coordenadas GPS automaticamente.` },
      { cat: `Guiado AG`, name: `AGM-154A/C JSOW`, sub: `Planador GPS longo alcance`, guidance: `GPS/INS`, range: `~130 km`, main: true, ff: true, desc: `O Hornet é o rei do stand-off attack com o JSOW. Pode carregar 8x JSOW e lançá-los de alta altitude fora da ameaça. 154A tem submunições, 154C tem ogiva unitária.` },
      { cat: `Guiado AG`, name: `AGM-84D Harpoon`, sub: `Missil anti-navio`, guidance: `Inercial + Radar Ativo`, range: `~130 km`, main: false, ff: true, desc: `Principal míssil anti-navio do DCS. Voa rente ao mar para evitar detecção. Use o modo SEA do radar para designar navios.` },
      { cat: `Guiado AG`, name: `AGM-84E SLAM / AGM-84H SLAM-ER`, sub: `Missil de cruzeiro longo alcance`, guidance: `GPS + Datalink + IR terminal`, range: `~250 km`, main: false, ff: true, desc: `SLAM-ER (270 km) usa datalink para correção de rota em voo e guia TV no terminal — você vê o que o míssil vê e pode redirecionar. Único no DCS.` },
      { cat: `Bombas`, name: `Mk-82 / Mk-83 / Mk-84`, sub: `Bombas proposito geral`, guidance: `Livre`, range: `—`, main: false, ff: false, desc: `O Hornet pode carregar até 10 Mk-82 em racks múltiplos. Use CCIP ou CCRP no HUD.` },
      { cat: `Pods`, name: `AN/ASQ-228 ATFLIR`, sub: `Advanced Targeting FLIR Pod`, guidance: `—`, range: `—`, main: true, ff: false, desc: `O melhor targeting pod do DCS. Câmera IR de alta resolução, zoom extremo, laser designador e rastreamento automático. Controlado via MFD. Essencial para qualquer missão AG.` },
    ],
    hotkeys: [
      { cat: `startup`, catLabel: `Inicializacao`, catIcon: `🔧`, keys: `Cockpit clicavel`, action: `Cold Start via cockpit`, desc: `Cold start completo com procedimentos NATOPS. Eagle Dynamics incluiu tutoriais em áudio. K para kneeboard.`, essential: true },
      { cat: `startup`, catLabel: `Inicializacao`, catIcon: `🔧`, keys: `RShift + Home`, action: `Autostart`, desc: `Liga automaticamente. Ideal para multiplayer rápido.`, essential: false },
      { cat: `startup`, catLabel: `Inicializacao`, catIcon: `🔧`, keys: `H`, action: `Gancho de apresamento`, desc: `Baixa/recolhe o gancho. Essencial para carrier ops.`, essential: true },
      { cat: `startup`, catLabel: `Inicializacao`, catIcon: `🔧`, keys: `U`, action: `Dobrar asas`, desc: `Para operações no convés do porta-aviões.`, essential: false },
      { cat: `flight`, catLabel: `Voo`, catIcon: `✈️`, keys: `G`, action: `Trem de pouso`, desc: `Recolhe/estende. O FBW impede recolhimento abaixo de ~200 kn.`, essential: true },
      { cat: `flight`, catLabel: `Voo`, catIcon: `✈️`, keys: `F`, action: `Flaps`, desc: `Full flap para carrier landing (~15 AOA na final).`, essential: true },
      { cat: `flight`, catLabel: `Voo`, catIcon: `✈️`, keys: `B`, action: `Freio aerodinâmico`, desc: `Spoilers para redução de velocidade.`, essential: false },
      { cat: `radar`, catLabel: `Radar / MFD`, catIcon: `📡`, keys: `I`, action: `Ligar radar APG-73`, desc: `Ativa o radar. Gerenciado via página FCR nos MFDs.`, essential: true },
      { cat: `radar`, catLabel: `Radar / MFD`, catIcon: `📡`, keys: `OSB no MFD (RWS/TWS/STT)`, action: `Modos de radar via MFD`, desc: `RWS: Range While Search. TWS: Track While Scan para AMRAAM multi-alvo. STT: Single Target Track para Sparrow.`, essential: true },
      { cat: `radar`, catLabel: `Radar / MFD`, catIcon: `📡`, keys: `Enter`, action: `Travar alvo`, desc: `Trava o radar no contato selecionado.`, essential: true },
      { cat: `radar`, catLabel: `Radar / MFD`, catIcon: `📡`, keys: `; . , /`, action: `Mover cursor do radar/TGP`, desc: `Move o cursor de designação no MFD.`, essential: false },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `Master Arm (cockpit)`, action: `Master Arm ON`, desc: `Chave no painel central. OBRIGATÓRIO antes de qualquer disparo.`, essential: true },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `D`, action: `Ciclar armas (SMS)`, desc: `Alterna entre as armas ativas. A página STORES no MFD mostra o status de cada estação.`, essential: true },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `Space / pickle HOTAS`, action: `Disparar / Lancar`, desc: `Para bombas CCRP, mantenha o pickle pressionado — o avião lança automaticamente.`, essential: true },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `Num Ins`, action: `Modo AA`, desc: `Alterna para modo ar-ar.`, essential: false },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `Num Del`, action: `Modo AG`, desc: `Alterna para modo ar-terra.`, essential: false },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `C`, action: `Selecionar canhao`, desc: `Seleciona o M61A1.`, essential: false },
      { cat: `cm`, catLabel: `Contramédidas`, catIcon: `🛡️`, keys: `Insert`, action: `Chaff`, desc: `AN/ALE-47 contra mísseis radar.`, essential: true },
      { cat: `cm`, catLabel: `Contramédidas`, catIcon: `🛡️`, keys: `Delete`, action: `Flares`, desc: `AN/ALE-47 contra mísseis IR.`, essential: true },
      { cat: `cm`, catLabel: `Contramédidas`, catIcon: `🛡️`, keys: `H`, action: `Programa CMDS automatico`, desc: `Ativa programa automático do ALE-47.`, essential: false },
      { cat: `radio`, catLabel: `Radio / Carrier`, catIcon: `📻`, keys: `\``, action: `Menu de radio`, desc: `Acessa comunicações com AWACS, tanker, JTAC e LSO do porta-aviões.`, essential: true },
    ],
  }
  ,

  a10a: {
    id: `a10a`,
    name: `A-10A Warthog`,
    nation: `EUA / USAF`,
    flag: `🇺🇸`,
    role: `Ataque ao Solo / CAS`,
    era: `Guerra Fria / Moderno (1976–)`,
    speed: `~706 km/h`,
    engine: `2x GE TF34-GE-100A (9.065 lbf cada)`,
    color: `#a0c060`,
    tag: `FLAMING CLIFFS`,
    briefing_real: `O Fairchild Republic A-10 Thunderbolt II — apelidado de Warthog (javali) — foi projetado com um conceito radical: sobreviver ao fogo terrestre intenso e destruir tanques. A fuselagem é construída ao redor do canhão GAU-8 Avenger, e o piloto fica dentro de uma 'banheira' de titânio de 540 kg que protege contra projéteis de até 23mm.

O A-10 estreou em combate na Operação Tempestade no Deserto (1991), onde destruiu mais de 900 tanques iraquianos. No Afeganistão e Iraque, tornou-se o avião mais requisitado pelas forças terrestres americanas por voar baixo, lento e com precisão perto das tropas amigas. Apesar de múltiplas tentativas de aposentadoria, continua em serviço em 2025.`,
    briefing_dcs: `No DCS, o A-10A é a versão Flaming Cliffs do Warthog — cockpit simplificado, sem o targeting pod Litening e sem o computador de bombardeio avançado do A-10C. É mais acessível mas também mais limitado.

A experiência mais única é o GAU-8: o avião literalmente desacelera quando você dispara, e o som do BRRRRRT é inconfundível. Os Maverick são sua principal arma guiada — sem laser próprio, você usa a câmera IR do míssil para travar o alvo. É o trampolim natural para o A-10C II.`,
    weapons: [
      { cat: `Canhao`, name: `GAU-8/A Avenger 30mm`, sub: `Canhão rotativo 7 canos — 1.174 projeteis`, guidance: `—`, range: `~1.500 m`, main: true, ff: false, desc: `O canhão mais icônico do DCS. Projéteis PGU-14 API de 30mm. O avião desacelera visivelmente ao disparar. ~3.900 tiros/min. Letal contra blindados leves. BRRRRRT.` },
      { cat: `Guiado AG`, name: `AGM-65D/G Maverick`, sub: `Missil ar-terra IR — fogo e esqueca`, guidance: `Infravermelho — Fogo e Esqueca`, range: `~25 km`, main: true, ff: true, desc: `Principal arma guiada do A-10A. Use a câmera IR para travar o alvo — sem laser próprio, o IR do Maverick faz o trabalho. 65G tem ogiva maior (300 lb) para alvos resistentes. Até 6x por missão.` },
      { cat: `WVR`, name: `AIM-9M Sidewinder`, sub: `Autodefesa AA`, guidance: `Infravermelho`, range: `~18 km`, main: false, ff: true, desc: `Apenas autodefesa de emergência. Dois AIM-9 nas pontas das asas para helicópteros e aeronaves lentas.` },
      { cat: `Bombas`, name: `Mk-82 / Mk-82AIR / Mk-84`, sub: `Bombas proposito geral`, guidance: `Livre`, range: `—`, main: false, ff: false, desc: `Família Mk-80. Mk-82AIR tem retardador para baixa altitude. Sem CCIP no A-10A — exige mergulho com ângulo calculado manualmente.` },
      { cat: `Bombas`, name: `Mk-20 Rockeye / CBU-87 CEM`, sub: `Bombas cluster`, guidance: `Livre (Cluster)`, range: `—`, main: false, ff: false, desc: `Rockeye: 247 submunições HEAT antitanque. CBU-87: efeito combinado HE+incendiário+HEAT. Eficazes contra formações de veículos.` },
      { cat: `Foguetes`, name: `Hydra 70 (LAU-61/68)`, sub: `19x ou 7x foguetes 70mm`, guidance: `Nao guiado`, range: `~4 km`, main: false, ff: false, desc: `Pods de foguetes de 70mm. Alta cadência para supressão de área. Múltiplas ogivas disponíveis.` },
      { cat: `Pods`, name: `AN/ALQ-131 ECM Pod`, sub: `Pod de guerra eletronica`, guidance: `—`, range: `—`, main: false, ff: false, desc: `Pod de jamming para proteção contra radares de SAMs e AAA guiada. Monte em um dos pylons externos.` },
    ],
    hotkeys: [
      { cat: `startup`, catLabel: `Inicializacao`, catIcon: `🔧`, keys: `RShift + L`, action: `Ligar energia / APU`, desc: `Primeiro passo. Liga os sistemas elétricos.`, essential: true },
      { cat: `startup`, catLabel: `Inicializacao`, catIcon: `🔧`, keys: `RAlt + Home`, action: `Ligar motor esquerdo`, desc: `Liga o motor TF34 esquerdo.`, essential: true },
      { cat: `startup`, catLabel: `Inicializacao`, catIcon: `🔧`, keys: `RCtrl + Home`, action: `Ligar motor direito`, desc: `Liga o motor TF34 direito.`, essential: true },
      { cat: `startup`, catLabel: `Inicializacao`, catIcon: `🔧`, keys: `W`, action: `Freio de roda`, desc: `Segure para manter o avião parado.`, essential: false },
      { cat: `flight`, catLabel: `Voo`, catIcon: `✈️`, keys: `G`, action: `Trem de pouso`, desc: `Recolhe/estende.`, essential: true },
      { cat: `flight`, catLabel: `Voo`, catIcon: `✈️`, keys: `B`, action: `Freio aerodinâmico`, desc: `Abre spoilers. O A-10 é lento por natureza — use para controlar velocidade em passes de ataque.`, essential: false },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `C`, action: `Selecionar canhao GAU-8`, desc: `Seleciona o GAU-8 para passes rasantes de ataque.`, essential: true },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `D`, action: `Ciclar armas`, desc: `Alterna entre Maverick, bombas, foguetes e canhão.`, essential: true },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `Space`, action: `Disparar`, desc: `Dispara a arma selecionada.`, essential: true },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `RAlt + F9`, action: `Auto-travar alvo (Maverick)`, desc: `Trava o seeker do Maverick no alvo mais próximo. Útil para iniciantes sem targeting pod.`, essential: false },
      { cat: `cm`, catLabel: `Contramédidas`, catIcon: `🛡️`, keys: `Insert`, action: `Chaff`, desc: `Contra mísseis radar. O A-10 é um alvo fácil para SAMs — voe baixo e reaja rápido.`, essential: true },
      { cat: `cm`, catLabel: `Contramédidas`, catIcon: `🛡️`, keys: `Delete`, action: `Flares`, desc: `Contra MANPADS e mísseis IR — a maior ameaça ao A-10 em baixa altitude.`, essential: true },
    ],
  }
  ,

  a10c: {
    id: `a10c`,
    name: `A-10C II Tank Killer`,
    nation: `EUA / USAF`,
    flag: `🇺🇸`,
    role: `Ataque ao Solo / CAS Avancado`,
    era: `Moderno (2005–)`,
    speed: `~706 km/h`,
    engine: `2x GE TF34-GE-100A (9.065 lbf cada)`,
    color: `#c8f060`,
    tag: `MODULO PAGO`,
    briefing_real: `O A-10C é a versão modernizada do clássico Warthog, com aviónica digital completa que transformou o avião analógico dos anos 1970 em uma plataforma de precisão do século XXI. O programa CCIP da USAF nos anos 2000 adicionou CDUs, MFDs coloridos, datalink SADL, o pod Litening para targeting laser e capacidade de usar JDAMs.

O resultado é um avião que mantém a robustez e o canhão lendário do A-10A, mas agora pode destruir um tanque específico a 8 km com uma GBU-12, coordenar com JTAC em tempo real via Link 16, e usar o Sniper XR pod para identificar alvos a mais de 40 km.`,
    briefing_dcs: `No DCS, o A-10C II é considerado um dos melhores módulos do jogo. A Eagle Dynamics colaborou com pilotos reais da USAF no desenvolvimento — o nível de detalhe do cockpit e sistemas é incomparável entre módulos de ataque ao solo.

O fluxo de trabalho é via CDU e MFDs coloridos. Aprenda a página DSMS para gerenciar armas, TGP para o targeting pod e EGI para navegação. O Litening pod é controlado pelo piloto e permite designação laser precisa e buddy-lasing. O sistema JTAC/datalink para coordenação direta com forças terrestres torna este o melhor avião de CAS cooperativo do DCS.`,
    weapons: [
      { cat: `Canhao`, name: `GAU-8/A Avenger 30mm`, sub: `Canhão rotativo 7 canos — 1.174 projeteis`, guidance: `—`, range: `~1.500 m`, main: true, ff: false, desc: `Idêntico ao A-10A. No A-10C o CCIP do HUD mostra exatamente onde os projéteis vão cair — muito mais preciso.` },
      { cat: `Guiado AG`, name: `GBU-10 / GBU-12 / GBU-16`, sub: `Paveway laser-guiado`, guidance: `Laser (Litening/Sniper)`, range: `—`, main: true, ff: false, desc: `A combinação mais usada no A-10C. O Litening designa o alvo, a GBU-12 de 500 lb é lançada em CCRP e guia até o ponto laser. Precisão de metros.` },
      { cat: `Guiado AG`, name: `GBU-31/B e GBU-38/B JDAM`, sub: `GPS-guiadas 2.000/500 lb`, guidance: `GPS/INS — Fogo e Esqueca`, range: `~25 km`, main: false, ff: true, desc: `JDAMs todo-clima. O Litening pode converter alvos designados para coordenadas GPS automaticamente.` },
      { cat: `Guiado AG`, name: `AGM-65D/G/H/K Maverick`, sub: `Missil ar-terra IR/TV/Laser`, guidance: `IR / CCD / Laser`, range: `~25 km`, main: true, ff: true, desc: `No A-10C a página MAV do DSMS gerencia múltiplos Mavericks. Versão K (laser) + Litening é a configuração mais precisa.` },
      { cat: `Guiado AG`, name: `AGM-154A/C JSOW`, sub: `Planador GPS longo alcance`, guidance: `GPS/INS`, range: `~130 km`, main: false, ff: true, desc: `O A-10C II pode usar JSOW para ataques de stand-off — capacidade nova vs A-10A. Lance de alta altitude fora da ameaça.` },
      { cat: `WVR`, name: `AIM-9M/X Sidewinder`, sub: `Autodefesa com HMCS`, guidance: `IR / HOBS (9X com HMCS)`, range: `~18–35 km`, main: false, ff: true, desc: `No A-10C II o HMCS permite usar o AIM-9X com high off-boresight. Mais eficaz que o A-10A contra helicópteros.` },
      { cat: `Bombas`, name: `Mk-82 / Mk-82AIR / Mk-84`, sub: `Bombas proposito geral + CCIP/CCRP`, guidance: `Livre`, range: `—`, main: false, ff: false, desc: `O CCIP do HUD torna as bombas livres muito mais precisas que no A-10A.` },
      { cat: `Bombas`, name: `CBU-87/97/103/105`, sub: `Cluster e sensor-fused`, guidance: `Livre / IAM (103/105)`, range: `—`, main: false, ff: false, desc: `CBU-103/105 são versões IAM com GPS — mais precisas e com maior alcance de planagem.` },
      { cat: `Pods`, name: `AN/AAQ-28 Litening II`, sub: `Targeting Pod principal`, guidance: `—`, range: `—`, main: true, ff: false, desc: `O coração do A-10C. Câmera IR + TV + laser designador. Controlado via MFD direito (página TGP). Espere ~90s para estabilizar após ligar.` },
      { cat: `Pods`, name: `AN/AAQ-33 Sniper XR`, sub: `Targeting Pod avancado`, guidance: `—`, range: `—`, main: false, ff: false, desc: `Zoom extremo — identifica e designa alvos a mais de 40 km. Qualidade de imagem superior ao Litening em longas distâncias.` },
    ],
    hotkeys: [
      { cat: `startup`, catLabel: `Inicializacao`, catIcon: `🔧`, keys: `Cockpit clicavel`, action: `Cold Start completo`, desc: `Cold start completo com procedimentos USAF reais — ~8-10 minutos. Eagle Dynamics lançou tutoriais em áudio. K para kneeboard.`, essential: true },
      { cat: `startup`, catLabel: `Inicializacao`, catIcon: `🔧`, keys: `RShift + Home`, action: `Autostart`, desc: `Liga automaticamente. Útil para multiplayer rápido.`, essential: false },
      { cat: `startup`, catLabel: `Inicializacao`, catIcon: `🔧`, keys: `W`, action: `Freio de roda`, desc: `Segure para manter o avião parado.`, essential: false },
      { cat: `flight`, catLabel: `Voo`, catIcon: `✈️`, keys: `G`, action: `Trem de pouso`, desc: `Recolhe/estende.`, essential: true },
      { cat: `flight`, catLabel: `Voo`, catIcon: `✈️`, keys: `B`, action: `Freio aerodinâmico`, desc: `Para controle de velocidade em passes de ataque.`, essential: false },
      { cat: `radar`, catLabel: `TGP / DSMS`, catIcon: `📡`, keys: `Litening ON (cockpit)`, action: `Ligar Litening Pod`, desc: `Ligue via switch no painel. Página TGP no MFD direito. Aguarde ~90 segundos para estabilizar.`, essential: true },
      { cat: `radar`, catLabel: `TGP / DSMS`, catIcon: `📡`, keys: `; . , /`, action: `Mover cursor do TGP`, desc: `Move a câmera do Litening para encontrar e apontar para o alvo.`, essential: true },
      { cat: `radar`, catLabel: `TGP / DSMS`, catIcon: `📡`, keys: `Enter`, action: `Travar / Ponto de referencia TGP`, desc: `Trava o TGP no alvo ou marca ponto de referência para waypoint.`, essential: true },
      { cat: `radar`, catLabel: `TGP / DSMS`, catIcon: `📡`, keys: `DSMS (MFD)`, action: `Gerenciar armas via DSMS`, desc: `Página DSMS no MFD esquerdo mostra todas as estações e status. Selecione a arma ativa clicando na estação.`, essential: true },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `Master Arm (cockpit)`, action: `Master Arm ON`, desc: `Chave no painel direito. OBRIGATÓRIO antes de qualquer disparo.`, essential: true },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `D`, action: `Ciclar armas (DSMS)`, desc: `Alterna entre armas ativas no DSMS.`, essential: true },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `Space / pickle HOTAS`, action: `Lancar / Disparar`, desc: `Para CCRP, mantenha o pickle pressionado — o avião lança automaticamente no ponto calculado.`, essential: true },
      { cat: `weapons`, catLabel: `Armas`, catIcon: `💥`, keys: `C`, action: `Selecionar canhao GAU-8`, desc: `Ativa o GAU-8. Use o CCIP no HUD para mira precisa.`, essential: true },
      { cat: `cm`, catLabel: `Contramédidas`, catIcon: `🛡️`, keys: `Insert`, action: `Chaff`, desc: `AN/ALE-47 — ~480 chaff/flares totais.`, essential: true },
      { cat: `cm`, catLabel: `Contramédidas`, catIcon: `🛡️`, keys: `Delete`, action: `Flares`, desc: `Contra MANPADS — a maior ameaça no CAS em baixa altitude.`, essential: true },
      { cat: `cm`, catLabel: `Contramédidas`, catIcon: `🛡️`, keys: `H`, action: `Programa CMDS automatico`, desc: `Ativa programa pré-configurado do ALE-47.`, essential: false },
      { cat: `radio`, catLabel: `Radio / JTAC`, catIcon: `📻`, keys: `\``, action: `Menu de radio / JTAC`, desc: `Acessa comunicações com JTAC, AWACS. O A-10C II tem Link 16 para coordenação em tempo real com forças terrestres.`, essential: true },
    ],
  }
}
