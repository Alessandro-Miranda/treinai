# Treinaí App — V2
## Documento de definição funcional, fluxos e estrutura de telas

> **Objetivo do documento:** servir como fonte de verdade inicial para definição do produto, UX/UI e implementação da V2 do aplicativo.
>
> **Princípio do projeto:** mobile-only, simples, funcional e orientado ao uso real durante a rotina de musculação. O aplicativo deve resolver o fluxo **professor monta → aluno recebe → aluno executa → aluno registra → histórico acompanha** sem adicionar funcionalidades que não contribuam diretamente para esse ciclo.

---

# 1. Visão do produto

O Treinaí é um aplicativo mobile para gestão e execução de treinos de musculação.

O sistema possui três contextos de utilização:

1. **Aluno** — recebe treinos criados por um professor e registra sua execução.
2. **Aluno individual** — monta e gerencia os próprios treinos.
3. **Professor** — cadastra/gerencia alunos, cria treinos e acompanha a execução e o histórico dos alunos.

A distinção entre **Aluno** e **Aluno individual** deve representar principalmente a origem da gestão do treino:

- **Aluno:** o treino é administrado por um professor.
- **Aluno individual:** o próprio usuário administra seus treinos.

O usuário não deve precisar escolher entre esses perfis durante o login. A definição do perfil ocorre no primeiro acesso e pode ser tratada como parte do onboarding.

---

# 2. Princípios do produto

## 2.1 Mobile-first de verdade

O aplicativo será desenvolvido exclusivamente para uso mobile.

Não haverá, na V1:

- preocupação com layout desktop;
- adaptação para navegador;
- manutenção de uma versão web equivalente;
- componentes desenhados para funcionar igualmente em desktop.

O layout deve ser pensado para uso com uma mão, leitura rápida e interação durante o treino.

---

## 2.2 Treino em primeiro lugar

A principal ação do aplicativo deve ser:

> **Iniciar o treino de hoje.**

O usuário não deve precisar navegar por várias telas para descobrir qual treino deve fazer.

A Home deve responder rapidamente:

- Qual é meu treino de hoje?
- Posso começar agora?
- O que fiz no último treino?
- Existe algum treino pendente/incompleto?

---

## 2.3 O aplicativo não deve tentar substituir tudo

A V1 não terá como objetivo ser:

- rede social;
- aplicativo de dieta;
- marketplace;
- plataforma de pagamentos;
- sistema completo de academia;
- aplicativo de comunicação entre professor e aluno;
- gerador automático de treinos;
- plataforma de gamificação.

Essas funcionalidades podem ser consideradas futuramente, mas não fazem parte do núcleo da V1.

---

## 2.4 Complexidade deve surgir de necessidade real

Não criar abstrações ou funcionalidades apenas porque parecem tecnicamente interessantes.

A arquitetura deve evoluir conforme os problemas reais do domínio surgirem.

---

# 3. Perfis de usuário

## 3.1 Aluno

Usuário vinculado a um professor.

### Pode:

- visualizar seus treinos;
- iniciar o treino;
- visualizar exercícios;
- visualizar aquecimento;
- visualizar séries/repetições definidas pelo professor;
- registrar cargas;
- registrar repetições;
- finalizar exercícios;
- pausar e continuar um treino;
- consultar seu histórico;
- visualizar treinos anteriores.

### Não pode:

- criar livremente novos treinos;
- alterar a estrutura do treino definida pelo professor;
- alterar exercícios;
- alterar número de séries;
- alterar parâmetros estruturais do treino.

O aluno pode editar **dados de execução**, quando o professor permitir.

Exemplo:

> Professor define 3 séries de 10 repetições.

O aluno pode registrar:

- 30 kg × 10
- 32 kg × 10
- 32 kg × 8

Mas não deve transformar o treino em 4 séries de 12.

---

# 3.2 Aluno individual

Usuário que não depende de um professor para montar seus treinos.

