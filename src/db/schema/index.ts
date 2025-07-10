// Barrel File
// pnpm drizzle-kit generate
// pnpm drizzle-kit migrate
// pnpm drizzle-kit studio

import { questions } from './questions.ts'
import { rooms } from './rooms.ts'

export const schema = {
  rooms,
  questions,
}
