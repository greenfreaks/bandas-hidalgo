
export interface BandEvent {
  date: Date;
  place: string;
  time: Date;
  state: string;
  municipality: string;
  googleLocation: string
}

export interface BandSocials {
  facebook?: string | undefined;
  instagram?: string | undefined;
  spotify?: string | undefined;
  tiktok?: string | undefined;
}
export interface Banda {
  id: number;
  name: string;
  municipio: string;
  estado: string;
  img: string;
  url: string;
  desc: string;
  genero: string[];
  phone?: number;
  bandSocials?: BandSocials;
  mainColor: string;
  events?: BandEvent[];
  tracksOnSpotify?: string[] | null;
}

export const bandCatalog: Banda[] = [
  {
    id: 1,
    name: "Los Fantasmas Del Ático",
    municipio: "Tizayuca",
    estado: "Hidalgo",
    img: "https://i.ibb.co/FP9nHR0/tarjetas-de-presentaci-n-lfda.png",
    url: "los-fantasmas-del-atico",
    desc: "Una banda que desata la fuerza del rock & roll, rockabilly y surf con un estilo propio y una actitud explosiva. Cada show es una descarga de energía, guitarras encendidas y ritmo contagioso que transforma cualquier escenario en una verdadera fiesta.",
    genero: [
      "Rock",
      "Rock N Roll",
      "Rockabilly",
      "Surf",
    ],

    bandSocials:
    {
      facebook: "https://www.facebook.com/losfantasmasdelatico",
    },
    mainColor: "#B52533",
    phone: 5619238733,
    events: [
      {
        date: new Date("2026-02-15"),
        time: new Date("1970-01-01T16:00:00"),
        place: "Foro Azidoh",
        state: "Hidalgo",
        municipality: "Tizayuca",
        googleLocation: "https://maps.app.goo.gl/tCijWobTCcvDYYxy9"
      },
      {
        date: new Date("2026-02-15"),
        time: new Date("1970-01-01T16:00:00"),
        place: "Casa Cilantro",
        state: "Hidalgo",
        municipality: "Tizayuca",
        googleLocation: "https://maps.app.goo.gl/RCy5GL53LSbH9oYUA"
      },
      {
        date: new Date("2026-02-15"),
        time: new Date("1970-01-01T16:00:00"),
        place: "Casa Cilantro",
        state: "Hidalgo",
        municipality: "Tizayuca",
        googleLocation: "https://maps.app.goo.gl/RCy5GL53LSbH9oYUA"
      },
      {
        date: new Date("2026-02-15"),
        time: new Date("1970-01-01T16:00:00"),
        place: "Casa Cilantro",
        state: "Hidalgo",
        municipality: "Tizayuca",
        googleLocation: "https://maps.app.goo.gl/RCy5GL53LSbH9oYUA"
      },
      {
        date: new Date("2026-02-15"),
        time: new Date("1970-01-01T16:00:00"),
        place: "Casa Cilantro",
        state: "Hidalgo",
        municipality: "Tizayuca",
        googleLocation: "https://maps.app.goo.gl/RCy5GL53LSbH9oYUA"
      },
    ]
  },
  {
    id: 2,
    name: "Stiff Vultures",
    municipio: "Tizayuca",
    estado: "Hidalgo",
    img: "https://i.ibb.co/1fKT5MYG/stiff-vultures.webp",
    url: "stiff-vultures",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque odit accusamus est praesentium, culpa veniam dicta exercitationem tempora quaerat assumenda earum beatae recusandae, quisquam sed aliquam cumque quas? Earum, sunt.",
    genero: [
      "Rock",
    ],
    phone: 5535068781,
    mainColor: "#B52533",
  },
  {
    id: 3,
    name: "Tlaloc",
    municipio: "Tizayuca",
    estado: "Hidalgo",
    img: "https://i.ibb.co/6dMKp9v/tlaloc.webp",
    url: "tlaloc",
    desc: "Banda de synth rock originaria de Tizayuca, Hidalgo, que fusiona atmósferas electrónicas con la energía del rock para crear un sonido envolvente y contemporáneo. Su propuesta destaca por melodías hipnóticas y una identidad sonora en constante evolución.",
    genero: [
      "Rock",
    ],
    phone: 5535068781,
    mainColor: "#B52533",
    bandSocials:
    {
      facebook: "https://www.facebook.com/Tlaloc.band.mx",
      instagram: "https://www.instagram.com/tlaloc.band/",
      spotify: "https://open.spotify.com/intl-es/artist/6abIa42pbVxmHYt1GXIqOI",
    }
    ,
    tracksOnSpotify: [
      "5QthHjfRrvcYtzYKv1pYm5",
      "3YechnR7sFNsDodrVPs7hv",
      "5OoYH1GdSTA1XhIZ9JQBft"
    ],
    events: [
      {
        date: new Date("2026-02-15"),
        time: new Date("1970-01-01T16:00:00"),
        place: "Foro Azidoh",
        state: "Hidalgo",
        municipality: "Tizayuca",
        googleLocation: "https://maps.app.goo.gl/tCijWobTCcvDYYxy9"
      },
      {
        date: new Date("2026-02-15"),
        time: new Date("1970-01-01T16:00:00"),
        place: "Casa Cilantro",
        state: "Hidalgo",
        municipality: "Tizayuca",
        googleLocation: "https://maps.app.goo.gl/RCy5GL53LSbH9oYUA"
      },
      {
        date: new Date("2026-02-15"),
        time: new Date("1970-01-01T16:00:00"),
        place: "Casa Cilantro",
        state: "Hidalgo",
        municipality: "Tizayuca",
        googleLocation: "https://maps.app.goo.gl/RCy5GL53LSbH9oYUA"
      },
      {
        date: new Date("2026-02-15"),
        time: new Date("1970-01-01T16:00:00"),
        place: "Casa Cilantro",
        state: "Hidalgo",
        municipality: "Tizayuca",
        googleLocation: "https://maps.app.goo.gl/RCy5GL53LSbH9oYUA"
      },
      {
        date: new Date("2026-02-15"),
        time: new Date("1970-01-01T16:00:00"),
        place: "Casa Cilantro",
        state: "Hidalgo",
        municipality: "Tizayuca",
        googleLocation: "https://maps.app.goo.gl/RCy5GL53LSbH9oYUA"
      },
    ]

  },
  {
    id: 4,
    name: "Dolls Band",
    municipio: "Tizayuca",
    estado: "Hidalgo",
    img: "https://i.ibb.co/RTsHSwzh/dolls-band.webp",
    url: "dolls-band",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque odit accusamus est praesentium, culpa veniam dicta exercitationem tempora quaerat assumenda earum beatae recusandae, quisquam sed aliquam cumque quas? Earum, sunt.",
    genero: [
      "Versátil",
    ],
    mainColor: "#B52533",
  },

  {
    id: 5,
    name: "La Tropicana Actopan",
    municipio: "Actopan",
    estado: "Hidalgo",
    img: "https://i.ibb.co/60XxWMJ9/tropicana.jpg",
    url: "tropicana-actopan",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque odit accusamus est praesentium, culpa veniam dicta exercitationem tempora quaerat assumenda earum beatae recusandae, quisquam sed aliquam cumque quas? Earum, sunt.",
    genero: [
      "Salsa",
      "Cumbia",
    ],
    mainColor: "#B52533",
  },
]