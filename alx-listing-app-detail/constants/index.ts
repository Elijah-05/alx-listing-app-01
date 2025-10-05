import { PropertyProps, Review } from "@/interfaces";

export const projectName = "Airbnb Clone";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
      ],
    discount: "",
    reviews: [
      {
        name: "John Doe",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Amazing experience! The view was stunning."
      },
      {
        name: "Jane Smith",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Great place, but could use more kitchen supplies."
      },
      {
        name: "Carlos Rivera",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Super clean and the pool was perfect."
      },
      {
        name: "Fatima Ali",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Loved the location and amenities!"
      }
    ],
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
      images: [
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1460474647541-4edd0cd0c746?auto=format&fit=crop&w=800&q=80"
      ],
    discount: "30",
    reviews: [
      {
        name: "Alice Brown",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Perfect for a winter getaway!"
      },
      {
        name: "Liam O'Connor",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Cozy and warm, great for families."
      },
      {
        name: "Sophie Dubois",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Loved the fireplace and mountain view."
      },
      {
        name: "Mia Chen",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Would visit again in summer!"
      }
    ],
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
      images: [
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80"
      ],
    discount: "",
    reviews: [
      {
        name: "Sam Lee",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Loved the desert vibe and privacy."
      },
      {
        name: "Priya Patel",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Pet friendly and peaceful."
      },
      {
        name: "Lucas Müller",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Great for a weekend escape."
      },
      {
        name: "Ava Rossi",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Stylish and comfortable!"
      }
    ],
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
      images: [
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
      ],
    discount: "15",
    reviews: [
      {
        name: "Emily Turner",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "I simply don’t have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        name: "Mohammed Aziz",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures, "
      },
      {
        name: "Emma Johansson",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "I simply don’t have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        name: "Noah Kim",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures, "
      }
    ],
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand",
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
      images: [
        "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1460474647541-4edd0cd0c746?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
      ],
    discount: "20",
    reviews: [
      {
        name: "Chris Evans",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Loved kayaking every morning!"
      },
      {
        name: "Sofia Garcia",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Peaceful and beautiful river view."
      },
      {
        name: "David Smith",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Cabin was cozy and well equipped."
      },
      {
        name: "Isabella Lee",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Perfect for a family trip!"
      }
    ],
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10",
    },
      images: [
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80"
      ],
    discount: "",
    reviews: [
      {
        name: "Sophia Lee",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "The private pool was a dream!"
      },
      {
        name: "Liam Scott",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Spacious and right on the beach."
      },
      {
        name: "Olga Ivanova",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Chef service was excellent!"
      },
      {
        name: "Lucas Wang",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Would recommend for large groups."
      }
    ],
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada",
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
      images: [
        "https://images.unsplash.com/photo-1460474647541-4edd0cd0c746?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80"
      ],
    discount: "10",
    reviews: [
      {
        name: "Mike Brown",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Great hiking trails nearby."
      },
      {
        name: "Emma White",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Loved the lakeside view."
      },
      {
        name: "Carlos Silva",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Very relaxing and quiet."
      },
      {
        name: "Nina Patel",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Perfect for hiking lovers!"
      }
    ],
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand",
    },
    rating: 4.8,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6",
    },
      images: [
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      ],
    discount: "25",
    reviews: [
      {
        name: "Linda Green",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Beautiful garden and peaceful atmosphere."
      },
      {
        name: "Mohammed Farouk",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Loved the tropical plants."
      },
      {
        name: "Julia Kim",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Very private and clean."
      },
      {
        name: "Ben Carter",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Great for families."
      }
    ],
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany",
    },
    rating: 4.6,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
      images: [
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      ],
    discount: "",
    reviews: [
      {
        name: "Tom White",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Very central and modern."
      },
      {
        name: "Sara Müller",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Loved the city vibe."
      },
      {
        name: "David Brown",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Close to everything."
      },
      {
        name: "Elena Petrova",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Modern and stylish loft."
      }
    ],
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada",
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
      images: [
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      ],
    discount: "40",
    reviews: [
      {
        name: "Sara Black",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Loved the hot tub in the forest!"
      },
      {
        name: "Omar Hassan",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Very secluded and peaceful."
      },
      {
        name: "Anna Schmidt",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Great for a quiet retreat."
      },
      {
        name: "Lucas Brown",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Cabin was very cozy."
      }
    ],
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy",
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      ],
    discount: "50",
    reviews: [
      {
        name: "Anna Blue",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Infinity pool with a view!"
      },
      {
        name: "Marco Rossi",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Amazing sea view."
      },
      {
        name: "Sophia Lee",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Loved the cliffside location."
      },
      {
        name: "James Smith",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Great for relaxing."
      }
    ],
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia",
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
      images: [
        "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80"
      ],
    discount: "",
    reviews: [
      {
        name: "Peter Gray",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Pet friendly and right on the beach."
      },
      {
        name: "Linda White",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Perfect for families."
      },
      {
        name: "Mohammed Ali",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Loved the free parking."
      },
      {
        name: "Julia Brown",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Great beachfront location."
      }
    ],
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy",
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
      images: [
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80"
      ],
    discount: "35",
    reviews: [
      {
        name: "Maria Rossi",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Charming and full of history."
      },
      {
        name: "John Smith",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Loved the breakfast."
      },
      {
        name: "Fatima Khan",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Very authentic experience."
      },
      {
        name: "Lucas Green",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Great location in Tuscany."
      }
    ],
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan",
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2",
    },
      images: [
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
      ],
    discount: "",
    reviews: [
      {
        name: "Kenji Tanaka",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Super convenient for exploring Tokyo."
      },
      {
        name: "Yuki Sato",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Very clean and modern."
      },
      {
        name: "Anna Müller",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Close to public transport."
      },
      {
        name: "David Kim",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Great for business trips."
      }
    ],
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania",
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
      images: [
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80"
      ],
    discount: "20",
    reviews: [
      {
        name: "David Safari",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Saw so many animals!"
      },
      {
        name: "Grace Lee",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Guided tours were fantastic."
      },
      {
        name: "Mohammed Hassan",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Loved the breakfast and wildlife."
      },
      {
        name: "Emma Brown",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Great for families and kids."
      }
    ],
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK",
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4",
    },
      images: [
        "https://images.unsplash.com/photo-1460474647541-4edd0cd0c746?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80"
      ],
    discount: "25",
    reviews: [
      {
        name: "Olivia Smith",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Cozy and quiet."
      },
      {
        name: "Lucas White",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Loved the countryside."
      },
      {
        name: "Sophia Green",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Fireplace was a nice touch."
      },
      {
        name: "Mohammed Ali",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Great for a weekend escape."
      }
    ],
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France",
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8",
    },
    images: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80"
    ],
    discount: "30",
    reviews: [
      {
        name: "Pierre Dubois",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Elegant and right on the river."
      },
      {
        name: "Marie Lefevre",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Beautiful garden and view."
      },
      {
        name: "Lucas Martin",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Spacious and luxurious."
      },
      {
        name: "Emma Laurent",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Perfect for a group stay."
      }
    ],
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland",
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    images: [
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80"
    ],
    discount: "",
    reviews: [
      {
        name: "Lukas Müller",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Perfect for ski lovers."
      },
      {
        name: "Anna Weber",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Great fireplace and view."
      },
      {
        name: "David Steiner",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Loved the ski access."
      },
      {
        name: "Sophie Keller",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Very cozy and warm."
      }
    ],
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles",
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10",
    },
    images: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
    ],
    discount: "60",
    reviews: [
      {
        name: "Aisha Beau",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Tropical paradise!"
      },
      {
        name: "Jean-Paul Morel",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Private pool was amazing."
      },
      {
        name: "Fatima Diallo",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Chef service was top notch."
      },
      {
        name: "Lucas Mendes",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Great for families and friends."
      }
    ],
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa",
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    discount: "",
    reviews: [
      {
        name: "Sipho Nkosi",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Amazing clifftop views!"
      },
      {
        name: "Thandiwe Moyo",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Loved the private pool."
      },
      {
        name: "David Botha",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
        comment: "Perfect for a romantic getaway."
      },
      {
        name: "Lerato Dlamini",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
        comment: "Great location and views."
      }
    ],
  },
];

