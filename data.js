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
  }
}
