import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const img = {
  banners: "/assets/categories/vinyl-banners.png",
  tabletop: "/assets/categories/tabletop-banners.png",
  job: "/assets/categories/job-site-signs.png",
  postcards: "/assets/categories/postcards.png",
  doors: "/assets/categories/door-hangers.png",
  rollup: "/assets/categories/rollup-displays.png",
  yard: "/assets/categories/yard-signs.png",
  magnets: "/assets/categories/vehicle-magnets.png"
};

const products = [
  {
    name: "Vinyl Banners",
    slug: "vinyl-banners",
    image: img.banners,
    summary: "Vinyl banners are one of the fastest ways to promote a sale, event, job site, grand opening, school function, or business message indoors or outdoors.",
    uses: ["Grand openings", "Fence banners", "Retail sales", "School events", "Sports teams", "Trade shows", "Contractor promotions", "Restaurant specials"],
    options: ["Indoor or outdoor vinyl", "Standard or heavy-duty material", "Grommets", "Pole pockets", "Hemmed edges", "Single-sided or double-sided layouts", "Custom sizes", "Rush production when available"],
    buyers: ["Restaurants", "Contractors", "Schools", "Event planners", "Retail stores", "Churches", "Gyms", "Community groups"],
    artwork: ["Use high-resolution logos and images", "Keep important text away from edges", "Ask for design help if the banner will be viewed from a distance", "Upload finished art, upload later, or request layout help"],
    price: ["Banner size", "Material weight", "Finishing style", "Single or double-sided printing", "Artwork/design time", "Quantity", "Turnaround time", "Shipping needs"],
    faqs: [
      ["What size vinyl banner should I order?", "The best size depends on viewing distance, mounting location, and how much information needs to be read quickly."],
      ["Can vinyl banners be used outdoors?", "Yes. Outdoor vinyl banners are commonly used on fences, buildings, tents, railings, and temporary displays."],
      ["Do I need grommets?", "Grommets are helpful when the banner will be tied, hung, or attached with rope, zip ties, hooks, or bungee cords."],
      ["Can EZ Sign Store help with banner design?", "Yes. Customers can upload print-ready artwork or request help turning an idea into a banner layout."]
    ]
  },
  {
    name: "Yard Signs",
    slug: "yard-signs",
    image: img.yard,
    summary: "Yard signs are lightweight, affordable signs for lawns, roadsides, open houses, campaigns, schools, events, contractors, and local promotions.",
    uses: ["Open houses", "Political campaigns", "Contractor jobs", "Graduation signs", "School fundraisers", "Directional signs", "Event parking", "Local service advertising"],
    options: ["Corrugated plastic", "Wire stakes", "Single or double-sided printing", "Bulk quantities", "Standard lawn sign sizes", "Full color artwork", "Weather-resistant printing", "Directional layouts"],
    buyers: ["Realtors", "Contractors", "Schools", "Campaigns", "Landscapers", "Roofers", "Event teams", "Service businesses"],
    artwork: ["Use large readable type", "Limit tiny details", "Use high-contrast colors", "Prepare separate arrows for directional signs when needed"],
    price: ["Quantity", "One-sided or two-sided printing", "Size", "Stakes", "Design setup", "Turnaround", "Shipping"],
    faqs: [
      ["Are yard signs good for temporary advertising?", "Yes. They are one of the most common products for short-term local visibility."],
      ["Can yard signs be printed double-sided?", "Yes. Double-sided signs are useful when traffic or foot traffic approaches from both directions."],
      ["Do yard signs come with stakes?", "They can be ordered with wire stakes when lawn placement is needed."],
      ["What should be on a yard sign?", "Keep the main message, phone number, website, or directional cue large and simple."]
    ]
  },
  {
    name: "Job Site Signs",
    slug: "job-site-signs",
    image: img.job,
    summary: "Job site signs help contractors, builders, property managers, and construction teams identify projects, share safety information, direct visitors, and promote the company doing the work.",
    uses: ["Construction projects", "Safety reminders", "Permit boards", "Contractor branding", "Directional signs", "Parking notices", "Property management", "Temporary site rules"],
    options: ["Rigid sign boards", "Coroplast signs", "Aluminum composite panels", "Safety layouts", "Project branding", "Weather-resistant materials", "Mounting holes", "Custom sizes"],
    buyers: ["General contractors", "Builders", "Roofers", "Masons", "Landscapers", "Property managers", "Municipal vendors", "Developers"],
    artwork: ["Make project and contact information readable", "Keep safety icons clear", "Use durable materials for outdoor projects", "Ask for layout help if multiple notices need to fit cleanly"],
    price: ["Material", "Size", "Mounting needs", "Quantity", "Design complexity", "Outdoor durability", "Rush timing"],
    faqs: [
      ["What material is best for job site signs?", "It depends on the length of the project and mounting location. Rigid outdoor materials are best for longer jobs."],
      ["Can job site signs include safety information?", "Yes. Signs can include safety icons, notices, warnings, contact information, and project branding."],
      ["Can I order multiple job site sign types together?", "Yes. Many projects need contractor signs, directional signs, parking signs, and safety signs together."],
      ["Can EZ Sign Store help clean up my layout?", "Yes. Design help is useful when a sign needs to be readable and professional from a distance."]
    ]
  },
  {
    name: "Table Top Banners",
    slug: "tabletop-banners",
    image: img.tabletop,
    summary: "Table top banners are compact displays for counters, registration tables, trade show booths, retail promos, open houses, and events.",
    uses: ["Trade shows", "Reception tables", "Open houses", "Vendor booths", "Retail counters", "School events", "Community fairs", "Product displays"],
    options: ["Mini retractable displays", "Table banner stands", "Countertop displays", "Full color graphics", "Portable hardware", "Replacement graphics", "Event layouts", "Branding packages"],
    buyers: ["Vendors", "Realtors", "Sales teams", "Schools", "Nonprofits", "Retail stores", "Event organizers", "Local businesses"],
    artwork: ["Use simple headline copy", "Keep logos sharp", "Avoid small text", "Match the design to nearby handouts, postcards, or table covers"],
    price: ["Hardware style", "Graphic size", "Quantity", "Design help", "Turnaround", "Replacement graphics"],
    faqs: [
      ["Where are table top banners used?", "They are popular on tables, counters, registration desks, and trade show booths."],
      ["Are they reusable?", "Most table top banner displays are reusable when cared for and stored properly."],
      ["Can I match them to postcards or flyers?", "Yes. Matching table displays with printed handouts creates a cleaner branded setup."],
      ["Are tabletop displays easy to transport?", "Yes. They are designed to be compact and portable."]
    ]
  },
  {
    name: "Postcards",
    slug: "postcards",
    image: img.postcards,
    summary: "Postcards are useful for direct mail, neighborhood marketing, real estate campaigns, restaurant offers, service reminders, event promotion, and customer follow-up.",
    uses: ["Direct mail", "Real estate farming", "Restaurant promotions", "Contractor offers", "Event invites", "Service reminders", "Thank-you cards", "Local coupons"],
    options: ["Gloss or matte finishes", "Single or double-sided printing", "Multiple sizes", "Bulk quantities", "Mail-ready layouts", "Full color graphics", "QR codes", "Design help"],
    buyers: ["Realtors", "Restaurants", "Contractors", "Retail stores", "Medical offices", "Service companies", "Schools", "Community groups"],
    artwork: ["Keep the offer clear", "Use strong contrast", "Include phone, website, QR code, or coupon details", "Leave room for mailing areas when needed"],
    price: ["Size", "Paper stock", "Finish", "Quantity", "Mailing setup", "Design time", "Turnaround"],
    faqs: [
      ["Are postcards good for local marketing?", "Yes. Postcards work well for neighborhoods, routes, past customers, and local service areas."],
      ["Can postcards include QR codes?", "Yes. QR codes can connect customers to a website, quote form, menu, landing page, or offer."],
      ["Can EZ Sign Store help design postcards?", "Yes. Design help is available for clean layouts, offers, branding, and print-ready files."],
      ["What makes a postcard effective?", "A clear headline, strong offer, simple contact path, and easy-to-read design matter most."]
    ]
  },
  {
    name: "Door Hangers",
    slug: "door-hangers",
    image: img.doors,
    summary: "Door hangers put a printed offer directly at the door, making them useful for neighborhood service businesses, restaurants, realtors, contractors, and local campaigns.",
    uses: ["Neighborhood marketing", "Contractor canvassing", "Restaurant menus", "Real estate farming", "Lawn care offers", "Pest control routes", "Home service promotions", "Local announcements"],
    options: ["Single or double-sided printing", "Die-cut hanger hole", "Gloss or matte stock", "Coupons", "QR codes", "Bulk quantities", "Route promotions", "Design help"],
    buyers: ["Restaurants", "Contractors", "Realtors", "Landscapers", "Pest control companies", "Cleaning companies", "Home service businesses", "Campaign teams"],
    artwork: ["Use one main offer", "Make the phone number or QR code easy to find", "Avoid overcrowding", "Design both sides when extra details are needed"],
    price: ["Quantity", "Paper stock", "Finish", "Single or double-sided printing", "Design work", "Turnaround"],
    faqs: [
      ["Are door hangers good for local service businesses?", "Yes. They work especially well for neighborhood routes and door-to-door visibility."],
      ["Can door hangers include coupons?", "Yes. Coupons, QR codes, menus, and limited-time offers are common."],
      ["Can I print both sides?", "Yes. Double-sided printing gives room for an offer on one side and details on the other."],
      ["What should a door hanger say?", "Lead with a simple benefit or offer, then make the contact path obvious."]
    ]
  },
  {
    name: "Vehicle Magnets",
    slug: "vehicle-magnets",
    image: img.magnets,
    summary: "Vehicle magnets turn cars, vans, and trucks into removable advertising for service businesses, delivery teams, realtors, contractors, and part-time company vehicles.",
    uses: ["Service vehicles", "Delivery cars", "Contractor trucks", "Realtor cars", "Temporary branding", "Fleet identification", "Event vehicles", "Mobile advertising"],
    options: ["Door magnets", "Custom sizes", "Full color printing", "Rounded corners", "Pairs for both sides", "High-contrast layouts", "Logo cleanup", "Removable advertising"],
    buyers: ["Contractors", "Delivery services", "Realtors", "Cleaners", "Pest control companies", "Landscapers", "Mobile services", "Small businesses"],
    artwork: ["Use bold lettering", "Keep contact info large", "Use vector logos when available", "Check vehicle door space before ordering"],
    price: ["Size", "Quantity", "Design work", "Logo quality", "Shape", "Turnaround", "Shipping"],
    faqs: [
      ["Are vehicle magnets removable?", "Yes. They are designed for removable use when placed on suitable clean metal surfaces."],
      ["Should I order one or two magnets?", "Most customers order a pair so both sides of the vehicle display the brand."],
      ["Can vehicle magnets replace lettering?", "They are a flexible option for temporary or removable branding, while lettering is more permanent."],
      ["What should be on a vehicle magnet?", "Company name, service, phone number, website, and a simple visual identity are usually enough."]
    ]
  },
  {
    name: "Roll-Up Displays",
    slug: "roll-up-displays",
    image: img.rollup,
    summary: "Roll-up displays and retractable banners create professional portable signage for trade shows, offices, lobbies, schools, events, open houses, and sales presentations.",
    uses: ["Trade shows", "Lobby displays", "Sales presentations", "School events", "Open houses", "Vendor booths", "Conferences", "Retail promotions"],
    options: ["Retractable hardware", "Replacement graphics", "Full height displays", "Tabletop versions", "Carrying cases", "Premium display bases", "Brand packages", "Design help"],
    buyers: ["Sales teams", "Realtors", "Schools", "Event vendors", "Medical offices", "Retail stores", "Nonprofits", "Corporate teams"],
    artwork: ["Put the most important message near eye level", "Use large type", "Avoid clutter", "Match the banner to flyers, cards, and table graphics"],
    price: ["Hardware style", "Graphic size", "Quantity", "Replacement graphics", "Design help", "Turnaround"],
    faqs: [
      ["Are roll-up displays reusable?", "Yes. They are made for repeated setup, breakdown, and storage."],
      ["Can the graphic be replaced?", "Many display systems allow replacement graphics depending on the hardware."],
      ["Are roll-up banners good for trade shows?", "Yes. They are one of the most common portable displays for trade shows and events."],
      ["Can EZ Sign Store design the banner?", "Yes. Design help is available if you need a clean professional display layout."]
    ]
  },
  {
    name: "Coroplast Signs",
    slug: "coroplast-signs",
    image: img.yard,
    summary: "Coroplast signs are lightweight corrugated plastic signs used for yards, events, real estate, contractors, directional signs, parking, schools, and temporary promotions.",
    uses: ["Lawn signs", "Directional signs", "Real estate signs", "Parking signs", "Event signs", "School signs", "Contractor signs", "Campaign signs"],
    options: ["Single or double-sided printing", "Wire stakes", "Custom sizes", "Bulk quantities", "Full color artwork", "Weather-resistant graphics", "Directional arrows", "Temporary outdoor use"],
    buyers: ["Realtors", "Contractors", "Schools", "Campaigns", "Events", "Churches", "Property managers", "Local businesses"]
  },
  {
    name: "Real Estate Signs",
    slug: "real-estate-signs",
    image: img.yard,
    summary: "Real estate signs help agents and teams promote listings, open houses, directional routes, agent branding, property management notices, and neighborhood farming campaigns.",
    uses: ["For sale signs", "Open house signs", "Directional signs", "Agent branding", "Listing riders", "Luxury property signs", "Door hangers", "Postcards"],
    options: ["Yard signs", "Wire stakes", "Riders", "Directional arrows", "Postcards", "Door hangers", "Vehicle magnets", "Custom branded layouts"],
    buyers: ["Agents", "Brokerages", "Property managers", "Developers", "Open house teams", "Real estate investors"]
  },
  {
    name: "Business Cards",
    slug: "business-cards",
    image: img.postcards,
    summary: "Business cards give customers a quick, professional way to remember a company, contact a salesperson, scan a QR code, or save service information.",
    uses: ["Sales teams", "Contractors", "Restaurants", "Real estate agents", "Retail stores", "Service businesses", "Events", "Networking"],
    options: ["Single or double-sided printing", "Matte or gloss finish", "QR codes", "Logo cleanup", "Custom layouts", "Bulk orders", "Appointment card layouts", "Brand matching"],
    buyers: ["Business owners", "Sales teams", "Realtors", "Contractors", "Medical offices", "Retail staff", "Event vendors"]
  },
  {
    name: "Brochures",
    slug: "brochures",
    image: img.postcards,
    summary: "Brochures help explain services, menus, packages, products, event details, real estate offerings, and company capabilities in a polished printed format.",
    uses: ["Service menus", "Product sheets", "Real estate packets", "Restaurant menus", "Event handouts", "Office literature", "Sales packets", "Welcome kits"],
    options: ["Bi-fold or tri-fold layouts", "Gloss or matte paper", "Full color printing", "Service lists", "QR codes", "Custom design", "Bulk quantities", "Brand matching"],
    buyers: ["Restaurants", "Contractors", "Medical offices", "Realtors", "Schools", "Event teams", "Retail stores"]
  },
  {
    name: "Posters",
    slug: "posters",
    image: img.rollup,
    summary: "Posters are used for promotions, events, menus, office notices, schools, retail displays, concerts, fundraisers, and indoor sign messaging.",
    uses: ["Retail promotions", "School events", "Restaurant menus", "Concerts", "Fundraisers", "Office notices", "Window displays", "Directional messaging"],
    options: ["Multiple poster sizes", "Gloss or matte stock", "Indoor display", "Foam board mounting", "Full color artwork", "Short-run printing", "Event graphics", "Design help"],
    buyers: ["Schools", "Restaurants", "Retail stores", "Event planners", "Gyms", "Churches", "Community groups"]
  },
  {
    name: "Table Covers",
    slug: "table-covers",
    image: img.tabletop,
    summary: "Table covers create a branded setup for trade shows, school events, registration tables, retail promotions, vendor booths, and corporate displays.",
    uses: ["Trade show tables", "Vendor booths", "Registration tables", "School events", "Product demos", "Open houses", "Corporate events", "Fundraisers"],
    options: ["Full color branding", "Logo placement", "Matching table displays", "Event graphics", "Multiple table sizes", "Reusable fabric options", "Design help", "Brand packages"],
    buyers: ["Vendors", "Schools", "Corporate teams", "Realtors", "Nonprofits", "Retail stores", "Event companies"]
  },
  {
    name: "Feather Flags",
    slug: "feather-flags",
    image: img.banners,
    summary: "Feather flags help businesses attract attention from roadsides, sidewalks, entrances, open houses, events, and outdoor promotions.",
    uses: ["Grand openings", "Sales events", "Open houses", "Sidewalk visibility", "Parking lots", "Restaurants", "Retail stores", "Service businesses"],
    options: ["Flag hardware", "Ground stakes", "Bases", "Single or double-sided options", "Custom graphics", "Outdoor use", "Directional messages", "Brand colors"],
    buyers: ["Retail stores", "Restaurants", "Realtors", "Gyms", "Car washes", "Events", "Service businesses"]
  },
  {
    name: "A-Frame Signs",
    slug: "a-frame-signs",
    image: img.job,
    summary: "A-frame signs help restaurants, retail stores, salons, offices, events, schools, and local businesses create sidewalk visibility and directional messaging.",
    uses: ["Sidewalk promotions", "Menus", "Open house directions", "Event wayfinding", "Retail sales", "Parking instructions", "Office entrances", "Daily specials"],
    options: ["Replaceable panels", "Full color inserts", "Directional arrows", "Outdoor frames", "Custom sizes", "Reusable hardware", "Restaurant layouts", "Retail promotion layouts"],
    buyers: ["Restaurants", "Retail stores", "Realtors", "Schools", "Salons", "Events", "Offices"]
  },
  {
    name: "Parking Signs",
    slug: "parking-signs",
    image: img.job,
    summary: "Parking signs help identify reserved spaces, customer parking, visitor directions, loading areas, towing notices, job site parking, and event traffic flow.",
    uses: ["Reserved parking", "Customer parking", "Visitor spaces", "Event parking", "Loading areas", "Directional signs", "Job site parking", "Property management"],
    options: ["Aluminum signs", "Rigid panels", "Reflective options", "Mounting holes", "Directional arrows", "Custom wording", "Bulk property signs", "Weather-resistant layouts"],
    buyers: ["Property managers", "Retail centers", "Contractors", "Schools", "Offices", "Event venues", "Municipal vendors"]
  },
  {
    name: "Safety Signs",
    slug: "safety-signs",
    image: img.job,
    summary: "Safety signs help communicate rules, warnings, directions, hazards, restricted areas, PPE reminders, and job site notices.",
    uses: ["Construction safety", "Warehouse notices", "Restricted areas", "PPE reminders", "Directional safety signs", "Parking lots", "Property management", "Event sites"],
    options: ["Rigid outdoor signs", "Coroplast signs", "Aluminum panels", "Icon-based layouts", "Custom wording", "Bulk signs", "Mounting holes", "Weather-resistant printing"],
    buyers: ["Contractors", "Warehouses", "Property managers", "Schools", "Facilities", "Retail centers", "Event venues"]
  },
  {
    name: "Graduation Signs",
    slug: "graduation-signs",
    image: img.yard,
    summary: "Graduation signs are popular for lawns, school events, senior celebrations, team recognition, sponsor displays, and neighborhood congratulations.",
    uses: ["Senior lawn signs", "School events", "Team recognition", "Graduation parties", "Sponsor signs", "Photo displays", "Directional signs", "Fundraisers"],
    options: ["Yard signs", "Photo signs", "Wire stakes", "Bulk school orders", "Team colors", "Custom names", "School logos", "Full color layouts"],
    buyers: ["Parents", "Schools", "Teams", "PTAs", "Booster clubs", "Event planners", "Community groups"]
  },
  {
    name: "Vector Tracing",
    slug: "vector-tracing",
    image: img.magnets,
    summary: "Vector tracing helps turn low-resolution logos or artwork into cleaner files that can be used for signs, banners, decals, business cards, and print products.",
    uses: ["Logo cleanup", "Banner art", "Vehicle graphics", "Decals", "Business cards", "Large-format signs", "Embroidery prep", "Print-ready artwork"],
    options: ["Logo redrawing", "Artwork cleanup", "Simple vector conversion", "Color matching", "Print file setup", "Sign-ready files", "PDF/SVG/EPS style preparation", "Design support"],
    buyers: ["Small businesses", "Contractors", "Restaurants", "Teams", "Schools", "Realtors", "Retail stores"]
  }
];

