export const dictionaries = {
  en: {
    meta: {
      title: "Sendy – Instant File Sharing",
      description:
        "Share files instantly between devices on the same network. No cloud, no accounts, no limits.",
    },
    hero: {
      title: "Sendy",
      subtitle:
        "Share files instantly between devices on the same network. No cloud. No accounts. Just send.",
      playStore: "Google Play",
      windows: "Windows",
    },
    features: {
      heading: "Why Sendy?",
      items: [
        {
          icon: "bolt",
          title: "Instant Discovery",
          desc: "Devices appear automatically when they're on the same Wi-Fi. No pairing needed.",
        },
        {
          icon: "shield",
          title: "Private & Secure",
          desc: "Files travel directly between devices over your local network. Nothing touches the cloud.",
        },
        {
          icon: "monitor",
          title: "Cross-Platform",
          desc: "Send from Android to Windows, or Windows to Android. It just works.",
        },
        {
          icon: "rocket",
          title: "Lightning Fast",
          desc: "Local transfers are only limited by your Wi-Fi speed. Send large files in seconds.",
        },
        {
          icon: "wifiOff",
          title: "No Internet Required",
          desc: "Works completely offline. All you need is a shared Wi-Fi network.",
        },
        {
          icon: "target",
          title: "Dead Simple",
          desc: "Open the app, tap a device, pick a file. Three steps. Done.",
        },
      ],
    },
    how: {
      heading: "How It Works",
      steps: [
        {
          title: "Open Sendy",
          desc: "Launch the app on both devices connected to the same Wi-Fi.",
        },
        {
          title: "Tap a device",
          desc: "Nearby devices appear on your radar automatically.",
        },
        {
          title: "Send your files",
          desc: "Pick any file and it arrives instantly. No accounts, no setup.",
        },
      ],
    },
    cta: {
      heading: "Start sharing now",
      subtitle: "Free. Open source. No strings attached.",
      playStore: "Get on Google Play",
      windows: "Download for Windows",
    },
    footer: {
      github: "GitHub",
      coffee: "Buy me a coffee",
      copy: "Made with ♥ by Cotbert",
    },
  },
  es: {
    meta: {
      title: "Sendy – Comparte archivos al instante",
      description:
        "Comparte archivos al instante entre dispositivos en la misma red. Sin nube, sin cuentas, sin límites.",
    },
    hero: {
      title: "Sendy",
      subtitle:
        "Comparte archivos al instante entre dispositivos en la misma red. Sin nube. Sin cuentas. Solo envía.",
      playStore: "Google Play",
      windows: "Windows",
    },
    features: {
      heading: "¿Por qué Sendy?",
      items: [
        {
          icon: "bolt",
          title: "Descubrimiento instantáneo",
          desc: "Los dispositivos aparecen automáticamente en la misma Wi-Fi. Sin emparejamiento.",
        },
        {
          icon: "shield",
          title: "Privado y seguro",
          desc: "Los archivos viajan directamente entre dispositivos por tu red local. Nada toca la nube.",
        },
        {
          icon: "monitor",
          title: "Multiplataforma",
          desc: "Envía de Android a Windows, o de Windows a Android. Simplemente funciona.",
        },
        {
          icon: "rocket",
          title: "Velocidad extrema",
          desc: "Las transferencias locales solo están limitadas por tu Wi-Fi. Envía archivos grandes en segundos.",
        },
        {
          icon: "wifiOff",
          title: "Sin internet necesario",
          desc: "Funciona completamente offline. Solo necesitas una red Wi-Fi compartida.",
        },
        {
          icon: "target",
          title: "Súper simple",
          desc: "Abre la app, toca un dispositivo, elige un archivo. Tres pasos. Listo.",
        },
      ],
    },
    how: {
      heading: "Cómo funciona",
      steps: [
        {
          title: "Abre Sendy",
          desc: "Abre la app en ambos dispositivos conectados a la misma Wi-Fi.",
        },
        {
          title: "Toca un dispositivo",
          desc: "Los dispositivos cercanos aparecen en tu radar automáticamente.",
        },
        {
          title: "Envía tus archivos",
          desc: "Elige cualquier archivo y llega al instante. Sin cuentas, sin configuración.",
        },
      ],
    },
    cta: {
      heading: "Empieza a compartir",
      subtitle: "Gratis. Código abierto. Sin compromisos.",
      playStore: "Descargar en Google Play",
      windows: "Descargar para Windows",
    },
    footer: {
      github: "GitHub",
      coffee: "Invítame un café",
      copy: "Hecho con ♥ por Cotbert",
    },
  },
} as const;

export type Locale = keyof typeof dictionaries;
export type Dictionary = (typeof dictionaries)[Locale];
