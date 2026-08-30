# Direção visual — Lucas do Corte

## Abordagens consideradas

### 1. Black & Gold Atelier
Uma experiência editorial de barbearia premium, com preto carvão, dourado artesanal e branco osso. A sensação é de precisão, presença e tradição contemporânea.

**Probability:** 0.07

### 2. Concrete Street Grooming
Uma linguagem urbana inspirada em pôsteres de rua, concreto, tipografia condensada e contrastes quentes. Mais jovem, direta e energética.

**Probability:** 0.03

### 3. Ivory Heritage Club
Uma interpretação mais clara e clássica, com marfim, marrom espresso e dourado envelhecido. Evoca clube masculino, atendimento próximo e sofisticação discreta.

**Probability:** 0.09

## Abordagem escolhida: Black & Gold Atelier

### Design Movement
Editorial de luxo contemporâneo com referências de ateliê, barbearia clássica e pôsteres artesanais de alta personalidade.

### Core Principles
- **Contraste com intenção:** carvão profundo como palco, dourado como assinatura e branco osso para leitura.
- **Precisão visível:** linhas finas, detalhes de corte e composição assimétrica remetem ao gesto técnico do barbeiro.
- **Matéria e textura:** fundos com grão sutil, metal escovado e pinceladas controladas evitam uma aparência digital genérica.
- **Convite direto:** chamadas claras para WhatsApp e agendamento, sem esconder a ação principal.

### Color Philosophy
O preto cria foco e uma sensação de ambiente noturno, reservado e masculino. O dourado não será usado como brilho excessivo: funciona como metal, preço, linha de corte e sinal de confiança. O branco osso suaviza a leitura e preserva a energia artesanal da imagem de referência.

### Layout Paradigm
Composição em camadas, com hero dividido entre manifesto e cartão de serviço, blocos deslocados e uma barra de ação fixa no mobile. A página alterna seções de respiro com faixas de informação em largura total, evitando uma sucessão previsível de cards centralizados.

### Signature Elements
1. Linhas de navalha e pequenos marcadores dourados como divisores editoriais.
2. Selos circulares inspirados em ícones de corte e acabamento.
3. Tarjas de preço com bordas irregulares/pinceladas, reinterpretadas com CSS e textura.

### Interaction Philosophy
Cada interação deve parecer um gesto de acabamento: botões respondem com compressão curta, cards revelam detalhes ao passar o cursor e o agendamento abre um fluxo simples, sem fricção. A navegação privilegia âncoras e feedback claro.

### Animation
Entradas suaves em fade + deslocamento vertical curto, com stagger discreto. Hover com elevação mínima e brilho dourado contido. O menu mobile abre como uma lâmina lateral; o modal de agendamento usa escala inicial de 0.97 e opacidade. Tudo respeita prefers-reduced-motion.

### Typography System
Display: **Bebas Neue**, em caixa alta para títulos e preços, com tracking controlado. Corpo: **DM Sans**, para legibilidade e tom contemporâneo. A palavra “Lucas” pode usar **Caveat** ou imagem de marca manuscrita apenas em assinaturas pontuais, nunca para textos longos.

### Brand Essence
A barbearia de bairro com acabamento de ateliê para homens que valorizam presença, precisão e praticidade.

**Personalidade:** preciso, marcante, próximo.

### Brand Voice
Headlines são curtas e afirmativas. CTAs soam como convite direto e seguro. Microcopy é humana, objetiva e sem clichês de marketing.

Exemplos:
- “Seu corte. Seu horário. Sem enrolação.”
- “Chama no WhatsApp e reserva a cadeira.”

### Wordmark & Logo
Marca composta por um monograma LC geométrico, formado por duas lâminas cruzadas dentro de um selo circular aberto, acompanhado do wordmark manuscrito “Lucas” e da assinatura condensada “DO CORTE”.

### Signature Brand Color
**Dourado lâmina — #D89B2B**, um âmbar metálico quente que funciona como reconhecimento imediato da marca.

## Decisão de implementação
A home terá: navegação fixa com marca, hero com manifesto e CTA, faixa de serviços/preços baseada na referência, seção de diferenciais, galeria visual, localização/horários e agendamento via WhatsApp. Os dados de contato e endereço serão apresentados como campos editáveis da proposta, usando o número visível na referência para o CTA de WhatsApp.

## Style Decisions
- Preto carvão, dourado lâmina e branco osso são a base em todas as telas.
- Evitar gradientes roxos, excesso de arredondamento e layouts genéricos centralizados.
- Usar textura com moderação para que o conteúdo continue legível.
