# Treinaí

⚠️ _**Status:** In development_

> PT: Read this README in [portuguese](./README.pt.md)

**Treinaí** is a mini app developed using [Ionic](https://ionicframework.com/), [Angular](https://angular.dev/) and [Capacitor](https://capacitorjs.com/), it is focused on personal workouts management, allowing users to track and plann their exercise routines.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/en) >= 22.17.1 (including NPM >= 11.4.2)
- [Ionic/CLI](https://ionicframework.com/docs/cli): Install it globally running the following command: `npm i -g @ionic/cli`

### Development setup

Clone the repository and install the dependencies:

```bash
npm ci
```

### Run in browser

To run the app in browser, use the command bellow:

```bash
ionic serve
```

The app will be available at `localhost:8100`

### Run on Android

#### 1. Open in Android Studio

Make sure [Android Studio](https://developer.android.com/studio) is installed and properly configured. Then, run:

```bash
npx cap open android
```

### Run on physical device or emulator

To run the project on a physical device or emulator, use:

```bash
npx cap run android
```

> ⚠️ Yout must have an emulator configured or a physical device connected via USB with USB debugging enabled.

## Licença

This project is licensed under [MIT LICENSE](./LICENSE).