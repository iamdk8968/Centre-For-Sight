/**
 * Centralized business configuration for Centre For Sight – Preet Vihar
 * All contact numbers, address, treatments, and listing information are kept here
 * for simple maintenance and clinic updates.
 */

export interface Treatment {
  id: string;
  name: string;
  shortDesc: string;
  category: 'surgical' | 'refractive' | 'diagnostic' | 'pediatric' | 'general';
  symptoms: string[];
  tests: string[];
  description: string;
  whatToExpect: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const HOSPITAL_CONFIG = {
  name: "Centre For Sight",
  tagline: "Super-Speciality Eye Hospital & Eye Care",
  branch: "Preet Vihar, New Delhi",
  fullAddress: "F-14, Vikas Marg, near Metro Gate No. 2, Preet Vihar, New Delhi, Delhi 110092",
  shortAddress: "F-14, Vikas Marg, Preet Vihar, New Delhi",
  landmark: "Near Metro Gate No. 2 (Delhi Metro Blue Line)",
  phoneDisplay: "+91 9953783443",
  phoneRaw: "+919953783443",
  whatsappNumber: "919953783443",
  googleRating: 4.9,
  googleReviewCount: 131,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Centre+For+Sight+F-14+Vikas+Marg+Preet+Vihar+Delhi",
  hoursPlaceholder: "Please contact the clinic directly at +91 9953783443 for current OPD and consultation timings.",
  demoNotice: "Independent website concept for demonstration purposes. Not an official Centre For Sight website.",
  branchAvailabilityNote: "Please confirm with the clinic for Preet Vihar branch availability and consultation schedules."
};

export const TREATMENTS: Treatment[] = [
  {
    id: "cataract",
    name: "Cataract Evaluation & Surgery",
    category: "surgical",
    iconName: "Eye",
    shortDesc: "Comprehensive lens clouding diagnosis, biometry measurements, and modern micro-incision surgical evaluations.",
    description: "Cataract occurs when the eye's natural crystalline lens becomes clouded, causing blurred vision, faded colors, and glare around lights. Our evaluation includes non-contact biometry, digital IOL (Intraocular Lens) power calculations, and assessment for modern micro-incision techniques designed for smooth visual recovery.",
    symptoms: ["Cloudy, blurred or dim vision", "Increased sensitivity to light and glare", "Faded or yellowed color perception", "Frequent changes in eyeglass prescription"],
    tests: ["Slit-lamp biomicroscopy", "Digital optical biometry", "Dilated fundus examination", "Specular microscopy (corneal health)"],
    whatToExpect: "Your initial evaluation takes approximately 60–90 minutes due to pupil dilation. You will receive detailed advice on your lens status and available options."
  },
  {
    id: "lasik",
    name: "LASIK & Refractive Surgery",
    category: "refractive",
    iconName: "Sparkles",
    shortDesc: "Personalized spectacle-removal evaluations including corneal topography and thickness suitability checks.",
    description: "Refractive consultations evaluate your candidacy for laser vision correction (such as LASIK, PRK, or Contoura vision). We assess your corneal curvature, corneal thickness (pachymetry), and optical aberrations to determine whether laser treatment is suitable for your prescription and eye structure.",
    symptoms: ["Nearsightedness (Myopia)", "Farsightedness (Hyperopia)", "Astigmatism", "Desire for freedom from contact lenses and glasses"],
    tests: ["Corneal topography / tomography (Pentacam/Orbscan)", "Corneal pachymetry", "Dry eye screening & tear film analysis", "Cycloplegic refraction"],
    whatToExpect: "A thorough suitability evaluation requires stopping soft contact lenses for at least 3–5 days prior to your consultation. Measurements establish exact corneal eligibility."
  },
  {
    id: "retina",
    name: "Retina Care",
    category: "diagnostic",
    iconName: "Activity",
    shortDesc: "In-depth retinal health screenings for diabetic retinopathy, age-related macular changes, and vascular health.",
    description: "The retina is the light-sensitive tissue lining the back of your eye. Speciality retinal evaluation focuses on early detection of micro-vascular changes from diabetes, hypertension, retinal tears, floaters, and age-related macular degeneration (AMD) using high-resolution digital imaging.",
    symptoms: ["Sudden increase in floaters or flashes of light", "Dark spots or shadows in central vision", "Distorted or wavy straight lines", "Blurry vision fluctuating with blood sugar"],
    tests: ["Dilated indirect ophthalmoscopy", "Optical Coherence Tomography (OCT)", "Fundus photography", "Visual field perimeter test"],
    whatToExpect: "Retinal exams require complete pharmacologic dilation. Please bring sunglasses and arrange for someone to accompany you, as near vision will be temporarily blurred for 2–4 hours."
  },
  {
    id: "glaucoma",
    name: "Glaucoma Evaluation",
    category: "diagnostic",
    iconName: "ShieldAlert",
    shortDesc: "Early detection screening measuring intraocular pressure, visual field sensitivity, and optic nerve fiber thickness.",
    description: "Known as the 'silent thief of sight', glaucoma damages the optic nerve often without noticeable early warning signs. Routine screening evaluates your intraocular pressure (IOP), visual field perimetry, anterior chamber drainage angles (gonioscopy), and retinal nerve fiber layer (RNFL) mapping.",
    symptoms: ["Gradual loss of peripheral (side) vision", "Occasional eye heaviness or headaches", "Rainbow halos around streetlights at night", "Family history of elevated eye pressure"],
    tests: ["Goldmann applanation tonometry (IOP)", "Automated Humphrey visual field analysis", "Gonioscopy (drainage angle check)", "RNFL OCT optic nerve head scan"],
    whatToExpect: "Non-invasive diagnostic measurements assess both pressure and nerve fiber parameters to build a baseline for lifelong vision preservation."
  },
  {
    id: "cornea",
    name: "Cornea Care",
    category: "surgical",
    iconName: "Layers",
    shortDesc: "Diagnosis and care for corneal irregularities, keratoconus screening, ocular surface infections, and dystrophies.",
    description: "The cornea is the eye's clear protective outer dome. Specialized corneal services evaluate conditions including keratoconus, corneal scarring, recurrent erosions, pterygium, and chronic ocular surface inflammations, helping recommend tailored therapeutic regimens.",
    symptoms: ["Frequent prescription shifts with irregular astigmatism", "Severe light sensitivity and glare", "Persistent foreign body sensation", "Corneal haziness or cloudiness"],
    tests: ["High-definition corneal topography", "Slit-lamp anterior segment photography", "Fluorescein dye staining analysis", "Anterior segment OCT"],
    whatToExpect: "The specialist will examine the cellular clarity and contour of your cornea with advanced biomicroscopy and surface mapping."
  },
  {
    id: "pediatric",
    name: "Pediatric Eye Care",
    category: "pediatric",
    iconName: "Smile",
    shortDesc: "Child-friendly visual assessments for amblyopia (lazy eye), squint, refractive errors, and screen-time fatigue.",
    description: "Early childhood visual screening is vital because many developmental vision conditions are most treatable before age 8. Our pediatric evaluation is designed to be gentle, reassuring, and engaging, assessing eye alignment, focusing ability, and refractive balance.",
    symptoms: ["Squinting or head tilting when looking at distant objects", "One eye drifting inward or outward", "Complaints of double vision or frequent rubbing", "Difficulty tracking lines when reading"],
    tests: ["Child-friendly visual acuity charts", "Cover-uncover squint alignment test", "Cycloplegic pediatric refraction", "Stereopsis (depth perception) screening"],
    whatToExpect: "Consultations are conducted at a relaxed pace with child-friendly techniques to make young patients feel safe, calm, and respected."
  },
  {
    id: "dry-eye",
    name: "Dry Eye Evaluation",
    category: "general",
    iconName: "Droplet",
    shortDesc: "Advanced tear film break-up analysis, Meibomian gland evaluation, and relief for digital screen fatigue.",
    description: "Modern lifestyle and prolonged digital screen use have made dry eye syndrome widespread in urban environments. Comprehensive evaluation measures tear volume, tear quality, evaporation rates, and meibomian gland functionality to design targeted relief programs.",
    symptoms: ["Burning, stinging or gritty sensation in eyes", "Reflex watery eyes in air conditioning or wind", "Eye strain and redness after computer use", "Heavy, tired eyelids by afternoon"],
    tests: ["Schirmer's tear volume test", "Tear Break-Up Time (TBUT)", "Meibomian gland infrared imaging", "Corneal surface vital staining"],
    whatToExpect: "Non-invasive tests help isolate whether your dryness is caused by insufficient tear production or rapid lipid evaporation."
  },
  {
    id: "comprehensive",
    name: "Comprehensive Eye Examination",
    category: "general",
    iconName: "ClipboardCheck",
    shortDesc: "All-in-one vision checkup including refraction, slit-lamp assessment, pressure check, and posterior segment view.",
    description: "An annual complete eye examination is the cornerstone of proactive healthcare. Beyond just determining your spectacle or contact lens prescription, this structured checkup assesses overall ocular health, screening for undetected conditions early.",
    symptoms: ["Annual preventive wellness checkup", "Blurred near or distance vision", "Frequent headaches during close work", "Routine screening for adults over 40"],
    tests: ["Computerized automated refraction", "Subjective visual acuity testing", "Slit-lamp examination of eyelids, cornea & lens", "Non-contact tonometry (pressure measurement)"],
    whatToExpect: "A structured 45–60 minute session covering optical refraction, eye coordination, pressure screening, and internal health review."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Specialized Eye Care Focus",
    description: "Dedicated attention to super-speciality eye care and refractive consultations, delivering systematic diagnostic protocols.",
    icon: "Target"
  },
  {
    title: "Convenient Preet Vihar Location",
    description: "Prominently located on Vikas Marg, directly adjacent to Preet Vihar Metro Station Gate No. 2 for hassle-free accessibility.",
    icon: "MapPin"
  },
  {
    title: "Prompt Appointment Enquiries",
    description: "Quick, user-friendly appointment enquiry via direct WhatsApp and telephone routing to the Preet Vihar clinic desk.",
    icon: "MessageSquare"
  },
  {
    title: "Transparent Treatment Information",
    description: "Clear, patient-friendly medical guides to help you understand eye health, examination procedures, and what to expect.",
    icon: "BookOpen"
  },
  {
    title: "Patient-First Hospitality",
    description: "A comfortable, welcoming clinic environment designed to make your consultations organized, calm, and reassuring.",
    icon: "HeartHandshake"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How can I request an appointment?",
    answer: "You can request an appointment easily by filling out our online enquiry form, sending a prefilled message via WhatsApp to +91 9953783443, or calling the clinic directly. The clinic reception team will confirm available doctor slots and your consultation timing."
  },
  {
    question: "Where is the Preet Vihar branch located?",
    answer: "The clinic is situated at F-14, Vikas Marg, near Metro Gate No. 2, Preet Vihar, New Delhi, Delhi 110092. It is easily reachable via the Delhi Metro Blue Line (Preet Vihar Station)."
  },
  {
    question: "How can I contact the clinic?",
    answer: "You can call or WhatsApp the Preet Vihar branch team at +91 9953783443. For route guidance, you can also access our direct Google Maps navigation link available on this website."
  },
  {
    question: "Can I enquire about LASIK consultation?",
    answer: "Yes, you can enquire about LASIK and refractive surgery suitability consultations through our form or by calling +91 9953783443. The clinic team will guide you on preparation requirements, such as discontinuing contact lenses before your diagnostic evaluation."
  },
  {
    question: "How do I confirm consultation fees?",
    answer: "Consultation fees and diagnostic charges vary depending on the sub-speciality (e.g., general eye checkup, retina evaluation, or refractive screening). Please contact the clinic front desk at +91 9953783443 for current, exact fee details."
  },
  {
    question: "How can I check doctor availability?",
    answer: "Doctor schedules and sub-specialist OPD days are coordinated by the Preet Vihar front desk. We recommend calling or submitting an appointment enquiry in advance so the team can verify your preferred specialist's availability."
  }
];
