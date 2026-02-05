// scripts/create-admin.ts
import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

async function main() {
  const email = (process.env.ADMIN_EMAIL || "admin@dookan.ca").toLowerCase();
  const password = process.env.ADMIN_PASSWORD || "admin123";

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("❌ DATABASE_URL is missing. Check .env or .env.local");
  }

  // Supabase local dev SSL fix
  const pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });

  const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

  try {
    const hash = await bcrypt.hash(password, 10);

    const user = await prisma.user.upsert({
      where: { email },
      update: { password: hash, role: "ADMIN" },
      create: { email, password: hash, role: "ADMIN" },
      select: { id: true, email: true, role: true },
    });

    console.log("✅ Admin user ready:");
    console.log(user);
    console.log("👉 Login with:");
    console.log("   EMAIL:", email);
    console.log("   PASSWORD:", password);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});