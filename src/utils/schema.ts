import z from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, { message: "이메일을 입력하세요." }),
  password: z.string().min(1, { message: "비밀번호를 입력하세요." }),
});

export const signupSchema = z
  .object({
    email: z.string().min(1, { message: "이메일을 입력하세요." }),
    password: z
      .string()
      .min(8, { message: "최소 8글자 이상 입력해주세요." })
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d|.*\W).{8,}$/, {
        message: "대문자, 소문자, 숫자, 특수문자 중 3종류 이상을 포함해주세요.",
      }),
    confirmPassword: z
      .string()
      .min(8, { message: "비밀번호가 일치하지 않습니다." }),
    nickname: z
      .string()
      .min(1, { message: "닉네임을 입력해주세요." })
      .max(6, { message: "6자 이내로 입력해주세요." }),
    authority: z
      .string({ required_error: "권한을 선택해주세요" })
      .refine((value) => value != undefined, {
        message: "권한을 선택해주세요",
      }),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export const productRegisterSchema = z.object({});
