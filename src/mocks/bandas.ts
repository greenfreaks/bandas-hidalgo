export interface Banda {
  id: number;
  name: string;
  municipio: string;
  img: string;
  url: string;
  desc: string;
  genero: string[];
  facebook?: string;
  instagram?: string;
  spotify?: string;
  tiktok?: string;
}

export const bandCatalog: Banda[] = [
  {
    id: 1,
    name: "Los Fantasmas Del Ático",
    municipio: "Tizayuca",
    img: "https://i.ibb.co/FP9nHR0/tarjetas-de-presentaci-n-lfda.png",
    url: "los-fantasmas-del-atico",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque odit accusamus est praesentium, culpa veniam dicta exercitationem tempora quaerat assumenda earum beatae recusandae, quisquam sed aliquam cumque quas? Earum, sunt.",
    genero: [
      "Rock",
      "Rock N Roll",
      "Rockabilly",
      "Surf",
    ],
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
    spotify: "www.spotify.com",
    tiktok: "www.tiktok.com"
  },
  {
    id: 2,
    name: "Stiff Vultures",
    municipio: "Tizayuca",
    img: "https://i.ibb.co/1fKT5MYG/stiff-vultures.webp",
    url: "stiff-vultures",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque odit accusamus est praesentium, culpa veniam dicta exercitationem tempora quaerat assumenda earum beatae recusandae, quisquam sed aliquam cumque quas? Earum, sunt.",
    genero: [
      "Rock",
    ]
  },
  {
    id: 3,
    name: "Tlaloc",
    municipio: "Tizayuca",
    img: "https://i.ibb.co/6dMKp9v/tlaloc.webp",
    url: "tlaloc",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque odit accusamus est praesentium, culpa veniam dicta exercitationem tempora quaerat assumenda earum beatae recusandae, quisquam sed aliquam cumque quas? Earum, sunt.",
    genero: [
      "Rock",
    ],
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
    spotify: "www.spotify.com",
    tiktok: "www.tiktok.com"

  },
  {
    id: 4,
    name: "Dolls Band",
    municipio: "Tizayuca",
    img: "https://i.ibb.co/RTsHSwzh/dolls-band.webp",
    url: "dolls-band",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque odit accusamus est praesentium, culpa veniam dicta exercitationem tempora quaerat assumenda earum beatae recusandae, quisquam sed aliquam cumque quas? Earum, sunt.",
    genero: [
      "Versátil",
    ],
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
    spotify: "www.spotify.com",
    tiktok: "www.tiktok.com"
  },

  {
    id: 5,
    name: "La Tropicana Actopan",
    municipio: "Actopan",
    img: "https://i.ibb.co/60XxWMJ9/tropicana.jpg",
    url: "tropicana-actopan",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque odit accusamus est praesentium, culpa veniam dicta exercitationem tempora quaerat assumenda earum beatae recusandae, quisquam sed aliquam cumque quas? Earum, sunt.",
    genero: [
      "Salsa",
      "Cumbia",
    ],
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
    spotify: "www.spotify.com",
    tiktok: "www.tiktok.com"
  },
]