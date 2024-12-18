import * as dotenv from 'dotenv';

dotenv.config({});

const env = (key: string, defaultVal: any = undefined) =>
  process.env[key] || defaultVal;

const config = {
  app: {},
  db: {
    pgsql: {
      type: 'postgres',
      host: env('POSTGRES_HOST'),
      port: env('POSTGRES_PORT'),
      database: env('POSTGRES_DB'),
      username: env('POSTGRES_USER'),
      password: env('POSTGRES_PASSWORD'),
      autoLoadEntities: true,
      synchronize: false,
      logging: false,
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      migrations: [`${__dirname}/migrations/*{.ts,.js}`],
      cli: {},
      ssl: {},
    },
    redis: {
      host: env('REDIS_HOST', 'localhost'),
      port: env('REDIS_PORT', '6379'),
      password: env('REDIS_PASSWORD'),
    },
  },
  jwt: {},
};

export default () => config;