### Pode:

- criar treinos;
- editar treinos;
- excluir/desativar treinos;
- adicionar exercícios;
- configurar séries;
- configurar repetições;
- configurar descanso;
- definir carga inicial;
- definir quais dados serão registrados;
- iniciar treinos;
- registrar execução;
- consultar histórico.

O aluno individual possui praticamente toda a capacidade de gerenciamento de treino do professor, mas restrita aos próprios treinos.

---

# 3.3 Professor

Usuário responsável pela montagem e acompanhamento de treinos dos alunos.

### Pode:

- cadastrar/adicionar alunos;
- visualizar seus alunos;
- criar treinos;
- editar treinos;
- configurar exercícios;
- configurar séries;
- configurar repetições;
- configurar descanso;
- definir carga inicial;
- definir regras de registro;
- visualizar treinos dos alunos;
- consultar histórico por aluno;
- acompanhar a execução dos alunos.

### Não precisa possuir, inicialmente, uma área de treino própria.

**Decisão recomendada para a V1:**

O perfil Professor não terá treinos próprios.

Caso um professor queira utilizar o aplicativo para registrar seus próprios treinos, poderá possuir outro usuário/perfil como Aluno.

Isso evita misturar dois contextos completamente diferentes na mesma experiência.

---

# 4. Fluxo de autenticação e onboarding

## 4.1 Princípio

O login e o cadastro devem ser tratados como uma única jornada.

O usuário não precisa escolher previamente entre:

- Login;
- Cadastro;
- Aluno;
- Professor.

A autenticação social identifica o usuário.

Depois disso, o sistema verifica se existe um perfil completo associado à conta.

---

## 4.2 Tela inicial

### Conteúdo

- Logo/ícone do aplicativo;
- Nome do aplicativo;
- Botão **Continuar com Google**;
- eventualmente outros métodos de autenticação no futuro.

### Evitar

Não criar inicialmente:

- tela separada de Login;
- tela separada de Cadastro;
- formulário de e-mail e senha;
- tela para escolher Aluno/Professor antes da autenticação.

Isso reduz fricção e elimina telas que não agregam valor.

---

## 4.3 Primeiro acesso

Fluxo:

```text
Splash
  ↓
Tela inicial
  ↓
Continuar com Google
  ↓
Firebase Authentication
  ↓
Usuário autenticado?
  ├── Não possui perfil
  │      ↓
  │   Onboarding
  │      ↓
  │   Escolha do tipo de uso
  │      ↓
  │   Criação do perfil
  │      ↓
  │   Home
  │
  └── Possui perfil
         ↓
       Home
```

---

## 4.4 Escolha do tipo de uso

Tela:

> **Como você pretende usar o aplicativo?**

Opções:

### Treino com professor
> Receba seus treinos e acompanhe sua evolução.

### Treino por conta própria
> Monte e gerencie seus próprios treinos.

### Sou professor
> Monte treinos e acompanhe seus alunos.

A opção escolhida define o contexto inicial do usuário.

---

## 4.5 Cadastro complementar

Após escolher o tipo de uso, solicitar somente as informações necessárias.

### Campos iniciais

- Nome de exibição;
- tipo de usuário.

Não solicitar informações que não tenham uso imediato.

Informações adicionais podem ser acrescentadas posteriormente no perfil.

---

# 5. Estrutura geral de navegação

A navegação principal deve ser simples.

## Aluno

```text
Home
├── Treino de hoje
├── Treinos
├── Histórico
└── Perfil
```

## Aluno individual

```text
Home
├── Treinos
├── Histórico
└── Perfil
```

## Professor

```text
Home
├── Alunos
├── Treinos
├── Histórico
└── Perfil
```

A navegação deve priorizar a ação mais importante de cada perfil.

---

# 6. Home

A Home é contextual ao perfil.

---

## 6.1 Home do Aluno

