"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const professorHelper_1 = require("./professorHelper");
it('can be init', () => {
    expect(professorHelper_1.default).toBeInstanceOf(professorHelper_1.ProfessorHelper);
});
it('answer works', () => {
    // input must be integer 1~99
    expect(() => { professorHelper_1.default.answer(1.1, 11, 11); }).toThrow();
    expect(() => { professorHelper_1.default.answer(100, 11, 11); }).toThrow();
    // is clear
    expect(professorHelper_1.default.answer(13, 13, 3)).toEqual('03/13/13');
    expect(professorHelper_1.default.answer(3, 32, 13)).toEqual('03/13/32');
    // ambiguous
    expect(professorHelper_1.default.answer(1, 1, 3)).toEqual(professorHelper_1.default.AMBIGUOUS);
    expect(professorHelper_1.default.answer(1, 1, 31)).toEqual(professorHelper_1.default.AMBIGUOUS);
    expect(professorHelper_1.default.answer(1, 13, 31)).toEqual(professorHelper_1.default.AMBIGUOUS);
    // invalid date
    expect(professorHelper_1.default.answer(99, 99, 1)).toEqual(professorHelper_1.default.INVALID_DATE);
});
//# sourceMappingURL=professorHelper.spec.js.map