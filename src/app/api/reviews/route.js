
// export default async function handler(req, res) {
//   // We only want to handle GET requests for this endpoint
//   if (req.method !== 'GET') {
//     res.setHeader('Allow', ['GET']);
//     return res.status(405).end(`Method ${req.method} Not Allowed`);
//   }

//   const apiKey = process.env.GOOGLE_PLACES_API_KEY;
//   // IMPORTANT: Replace with your actual Google Place ID
//   const placeId = 'ChIJhx31gjRvGZURNECVHA6IrZw'; 

//   if (!apiKey || !placeId || placeId === 'ChIJhx31gjRvGZURNECVHA6IrZw') {
//     return res.status(500).json({ error: 'API key or Place ID is not configured on the server.' });
//   }

//   const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.status !== 'OK') {
//         console.error('Google API Error:', data);
//         return res.status(500).json({ error: 'Failed to fetch reviews from Google.', details: data.error_message || data.status });
//     }

//     if (data.result && data.result.reviews) {
//       // Format the data to match what the frontend component expects
//       const formattedReviews = data.result.reviews.map(review => ({
//         name: review.author_name,
//         avatar: review.profile_photo_url,
//         time: review.relative_time_description,
//         rating: review.rating,
//         text: review.text,
//       }));
//       res.status(200).json(formattedReviews);
//     } else {
//       // Handle cases where a place has no reviews
//       res.status(200).json([]);
//     }
//   } catch (error) {
//     console.error('Server-side fetch error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

// File: app/api/reviews/route.js
import { NextResponse } from 'next/server';

// This function handles GET requests to /api/reviews
export async function GET(request) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  // IMPORTANT: Replace with your actual Google Place ID
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

