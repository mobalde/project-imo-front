// Champs form inscription
export const CHAMPS_FORM_INSCRIPTION = [
    // champs formulaires obligatoires
    {
        type_user: {
          required: true,
        },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 8
        },
    },
    // customisation des messages d'erreurs
    {
        type_user: 'Le type est obligatoire',
        email: {
          required: 'Email obligatoire'
        },
        password: {
          required: 'Mot de passe obligatoire',
          minlength: 'Au moins 8 caractères'
        }
    }
];