import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

// Star Icon Component
const StarIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
  </svg>
);

// --- Main Review Card Component ---
const ReviewCard = ({ review }) => (
  <div className="flex-shrink-0 mb-3 w-[280px] md:w-[320px] h-[300px] bg-white rounded-2xl shadow-md p-6 mx-2 flex flex-col snap-center">
    <div className="flex items-center mb-4">
     <Image
        src={review.avatar || 'https://placehold.co/48x48/EFEFEF/333?text=??'}
        alt={review.name}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full mr-4"
        onError={(e) => {
          e.currentTarget.src = 'https://placehold.co/48x48/EFEFEF/333?text=??';
        }}
        unoptimized
      />
      <div className="flex-grow">
        <div className="flex items-center">
            <p className="font-bold text-gray-800 text-left">{review.name}</p>
            {/* <VerifiedIcon className="w-5 h-5 text-blue-500 ml-2" /> */}
        </div>
        <p className="text-sm text-gray-500 text-left">{review.time} on</p>
        <div className="flex items-center">
            <p className="font-semibold text-gray-600 mr-1">Google</p>
        </div>
      </div>
    </div>
    <div className="flex items-center mb-4">
      {[...Array(review.rating)].map((_, i) => (
        <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
      ))}
      {[...Array(5 - review.rating)].map((_, i) => (
        <StarIcon key={i} className="w-5 h-5 text-gray-300" />
      ))}
    </div>
    <div className="flex-grow overflow-hidden">
        <p className="text-gray-600 text-base text-left line-clamp-5">{review.text}</p>
    </div>
  </div>
);


// --- Carousel Component ---
export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const carouselRef = useRef(null);

  // Fetch reviews from the API route
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data);
        if (data.length <= 1) setIsAtEnd(true);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    
    // Check if we are at the beginning or end
    setIsAtStart(scrollLeft < 10); // A small buffer for scroll precision
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
    
    // Update current index based on which card is most centered
    let minDistance = Infinity;
    let newIndex = 0;
    const containerCenter = scrollLeft + clientWidth / 2;

    Array.from(carouselRef.current.children).forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        newIndex = index;
      }
    });
    setCurrentIndex(newIndex);
  };

  const scrollToCard = (index) => {
    if (!carouselRef.current) return;
    const cardElement = carouselRef.current.children[index];
    if (cardElement) {
      cardElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center' // Changed to 'center' for proper alignment
      });
    }
  };

  const nextReview = () => {
    const newIndex = Math.min(currentIndex + 1, reviews.length - 1);
    scrollToCard(newIndex);
  };

  const prevReview = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    scrollToCard(newIndex);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      // Use a timeout to ensure the event listener is added after the initial render
      const timer = setTimeout(() => {
        carousel.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
      }, 100);
      
      return () => {
        clearTimeout(timer);
        carousel.removeEventListener('scroll', handleScroll);
      }
    }
  }, [reviews, loading]);


  const renderCarouselContent = () => {
    if (loading) {
      return <div className="text-center text-gray-600 p-10 h-[300px] flex items-center justify-center">Loading reviews...</div>;
    }
    if (error) {
      return <div className="text-center text-red-600 p-10 h-[300px] flex items-center justify-center">Error: {error}</div>;
    }
    if (reviews.length === 0) {
      return <div className="text-center text-gray-600 p-10 h-[300px] flex items-center justify-center">No reviews found.</div>;
    }

    return (
      <div className="relative w-full">
        {/* The scroll container with padding to allow for centering */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth px-[calc(50%-140px)] min-[768px]:px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        {/* Overlays and Buttons */}
        <div className={`absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[#FFF] to-transparent pointer-events-none transition-opacity duration-300 ${isAtStart ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[#FFF] to-transparent pointer-events-none transition-opacity duration-300 ${isAtEnd ? 'opacity-0' : 'opacity-100'}`}></div>

        {/* Buttons are positioned inside the container for mobile accessibility */}
        <button 
          onClick={prevReview} 
          className={`cursor-pointer absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-300 ${isAtStart ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
          aria-label="Previous review"
          disabled={isAtStart}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <button 
          onClick={nextReview} 
          className={`cursor-pointer absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-300 ${isAtEnd ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
          aria-label="Next review"
          disabled={isAtEnd}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    );
  };

  return (
    <div className="bg-[#FFF] font-sans py-16 sm:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-4xl font-bold text-gray-800">Depoimentos</h2>
        <div className="inline-block w-24 border-b-4 border-zinc-400 my-4"></div>
        <p className="text-md text-gray-600 mt-2 mb-12">
          O que nossos clientes acham da nossa loja?
        </p>

        <div className="flex items-center justify-center">
          {renderCarouselContent()}
        </div>
        
        {!loading && !error && reviews.length > 1 && (
          <div className="flex justify-center mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`cursor-pointer h-2 w-2 rounded-full mx-1.5 transition-all duration-300 ${currentIndex === index ? 'w-4 bg-red-800' : 'bg-gray-300'} ${currentIndex === index ? 'w-4 bg-red-800' : 'bg-gray-300'} ${index === 0 || index === reviews.length - 1 ? 'hidden' : ''}`}
                aria-label={`Go to review ${index + 1}`}
              ></button>
            ))}
          </div>
        )}

        <div className="mt-16">
            <a 
              href="https://search.google.com/local/reviews?placeid=ChIJhx31gjRvGZURNECVHA6IrZw"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-gray-100/50 text-gray-700 font-semibold py-3 px-8 border border-gray-400 rounded-full inline-flex items-center transition-all duration-300"
            >
                <StarIcon className="w-5 h-5 mr-3 text-gray-600"/>
                <span>Ver todos os depoimentos</span>
            </a>
        </div>
      </div>
    </div>
  );
}
