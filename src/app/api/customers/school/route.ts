//import next request and response
import { NextResponse } from 'next/server';

//import prisma client
import prisma from '../../../../../lib/prisma';

export async function GET() {
  //get all schools
  const schools = await prisma.tblSchool.findMany();

  return NextResponse.json(schools);
}