### Hierarquia recomendada

1. Saudação curta;
2. cartão do treino de hoje;
3. botão principal **Iniciar treino**;
4. status do treino;
5. acesso aos treinos;
6. resumo do último treino;
7. acesso ao histórico.

### Exemplo conceitual

```text
Bom dia, Alessandro

┌──────────────────────────────┐
│ TREINO DE HOJE               │
│                              │
│ Peito + Tríceps              │
│ 7 exercícios                 │
│ ~55 min                      │
│                              │
│ [ INICIAR TREINO ]           │
└──────────────────────────────┘

Último treino
Peito + Tríceps
Há 5 dias

[ Ver histórico ]
```

Se existir um treino iniciado anteriormente:

```text
TREINO EM ANDAMENTO

Peito + Tríceps
Exercício 4 de 7

[ CONTINUAR TREINO ]
```

O botão **Continuar treino** deve ter prioridade sobre **Iniciar treino**.

---

# 7. Tela de lista de treinos

## Aluno

Exibe os treinos disponibilizados pelo professor.

Exemplo:

```text
Meus treinos

Treino A
Peito + Tríceps

Treino B
Costas + Bíceps

Treino C
Pernas

Treino D
Ombros
```

O aluno pode visualizar os detalhes, mas não editar a estrutura.

---

## Aluno individual

A tela também possui:

**+ Novo treino**

Cada treino pode oferecer:

- visualizar;
- editar;
- duplicar futuramente;
- desativar/excluir.

---

## Professor

A tela de treinos deve ser contextual ao aluno.

O professor pode acessar:

```text
Alunos
  ↓
Aluno
  ↓
Treinos
```

ou utilizar uma área geral de treinos caso isso faça sentido posteriormente.

Para a V1, priorizar o fluxo orientado ao aluno.

---

# 8. Cadastro/edição de treino

A tela de criação de treino deve ser um dos principais pontos de estudo de Angular Forms.

## Informações do treino

- Nome do treino;
- descrição opcional;
- exercícios;
- ordem dos exercícios.

---

# 9. Estrutura de um exercício

Cada exercício deve possuir:

- nome;
- ordem;
- observação opcional;
- séries;
- repetições;
- descanso;
- carga inicial opcional;
- estratégia de registro.

---

# 10. Estratégia de registro

Esse é um conceito importante do domínio.

Ao configurar um exercício, o responsável pelo treino define como a execução será registrada.

## Opção A — Registrar uma carga

O aluno informa uma única carga principal para o exercício.

Exemplo:

```text
Supino reto

3 × 10

Carga:
[ 30 kg ]

Descanso:
90s
```

Essa opção é útil quando não existe interesse em registrar a carga de cada série separadamente.

---

## Opção B — Registrar todas as séries

Cada série possui seus próprios dados.

```text
Supino reto

Série 1
Carga: 30 kg
Reps: 10

Série 2
Carga: 32 kg
Reps: 10

Série 3
Carga: 32 kg
Reps: 8
```

Essa opção permite acompanhar progressão com maior precisão.

---

# 11. Carga inicial

A carga inicial é opcional.

O professor pode sugerir:

> Carga inicial: 30 kg

Isso não significa necessariamente que o aluno será impedido de utilizar outra carga.

A aplicação deve diferenciar:

- **carga sugerida/inicial**;
- **carga efetivamente executada**.

Essa distinção será importante para o histórico.

---

# 12. Descanso

O descanso pode ser configurado por exercício.

Exemplo:

```text
Descanso
90 segundos
```

Durante o treino, após concluir uma série, o aplicativo poderá futuramente oferecer um contador regressivo.

**V1 recomendada:** suportar o valor de descanso no treino.

**V1.1/futuro:** implementar timer visual e notificações.

---

# 13. Formulários dinâmicos

A criação/edição de treino deve permitir estruturas dinâmicas.

Conceitualmente:

