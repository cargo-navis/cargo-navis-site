// Croatian homepage copy — verbatim from the current Webflow site (1:1 rebuild).
// Do not "improve" these strings; they are kept as-is for SEO parity.
import type { HomeCopy } from './types';

export const hr: HomeCopy = {
  hero: {
    heading: 'Upravljajte logistikom uz Cargo Navis',
    subtitle:
      'Jednostavno upravljajte vozilima, zaposlenicima i pošiljkama na jedinstvenoj i moćnoj platformi.',
  },

  about: {
    heading: 'Digitalizirajte svoje svakodnevne operacije prijevoza tereta.',
    paragraph:
      'Saznajte kako softver za upravljanje pošiljkama optimizira logističke procese, poboljšava praćenje pošiljki te pruža snažne alate za planiranje, nadzor i pojednostavljenje kretanja robe kroz cijeli opskrbni lanac.',
    stats: {
      companies: 'Aktivnih kompanija',
      orders: 'Dodanih naloga',
      loads: 'Dodanih tereta',
      vehicles: 'Registriranih vozila',
    },
  },

  features: {
    fleet: {
      title: 'Upravljajte svojom transportnom flotom.',
      paragraphs: [
        'Učinkovito pratite i upravljajte cijelom flotom s jedne platforme. Ostvarite potpunu vidljivost nad vozilima, dokumentacijom i ključnim datumima kako biste osigurali nesmetan i pouzdan rad.',
      ],
      subBoxes: [
        {
          title: 'Centralizirano',
          text: 'Pratite sva vozila, dokumente i važne rokove na jednom mjestu za potpunu operativnu kontrolu.',
        },
        {
          title: 'Proaktivno',
          text: 'Budite korak ispred održavanja, usklađenosti i obnove dokumenata uz pravovremena upozorenja koja pomažu spriječiti kašnjenja i prekide u radu.',
        },
      ],
    },

    orders: {
      title: 'Preuzmite potpunu kontrolu nad svojim nalozima.',
      paragraphs: [
        'Pojednostavite, optimizirajte i pohranite svoje naloge za bolju kontrolu, točnost i učinkovitost.',
      ],
      bullets: [
        'Olakšajte poslovanje uz bazu naloga i potpunu povijest svih podataka o prijevozu.',
        'Osigurajte točnost i zadržite potpunu kontrolu nad nalozima uz redovita ažuriranja statusa.',
        'Pošaljite naloge vozačima i primajte informacije o utovaru putem <strong>WhatsApp-a</strong>.',
      ],
    },

    alerts: {
      title: 'Nikada ne propustite važan rok.',
      paragraphs: [
        'Primajte pravovremena <strong>upozorenja</strong> o isteku registracija, terminima održavanja, tahografima i drugim ključnim datumima. Sustav kontinuirano prati važne rokove i šalje obavijesti putem <strong>e-maila</strong>.',
        'Ostanite usklađeni s propisima i smanjite rizik od kazni ili zastoja u radu. Uz proaktivne notifikacije možete planirati unaprijed i osigurati nesmetan rad svoje flote.',
      ],
    },

    analytics: {
      title: 'Donosite odluke na temelju podataka, ne osjećaja.',
      paragraphs: [
        'U svakom trenutku znajte koliko zarađujete, tko vam donosi najviše prihoda i gdje imate prostor za rast. Naša analitika daje vam potpunu sliku poslovanja - kroz prihod, broj naloga i performanse vozila, vozača i klijenata.<br><br>Filtrirajte podatke po vremenu, vozaču, vozilu ili klijentu i u nekoliko sekundi dođite do točnih informacija koje su vam potrebne.',
      ],
    },

    archive: {
      title: 'Digitalna arhiva -<br>Svi važni dokumenti na jednom mjestu.',
      paragraphs: [
        'Zaboravite na izgubljene papire, e-mail privitke i nepregledne mape. S digitalnom arhivom svi vaši ključni dokumenti - nalozi, licence, ugovori i ostala dokumentacija - sigurno su <strong>pohranjeni</strong> <strong>i</strong> <strong>uvijek dostupni</strong>.',
      ],
      bullets: [
        'Jednostavan upload dokumenata.',
        'Centralizirana digitalna arhiva i sigurna pohrana na jednom mjestu.',
        'Brzi pristup dokumentima kad god vam trebaju, bez papira i nereda.',
      ],
    },
  },

  testimonials: {
    heading: 'Što naši klijenti kažu o našem poslovanju',
    cards: {
      sokol: {
        role: 'CEO',
        quote:
          '“Softver nam je drastično poboljšao pregled nad flotom i dokumentacijom. Fleet management nam automatski prati isteke registracija i opreme, a sustav nas pravovremeno upozorava i na isteke vozačkih dozvola, KOD 95 i liječničkih pregleda. Uštedjeli smo mnogo vremena i smanjili rizike u svakodnevnom radu.”',
      },
      vukelja: {
        role: 'Manager',
        quote:
          '“Softver nam je u potpunosti centralizirao informacije i olakšao vođenje naloga. Naplatu pratimo jednostavno, a sve što nam treba imamo na jednom mjestu.”',
      },
      animago: {
        role: 'Disponent',
        quote:
          '“Aplikacija je jednostavna, intuitivna i olakšava svakodnevne operativne procese. Fleet management posebno nam pomaže pratiti isteke registracija vozila.”',
      },
    },
  },

  cta: {
    heading: 'Preuzmite kontrolu nad svojim poslovanjem već danas!',
    paragraph:
      'Isprobajte Cargo Navis već danas i digitalizirajte svoje poslovanje - bez razbacanih papira.',
  },

  footer: {
    address: 'Županjska ulica 21,<br>10000 Zagreb, Croatia',
  },
};
