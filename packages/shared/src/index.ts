import { z } from 'zod';
// skill: backend-node + frontend-react — source de vérité des contrats
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
export type LoginInput = z.infer<typeof LoginSchema>;

export const tokens = {
  color: { primary: '#4F46E5', ink: '#111827', bg: '#FFFFFF' },
  radius: { md: '12px' },
} as const;
