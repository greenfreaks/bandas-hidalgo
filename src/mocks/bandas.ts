
export interface BandEvent {
  date: Date;
  place: string;
  time: Date;
  state: string;
  municipality: string;
  googleLocation: string
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
  phone?: string;
  facebook?: string;
  instagram?: string;
  spotify?: string;
  tiktok?: string;
  mainColor: string;
  events?: BandEvent[];
}

export const bandCatalog: Banda[] = [
  {
    id: 1,
    name: "Los Fantasmas Del Ático",
    municipio: "Tizayuca",
    estado: "Hidalgo",
    img: "https://i.ibb.co/FP9nHR0/tarjetas-de-presentaci-n-lfda.png",
    url: "los-fantasmas-del-atico",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque odit accusamus est praesentium, culpa veniam dicta exercitationem tempora quaerat assumenda earum beatae recusandae, quisquam sed aliquam cumque quas? Earum, sunt.",
    genero: [
      "Rock",
      "Rock N Roll",
      "Rockabilly",
      "Surf",
    ],
    mainColor: "#B52533",
    phone: "5619238733",
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
    spotify: "www.spotify.com",
    tiktok: "www.tiktok.com",
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
    mainColor: "#B52533",
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
    spotify: "www.spotify.com",
    tiktok: "www.tiktok.com"
  },
  {
    id: 3,
    name: "Tlaloc",
    municipio: "Tizayuca",
    estado: "Hidalgo",
    img: "https://i.ibb.co/6dMKp9v/tlaloc.webp",
    url: "tlaloc",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque odit accusamus est praesentium, culpa veniam dicta exercitationem tempora quaerat assumenda earum beatae recusandae, quisquam sed aliquam cumque quas? Earum, sunt.",
    genero: [
      "Rock",
    ],
    mainColor: "#B52533",
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
    spotify: "www.spotify.com",
    tiktok: "www.tiktok.com"

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
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
    spotify: "www.spotify.com",
    tiktok: "www.tiktok.com"
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
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
    spotify: "www.spotify.com",
    tiktok: "www.tiktok.com"
  },
]