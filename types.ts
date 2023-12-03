export interface User {
    uuid: string,
    email: string,
    password: string,
    photo: string,
    city: {
      uuid: string,
      title: string
    },
    role: {
      uuid: string,
      applicant: {
        uuid: string,
        name: string,
        surname: string,
        birthday: string,
        study_place: string,
        inn: string,
        competitions: string,
        summary: string,
        created_at: string,
        updated_at: string
      },
      individual: {
        uuid: string,
        name: string,
        surname: string,
        patronymic: string,
        summary: string
      },
      legal_entity: {
        uuid: string,
        title: string,
        inn: string,
        contact_info: string,
        summary: string
      },
      moderator: {
        uuid: string,
        name: string,
        surname: string
      },
      current: string
    },
    created_at: string,
    updated_at: string,
    banned: boolean,
    deleted: boolean,
    hashedRefreshToken: string
}

export interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
}

export interface Login {
    email: string;
    password: string;
}

export interface Token {
    access_token: string,
    refresh_token: string
}