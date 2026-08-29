# Design System — Mini App de Treino
V1.0 · Visual Direction: Neo Athletic

## 1. Visão e princípios visuais

O app terá uma identidade baseada em quatro conceitos:

### Performance

A interface deve transmitir força, evolução e acompanhamento de desempenho.

### Movimento

Elementos de progresso, transições, indicadores e microinterações devem reforçar a sensação de atividade.

### Minimalismo

A interface deve ser limpa e objetiva. Poucos elementos competem pela atenção ao mesmo tempo.

### Premium

O aplicativo deve parecer um produto cuidadosamente projetado, evitando o aspecto de "app pessoal feito para testar uma ideia".

### Direção visual

Dark + Purple + Athletic Accents

A base será predominantemente escura, com roxo como cor de marca, enquanto verde, ciano e laranja terão funções específicas.

*A regra mais importante:*

roxo constrói a identidade; as cores secundárias comunicam estados.

Isso evita transformar a interface em um carnaval de cores.

---

## 2. Paleta de cores
### 2.1. Backgrounds

A interface utiliza diferentes níveis de superfície para criar hierarquia sem depender de sombras.

| Token                |	Hex    |	Uso                       |
|----------------------|---------|----------------------------|
| background-primary   | #0F1115 | Fundo principal            |
| background-secondary | #171A21 | Cards e containers         |
| surface              | #21242C | Inputs, elementos elevados |
| surface-hover        | #282C35 | Hover/pressed              |
| surface-active       | #303440 | Elemento selecionado       |

#### Regra

Não utilizar #000000 como fundo principal.

O #0F1115 mantém o aspecto dark, mas proporciona uma aparência mais sofisticada e menos agressiva.

---

## 3. Cor primária — Brand

A identidade principal do app será construída sobre o roxo.

### Primary

#5F5AFA

Uso:

- botões principais;
- elementos ativos;
- progresso;
- links;
- FAB;
- controles selecionados;
- elementos de navegação;
- destaques da interface.
- Variações

| Token         | Hex     | Uso                   |      
|---------------|---------|-----------------------|
| primary       |	#5F5AFA |	Cor principal         |
| primary-hover |	#7A74FF |	Hover/foco            |
| primary-soft  |	#9E90FD	| Destaques secundários |
| primary-tint  |	#DED9FF	| Fundos claros         |

#### Princípio

O #5F5AFA deve ser a cor mais imediatamente associada ao aplicativo.

---

## 4. Cores de movimento

### Motion Green (#B6FF3B)

Uso restrito para:

- série concluída;
- progresso positivo;
- evolução;
- metas atingidas;
- indicadores de performance positiva.

É uma cor propositalmente vibrante.

Não deve ser utilizada como cor decorativa.

### Motion Cyan (#55F0D6)

Uso:

- cardio;
- frequência cardíaca;
- indicadores relacionados a tempo;
- atividades aeróbicas;
- métricas específicas de movimento.

O cyan funciona como uma segunda linguagem visual dentro do produto.

---

## 5. Cor de performance

### Performance Orange (#FF8A3D)

Uso:

- PR;
- recordes pessoais;
- conquistas;
- cargas máximas;
- momentos especiais de performance.

#### Variação

#FFB36A

Uso para gráficos e elementos de suporte.

#### Regra importante

Laranja = conquista.

Se o usuário bater um recorde no supino, por exemplo, o laranja pode aparecer.

Isso cria uma associação psicológica muito interessante:

Roxo = app
Verde = progresso
Laranja = performance

---

## 6. Cores semânticas

Essas cores não fazem parte da identidade visual propriamente dita. Elas existem para comunicação funcional.

| Token	  | Hex	    | Uso        | 
|---------|---------|------------|
| success | #3EE58C |	Sucesso    |
| warning |	#FFC857	| Atenção    |
| error   |	#FF5D73	| Erro       |
| info    |	#5DA9FF	| Informação |

### Regra

Não usar essas cores como decoração.

Por exemplo, um card não deve ficar vermelho simplesmente porque queremos criar contraste.

Vermelho significa erro.

---

## 7. Cores de texto

| Token	         | Hex      | Uso                              |
|----------------|----------|----------------------------------|
| text-primary   |	#F4F5F7 |	Títulos e informações principais |
| text-secondary |	#B4BAC5	| Conteúdo secundário              |
| text-muted     |	#707784	| Informações auxiliares           |
| text-disabled  |	#4F545E	| Elementos desabilitados          |

