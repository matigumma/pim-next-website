module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    extend: {
      screens: {
        "2lg": '1120px',
      },
      dropShadow: {
        "strong": "2px 5px 5px rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        "novedades": "url('/assets/images/novedades.png')",
        "logoFooter": "url('/assets/images/logo-footer.svg')",
        "logoLarge": "url('/assets/images/logo-large.svg')",
        "logoSmall": "url('/assets/images/logo-small.svg')",
        "phone": "url('/assets/images/phone.svg')",
        "f": "url('/assets/images/f.svg')",
        "i": "url('/assets/images/i.svg')",
        "wa": "url('/assets/images/wa.svg')",
      },
      MediaQueryList: {
        llg: 'screen and (min-width: 1100px)',
      }
    },
    colors: {
      mainpim: '#233c66',
      primpim: '#6daad1',
      secpim: '#9e9e9e',
      lightpim: '#c7c7c7',
      greenpim: 'rgb(74, 117, 57)',
      lightgreenpim: 'rgb(134, 167, 121)',
    },
    minWidth: {
      '40': '10rem',
      '60': '15rem',
      '80': '20rem',
      '100': '25rem',
    },
    maxWidth: {
      '120': '30rem',
      '160': '40rem',
      '200': '50rem',
    }
  },
  variants: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      'cmyk'
    ],
  }
}