const defaultMockups = [
  { style: "silver", kicker: "Sample Layout", title: "Clear Headline", sub: "Large logo, short message, easy contact path", foot: "Upload art or ask for design help" },
  { style: "blue", kicker: "Business Promo", title: "Spring Special", sub: "Service message with phone, web, and QR code", foot: "Clean, readable, order-ready" },
  { style: "dark", kicker: "Event Sign", title: "Check In Here", sub: "Directional message with bold arrow and event branding", foot: "Great for temporary use" }
];

const mockupSets = {
  "vinyl-banners": [
    { style: "blue wide", kicker: "Grand Opening", title: "NOW OPEN", sub: "Bright Harbor Cafe • Fresh coffee • Local bakery", foot: "Custom vinyl banner with grommets" },
    { style: "silver wide", kicker: "Contractor Banner", title: "RENOVATION IN PROGRESS", sub: "Northline Builders • Kitchens • Baths • Additions", foot: "Fence banner or job site banner" },
    { style: "dark wide", kicker: "School Event", title: "FALL FUNDRAISER", sub: "Friday Night • Gym Entrance • Scan for Tickets", foot: "Indoor or outdoor event banner" }
  ],
  "yard-signs": [
    { style: "campaign", kicker: "Campaign Yard Sign", title: "TAYLOR BROOKS", sub: "For Town Council", foot: "Fictional candidate sample" },
    { style: "campaign red", kicker: "School Board Sign", title: "JORDAN ELLIS", sub: "For School Board", foot: "Fictional candidate sample" },
    { style: "green", kicker: "Contractor Lawn Sign", title: "NEW PATIO BY RIDGEWAY MASONRY", sub: "Outdoor living • Walkways • Steps", foot: "Job site lawn sign sample" }
  ],
  "coroplast-signs": [
    { style: "campaign", kicker: "Campaign Sign", title: "MORGAN LEE", sub: "For County Clerk", foot: "Fictional candidate sample" },
    { style: "blue", kicker: "Directional Sign", title: "EVENT PARKING", sub: "Entrance on Oak Street", foot: "Arrow signs and route signs" },
    { style: "green", kicker: "School Sign", title: "GRADUATION PICKUP", sub: "Line starts at main lot", foot: "Temporary coroplast sign" }
  ],
  "job-site-signs": [
    { style: "dark permit", kicker: "Work In Progress", title: "RESIDENTIAL ADDITION", sub: "Brightline Builders • Permit Board • Site Contact", foot: "Custom job site board sample" },
    { style: "blue permit", kicker: "Safety Notice", title: "HARD HATS REQUIRED", sub: "Authorized personnel only beyond this point", foot: "Safety and compliance sign" },
    { style: "silver permit", kicker: "Contractor Branding", title: "PROJECT BY STONEGATE HOMES", sub: "Renovations • Outdoor Living • Kitchens", foot: "Weather-ready rigid sign" }
  ],
  "real-estate-signs": [
    { style: "dark", kicker: "Open House", title: "OPEN HOUSE", sub: "Sunday 12-3 • 24 Maple Lane", foot: "Agent directional sign" },
    { style: "silver", kicker: "For Sale", title: "FOR SALE", sub: "The Rivera Team • Homes & Estates", foot: "Listing sign sample" },
    { style: "blue", kicker: "Rider Panel", title: "NEW LISTING", sub: "Scan for photos, floor plan, and details", foot: "Wire frame and rider concept" }
  ],
  "postcards": [
    { style: "orange", kicker: "Restaurant Mailer", title: "FREE APPETIZER", sub: "Harbor Table Grill • New seasonal menu", foot: "Direct mail postcard sample" },
    { style: "blue", kicker: "Contractor Offer", title: "BOOK YOUR SPRING PROJECT", sub: "Patios • Walkways • Retaining Walls", foot: "Neighborhood mailer sample" },
    { style: "silver", kicker: "Real Estate Card", title: "WHAT IS YOUR HOME WORTH?", sub: "Local market update • Scan for estimate", foot: "Agent farming postcard" }
  ],
  "door-hangers": [
    { style: "green hanger", kicker: "Lawn Care", title: "FIRST CUT SPECIAL", sub: "Bright Lawn Co. • Weekly service available", foot: "Door hanger route sample" },
    { style: "orange hanger", kicker: "Restaurant", title: "NEW LUNCH MENU", sub: "Free delivery in the neighborhood", foot: "Menu door hanger sample" },
    { style: "blue hanger", kicker: "Home Service", title: "ROOF CHECK SPECIAL", sub: "Summit Exterior Pros • Scan for quote", foot: "Contractor canvassing sample" }
  ],
  "vehicle-magnets": [
    { style: "blue magnet", kicker: "Service Van", title: "NORTH SHORE PLUMBING", sub: "Repairs • Water heaters • Emergency service", foot: "Door magnet sample" },
    { style: "green magnet", kicker: "Landscape Truck", title: "GREEN RIDGE LAWNS", sub: "Weekly mowing • Cleanups • Mulch", foot: "Removable vehicle branding" },
    { style: "dark magnet", kicker: "Delivery Vehicle", title: "CITYLINE COURIER", sub: "Local deliveries • Same-day routes", foot: "Pair of vehicle magnets" }
  ],
  "roll-up-displays": [
    { style: "blue tall", kicker: "Trade Show", title: "MEET THE TEAM", sub: "Scan to book a demo or request pricing", foot: "Retractable banner display" },
    { style: "silver tall", kicker: "Lobby Display", title: "WELCOME VISITORS", sub: "Check in at the front desk", foot: "Office and lobby signage" },
    { style: "dark tall", kicker: "Sales Event", title: "LIMITED-TIME OFFER", sub: "Ask about package pricing today", foot: "Portable event display" }
  ],
  "tabletop-banners": [
    { style: "blue table", kicker: "Registration Table", title: "CHECK IN", sub: "Name badges • Programs • Schedule", foot: "Tabletop banner sample" },
    { style: "silver table", kicker: "Vendor Booth", title: "ASK ABOUT PACKAGES", sub: "Simple display for counters and booths", foot: "Portable table display" },
    { style: "dark table", kicker: "Open House", title: "SCAN FOR DETAILS", sub: "Photos • Floor plan • Contact info", foot: "Counter sign concept" }
  ],
  "business-cards": [
    { style: "blue cardmock", kicker: "Business Card", title: "ALEX MORGAN", sub: "Summit Electrical • 516-555-0198", foot: "Front card layout" },
    { style: "silver cardmock", kicker: "Appointment Card", title: "NEXT VISIT", sub: "Date • Time • QR code area", foot: "Back card layout" },
    { style: "dark cardmock", kicker: "Service Card", title: "24/7 REPAIRS", sub: "Fast contact and service list", foot: "High-contrast card sample" }
  ],
  "brochures": [
    { style: "blue fold", kicker: "Tri-Fold", title: "SERVICES GUIDE", sub: "Three panels for service details and photos", foot: "Brochure concept" },
    { style: "green fold", kicker: "Menu Fold", title: "CATERING MENU", sub: "Packages • Add-ons • Contact details", foot: "Restaurant brochure" },
    { style: "silver fold", kicker: "Real Estate", title: "BUYER GUIDE", sub: "Steps, checklist, and agent contact", foot: "Handout concept" }
  ],
  "posters": [
    { style: "blue poster", kicker: "Event Poster", title: "SUMMER CONCERT", sub: "Friday • Main Street Plaza", foot: "Indoor poster sample" },
    { style: "orange poster", kicker: "Restaurant Poster", title: "NEW SPECIALS", sub: "Lunch combos all week", foot: "Window poster sample" },
    { style: "dark poster", kicker: "Retail Poster", title: "SALE THIS WEEK", sub: "Up to 40% off selected items", foot: "Promo poster sample" }
  ],
  "table-covers": [
    { style: "blue table", kicker: "Event Table", title: "COASTAL TECH", sub: "Logo front and center", foot: "Branded table cover" },
    { style: "silver table", kicker: "School Booth", title: "BOOSTER CLUB", sub: "Clean event-table branding", foot: "Fundraiser setup" },
    { style: "dark table", kicker: "Trade Show", title: "ASK US ANYTHING", sub: "Pair with tabletop display", foot: "Vendor table concept" }
  ],
  "feather-flags": [
    { style: "blue tall", kicker: "Roadside Flag", title: "NOW OPEN", sub: "Drive-by visibility", foot: "Feather flag concept" },
    { style: "orange tall", kicker: "Restaurant Flag", title: "TACOS TODAY", sub: "Outdoor promo flag", foot: "Sidewalk visibility" },
    { style: "dark tall", kicker: "Open House Flag", title: "OPEN HOUSE", sub: "Directional outdoor display", foot: "Real estate event flag" }
  ],
  "a-frame-signs": [
    { style: "dark", kicker: "Sidewalk Sign", title: "TODAY'S SPECIAL", sub: "Soup • Sandwich • Drink", foot: "Restaurant A-frame" },
    { style: "blue", kicker: "Open House", title: "OPEN HOUSE", sub: "Turn right at the next corner", foot: "Directional A-frame" },
    { style: "silver", kicker: "Retail", title: "SALE INSIDE", sub: "New arrivals this week", foot: "Sidewalk retail sign" }
  ],
  "parking-signs": [
    { style: "blue", kicker: "Parking Sign", title: "CUSTOMER PARKING", sub: "Reserved for visitors", foot: "Rigid parking sign" },
    { style: "dark", kicker: "Loading Zone", title: "LOADING ONLY", sub: "15 minute limit", foot: "Property sign sample" },
    { style: "silver", kicker: "Event Parking", title: "LOT B", sub: "Entrance on Elm Avenue", foot: "Directional parking sign" }
  ],
  "safety-signs": [
    { style: "dark permit", kicker: "Safety Sign", title: "EYE PROTECTION REQUIRED", sub: "Beyond this point", foot: "Workplace safety sample" },
    { style: "orange permit", kicker: "Warning", title: "CAUTION: WORK AREA", sub: "Authorized personnel only", foot: "Job site safety sign" },
    { style: "blue permit", kicker: "Facility Notice", title: "VISITORS CHECK IN", sub: "Report to front office", foot: "Facility sign sample" }
  ],
  "graduation-signs": [
    { style: "blue", kicker: "Senior Sign", title: "CONGRATS AVERY", sub: "Class of 2027", foot: "Graduation yard sign" },
    { style: "silver", kicker: "School Spirit", title: "GO HAWKS", sub: "Proud graduate family", foot: "Photo sign concept" },
    { style: "green", kicker: "Team Sign", title: "SENIOR NIGHT", sub: "Custom names and numbers", foot: "School event sign" }
  ],
  "vector-tracing": [
    { style: "silver", kicker: "Before", title: "LOW-RES LOGO", sub: "Blurry screenshot or small web image", foot: "Needs cleanup" },
    { style: "blue", kicker: "After", title: "CLEAN VECTOR", sub: "Sharper lines for signs and print", foot: "Print-ready artwork" },
    { style: "dark", kicker: "Use Cases", title: "BANNERS • DECALS • CARDS", sub: "Cleaner art across every product", foot: "Artwork support" }
  ]
};

