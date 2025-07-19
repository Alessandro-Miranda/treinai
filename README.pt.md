# Treinaí

⚠️ _**Status:** Em desenvolvimento_

> EN: Leia este README em [Inglês](./README.md)

**Treinaí** é um mini aplicativo, desenvolvido com [Ionic](https://ionicframework.com/), [Angular](https://angular.dev/) e [Capacitor](https://capacitorjs.com/), focado na gestão pessoal de treinos, permitindo o acompanhamento e planejamento da sua rotina de exercícios.

## Desenvolvimento

### Pré-requisitos

- [Node.js](https://nodejs.org/en) >= 22.17.1 (incluí o NPM >= 11.4.2)
- [Ionic/CLI](https://ionicframework.com/docs/cli): Instale globalmente com o comando: `npm i -g @ionic/cli`

### Configuração do ambiente

Clone o repositório e instale as dependências com:

```bash
npm ci
```

### Executar no navegador

Para rodar a aplicação no navegador, utilize:

```bash
ionic serve
```

A aplicação será disponibilizada em `localhost:8100`.

### Executar no Android

#### 1. Abrir no Android Studio

Certifique-se de ter o [Android Studio](https://developer.android.com/studio) instalado e configurado corretamente. Em seguida execute:

```bash
npx cap open android
```

### Rodar em um dispositivo físico ou emulador

Para rodar o projeto em um dispositivo ou emulador, rode:

```bash
npx cap run android
```

> ⚠️ É necessário ter um emulador configurado ou um dispositivo conectado via USB com a depuração USB ativada.

## Licença

Este projeto está licenciado sob os termos da [MIT LICENSE](./LICENSE).