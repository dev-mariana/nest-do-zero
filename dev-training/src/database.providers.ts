import { DataSource } from 'typeorm';
import { CreateCoursesTable1656440073365 } from './migrations/1656440073365-CreateCoursesTable';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'db',
                port: 5432,
                username: 'postgres',
                password: 'docker',
                database: 'cursonestjs',
                entities: [__dirname + '/../**/*.entity.js'],
                synchronize: false,
            });

            return dataSource.initialize();
        },
    },
];

//export const dataSource = new DataSource({
//     type: 'postgres',
//     host: 'db',
//     port: 5432,
//     username: 'postgres',
//     password: 'docker',
//     database: 'cursonestjs',
//     entities: [__dirname + '/../**/*.entity.js'],
//     synchronize: false,
//     migrations: [CreateCoursesTable1656440073365]
// });