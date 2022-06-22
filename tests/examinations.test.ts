import examinationService from '../services/examinations.service';

describe("Get examination", () => {
  test("It should return an exam of a specific shape", () => {
    expect(examinationService.findExamination(1)).toEqual(expect.objectContaining({
        locationId: expect.any(Number),
        date: expect.any(String),
        id: expect.any(Number),
        result: expect.any(String)
      })
    )
  });
});