```text
Treino
 ├── Exercício 1
 │    ├── Configuração
 │    └── Séries
 │
 ├── Exercício 2
 │    ├── Configuração
 │    └── Séries
 │
 └── Exercício 3
      ├── Configuração
      └── Séries
```

Essa parte deve ser uma das áreas centrais para explorar:

- Reactive Forms;
- FormArray;
- validação;
- componentes reutilizáveis;
- Input/Output;
- composição de componentes;
- controle de estado do formulário.

---

# 14. Execução do treino

Essa é a principal experiência do aplicativo.

O objetivo é permitir que o usuário treine sem precisar navegar excessivamente.

---

## 14.1 Estrutura

```text
Treino de hoje
      ↓
Resumo do treino
      ↓
Iniciar treino
      ↓
Aquecimento
      ↓
Exercício atual
      ↓
Registrar série
      ↓
Descanso
      ↓
Próximo exercício
      ↓
...
      ↓
Finalizar treino
```

---

# 15. Tela de resumo antes do treino

Antes de iniciar:

```text
Peito + Tríceps

7 exercícios
24 séries
~55 min

Aquecimento
5 min

[ INICIAR TREINO ]
```

Essa tela serve para o usuário entender o treino antes de começar.

---

# 16. Tela de execução

A interface deve funcionar como um player de música.

Existe uma lista de exercícios, mas apenas um está em foco.

Conceito:

```text
┌──────────────────────────────┐
│ ← Peito + Tríceps       ⋮    │
│                              │
│  EXERCÍCIO 3 DE 7            │
│                              │
│  SUPINO INCLINADO            │
│                              │
│  3 séries × 10 reps          │
│  Carga sugerida: 30 kg       │
│                              │
│  Série 1                     │
│  [ 30 kg ] [ 10 reps ]       │
│                              │
│  Série 2                     │
│  [ 32 kg ] [ 10 reps ]       │
│                              │
│  Série 3                     │
│  [ 32 kg ] [ 8 reps ]        │
│                              │
│  [ FINALIZAR EXERCÍCIO ]     │
│                              │
│  ← anterior      próximo →   │
└──────────────────────────────┘
```

---

# 17. Próximo exercício

A lista de exercícios pode permanecer acessível por um gesto ou componente discreto.

Exemplo:

```text
Agora
Supino inclinado

Próximo
Crucifixo máquina

Depois
Tríceps pulley
```

O objetivo é criar a sensação de sequência contínua.

O usuário não deve precisar voltar para uma lista toda vez que concluir um exercício.

---

# 18. Treino em andamento

O aplicativo deve salvar o progresso do treino.

Se o usuário fechar o aplicativo no meio:

```text
Treino em andamento

Peito + Tríceps
Exercício 4 de 7

[ CONTINUAR ]
```

Ao continuar, deve retornar ao ponto adequado.

Esse comportamento é especialmente importante porque o aplicativo será utilizado em uma situação real de treino, onde interrupções podem acontecer.

---

# 19. Finalização do treino

Ao terminar:

```text
Treino concluído! 💪

Peito + Tríceps

Tempo:
52 min

Exercícios:
7/7

Séries:
24/24

[ VER RESUMO ]
[ VOLTAR PARA HOME ]
```

O histórico deve ser criado/atualizado somente após a conclusão adequada do treino.

---

# 20. Histórico

O histórico representa as sessões efetivamente realizadas.

## Aluno

Pode visualizar:

```text
Histórico

Hoje
Peito + Tríceps
52 min

18/08
Costas + Bíceps
58 min

16/08
Pernas
1h02
```

Ao abrir uma sessão:

- exercícios;
- cargas;
- repetições;
- séries;
- duração;
- data;
- eventualmente observações.

---

## Professor

O professor deve poder filtrar por aluno.

Fluxo:

```text
Histórico
   ↓
Selecionar aluno
   ↓
Sessões realizadas
   ↓
Selecionar sessão
   ↓
Detalhes
```

