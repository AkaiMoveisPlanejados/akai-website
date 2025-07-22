// File: app/api/reviews/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = 'ChIJhx31gjRvGZURNECVHA6IrZw'; 

  if (!apiKey || !placeId || placeId === 'YOUR_PLACE_ID') {
    return NextResponse.json(
      { error: 'API key or Place ID is not configured on the server.' },
      { status: 500 }
    );
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
        console.error('Google API Error:', data);
        return NextResponse.json(
          { error: 'Failed to fetch reviews from Google.', details: data.error_message || data.status },
          { status: 500 }
        );
    }

    if (data.result && data.result.reviews) {
      // Format the data to match what the frontend component expects
      const formattedReviews = data.result.reviews.map(review => ({
        name: review.author_name,
        avatar: review.profile_photo_url,
        time: review.relative_time_description,
        rating: review.rating,
        text: review.text,
      }));
      return NextResponse.json(formattedReviews, { status: 200 });
    } else {
      // Handle cases where a place has no reviews by returning an empty array
      return NextResponse.json([], { status: 200 });
    }
  } catch (error) {
    console.error('Server-side fetch error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

