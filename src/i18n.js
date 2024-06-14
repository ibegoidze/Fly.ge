import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// LANGUAGE RESOURCES
const resources = {
  // ENGLISH
  en: {
    translation: {
      "Welcome to React": "Welcome to React",
      Tickets: "Tickets",
      Offers: "Offers",
      Blog: "Blog",
      Contact: "Contact",
      "Sign in": "Sign in",
      "Happiness gained from traveling": "Happiness gained from traveling",
      Hotels: "Hotels",
      "Car rental": "Car rental",
      Bilateral: "Bilateral",
      Unilateral: "Unilateral",
      Passenger: "Passenger",
      Adult: "Adult",
      Child: "Child",
      Newborn: "Newborn",
      Disabled: "Disabled",
      "From the age of 11": "From the age of 11",
      "2-11 years old": "2-11 years old",
      "Up to 2 years": "Up to 2 years",
      Cancel: "Cancel",
      Submit: "Submit",
      "Economy class": "Economy class",
      "Premium class": "Premium class",
      "Business class": "Business class",
      "First class": "First class",
      From: "From",
      To: "To",
      "Choose the airport": "Choose the airport",
      Sun: "Sun",
      Mon: "Mon",
      Tue: "Tue",
      Wed: "Wed",
      Thu: "Thu",
      Fri: "Fri",
      Sat: "Sat",
      Clear: "Clear",
      Nights: "Nights",
      Departure: "Departure",
      Return: "Return",
      "Select Departure Date": "Select Departure Date",
      "Select Return Date": "Select Return Date",
      January: "January",
      February: "February",
      March: "March",
      April: "April",
      May: "May",
      June: "June",
      July: "July",
      August: "August",
      September: "September",
      October: "October",
      November: "November",
      December: "December",
      "Search, book and purchase tickets for free in minutes":
        "Search, book and purchase tickets for free in minutes",
      "Search for tickets": "Search for tickets",
      "Search hotels and more...": "Search hotels and more...",
      Destination: "Destination",
      "Choose your destination": "Choose your destination",
      "Check-in Date": "Check-in Date",
      "Check-out Date": "Check-out Date",
      "Search Hotels": "Search Hotels",
      "Search hundreds of rental car sites at once for car rental deals":
        "Search hundreds of rental car sites at once for car rental deals",
      "Explore car deals": "Explore car deals",
      "Flights to Europe": "Flights to Europe",
      "Low-cost flights from Georgia to Europe":
        "Low-cost flights from Georgia to Europe",
      "See all": "See all",
      Paris: "Paris",
      London: "London",
      Berlin: "Berlin",
      Tbilisi: "Tbilisi",
      "Feb 2 from $570": "Feb 2 from $570",
      "Sep 28 from $520": "Sep 28 from $520",
      "Oct 30 from $520": "Oct 30 from $520",
      "Oct 30 from $480": "Oct 30 from $480",
      "Apr 3 from $720": "Apr 3 from $720",
      Reserve: "Reserve",
      "Partner airline companies": "Partner airline companies",
      "Offers tailored to you": "Offers tailored to you",
      "All services in one space will make your trip unforgettable":
        "All services in one space will make your trip unforgettable",
      Himalay: "Himalay",
      Prague: "Prague",
      Vienna: "Vienna",
      "Top offers": "Top offers",
      Days: "Days",
      "Promotional text that helps you": "Promotional text that helps you",
      "Flights to all directions": "Flights to all directions",
      "Low-budget flights from Georgia to any direction":
        "Low-budget flights from Georgia to any direction",
      "Discover adventures": "Discover adventures",
      "Helping you create a variety of adventures in your life and Simplifying the search and decision process is our mission. If Traveling is your nature, you often have to visit different countries or If you are looking for special moments, places to discover and Marking on the personal map, unforgettable shots in your life and It will be imprinted as memories, get to know our blog - discover and bookmark A new location on the travel map, get to know the culture of the peoples of the world and Choose the most interesting for you.":
        "Helping you create a variety of adventures in your life and Simplifying the search and decision process is our mission. If Traveling is your nature, you often have to visit different countries or If you are looking for special moments, places to discover and Marking on the personal map, unforgettable shots in your life and It will be imprinted as memories, get to know our blog - discover and bookmark A new location on the travel map, get to know the culture of the peoples of the world and Choose the most interesting for you.",
      "Check out our blog": "Check out our blog",
      Technology: "Technology",
      "New Year's discounts and low-cost flights":
        "New Year's discounts and low-cost flights",
      "Lorem Ipsu put on the work Rite of Wrath in the can with the advanced barren half of the contact swelling...":
        "Lorem Ipsu put on the work Rite of Wrath in the can with the advanced barren half of the contact swelling...",
      seen: "seen",
      comment: "comment",
      network: "Network",
      airlines: "Airlines",
      airports: "Airports",
      regions: "Regions",
      countries: "Countries",
      cities: "Cities",
      company: "Company",
      whyUs: "Why Us",
      aboutUs: "About Us",
      benefits: "Benefits",
      start: "Start",
      plans: "Plans",
      help: "Help",
      helpCenter: "Help Center",
      covidSupport: "COVID Support",
      pressCenter: "Press Center",
      rulesAndPolicies: "Rules and Policies",
      confidentiality: "Confidentiality",
      contact: "Contact",
      termsAndConditions: "Terms and conditions",
      textUs: "Text Us",
      subscribeText:
        "Subscribe to our email and receive personal and exclusive offers",
      enterYourEmail: "Enter your Email",
      subscribe: "Subscribe",
      "all rights reserved": "all rights reserved",
      "Travel details": "Travel details",
      Search: "Search",
      "Review and payment": "Review and payment",
      found: "Found",
      results: "results",
      "ticket quantity": "Ticket quantity",
      Hokaido: "Hokaido",
      direct: "Direct",
      stop: "Stop",
      "international airport": "International airport",
      Turkey: "Turkey",
      Barcelona: "Barcelona",
      Rome: "Rome",
      Madrid: "Madrid",
      Athens: "Athens",
      Spain: "Spain",
      Lisbon: "Lisbon",
      Amsterdam: "Amsterdam",
      France: "France",
      Long: "Long",
      min: "min",
      hr: "hr",
      "See less": "See less",
      luggage: "luggage",
      "nights stop": "nights stop",
      Reservation: "Reservation",
      "Online installments": "Online installments",
      Transfer: "Transfer",
      "Any quantity": "Any quantity",
      "Without transfer": "Without transfer",
      "1 or without": "1 or without",
      "2 or without": "2 or without",
      Time: "Time",
      Airlines: "Airlines",
      "All Airlines": "All Airlines",
      DURATION: "Duration",
      Monday: "Monday",
      Tuesday: "Tuesday",
      Wednesday: "Wednesday",
      Thursday: "Thursday",
      Friday: "Friday",
      Saturday: "Saturday",
      Sunday: "Sunday",
      informationalMessageAboutCheckin: "Informational message about check-in",
      Total: "Total",
      ResponsiblePerson: "Responsible Person",
      physicalPerson: "Physical Person",
      legalPerson: "Legal Person",
      organizationName: "Organization Name",
      postalCode: "Postal Code",
      email: "Email",
      phone: "Phone",
      validationMessage:
        "Make sure the information you enter is correct and accurate.",
      MainPassenger: "Main Passenger",
      name: "Name",
      surname: "Surname",
      mail: "Mail",
      phoneNumber: "Phone number",
      birthDate: "Birth date",
      citizenship: "Citizenship",
      Gender: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      passportIssueDate: "Passport issue date",
      Month: "Month",
      Day: "Day",
      Year: "Year",
      passportNumber: "Passport number",
      passportExpireDate: "Passport expire date",
      unitedStates: "United States",
      canada: "Canada",
      mexico: "Mexico",
      unitedKingdom: "United Kingdom",
      australia: "Australia",
      passportIssuingAuthority: "Passport issuing authority",
      Country: "Country",
      "Passport Issuing Authority": "Passport Issuing Authority",
      "Department of State": "Department of State",
      "Postal Service (USPS)": "Postal Service (USPS)",
      "Clerk of Courts": "Clerk of Courts",
      "Passport Information Center": "Passport Information Center",
      "Embassies and Consulates": "Embassies and Consulates",
      "United States": "United States",
      Canada: "Canada",
      Mexico: "Mexico",
      "United Kingdom": "United Kingdom",
      Australia: "Australia",
      "name surname": "name surname",
      "Jean Dupont": "Jean Dupont",
      "Marie Curie": "Marie Curie",
      "Pierre Martin": "Pierre Martin",
      "Sophie Bernard": "Sophie Bernard",
      "Jacques Durand": "Jacques Durand",
      "Claire Moreau": "Claire Moreau",
      "Louis Petit": "Louis Petit",
      "Chloé Lefevre": "Chloé Lefevre",
      "Thomas Roux": "Thomas Roux",
      "Élise Dubois": "Élise Dubois",
      enterDetails:
        "Please enter your name and surname as it appears in your documents (passport/ID card) to avoid discrepancies when purchasing tickets.",
      travelInsurance: "Travel Insurance",
      textLabel: "Text label",
      choosePackage:
        "Choose the insurance package that suits you and fly worry-free",
      covidCoverage: "Covers COVID-19 and related treatments",
      standard: "Standard",
      premium: "Premium",
      withoutInsurance: "Without insurance",
      medicalHelp: "Medical help",
      travelCancellation: "Travel cancellation",
      assistanceService: "Assistance service",
      lostLuggage: "Lost luggage",
      flightInsurance: "Flight insurance",
      standardLuggage: "Standard luggage",
      mediumLuggage: "Medium luggage",
      largeLuggage: "Large luggage",
      chooseOneOption: "Choose one option",
      Insurance: "Insurance",
      continue: "Continue",
      "Irakli Begoidze": "Irakli Begoidze",
      "Steve Jobs": "Steve Jobs",
      "Bill Gates": "Bill Gates",
      "Mark Zuckerberg": "Mark Zuckerberg",
      "Jeff Bezos": "Jeff Bezos",
      "Passenger Template Selection": "Passenger Template Selection",
      "Name, Surname": "Name, Surname",
      Irakli: "Irakli",
      Begoidze: "Begoidze",
      Steve: "Steve",
      Jobs: "Jobs",
      Bill: "Bill",
      Gates: "Gates",
      Mark: "Mark",
      Zuckerberg: "Zuckerberg",
      Jeff: "Jeff",
      Bezos: "Bezos",
    },
  },
  // GEORGIAN
  ka: {
    translation: {
      "Welcome to React": "React-ში კეთილი მოსვლა",
      Tickets: "ავიაბილეთები",
      Offers: "შეთავაზებები",
      Blog: "ბლოგი",
      Contact: "დაკავშირება",
      "Sign in": "შესვლა",
      "Happiness gained from traveling": "მოგზაურობით მიღებული ბედნიერება",
      Hotels: "სასტუმროები",
      "Car rental": "მანქანის ქირაობა",
      Bilateral: "ორმხრივი",
      Unilateral: "ცალმხრივი",
      Passenger: "მგზავრი",
      Adult: "ზრდასრული",
      Child: "ბავშვი",
      Newborn: "ჩვილი",
      Disabled: "შშმ",
      "From the age of 11": "11 წლიდან",
      "2-11 years old": "2-11 წლის",
      "Up to 2 years": "2 წლამდე",
      Cancel: "გაუქმება",
      Submit: "დასტური",
      "Economy class": "ეკონომ კლასი",
      "Premium class": "პრემიუმ ეკონომ კლასი",
      "Business class": "ბიზნეს კლასი",
      "First class": "პირველი კლასი",
      From: "საიდან",
      To: "სად",
      "Choose the airport": "აირჩიე აეროპორტი",
      Sun: "კვი",
      Mon: "ორშ",
      Tue: "სამ",
      Wed: "ოთხ",
      Thu: "ხუთ",
      Fri: "პარ",
      Sat: "შაბ",
      Clear: "გაწმენდა",
      Nights: "ღამე",
      Departure: "გამგზავრება",
      Return: "დაბრუნება",
      "Select Departure Date": "გამგზავრების თარიღი",
      "Select Return Date": "დაბრუნების თარიღი",
      January: "იანვარი",
      February: "თებერვალი",
      March: "მარტი",
      April: "აპრილი",
      May: "მაისი",
      June: "ივნისი",
      July: "ივლისი",
      August: "აგვისტო",
      September: "სექტემბერი",
      October: "ოქტომბერი",
      November: "ნოემბერი",
      December: "დეკემბერი",
      "Search, book and purchase tickets for free in minutes":
        "ბილეთების მოძიება, უფასო დაჯავშნა და შეძენა რამდენიმე წუთში",
      "Search for tickets": "ბილეთების ძებნა",
      "Search hotels and more...": "მოძებნეთ სასტუმროები და სხვა...",
      Destination: "დანიშნულება",
      "Choose your destination": "აირჩიე შენი დანიშნულება",
      "Check-in Date": "შესვლის თარიღი",
      "Check-out Date": "გამოსვლის თარიღი",
      "Search Hotels": "მოძებნეთ სასტუმროები",
      "Search hundreds of rental car sites at once for car rental deals":
        "მოძებნეთ მანქანის გაქირავების ასობით საიტი ერთდროულად მანქანის დაქირავებისთვის",
      "Explore car deals": "მანქანის გარიგებები",
      "Flights to Europe": "ფრენები ევროპის მიმართულებით",
      "Low-cost flights from Georgia to Europe":
        "დაბალბიუჯეტიანი ფრენები საქართველოდან ევროპის მიმართულებით",
      "See all": "ყველას ნახვა",
      Paris: "პარიზი",
      London: "ლონდონი",
      Berlin: "ბერლინი",
      Tbilisi: "თბილისი",
      "Feb 2 from $570": "2 თებ ₾570 დან",
      "Sep 28 from $520": "28 სექ ₾520 დან",
      "Oct 30 from $520": "30 ოქტ ₾520 დან",
      "Oct 30 from $480": "30 ოქტ ₾480 დან",
      "Apr 3 from $720": "3 აპრ ₾720 დან",
      Reserve: "დაჯავშნა",
      "Partner airline companies": "პარტნიორი ავიაკომპანიები",
      "Offers tailored to you": "შენზე მორგებული შეთავაზებები",
      "All services in one space will make your trip unforgettable":
        "ყველა სერვისი ერთ სივრცეში დაუვიწყარს გახდის თქვენს მოგზაურობას",
      Himalay: "ჰიმალაი",
      Prague: "პრაღა",
      Vienna: "ვენა",
      "Top offers": "ტოპ შეთავაზებები",
      Days: "დღე",
      "Promotional text that helps you": "ფრომოუშენ ტექსტი რომელიც გეხმარება",
      "Flights to all directions": "ფრენები ყველა მიმართულებით",
      "Low-budget flights from Georgia to any direction":
        "დაბალბიუჯეტიანი ფრენები საქართველოდან ნებისმიერი მიმართულებით",
      "Discover adventures": "აღმოაჩინე თავგადასავლები",
      "Helping you create a variety of adventures in your life and Simplifying the search and decision process is our mission. If Traveling is your nature, you often have to visit different countries or If you are looking for special moments, places to discover and Marking on the personal map, unforgettable shots in your life and It will be imprinted as memories, get to know our blog - discover and bookmark A new location on the travel map, get to know the culture of the peoples of the world and Choose the most interesting for you.":
        "შენს ცხოვრებაში, მრავალფეროვანი თავგადასავლების შექმნაში დახმარება და ძიების და გადაწყვეტილების პროცესის გამარტივება ჩვენი სუპერმისიაა. თუ მოგზაურობა შენი სტიქიაა, ხშირად გიწევს სხვადასხვა ქვეყანაში ვიზიტი ან თუ ეძებ, განსაკუთრებულ მომენტებს, ადგილებს, რომელთა აღმოჩენა და პერსონალურ რუკაზე მონიშვნა, შენს ცხოვრებაში დაუვიწყარ კადრებად და მოგონებებად ჩაიბეჭდება, გაეცანი ჩვენს ბლოგს – აღმოაჩინე და მოინიშნე ახალი ლოკაცია სამოგზაურო რუკაზე, გაეცანი მსოფლიო ხალხთა კულტურას და შეარჩიე შენთვის ყველაზე საინტერესო.",
      "Check out our blog": "გაეცანით ჩვენს ბლოგს",
      Technology: "ტექნოლოგია",
      "Free internet and interesting offers":
        "უფასო ინტერნეტი და საინტერესო შემოთავაზებები",
      "New Year's discounts and low-cost flights":
        "საახალწლო ფასდაკლებები და დაბალტარიფიანი ფრენები",
      "Lorem Ipsu put on the work Rite of Wrath in the can with the advanced barren half of the contact swelling...":
        "ლორემ იპსუმ ნამუშევარი შერისხვას წირვა ჩაიცვა ქილვაში კონტაქტის მოწინავე უნაყოფო ნახევრით იბერებოდა...",
      seen: "ნახვა",
      comment: "კომენტარი",
      network: "ქსელი",
      airlines: "ავიაკომპანიები",
      airports: "აეროპორტები",
      regions: "რეგიონები",
      countries: "ქვეყნები",
      cities: "ქალაქები",
      company: "კომპანია",
      whyUs: "რატომ ჩვენ",
      aboutUs: "ჩვენს შესახებ",
      benefits: "ღირებულებები",
      start: "წამოწყება",
      plans: "გეგმები",
      help: "დახმარება",
      helpCenter: "დახმარების ცენტრი",
      covidSupport: "კოვიდ გამოხმაურება",
      pressCenter: "პრეს ცენტრი",
      rulesAndPolicies: "წესები და პირობები",
      confidentiality: "კონფიდენციალურობა",
      contact: "კონტაქტი",
      termsAndConditions: "წესები და პირობები",
      textUs: "მოგვწერეთ",
      subscribeText:
        "გამოიწერე ჩვენი ელექტრონული ფოსტა და მიიღე პერსონალი და ექსკლუზიური შეთავაზებები",
      enterYourEmail: "შეიყვანეთ თქვენი მეილი",
      subscribe: "გამოიწერე",
      "all rights reserved": "ყველა უფლება დაცულია",
      "Travel details": "მგზავრობის დეტალები",
      Search: "ძებნა",
      "Review and payment": "მიმოხილვა და გადახდა",
      found: "ნაპოვნია",
      results: "შედეგი",
      "ticket quantity": "ბილეთის რაოდენობა",
      Hokaido: "ჰოკაიდო",
      direct: "პირდაპირი",
      stop: "გაჩერება",
      "international airport": "საერთაშორისო აეროპორტი",
      Turkey: "თურქეთი",
      Barcelona: "ბარსელონა",
      Rome: "რომი",
      Madrid: "მადრიდი",
      Athens: "ათენი",
      Spain: "ესპანეთი",
      Lisbon: "ლისაბონი",
      Amsterdam: "ამსტერდამი",
      France: "საფრანგეთი",
      Long: "ხანგრძლივი",
      min: "წთ",
      hr: "სთ",
      "See less": "ნაკლების ნახვა",
      luggage: "ბარგი",
      "nights stop": "ღამე გაჩერება",
      Reservation: "დაჯავშნა",
      "Online installments": "ონლაინ განვადებები",
      Transfer: "ტრანსფერი",
      "Any quantity": "ნებისმიერი რაოდენობა",
      "Without transfer": "ტრანსფერის გარეშე",
      "1 or without": "1 ან გარეშე",
      "2 or without": "2 ან გარეშე",
      Time: "დრო",
      Airlines: "ავიაკომპანიები",
      "All Airlines": "ყველა ავიაკომპანია",
      DURATION: "ხანგრძლივობა",
      Monday: "ორშაბათი",
      Tuesday: "სამშაბათი",
      Wednesday: "ოთხშაბათი",
      Thursday: "ხუთშაბათი",
      Friday: "პარასკევი",
      Saturday: "შაბათი",
      Sunday: "კვირა",
      informationalMessageAboutCheckin:
        "ინფორმაციული შეტყობინება ჩექინის შესახებ",
      Total: "სულ",
      ResponsiblePerson: "პასუხისმგებელი პირი",
      physicalPerson: "ფიზიკური პირი",
      legalPerson: "იურიდიული პირი",
      organizationName: "ორგანიზაციის სახელი",
      postalCode: "საფოსტო ინდექსი",
      email: "ელფოსტა",
      phone: "ტელეფონი",
      validationMessage:
        "დარწმუნდით, რომ ინფორმაცია რომელიც შეგყავს სწორი და ზუსტია.",
      MainPassenger: "მთავარი მგზავრი",
      name: "სახელი",
      surname: "გვარი",
      mail: "მეილი",
      phoneNumber: "ტელეფონის ნომერი",
      birthDate: "დაბადების თარიღი",
      citizenship: "მოქალაქეობა",
      Gender: "სქესი",
      male: "კაცი",
      female: "ქალი",
      other: "სხვა",
      passportIssueDate: "პასპორტის გაცემის თარიღი",
      Month: "თვე",
      Day: "დღე",
      Year: "წელი",
      passportNumber: "პასპორტის ნომერი",
      passportExpireDate: "პასპორტის ვადის გასვლის თარიღი",
      unitedStates: "აშშ",
      canada: "კანადა",
      mexico: "მექსიკა",
      unitedKingdom: "გაერთიანებული სამეფო",
      australia: "ავსტრალია",
      passportIssuingAuthority: "პასპორტის გაცემის ორგანო",
      Country: "ქვეყანა",
      "Passport Issuing Authority": "პასპორტის გაცემის ორგანო",
      "Department of State": "სახელმწიფო დეპარტამენტი",
      "Postal Service (USPS)": "ფოსტის სამსახური (USPS)",
      "Clerk of Courts": "სასამართლოს კლერკი",
      "Passport Information Center": "პასპორტის ინფორმაციის ცენტრი",
      "Embassies and Consulates": "ელჩი და საკონსულოები",
      "United States": "აშშ",
      Canada: "კანადა",
      Mexico: "მექსიკა",
      "United Kingdom": "გაერთიანებული სამეფო",
      Australia: "ავსტრალია",
      "name surname": "სახელი გვარი",
      "Jean Dupont": "ჟან დიუპონი",
      "Marie Curie": "მარი კიური",
      "Pierre Martin": "პიერ მარტინი",
      "Sophie Bernard": "სოფი ბერნარი",
      "Jacques Durand": "ჟაკ დურანი",
      "Claire Moreau": "კლერ მორო",
      "Louis Petit": "ლუი პეტი",
      "Chloé Lefevre": "ქლოე ლეფევრი",
      "Thomas Roux": "ტომა რუქსი",
      "Élise Dubois": "ელისე დუბუა",
      enterDetails:
        "გთხოვთ სახელი და გვარი შეიყვანოთ ისე როგორც მოცემულია თვქენს საბუთებში (პასპორტსი / პირადობის მოწმობაში) იმისათვის რომ ავირიდოთ უზუსტობები ბილეთის შეძენის დროს",
      travelInsurance: "მოგზაურობის დაზღვევა",
      textLabel: "ტექსტის ლეიბლი",
      choosePackage:
        "აირჩიე შენთვის სასურველი სადაზღვევო პაკეტი და იფრინე უდარდელად",
      covidCoverage:
        "ვრცელდება კოვიდ-19-სა და მასთან დაკავშირებულ მკურნალობაზე",
      standard: "სტანდარტული",
      premium: "პრემიუმი",
      withoutInsurance: "დაზღვევის გარეშე",
      medicalHelp: "სამედიცინო დახმარება",
      travelCancellation: "მოგზაურობის გაუქმება",
      assistanceService: "დახმარების სერვისი",
      lostLuggage: "დაკარგული ბარგი",
      flightInsurance: "ფრენის დაზღვევა",
      standardLuggage: "სტანდარტული ბარგი",
      mediumLuggage: "საშუალო ბარგი",
      largeLuggage: "დიდი ბარგი",
      chooseOneOption: "აირჩიე ერთი ვარიანტი",
      Insurance: "დაზღვევა",
      continue: "გაგრძელება",
      "Irakli Begoidze": "ირაკლი ბეგოიძე",
      "Steve Jobs": "სტივ ჯობსი",
      "Bill Gates": "ბილ გეითსი",
      "Mark Zuckerberg": "მარკ ზუკერბერგი",
      "Jeff Bezos": "ჯეფ ბეზოსი",
      "Passenger Template Selection": "მგზავრის შაბლონის არჩევა",
      "Name, Surname": "სახელი, გვარი",
      Irakli: "ირაკლი",
      Begoidze: "ბეგოიძე",
      Steve: "სტივ",
      Jobs: "ჯობსი",
      Bill: "ბილ",
      Gates: "გეითსი",
      Mark: "მარკი",
      Zuckerberg: "ზუკერბერგი",
      Jeff: "ჯეფი",
      Bezos: "ბეზოსი",
    },
  },
  // GERMAN
  de: {
    translation: {
      "Welcome to React": "Willkommen bei React",
      Tickets: "Flugtickets",
      Offers: "Bietet",
      Blog: "Bloggen",
      Contact: "Kontakt",
      "Sign in": "Anmelden",
      "Happiness gained from traveling":
        "Glück, das das Reisen mit sich bringt",
      Hotels: "Hotels",
      "Car rental": "Autovermietung",
      Bilateral: "Bilateral",
      Unilateral: "Einseitig",
      Passenger: "Passagier",
      Adult: "Erwachsene",
      Child: "Kind",
      Newborn: "Neugeborenes",
      Disabled: "Behinderte",
      "From the age of 11": "Ab 11 Jahren",
      "2-11 years old": "2-11 Tage",
      "Up to 2 years": "Bis zu 2 Jahre",
      Cancel: "Stornieren",
      Submit: "Einreichen",
      "Economy class": "Economy klasse",
      "Premium class": "Premium klasse",
      "Business class": "Business klasse",
      "First class": "Erste klasse",
      From: "Aus",
      To: "Zu",
      "Choose the airport": "Wählen Sie den Flughafen",
      Sun: "Son",
      Mon: "Mon",
      Tue: "Die",
      Wed: "Mit",
      Thu: "Don",
      Fri: "Fre",
      Sat: "Sam",
      Clear: "Klar",
      Nights: "Nächte",
      Departure: "Abfahrt",
      Return: "Zurückkehren",
      "Select Departure Date": "Abreisedatum auswählen",
      "Select Return Date": "Rückgabedatum auswählen",
      January: "Januar",
      February: "Februar",
      March: "März",
      April: "April",
      May: "Mai",
      June: "Juni",
      July: "Juli",
      August: "August",
      September: "September",
      October: "Oktober",
      November: "November",
      December: "Dezember",
      "Search, book and purchase tickets for free in minutes":
        "Tickets in wenigen Minuten kostenlos suchen, buchen und kaufen",
      "Search for tickets": "Tickets suchen",
      "Search hotels and more...": "Hotels suchen und mehr...",
      Destination: "Ziel",
      "Choose your destination": "Wählen Sie Ihr Ziel",
      "Check-in Date": "Check-in Datum",
      "Check-out Date": "Überprüfe das Datum",
      "Search Hotels": "Hotels suchen",
      "Search hundreds of rental car sites at once for car rental deals":
        "Durchsuchen Sie Hunderte von Mietwagen-Websites gleichzeitig nach Mietwagenangeboten",
      "Explore car deals": "Auto-Angebote",
      "Flights to Europe": "Flüge nach Europa",
      "Low-cost flights from Georgia to Europe":
        "Günstige Flüge von Georgien nach Europa",
      "See all": "Alles sehen",
      Paris: "Paris",
      London: "London",
      Berlin: "Berlin",
      Tbilisi: "Tiflis",
      "Feb 2 from $570": "2 Februar ab 570 $",
      "Sep 28 from $520": "28 September 520 $",
      "Oct 30 from $520": "30 Okt. ab 520 $",
      "Oct 30 from $480": "30 Okt. ab 480 $",
      "Apr 3 from $720": "3 April ab 720 $",
      Reserve: "Reservieren",
      "Partner airline companies": "Partner airline companies",
      "Offers tailored to you": "Auf Sie zugeschnittene Angebote",
      "All services in one space will make your trip unforgettable":
        "Alle Dienstleistungen an einem Ort machen Ihre Reise unvergesslich",
      Himalay: "Himalaya",
      Prague: "Prag",
      Vienna: "Wien",
      "Top offers": "Top angebote",
      Days: "Tage",
      "Promotional text that helps you": "Werbetext der Ihnen hilft",
      "Flights to all directions": "Flüge in alle Richtungen",
      "Low-budget flights from Georgia to any direction":
        "Günstige Flüge von Georgien in jede Richtung",
      "Discover adventures": "Entdecken Sie Abenteuer",
      "Helping you create a variety of adventures in your life and Simplifying the search and decision process is our mission. If Traveling is your nature, you often have to visit different countries or If you are looking for special moments, places to discover and Marking on the personal map, unforgettable shots in your life and It will be imprinted as memories, get to know our blog - discover and bookmark A new location on the travel map, get to know the culture of the peoples of the world and Choose the most interesting for you.":
        "Unsere Mission ist es, Ihnen dabei zu helfen, eine Vielzahl von Abenteuern in Ihrem Leben zu gestalten und den Such- und Entscheidungsprozess zu vereinfachen. Wenn Reisen Ihre Natur ist, müssen Sie oft verschiedene Länder besuchen oder nach besonderen Momenten, Orten zum Entdecken und Markieren suchen.“ die persönliche Karte, unvergessliche Aufnahmen in Ihrem Leben und sie werden sich als Erinnerungen einprägen, lernen Sie unseren Blog kennen – entdecken und bookmarken Sie einen neuen Ort auf der Reisekarte, lernen Sie die Kultur der Völker der Welt kennen und wählen Sie die interessantesten aus für dich.",
      "Check out our blog": "Schauen Sie sich unseren Blog an",
      Technology: "Technologie",
      "Free internet and interesting offers":
        "Kostenloses Internet und interessante Angebote",
      "New Year's discounts and low-cost flights":
        "Neujahrsrabatte und Billigflüge",
      "Lorem Ipsu put on the work Rite of Wrath in the can with the advanced barren half of the contact swelling...":
        "Lorem Ipsu legte das Werk Rite of Wrath in die Dose mit der fortgeschrittenen unfruchtbaren Hälfte der Kontaktschwellung...",
      seen: "gesehen",
      comment: "kommentar",
      network: "Netzwerk",
      airlines: "Fluggesellschaften",
      airports: "Flughäfen",
      regions: "Regionen",
      countries: "Länder",
      cities: "Städte",
      company: "Unternehmen",
      whyUs: "Warum wir",
      aboutUs: "Über uns",
      benefits: "Vorteile",
      start: "Start",
      plans: "Pläne",
      help: "Hilfe",
      helpCenter: "Hilfezentrum",
      covidSupport: "COVID-Unterstützung",
      pressCenter: "Pressezentrum",
      rulesAndPolicies: "Regeln und Richtlinien",
      confidentiality: "Vertraulichkeit",
      contact: "Kontakt",
      termsAndConditions: "Geschäftsbedingungen",
      textUs: "Schreiben",
      subscribeText:
        "Abonnieren Sie unseren Newsletter und erhalten Sie persönliche und exklusive Angebote",
      enterYourEmail: "geben sie ihre E-Mail ein",
      subscribe: "Abonnieren",
      "all rights reserved": "alle Rechte vorbehalten",
      "Travel details": "Reisedetails",
      Search: "Suchen",
      "Review and payment": "Überprüfung und Zahlung",
      found: "Gefunden",
      results: "ergebnisse",
      "ticket quantity": "Ticketmenge",
      Hokaido: "Hokkaido",
      direct: "Direkt",
      stop: "Stopp",
      "international airport": "Internationaler flughafen",
      Turkey: "Türkei",
      Barcelona: "Barcelona",
      Rome: "Rom",
      Madrid: "Madrid",
      Athens: "Athen",
      Spain: "Spanien",
      Lisbon: "Lissabon",
      Amsterdam: "Amsterdam",
      France: "Frankreich",
      Long: "Long",
      min: "min",
      hr: "hr",
      "See less": "Weniger anzeigen",
      luggage: "Gepäck",
      "nights stop": "nächte Stopp",
      Reservation: "Reservierung",
      "Online installments": "Online Ratenzahlungen",
      Transfer: "Transfer",
      "Any quantity": "Beliebige Menge",
      "Without transfer": "Ohne Transfer",
      "1 or without": "1 oder ohne",
      "2 or without": "2 oder ohne",
      Time: "Zeit",
      Airlines: "Fluggesellschaften",
      "All Airlines": "Alle Fluggesellschaften",
      DURATION: "Dauer",
      Monday: "Montag",
      Tuesday: "Dienstag",
      Wednesday: "Mittwoch",
      Thursday: "Donnerstag",
      Friday: "Freitag",
      Saturday: "Samstag",
      Sunday: "Sonntag",
      informationalMessageAboutCheckin:
        "Informationelle Nachricht über den Check-in",
      Total: "Gesamt",
      ResponsiblePerson: "Verantwortliche Person",
      physicalPerson: "Physische Person",
      legalPerson: "Juristische Person",
      organizationName: "Organisationsname",
      postalCode: "Postleitzahl",
      email: "Email",
      phone: "Telefon",
      validationMessage:
        "Stellen Sie sicher, dass die eingegebenen Informationen korrekt und genau sind.",
      MainPassenger: "Hauptpassagier",
      name: "Name",
      surname: "Nachname",
      mail: "Mail",
      phoneNumber: "Telefonnummer",
      birthDate: "Geburtsdatum",
      citizenship: "Staatsbürgerschaft",
      Gender: "Geschlecht",
      male: "Männlich",
      female: "Weiblich",
      other: "Andere",
      passportIssueDate: "Passausgabedatum",
      Month: "Monat",
      day: "Tag",
      year: "Jahr",
      passportNumber: "Passnummer",
      passportExpireDate: "Passablaufdatum",
      unitedStates: "Vereinigte Staaten",
      canada: "Kanada",
      mexico: "Mexiko",
      unitedKingdom: "Vereinigtes Königreich",
      australia: "Australien",
      passportIssuingAuthority: "Passausstellende Behörde",
      Country: "Country",
      "Passport Issuing Authority": "Passausstellende Behörde",
      arrow_drop_down: "arrow_drop_down",
      "Department of State": "Außenministerium",
      "Postal Service (USPS)": "Postdienst (USPS)",
      "Clerk of Courts": "Gerichtsschreiber",
      "Passport Information Center": "Passinformationszentrum",
      "Embassies and Consulates": "Botschaften und Konsulate",
      "United States": "Vereinigte Staaten",
      Canada: "Kanada",
      Mexico: "Mexiko",
      "United Kingdom": "Vereinigtes Königreich",
      Australia: "Australien",
      "name surname": "Name Nachname",
      "Jean Dupont": "Jean Dupont",
      "Marie Curie": "Marie Curie",
      "Pierre Martin": "Pierre Martin",
      "Sophie Bernard": "Sophie Bernard",
      "Jacques Durand": "Jacques Durand",
      "Claire Moreau": "Claire Moreau",
      "Louis Petit": "Louis Petit",
      "Chloé Lefevre": "Chloé Lefevre",
      "Thomas Roux": "Thomas Roux",
      "Élise Dubois": "Élise Dubois",
      enterDetails:
        "Bitte geben Sie Ihren Namen und Nachnamen so ein, wie er in Ihren Dokumenten (Reisepass/Personalausweis) erscheint, um Unstimmigkeiten beim Ticketkauf zu vermeiden.",
      travelInsurance: "Reiseversicherung",
      textLabel: "Textlabel",
      choosePackage:
        "Wählen Sie das passende Versicherungspaket und fliegen Sie sorgenfrei",
      covidCoverage: "Deckt COVID-19 und damit verbundene Behandlungen ab",
      standard: "Standard",
      premium: "Premium",
      withoutInsurance: "Ohne Versicherung",
      medicalHelp: "Medizinische Hilfe",
      travelCancellation: "Reiseannullierung",
      assistanceService: "Hilfsdienst",
      lostLuggage: "Verlorenes Gepäck",
      flightInsurance: "Flugversicherung",
      standardLuggage: "Standardgepäck",
      mediumLuggage: "Mittleres Gepäck",
      largeLuggage: "Großes Gepäck",
      chooseOneOption: "Wählen Sie eine Option",
      Insurance: "Insurance",
      continue: "Weiter",
      "Irakli Begoidze": "Irakli Begoidze",
      "Steve Jobs": "Steve Jobs",
      "Bill Gates": "Bill Gates",
      "Mark Zuckerberg": "Mark Zuckerberg",
      "Jeff Bezos": "Jeff Bezos",
      "Passenger Template Selection": "Auswahl des Passagiervorlage",
      "Name, Surname": "Name, Surname",
      Irakli: "Irakli",
      Begoidze: "Begoidze",
      Steve: "Steve",
      Jobs: "Jobs",
      Bill: "Bill",
      Gates: "Gates",
      Mark: "Mark",
      Zuckerberg: "Zuckerberg",
      Jeff: "Jeff",
      Bezos: "Bezos",
    },
  },
};

// i18next CONFIGURATION
i18n.use(initReactI18next).init({
  resources,
  lng: "ka",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