### Hierarquia

#F4F5F7: Primary information

#B4BAC5: Secondary information

#707784: Supporting information

Essa hierarquia será extremamente importante no dark mode.

---

## 8. Tipografia

**Família**: Outfit

A Outfit será a fonte oficial do produto.

Ela combina muito bem com a proposta porque possui:

- excelente legibilidade;
- formas geométricas;
- aparência contemporânea;
- personalidade;
- boa leitura em números;
- excelente comportamento em interfaces mobile.

---

## 9. Pesos tipográficos

Será utilizado quatro pesos:

| Peso	   | Valor |  Uso                |
|----------|-------|---------------------| 
| Regular	 | 400   | Texto               |
| Medium	 | 500   | Labels / botões     |
| SemiBold | 600   | Títulos             |
| Bold	   | 700   | Destaques / números |

Evitar utilizar 800/ExtraBold inicialmente.

A interface deve ser forte através da hierarquia, não através de textos excessivamente pesados.

---

## 10. Escala tipográfica

Token	Tamanho	Peso	Uso
display	36px	700	Números/destaques
h1	30px	700	Título principal
h2	24px	600	Seções
h3	20px	600	Cards
body-lg	16px	500	Informações importantes
body	15px	400	Texto padrão
caption	13px	500	Labels
micro	11px	500	Informações auxiliares

---

## 11. Números

Números possuem alto valor visual.

Exemplos:

- 100 kg
- 12 reps
- 04 séries
- 01:32

Por isso, métricas importantes podem utilizar:

*Outfit Bold 700* e tamanhos maiores.

A carga deve chamar mais atenção do que o texto "kg".

Por exemplo:

- **100**kg

e não:

100**kg**

## 12. Grid e espaçamento

O sistema será baseado em 8pt Grid.

| Token    | Valor |
|----------|-------|
| space-1  |	4px  |
| space-2  |	8px  |
| space-3  |	12px |
| space-4  |	16px |
| space-5  |	20px |
| space-6  |	24px |
| space-8  |	32px |
| space-10 |	40px |
| space-12 |	48px |
| space-16 |	64px |

O sistema continua baseado em 8px, mas é permitido 4px e 12px para pequenos ajustes.

## 13. Margens e padding

### Tela

- Padding horizontal: 16px
- Em telas maiores: 24px

### Cards

- Padding padrão: 16px
- Cards maiores: 20–24px

### Seções

- Entre grandes blocos: 24–32px
- Elementos relacionados Preferencialmente: 8–16px

Isso cria uma distinção clara entre elementos pertencentes ao mesmo grupo e grupos diferentes.

## 14. Border Radius

A interface terá cantos relativamente arredondados, mas não excessivamente "fofinhos".

| Token	| Valor | Uso                  |
|-------------|-------|----------------------|
| radius-sm	| 8px	 | Inputs pequenos      |
| radius-md	| 12px	 | Botões / componentes |
| radius-lg   | 16px	 | Cards                |
| radius-xl   | 20px	 | Cards principais     |
| radius-2xl  | 24px	 | Containers especiais |
| radius-full | 999px | Chips / pills / FAB  |

16–20px será o radius mais característico do app.

## 15. Bordas

A interface não deve depender de bordas.

Quando necessárias:

**border: 1px solid rgba(...)**

Ou utilizar uma cor derivada de surface.

Prioridade visual:

contraste de superfície > borda > sombra

## 16. Sombras

Sombras serão extremamente discretas.

Como será trabalhado dark UI, grandes sombras pretas praticamente desaparecem.

A elevação será criada principalmente por:

- mudança de superfície;
- contraste;
- blur sutil;
- bordas discretas.

## 17. Botões

Teremos quatro variantes principais.

### Primary

Ação principal.

Background: #5F5AFA
Texto: text-primary

Exemplo: Iniciar treino

### Secondary

Ação secundária.

Background: #21242C
Texto: text-primary

### Ghost

Ação de baixo destaque.

Sem background.

Texto: #9E90FD

### Destructive

Ações perigosas.

Background: #FF5D73
Texto: text-primary

## 18. Estados dos componentes

Todo componente interativo deve possuir pelo menos:

- Default
- Hover
- Pressed
- Focus
- Disabled