A V1 não precisa começar com filtros complexos.

---

# 21. Área do professor

## Lista de alunos

Tela:

```text
Meus alunos

Alessandro
Treino A • realizado hoje

João
Treino B • há 2 dias

Maria
Treino C • pendente
```

A informação de status deve ser útil para o professor sem transformar a tela em um dashboard complexo.

---

## Perfil do aluno

Ao entrar:

```text
Alessandro

Treino atual
Peito + Tríceps

[ TREINOS ]
[ HISTÓRICO ]
```

A partir daí o professor consegue administrar o aluno.

---

# 22. Adicionar aluno

O vínculo professor ↔ aluno precisa ser simples.

### Fluxo recomendado para a V1

Professor:

```text
Alunos
  ↓
Adicionar aluno
  ↓
Gerar convite
```

O aluno recebe um convite e aceita.

Alternativamente, o professor pode informar um identificador/e-mail do aluno.

**Decisão final da implementação pode ser tomada quando o modelo de dados for definido.**

A experiência deve evitar que o professor precise conhecer detalhes técnicos ou IDs.

---

# 23. Relacionamento professor/aluno

Um usuário pode ter um relacionamento com um professor.

Para a V1, não é necessário suportar múltiplos professores por aluno.

Também não é necessário suportar equipes, academias ou hierarquias.

Modelo simplificado:

```text
Professor
   │
   ├── Aluno 1
   ├── Aluno 2
   └── Aluno 3
```

Isso reduz bastante a complexidade inicial.

---

# 24. Perfil

A tela de perfil deve existir, mas ser simples.

## V1

- nome;
- e-mail;
- tipo de usuário;
- sair da conta.

Não criar uma tela de configurações extensa.

Alterações de informações pessoais podem ser adicionadas posteriormente.

---

# 25. Estados importantes da aplicação

O layout deve considerar explicitamente os seguintes estados.

## Treino

- nenhum treino disponível;
- treino disponível;
- treino em andamento;
- treino concluído;
- treino incompleto;
- treino alterado pelo professor.

## Aluno

- sem professor;
- convite pendente;
- vinculado a professor;
- sem treino;
- com treino.

## Professor

- sem alunos;
- com alunos;
- aluno sem treino;
- aluno com treino.

## Autenticação

- carregando;
- não autenticado;
- autenticado;
- primeiro acesso;
- perfil incompleto.

---

# 26. Empty states

Empty states devem ser tratados como parte do produto.

### Aluno sem treino

> Você ainda não recebeu nenhum treino.
>
> Quando seu professor disponibilizar um treino, ele aparecerá aqui.

### Professor sem alunos

> Você ainda não possui alunos.
>
> Adicione seu primeiro aluno para começar a montar treinos.

### Histórico vazio

> Você ainda não concluiu nenhum treino.
>
> Seu histórico aparecerá aqui depois do primeiro treino.

---

# 27. V1 — escopo funcional

## Autenticação

- Google Login;
- logout;
- persistência de sessão;
- onboarding de primeiro acesso;
- definição de perfil.

## Aluno

- visualizar treino;
- visualizar exercícios;
- iniciar treino;
- registrar carga;
- registrar repetições;
- continuar treino;
- finalizar treino;
- visualizar histórico.

## Aluno individual

Tudo do aluno, mais:

- criar treino;
- editar treino;
- excluir/desativar treino;
- configurar exercícios.

## Professor

- adicionar aluno;
- visualizar alunos;
- criar treino;
- editar treino;
- configurar exercícios;
- definir carga inicial;
- definir descanso;
- definir estratégia de registro;
- visualizar histórico por aluno.

---

# 28. Funcionalidades deliberadamente fora da V1

Não implementar inicialmente:

