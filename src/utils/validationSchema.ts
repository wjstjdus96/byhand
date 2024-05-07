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

export const productRegisterSchema = z.object({
  productImage: z
    .any()
    .array()
    .min(1, { message: "상품 이미지를 첨부해주세요" }),
  productName: z.string().min(1, { message: "상품 이름을 입력해주세요" }),
  productCategory: z.string({ required_error: "카테고리를 선택해주세요" }),
  productPrice: z
    .union([z.string(), z.number()])
    .refine((value) => value !== null && value !== undefined && value !== "", {
      message: "상품 가격을 입력해주세요",
    }),
  productQuantity: z
    .union([z.string(), z.number()])
    .refine((value) => value !== null && value !== undefined && value !== "", {
      message: "상품 수량을 입력해주세요",
    }),
  productDescription: z
    .string()
    .min(1, { message: "상품 설명을 입력해주세요" }),
});

export const shippingAddressSchema = z.object({
  recipientName: z.string().min(1, { message: "수령인 이름을 입력해주세요" }),
  recipientPhone: z
    .string()
    .min(1, { message: "수령인 전화번호을 입력해주세요" })
    .regex(/^\d+$/, { message: "유효한 전화번호를 입력해주세요" }),
  deliveryAddress: z.string().min(1, { message: "배송지 주소를 입력해주세요" }),
  deliveryPostcode: z.string().min(1, { message: "우편번호를 입력해주세요" }),
});