No mobile, o estado Pressed será mais importante do que Hover.

A interação deve fornecer feedback rápido.

## 19. Cards

Cards serão um dos principais elementos do produto.

### Card padrão

- Background: #171A21
- Radius: 16–20px
- Padding: 16–20px

Não utilizar sombras fortes.

### Card de destaque

- background: #21242C
- border: subtle primary ou um gradiente muito discreto derivado do roxo.

#### Regra

Gradientes existem, mas não são a identidade.

Eles devem ser usados pontualmente.

## 20. Chips

Chips serão utilizados para:

- músculos;
- status;
- filtros;
- PR;
- categorias.

## 21. Progressão visual

Progress bars terão:

- Track: #21242C
- Progress: #5F5AFA
- Quando a meta for concluída: #B6FF3B

## 22. Gráficos

Preferência por:

- line charts;
- bar charts;
- área;
- sparklines.

### Cores

- Principal: #5F5AFA
- Performance: #FF8A3D
- Progressão: #B6FF3B
- Cardio: #55F0D6

## 23. Iconografia

> Biblioteca: Lucide Icons

A iconografia deve ser:

- outline;
- simples;
- consistente;
- sem preenchimentos excessivos.

## 24. Bottom Navigation

A navegação inferior será minimalista.

Exemplo conceitual:

⌂        Dumbbell        Chart        User
Início   Treinos         Progresso    Perfil

Apenas o item ativo recebe destaque.

- Active: #5F5AFA
- Inactive: #707784

Evitar colocar todos os ícones dentro de círculos ou backgrounds.

## 25. FAB

O Floating Action Button pode ser utilizado para a ação central do produto.

Exemplo:

+ Iniciar treino

- Background: #5F5AFA
- Icon: #F4F5F7
- Radius: 999px (full)

## 26. Tela de execução do treino

Tela principal do aplicativo

A interface deve priorizar:

- exercício atual;
- série atual;
- carga;
- repetições;
- descanso;
- ação de concluir série.


Hierarquia visual
EXERCÍCIO 2/6

Supino Inclinado
Peito superior

24 kg × 10 reps

────────────────

Série 1     ✓
Série 2     ✓
Série 3     ●
Série 4     ○

────────────────

       CONCLUIR SÉRIE

A interface deve "guiar" o treino.

## 27. Microinterações

Quando uma série é concluída:

- botão recebe feedback de Pressed;
- série muda de estado;
- indicador de progresso avança;
- pequena animação de confirmação;
- próxima série torna-se ativa.

Nada precisa ser exagerado.

A regra é:

A animação deve explicar uma mudança de estado.

Não animar simplesmente porque podemos.

## 28. Hierarquia de cores

**Nível 1 — Identidade**

🟣 Purple

#5F5AFA

**Nível 2 — Performance**

🟠 Orange

#FF8A3D

**Nível 3 — Progresso**

🟢 Green

#B6FF3B

**Nível 4 — Movimento/Cardio**

🟢 Cyan

#55F0D6

**Nível 5 — Feedback funcional**

Success / Warning / Error / Info.

## 29. Regra 60/30/10

Para evitar excesso de cores:

~60% Neutros / backgrounds.

~30% Superfícies e texto.

~10% Cores de destaque.

E dentro desses 10%:

Purple > Green/Cyan > Orange

Isso é fundamental.

Se todas as cores aparecerem com a mesma frequência, prede-se a identidade.

## 30. Princípios de UX

**1. Uma ação principal por tela:**

O usuário precisa saber imediatamente o que fazer.

**2. Informação importante sempre ganha contraste**

Carga, reps, tempo e progresso não devem competir com informações secundárias.

**3. Menos decoração, mais informação**

O app é sobre treino.

**4. Estados devem ser visualmente claros**

O usuário precisa diferenciar imediatamente:

- não iniciado;
- em andamento;
- concluído;
- PR;
- erro.

**5. Movimento deve ter propósito**

Animações devem comunicar mudanças.

**6. Consistência acima de criatividade**

Um componente existente deve ser reutilizado antes de criarmos uma nova variação.

## 31. Identidade resumida

Eplicando o design do app em uma única frase:

> Um sistema visual dark, minimalista e atlético, construído sobre uma identidade roxa e complementado por cores semânticas vibrantes que representam progresso, movimento e performance.