- chat;
- notificações push;
- pagamentos;
- assinatura;
- feed;
- comentários;
- curtidas;
- ranking;
- gamificação;
- integração com relógios;
- Apple Health;
- Google Fit;
- contador de calorias;
- dieta;
- IA para geração de treino;
- geração automática de carga;
- análise avançada de progressão;
- gráficos complexos;
- múltiplos professores por aluno;
- academias/equipes;
- versão web;
- versão desktop.

---

# 29. Possíveis evoluções pós-V1

Depois que o núcleo estiver funcionando, considerar:

## Timer de descanso

Após concluir uma série:

```text
DESCANSO

01:24

[ PULAR ]
```

## Progressão

Mostrar:

> Último treino: 30 kg × 10  
> Melhor marca: 35 kg × 8

## Gráficos

Evolução de carga por exercício.

## Notificações

Lembrete de treino.

## Push

Professor atualizou seu treino.

## Múltiplos professores

Aluno vinculado a mais de um profissional.

## Biblioteca de exercícios

Exercícios pré-cadastrados com instruções e imagens.

## Observações

Aluno pode registrar:

> "Senti dificuldade na última série."

## Comunicação

Professor pode deixar observações específicas para o aluno.

---

# 30. Estrutura conceitual de dados

Modelo inicial simplificado:

```text
User
├── id
├── name
├── email
├── role
└── createdAt

Workout
├── id
├── ownerId
├── studentId
├── name
├── description
├── status
├── exercises[]
└── createdAt

WorkoutExercise
├── exerciseId
├── name
├── order
├── sets
├── repetitions
├── restTime
├── initialLoad
└── loggingStrategy

WorkoutSession
├── id
├── workoutId
├── studentId
├── startedAt
├── finishedAt
├── duration
└── exercises[]

ExerciseSession
├── exerciseId
├── sets[]
└── completedAt

SetResult
├── load
├── repetitions
└── completed
```

Esse modelo é conceitual e deve ser refinado durante a implementação.

---

# 31. Princípio importante: treino ≠ sessão de treino

O domínio deve diferenciar:

### Treino

A definição do que deve ser feito.

Exemplo:

> Treino A — Peito + Tríceps

Contém exercícios, séries, repetições etc.

### Sessão

A execução real daquele treino em uma data.

Exemplo:

> Treino A realizado em 23/08/2026.

Essa distinção é fundamental para permitir histórico e evolução.

---

# 32. Diretriz de UX para o treino

Durante o treino:

- reduzir texto;
- reduzir navegação;
- utilizar botões grandes;
- priorizar ações;
- evitar formulários longos;
- manter o exercício atual sempre evidente;
- mostrar claramente o próximo exercício;
- preservar o estado;
- minimizar digitação.

O usuário deve conseguir registrar uma série rapidamente.

---

# 33. Diretriz visual

A identidade visual deve transmitir:

- força;
- performance;
- tecnologia;
- simplicidade;
- foco.

Pode utilizar dark mode como base.

A interface deve privilegiar:

- contraste;
- tipografia legível;
- números grandes;
- estados claros;
- poucos elementos por tela;
- componentes reutilizáveis.

O design não deve depender de elementos puramente decorativos.

---

# 34. Design system

Antes da implementação visual definitiva, definir:

## Cores

- background principal;
- background secundário;
- superfície/card;
- texto principal;
- texto secundário;
- cor primária;
- sucesso;
- alerta;
- erro;
- estado desabilitado.

## Tipografia

Definir:

- título;
- heading;
- body;
- caption;
- números de carga/repetição.

## Componentes

Definir inicialmente:

- Button;
- Card;
- Input;
- Select;
- Modal/Sheet;
- List Item;
- Exercise Card;
- Workout Card;
- Progress Indicator;
- Bottom Navigation;
- Empty State;
- Loading State.

A intenção é evitar criar estilos diferentes para cada tela.

---

# 35. Estratégia de implementação

A ordem recomendada é:

