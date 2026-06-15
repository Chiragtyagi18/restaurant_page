import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Reservation } from '@/lib/models';
import { ReservationSchema } from '@/lib/validations';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate the request body
    const validation = ReservationSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Create new reservation
    const reservation = new Reservation({
      name: validation.data.name,
      email: validation.data.email,
      phone: validation.data.phone,
      date: validation.data.date,
      time: validation.data.time,
      guests: validation.data.guests,
      specialRequests: validation.data.specialRequests,
    });

    await reservation.save();

    return NextResponse.json(
      { message: 'Reservation created successfully', reservationId: reservation._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Reservation API error:', error);
    return NextResponse.json(
      { error: 'Failed to create reservation' },
      { status: 500 }
    );
  }
}