const defaults = {
  artwork: ["Use the clearest logo or artwork file available", "Avoid screenshots when a PDF, vector file, or high-resolution image exists", "Keep important text away from trim or hardware areas", "Ask for design help if the file is not ready to print"],
  price: ["Size", "Quantity", "Material", "Finishing", "Design time", "Turnaround", "Shipping or pickup needs"],
  faqs: [
    ["Can I request help choosing the right product?", "Yes. EZ Sign Store can help compare materials, sizes, artwork needs, and common uses before you order."],
    ["Can I upload artwork later?", "Many projects can start with a quote or product request before final artwork is ready."],
    ["Can you help fix my artwork?", "Yes. Design and file-prep help is useful when logos, photos, or layouts are not print-ready."],
    ["What affects pricing?", "Pricing usually depends on size, quantity, material, finishing, design time, turnaround, and shipping needs."]
  ]
};

const bySlug = new Map(products.map((product) => [product.slug, product]));
const safe = (value) => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const css = `
:root{--black:#05070b;--navy:#071426;--blue:#0b5ed7;--sky:#13a7ff;--silver:#d8e1ec;--line:rgba(7,20,38,.13);--shadow:0 24px 60px rgba(7,20,38,.14);--glow:0 18px 48px rgba(11,94,215,.22);--radius:12px}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:Inter,Arial,Helvetica,sans-serif;color:var(--black);background:radial-gradient(circle at 18% 0%,rgba(19,167,255,.18),transparent 30rem),linear-gradient(180deg,#fff 0%,#f3f7fc 56%,#fff 100%);line-height:1.55}a{color:inherit;text-decoration:none}img{display:block;max-width:100%}.wrap{width:min(1180px,calc(100% - 32px));margin:0 auto}h1,h2,h3{margin:0;line-height:1.05;letter-spacing:-.035em}p{margin:0;color:#526071}.top{background:linear-gradient(90deg,#05070b,#071426 52%,#0b5ed7);color:#fff;border-bottom:1px solid rgba(255,255,255,.18)}.top .wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 0;flex-wrap:wrap}.brand{display:flex;align-items:center;gap:12px;font-weight:950;text-transform:uppercase}.brand small{display:block;color:#d8e1ec;letter-spacing:.1em}.mark{width:50px;height:50px;border-radius:13px;display:grid;place-items:center;background:linear-gradient(145deg,#06101f,#0b5ed7 54%,#13a7ff);color:#fff;border:1px solid rgba(255,255,255,.75);box-shadow:0 14px 30px rgba(11,94,215,.32)}.nav{display:flex;gap:8px;flex-wrap:wrap}.nav a{font-weight:950;text-transform:uppercase;border:1px solid rgba(255,255,255,.22);border-radius:9px;padding:9px 10px;background:linear-gradient(180deg,rgba(255,255,255,.15),rgba(255,255,255,.05))}.nav a:hover{background:linear-gradient(135deg,#13a7ff,#0b5ed7)}.hero{position:relative;overflow:hidden;background:radial-gradient(circle at 78% 18%,rgba(19,167,255,.22),transparent 26rem),linear-gradient(135deg,#fff 0%,#f8fbff 48%,#dce6f0 100%);border-bottom:1px solid var(--line)}.hero .wrap{display:grid;grid-template-columns:1fr .78fr;gap:38px;align-items:center;padding:66px 0}.eyebrow{color:var(--blue);font-weight:950;text-transform:uppercase;letter-spacing:.14em;font-size:.82rem;margin-bottom:12px}h1{font-size:clamp(2.5rem,5vw,5.4rem);text-transform:uppercase;color:#071426}.lead{font-size:1.14rem;max-width:760px;margin-top:18px}.hero-img{border-radius:20px;padding:12px;background:linear-gradient(#fff,#fff) padding-box,linear-gradient(135deg,rgba(11,94,215,.55),rgba(216,225,236,.95),rgba(19,167,255,.45)) border-box;border:1px solid transparent;box-shadow:var(--shadow),var(--glow)}.hero-img img{width:100%;height:360px;object-fit:cover;border-radius:14px}.actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}.btn{min-height:48px;display:inline-flex;align-items:center;justify-content:center;padding:12px 17px;border-radius:10px;border:1px solid rgba(7,20,38,.16);font-weight:950;text-transform:uppercase;letter-spacing:.04em;font-size:.84rem;box-shadow:inset 0 1px 0 rgba(255,255,255,.55),0 14px 30px rgba(7,20,38,.14)}.blue{color:#fff;background:linear-gradient(135deg,#13a7ff,#0b5ed7 48%,#06101f)}.silver{color:#071426;background:linear-gradient(135deg,#fff,#d8e1ec 52%,#f9fcff)}.black{color:#fff;background:linear-gradient(135deg,#182234,#05070b)}section{padding:58px 0}.section-head{display:flex;justify-content:space-between;align-items:end;gap:24px;margin-bottom:24px}.section-head h2{font-size:clamp(1.9rem,3vw,3.35rem);text-transform:uppercase;color:#071426}.section-head p{max-width:470px}.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.card{background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden;box-shadow:0 18px 42px rgba(7,20,38,.09)}.card img{width:100%;height:150px;object-fit:cover;border-bottom:1px solid rgba(7,20,38,.1)}.card .body{padding:18px}.card h3{text-transform:uppercase;color:#071426;font-size:1.13rem}.card p{margin-top:8px;font-size:.95rem}.info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.mockup-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.mockup{min-height:210px;border-radius:12px;padding:18px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;border:1px solid rgba(7,20,38,.16);box-shadow:0 22px 48px rgba(7,20,38,.14);position:relative;text-transform:uppercase}.mockup:before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.34),transparent 34%,rgba(255,255,255,.2));pointer-events:none}.mockup span,.mockup strong,.mockup small{position:relative}.mockup span{font-size:.74rem;letter-spacing:.16em;font-weight:950;opacity:.85}.mockup strong{display:block;font-size:clamp(1.7rem,3vw,2.65rem);line-height:.95;letter-spacing:-.05em;margin:14px 0}.mockup small{font-size:.78rem;font-weight:900;letter-spacing:.04em}.mockup .sub{font-size:1rem;font-weight:900;letter-spacing:.02em}.mockup.blue,.mockup.campaign{color:#fff;background:linear-gradient(135deg,#0b5ed7,#071426)}.mockup.red{color:#fff;background:linear-gradient(135deg,#b91c1c,#071426)}.mockup.green{color:#fff;background:linear-gradient(135deg,#087443,#071426)}.mockup.orange{color:#071426;background:linear-gradient(135deg,#ff9f1c,#fff1d6)}.mockup.silver{color:#071426;background:linear-gradient(135deg,#fff,#d8e1ec 54%,#f8fbff)}.mockup.dark{color:#fff;background:linear-gradient(135deg,#182234,#05070b)}.mockup.permit{border-left:10px solid #13a7ff}.mockup.hanger{border-radius:24px 24px 12px 12px}.mockup.hanger:after{content:"";position:absolute;top:13px;left:50%;width:34px;height:34px;border-radius:50%;background:#fff;transform:translateX(-50%);box-shadow:inset 0 0 0 1px rgba(7,20,38,.16)}.mockup.tall{min-height:280px}.mockup.table,.mockup.cardmock,.mockup.fold,.mockup.poster,.mockup.magnet{min-height:190px}.panel{background:#fff;border:1px solid var(--line);border-radius:12px;padding:22px;box-shadow:0 18px 42px rgba(7,20,38,.08)}.panel h3{text-transform:uppercase;color:#071426;font-size:1.25rem;margin-bottom:10px}.panel ul{margin:0;padding-left:20px;color:#526071}.panel li{margin:7px 0}.band{color:#fff;background:radial-gradient(circle at 80% 16%,rgba(19,167,255,.25),transparent 28rem),linear-gradient(135deg,#071426,#0b5ed7 70%,#06101f)}.band h2,.band h3{color:#fff}.band p,.band li{color:rgba(255,255,255,.78)}.band .panel{background:linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,.04));border-color:rgba(255,255,255,.16);box-shadow:none}.faq{display:grid;grid-template-columns:1fr 1fr;gap:14px}.faq article{background:#fff;border:1px solid var(--line);border-radius:12px;padding:18px}.faq h3{font-size:1.05rem;color:#071426}.faq p{margin-top:8px}.quote{background:linear-gradient(135deg,#fff,#eef5fc 58%,#d9e4ef);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}footer{background:linear-gradient(135deg,#05070b,#071426);color:#fff;padding:38px 0}footer p{color:rgba(255,255,255,.72);margin-top:8px}@media(max-width:900px){.hero .wrap,.info-grid{grid-template-columns:1fr}.grid,.mockup-grid{grid-template-columns:repeat(2,1fr)}.faq{grid-template-columns:1fr}.hero-img img{height:280px}}@media(max-width:560px){.grid,.mockup-grid{grid-template-columns:1fr}.section-head{display:block}.section-head p{margin-top:10px}h1{font-size:2.45rem}.hero .wrap{padding:44px 0}.nav{width:100%}.hero-img img{height:230px}}
`;