```text
1. Definição do produto
       ↓
2. Fluxos
       ↓
3. Wireframes
       ↓
4. Design visual
       ↓
5. Design system
       ↓
6. Estrutura Angular
       ↓
7. Autenticação
       ↓
8. Home
       ↓
9. Treinos
       ↓
10. Execução
       ↓
11. Histórico
       ↓
12. Professor
       ↓
13. Refinamentos
```

---

# 36. Estratégia de desenvolvimento

O projeto deve ser construído verticalmente.

Evitar:

```text
"Vou terminar toda a arquitetura primeiro."
```

Preferir:

```text
Login funcionando
       ↓
Home funcionando
       ↓
Treino visualizado
       ↓
Treino iniciado
       ↓
Série registrada
       ↓
Treino concluído
       ↓
Histórico criado
```

Cada etapa deve produzir algo utilizável.

---

# 37. Angular como objeto de estudo

O projeto deve permitir aprofundar:

- Standalone Components;
- Signals;
- Reactive Forms;
- FormArray;
- validação;
- Input/Output;
- Content Projection quando fizer sentido;
- Services;
- Dependency Injection;
- Routing;
- Guards;
- interceptors;
- RxJS;
- Facade;
- Strategy;
- composição de componentes;
- gerenciamento de estado;
- tratamento de loading/error;
- lazy loading;
- persistência;
- integração com Firebase.

Não é necessário implementar todos esses conceitos desde o começo.

O problema do domínio deve determinar quando cada conceito entra.

---

# 38. Ionic + Capacitor

A aplicação será concebida como:

```text
Angular
    ↓
Ionic
    ↓
Capacitor
    ↓
Android / iOS
```

O Ionic deve fornecer principalmente a experiência e os componentes mobile.

O Capacitor deve ser utilizado quando houver necessidade de recursos nativos.

Exemplos futuros:

- armazenamento;
- notificações;
- haptics;
- status bar;
- splash screen;
- integração com APIs nativas.

Não criar abstrações nativas antes de existir uma necessidade.

---

# 39. Firebase

Firebase será inicialmente responsável por:

- Authentication;
- banco de dados;
- eventualmente Storage;
- eventualmente Cloud Functions.

A arquitetura deve evitar espalhar chamadas do Firebase diretamente por toda a aplicação.

A aplicação deve possuir uma camada própria de acesso aos dados quando a complexidade justificar.

---

# 40. Critério para considerar a V1 concluída

A V1 estará funcional quando:

### Aluno

```text
Login
 ↓
Home
 ↓
Visualiza treino
 ↓
Inicia treino
 ↓
Executa exercício
 ↓
Registra séries
 ↓
Passa para próximo exercício
 ↓
Finaliza treino
 ↓
Consulta histórico
```

### Professor

```text
Login
 ↓
Home
 ↓
Adiciona aluno
 ↓
Acessa aluno
 ↓
Cria treino
 ↓
Adiciona exercícios
 ↓
Define parâmetros
 ↓
Publica/disponibiliza treino
 ↓
Consulta histórico
```

### Aluno individual

```text
Login
 ↓
Home
 ↓
Cria treino
 ↓
Configura exercícios
 ↓
Inicia treino
 ↓
Registra execução
 ↓
Consulta histórico
```

Se esses três fluxos funcionarem de ponta a ponta, a V1 cumpriu seu objetivo.

---

# 41. Princípio final do projeto

> **O aplicativo deve ser simples de usar, interessante de construir e útil o suficiente para ser usado de verdade.**

A prioridade é:

1. experiência real de treino;
2. simplicidade;
3. consistência visual;
4. arquitetura sustentável;
5. aprendizado de Angular;
6. funcionalidades adicionais somente quando justificadas.

A pergunta que deve orientar novas funcionalidades é:

> **"Isso melhora significativamente o fluxo de montar, executar ou acompanhar um treino?"**

Se a resposta for não, provavelmente pode esperar.

