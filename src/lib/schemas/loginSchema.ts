import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters'
    })
});

/*
import { z } from 'zod';
import { useTranslation } from 'react-i18next';

export const useValidationSchema = () => {
  const { t } = useTranslation();

  const schema = z.object({
    email: z.string().email(t('invalidEmail')).min(1, t('required')),
    name: z.string().min(1, t('required')),
  });

  return schema;
};
*/

export type LoginSchema = z.infer<typeof loginSchema>;