import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Créer l'admin par défaut
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  await prisma.admin.upsert({
    where: { email: 'admin@cotechservices.com' },
    update: {},
    create: {
      email: 'admin@cotechservices.com',
      password: hashedPassword,
      name: 'Administrateur'
    }
  });
  
  console.log('✅ Base de données initialisée avec succès !');
  console.log('📧 Email admin: admin@cotechservices.com');
  console.log('🔑 Mot de passe: admin123');
}

main()
  .catch(e => {
    console.error('❌ Erreur:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });