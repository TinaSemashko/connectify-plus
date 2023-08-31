// our DB type
export type User = {
  id: string;
  nom: string;
  prenom: string;
  id_genre: number;
  email: string;
  password: string;
  abonnement: boolean;
};

// our type after we run through Humps
export type UserCamel = {
  id: string;
  nom: string;
  prenom: string;
  idGenre: number;
  email: string;
  password: string;
  abonnement: boolean;
};
