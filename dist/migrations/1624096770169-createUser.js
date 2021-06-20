"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser1624096770169 = void 0;
const typeorm_1 = require("typeorm");
class createUser1624096770169 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'int4',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'surname',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'available',
                    type: 'double',
                    isNullable: false,
                },
                {
                    name: 'amount',
                    type: 'double',
                    isNullable: false,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE user`);
    }
}
exports.createUser1624096770169 = createUser1624096770169;
//# sourceMappingURL=1624096770169-createUser.js.map