import {default as professorHelper, ProfessorHelper} from "./professorHelper";

it('can be init', ()=> {
    expect(professorHelper).toBeInstanceOf(ProfessorHelper)
})

it('answer works', ()=> {

    // input must be integer 1~99
    expect(()=> {professorHelper.answer(1.1, 11, 11)}).toThrow()
    expect(()=> {professorHelper.answer(100, 11, 11)}).toThrow()

    // is clear
    expect(professorHelper.answer(13, 13, 3)).toEqual('03/13/13')
    expect(professorHelper.answer(3, 32, 13)).toEqual('03/13/32')

    // ambiguous
    expect(professorHelper.answer(1, 1, 3)).toEqual(professorHelper.AMBIGUOUS)
    expect(professorHelper.answer(1, 1, 31)).toEqual(professorHelper.AMBIGUOUS)
    expect(professorHelper.answer(1, 13, 31)).toEqual(professorHelper.AMBIGUOUS)

    // invalid date
    expect(professorHelper.answer(99, 99, 1)).toEqual(professorHelper.INVALID_DATE)
})