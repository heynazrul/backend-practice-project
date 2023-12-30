import { z } from 'zod';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemester.constant';
import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonths,
} from './academicSemester.interface';

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [
      string,
      ...TAcademicSemesterName[],
    ]),
    year: z.string(),
    code: z.enum([...AcademicSemesterCode] as [
      string,
      ...TAcademicSemesterCode[],
    ]),
    startMonth: z.enum([...Months] as [string, ...TMonths[]]),
    endMonth: z.enum([...Months] as [string, ...TMonths[]]),
  }),
});

const updateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z
      .enum([...AcademicSemesterName] as [string, ...TAcademicSemesterName[]])
      .optional(),
    year: z.string(),
    code: z
      .enum([...AcademicSemesterCode] as [string, ...TAcademicSemesterCode[]])
      .optional(),
    startMonth: z.enum([...Months] as [string, ...TMonths[]]).optional(),
    endMonth: z.enum([...Months] as [string, ...TMonths[]]).optional(),
  }),
});

export const AcademicSemesterValidations = {
  createAcademicSemesterValidationSchema,
  updateAcademicSemesterValidationSchema,
};