const pageShell = ({ title, description, body }) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${safe(title)}</title>
  <meta name="description" content="${safe(description)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600;700;800;900&display=swap" rel="stylesheet">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='15' fill='%23f7fbff'/%3E%3Crect x='8' y='8' width='48' height='48' rx='13' fill='%230b5ed7'/%3E%3Cpath d='M19 22h25v6H19zm0 12h18v6H19z' fill='white'/%3E%3C/svg%3E">
  <style>${css}</style>
</head>
<body>
  <header class="top">
    <div class="wrap">
      <a class="brand" href="/"><span class="mark">EZ</span><span>EZ Sign Store<small>National Sign Buying Guide</small></span></a>
      <nav class="nav" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/products/">Products</a>
        <a href="/metros/">Metro Guides</a>
        <a href="/#quote">Quote</a>
      </nav>
    </div>
  </header>
  ${body}
  <footer>
    <div class="wrap">
      <strong>EZ Sign Store</strong>
      <p>Online sign and print ordering guidance backed by real sign-shop experience from DeZant Signs.</p>
    </div>
  </footer>
</body>
</html>`;

const productCard = (product) => `<a class="card" href="/products/${product.slug}/"><img src="${product.image}" alt="${safe(product.name)} from EZ Sign Store"><div class="body"><h3>${safe(product.name)}</h3><p>${safe(product.summary)}</p></div></a>`;
const list = (items) => `<ul>${items.map((item) => `<li>${safe(item)}</li>`).join("")}</ul>`;
const mockupCard = (mockup) => `<article class="mockup ${safe(mockup.style)}"><span>${safe(mockup.kicker)}</span><div><strong>${safe(mockup.title)}</strong><div class="sub">${safe(mockup.sub)}</div></div><small>${safe(mockup.foot)}</small></article>`;
const mockupSection = (product) => {
  const mockups = mockupSets[product.slug] ?? defaultMockups;
  return `
  <section>
    <div class="wrap">
      <div class="section-head">
        <h2>Sample ${safe(product.name)} layout ideas.</h2>
        <p>These fictional examples show the type of product artwork customers often order, from simple business messages to campaign-style signs, contractor boards, offers, directions, and event displays.</p>
      </div>
      <div class="mockup-grid">${mockups.map(mockupCard).join("")}</div>
    </div>
  </section>`;
};

mkdirSync("dist/products", { recursive: true });

const directoryBody = `
  <section class="hero">
    <div class="wrap">
      <div>
        <div class="eyebrow">Shop signs, print, displays, and artwork help</div>
        <h1>Product guides for common sign and print orders.</h1>
        <p class="lead">Choose a product to compare uses, materials, artwork needs, price factors, and common ordering questions before requesting pricing or uploading artwork.</p>
        <div class="actions">
          <a class="btn blue" href="/#quote">Request Pricing</a>
          <a class="btn silver" href="/metros/">Browse Metro Guides</a>
        </div>
      </div>
      <div class="hero-img"><img src="/assets/categories/metro-product-collage.jpg" alt="EZ Sign Store product examples"></div>
    </div>
  </section>
  <section>
    <div class="wrap">
      <div class="section-head">
        <h2>Browse product categories.</h2>
        <p>From quick lawn signs to polished displays, each guide helps customers choose the right product and prepare a cleaner order.</p>
      </div>
      <div class="grid">${products.map(productCard).join("")}</div>
    </div>
  </section>`;

writeFileSync("dist/products/index.html", pageShell({
  title: "Sign & Print Product Guides | EZ Sign Store",
  description: "Browse EZ Sign Store product guides for banners, yard signs, job site signs, postcards, door hangers, vehicle magnets, displays, safety signs, parking signs, and more.",
  body: directoryBody
}));

for (const product of products) {
  const related = products.filter((candidate) => candidate.slug !== product.slug).slice(0, 4);
  const uses = product.uses ?? ["Business promotions", "Events", "Real estate marketing", "Contractor visibility", "Retail displays", "School and community use", "Directional messaging", "Local advertising"];
  const options = product.options ?? ["Custom sizes", "Full color printing", "Indoor or outdoor materials", "Single or double-sided layouts", "Bulk quantities", "Design help", "Artwork cleanup", "Rush options when available"];
  const buyers = product.buyers ?? ["Contractors", "Realtors", "Restaurants", "Retail stores", "Schools", "Event teams", "Property managers", "Service businesses"];
  const artwork = product.artwork ?? defaults.artwork;
  const price = product.price ?? defaults.price;
  const faqs = product.faqs ?? defaults.faqs;
  const dir = join("dist/products", product.slug);
  mkdirSync(dir, { recursive: true });
  const body = `
  <section class="hero">
    <div class="wrap">
      <div>
        <div class="eyebrow">EZ Sign Store product guide</div>
        <h1>${safe(product.name)}</h1>
        <p class="lead">${safe(product.summary)}</p>
        <div class="actions">
          <a class="btn blue" href="/#quote">Request Pricing</a>
          <a class="btn silver" href="/#quote">Upload Artwork</a>
          <a class="btn black" href="/products/">All Products</a>
        </div>
      </div>
      <div class="hero-img"><img src="${product.image}" alt="${safe(product.name)} from EZ Sign Store"></div>
    </div>
  </section>
  <section>
    <div class="wrap">
      <div class="section-head">
        <h2>Common uses for ${safe(product.name)}.</h2>
        <p>Use this guide to plan the message, material, artwork, and ordering path before requesting pricing.</p>
      </div>
      <div class="info-grid">
        <article class="panel"><h3>Popular Uses</h3>${list(uses)}</article>
        <article class="panel"><h3>Product Options</h3>${list(options)}</article>
        <article class="panel"><h3>Who Orders Them</h3>${list(buyers)}</article>
      </div>
    </div>
  </section>
  ${mockupSection(product)}
  <section class="band">
    <div class="wrap">
      <div class="section-head">
        <h2>Artwork, pricing, and order details.</h2>
        <p>A cleaner file and a clearer product choice make the quote process faster and the finished product stronger.</p>
      </div>
      <div class="info-grid">
        <article class="panel"><h3>Artwork Tips</h3>${list(artwork)}</article>
        <article class="panel"><h3>What Affects Price</h3>${list(price)}</article>
        <article class="panel"><h3>Easy Order Path</h3>${list(["Choose the product and size", "Upload finished artwork or ask for design help", "Confirm quantity and finishing", "Request pricing and turnaround options"])}</article>
      </div>
    </div>
  </section>
  <section>
    <div class="wrap">
      <div class="section-head">
        <h2>${safe(product.name)} questions.</h2>
        <p>Quick answers before you upload artwork or request pricing.</p>
      </div>
      <div class="faq">
        ${faqs.map(([q, a]) => `<article><h3>${safe(q)}</h3><p>${safe(a)}</p></article>`).join("")}
      </div>
    </div>
  </section>
  <section>
    <div class="wrap">
      <div class="section-head">
        <h2>Related products.</h2>
        <p>Many sign and print projects work best when several products are ordered together.</p>
      </div>
      <div class="grid">${related.map(productCard).join("")}</div>
    </div>
  </section>
  <section class="quote">
    <div class="wrap">
      <h2>Ready to price ${safe(product.name)}?</h2>
      <p>Send artwork, upload later, or ask for design help. EZ Sign Store can help you move from idea to print-ready order.</p>
      <div class="actions">
        <a class="btn blue" href="/#quote">Request Pricing</a>
        <a class="btn silver" href="/metros/">Browse Metro Guides</a>
      </div>
    </div>
  </section>`;

  writeFileSync(join(dir, "index.html"), pageShell({
    title: `${product.name} | EZ Sign Store Product Guide`,
    description: `${product.name} guide from EZ Sign Store: common uses, product options, artwork tips, price factors, FAQs, and quote guidance.`,
    body
  }));
}

console.log(`Generated ${products.length} product pages plus product directory.`);
