module.exports = ({ env }) => {
 if(env('NODE_ENV') === "development"){
  return ({
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'mongoose',
          settings: {
            "client": "mongo",
            "uri": env('DATABASE_URI_STAGE'),
          },
          options: {
            authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
            ssl: env.bool('DATABASE_SSL', true),
          },
        },
      },
    });
  } else {
    return ({
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'mongoose',
          settings: {
            "client": "mongo",
            "uri": env('DATABASE_URI'),
          },
          options: {
            authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
            ssl: env.bool('DATABASE_SSL', true),
          },
        },
      },
    });
  }
}
