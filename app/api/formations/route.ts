import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const formations = await prisma.formation.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(formations);
  } catch (error) {
    return NextResponse.json({ error: 'Erreur' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const formation = await prisma.formation.create({
      data: {
        ...body,
        slug: body.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, ''),
        program: JSON.stringify(body.program),
        objectives: JSON.stringify(body.objectives)
      }
    });
    return NextResponse.json(formation);
  } catch (error) {
    return NextResponse.json({ error: 'Erreur' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, ...data } = await request.json();
    const formation = await prisma.formation.update({
      where: { id },
      data: {
        ...data,
        program: JSON.stringify(data.program),
        objectives: JSON.stringify(data.objectives)
      }
    });
    return NextResponse.json(formation);
  } catch (error) {
    return NextResponse.json({ error: 'Erreur' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id')!);
    await prisma.formation.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur' }, { status: 500 });
  }
}