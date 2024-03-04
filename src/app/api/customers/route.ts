//import next request and response
import { NextResponse } from 'next/server';

//import prisma client
import prisma from '../../../../lib/prisma';

export async function POST(request: Request) {
  const content = await request.json();

  const result = await prisma.tblCustomers.create({ data: content });

  return NextResponse.json(
    {
      success: true,
      message: 'Customer Created Successfully!',
      data: result,
    },
    { status: 201 }
  );
}