export const reviews: Review[] = [
      {
        name: "John Doe",
        avatar: "/images/avatar1.jpg",
        rating: 5,
        comment: "Amazing experience! The view was stunning.",
      },
      {
        name: "Jane Smith",
        avatar: "/images/avatar2.jpg",
        rating: 4,
        comment: "Great place, but could use more kitchen supplies.",
      },
    ]

export const CATEGORYICONS = [
  { icon: "/assets/icon/rooms.svg", label: "Rooms" },
  { icon: "/assets/icon/mansion.svg", label: "Mansion" },
  { icon: "/assets/icon/countryside.svg", label: "Countryside" },
  { icon: "/assets/icon/villa.svg", label: "Villa" },
  { icon: "/assets/icon/tropical.svg", label: "Tropical" },
  { icon: "/assets/icon/new.svg", label: "New" },
  { icon: "/assets/icon/amazing_pool.svg", label: "Amazing pool" },
  { icon: "/assets/icon/beach_house.svg", label: "Beach house" },
  { icon: "/assets/icon/island.svg", label: "Island" },
  { icon: "/assets/icon/camping.svg", label: "Camping" },
  { icon: "/assets/icon/apartment.svg", label: "Apartment" },
  { icon: "/assets/icon/house.svg", label: "House" },
  { icon: "/assets/icon/lakefront.svg", label: "Lakefront" },
  { icon: "/assets/icon/farm_house.svg", label: "Farm house" },
  { icon: "/assets/icon/tree_house.svg", label: "Tree house" },
  { icon: "/assets/icon/cabins.svg", label: "Cabins" },
  { icon: "/assets/icon/countryside.svg", label: "Lakeside" },
];
