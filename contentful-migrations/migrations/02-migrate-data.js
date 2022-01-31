require("dotenv").config();
const contentful = require("contentful-management");

const client = contentful.createClient({
  accessToken: process.env.TOKEN,
});
// TODO: Improvements would be to add widgets for only adding existing countries etc based on the existing entries.
const specialities = [
  "Qlik Sense",
  "Journal Entry Testing",
  "Audit",
  "Intelligence",
  "Business",
  "DATEV",
  "Datenanalyse",
  "Wirtschaftsprüfung",
  "Jahresabschlussprüfung",
  "Stock Photography",
  "iPhoneography",
  "Monthly payroll",
  "Monthly tax reporting",
  "Monthly financial reporting",
  "Interact wtih local authorities",
  "Konzernrechnungswesen",
  "Buchhaltung",
  "Steuerberatung",
  "Business Process Outsourcing",
  "Sustainability",
  "Kaufmännische Leitung",
  "Prozessoptimierung",
  "Outsourcing",
  "Steuerstrafrecht",
  "Personalverwaltung",
  "Unternehmensbewertung",
  "Betriebsprüfung",
  "Lohnbuchhaltung",
  "Finanzbuchhaltung",
  "Existenzgründung",
  "Sonderprüfungen",
  "Unternehmensberatung",
  "Beratung",
  "Rechtsberatung",
  "International Services",
  "Nachfolgeberatung",
  "Rechnungswesen",
  "Personalwesen",
  "Governance",
  "Risk & Compliance",
  "Personalmanagement und Beratung",
  "Datenschutz",
  "Unabhängige Finanzierungsberatung",
  "Restrukturierung & Sanierung",
  "Digitalisierung",
  "etablering",
  "skat",
  "revision",
  "bogføring",
  "tax and business consulting services",
  "tax structure advisory services",
  "investment controlling",
  "corporate auditing",
  "corporate valuations",
  "due diligence audits",
  "IT and system audits",
  "internal audits",
  "family office",
  "corporate finance solutions",
  "trustor activities",
  "Benefits",
  "Employer Branding",
  "Steuerfreie Gehaltsbestandteile",
  "Vergütungsmanagement",
  "Vergütungsoptimierung",
  "Gehaltskostenoptimierung",
  "Lohnkostenoptimierung",
  "Gestaltung und Optimierung von Löhnen und Gehältern",
  "Lohn und Gehalt",
  "Sachbezüge",
  "Mitarbeiterbenefits",
  "Lohnabrechnung",
  "Gehaltsabrechnung",
  "unabhängiger Versicherungsmakler",
  "Baufinanzierungen",
  "Vermögensverwaltung",
  "Steuerberatung ",
  "Wirtschaftsberatung",
  "Branchenberatung ",
  "Digitale Buchhaltung",
  "Sichere Datenhaltung",
  "Debitoren",
  "Kreditoren",
  "Mahnwesen",
  "Zahllauf",
  "Controlling",
  "Qualitätsreviews",
  "Mitglied des International Accountants Consortium ",
  "führendes Beratungsunternehmen für den Mittelstand",
  "Handelsrecht",
  "Gesellschaftsrecht",
  "Umwelt- und Energierecht",
  "Betriebswirtschaft",
  "IT-Beratung",
  "IFRS",
  "Mergers & Acquisitions",
  "Auditing",
  "Tax Consultancy",
  "Business Administration",
  "Business Valuation",
  "IT Consultancy",
  "Business Succession Consultancy",
  "Jahresabschluss",
  "private Steuererklärung",
  "steuerliche Beratung",
  "betriebswirtschaftliche Beratung",
  "Start-Up Spezialisten",
  "Prüfungswesen",
  "Lohn- und Finanzbuchhaltung",
  "Nachfolgeplanung",
  "Financial and tax Due Diligence",
  "Insolvenzrecht/Unternehmenssanierung",
  "Erbrecht/Nachfolgeregelungen",
  "IT-Systemprüfung",
];

const countries = ["Brazil", "Germany"];

const companies = [
  {
    name: { "en-US": "Auditbee" },
    website: { "en-US": "https://auditbee.de" },
    industry: { "en-US": "Accounting" },
    specialities: {
      "en-US": [
        "Qlik Sense",
        "Journal Entry Testing",
        "Audit",
        "Intelligence",
        "Business",
        "DATEV",
        "Datenanalyse",
        "Wirtschaftsprüfung",
        "Jahresabschlussprüfung",
        "Journal Entry Testing",
      ],
    },
    location: { "en-US": "Osnabrück, Lower Saxony, Germany" },
    year: { "en-US": 2019 },
    logo: {
      "en-US":
        "https://cdn.worldvectorlogo.com/logos/sca-hygiene-products-20xx-logo.svg",
    },
  },
  {
    name: { "en-US": "Advicon Ag - Wirtschaftsprüfungsgesellschaft" },
    website: { "en-US": "https://advicon.tax" },
    industry: { "en-US": "Accounting" },
    specialities: {
      "en-US": [
        "Wirtschaftsprüfung",
        "Steuerberatung",
        "Business Process Outsourcing",
        "Sustainability",
        "Kaufmännische Leitung",
        "Prozessoptimierung",
        "Outsourcing",
        "Steuerstrafrecht",
        "Personalverwaltung",
        "Unternehmensbewertung",
        "Betriebsprüfung",
        "Lohnbuchhaltung",
        "Finanzbuchhaltung",
        "Existenzgründung",
        "Sonderprüfungen",
        "Unternehmensberatung",
        "Beratung",
      ],
    },
    location: { "en-US": "München, Bavaria, Germany" },
    year: { "en-US": 2016 },
    logo: { "en-US": "https://cdn.worldvectorlogo.com/logos/oruva.svg" },
  },
  {
    name: { "en-US": "Lemon Group Services" },
    website: { "en-US": "http://www.group-services.com" },
    industry: { "en-US": "Accounting" },
    logo: { "en-US": "https://cdn.worldvectorlogo.com/logos/bbl-42412.svg" },
  },
  {
    name: { "en-US": "Bertelsmann Accounting Services" },
    website: { "en-US": "https://jobsearch.createyourowncareer.com/beas/" },
    industry: { "en-US": "Accounting" },
    specialities: { "en-US": ["Konzernrechnungswesen", "Buchhaltung"] },
    location: { "en-US": "Rheda-Wiedenbrück, North Rhine-Westphalia, Germany" },
    year: { "en-US": 2010 },
    logo: { "en-US": "https://worldvectorlogo.com/logo/umbro" },
  },
  {
    name: { "en-US": "Hull Speed Associates" },
    website: { "en-US": "http://www.hullspeedassociates.com" },
    industry: { "en-US": "Accounting" },
    specialities: {
      "en-US": [
        "Monthly payroll",
        "Monthly tax reporting",
        "Monthly financial reporting",
        "Interact wtih local authorities",
      ],
    },
    year: { "en-US": 2008 },
    logo: { "en-US": "https://worldvectorlogo.com/logo/ford-8" },
  },
  {
    name: { "en-US": "No Company No Company" },
    website: { "en-US": "http://www.google.com" },
    industry: { "en-US": "Accounting" },
    specialities: { "en-US": ["Stock Photography", "iPhoneography"] },
    location: { "en-US": "Munich, Bavaria, Germany" },
    year: { "en-US": 2000 },
    logo: { "en-US": "https://cdn.worldvectorlogo.com/logos/axa-768.svg" },
  },
  {
    name: { "en-US": "Ydd Buchhaltungsservice" },
    website: { "en-US": "http://www.yddbuchhaltungsservice.de" },
    industry: { "en-US": "Accounting" },
    location: { "en-US": "Bestensee, Brandenburg, Germany" },
    year: { "en-US": 2020 },
    logo: {
      "en-US": "https://cdn.worldvectorlogo.com/logos/air-bourbon-1.svg",
    },
  },
  {
    name: { "en-US": "Done!Financials" },
    website: { "en-US": "http://www.donefinancials.com" },
    industry: { "en-US": "Accounting" },
    location: { "en-US": "Falkensee, Brandenburg, Germany" },
    year: { "en-US": 2020 },
    logo: { "en-US": "https://cdn.worldvectorlogo.com/logos/in-memoriam.svg" },
  },
  {
    name: { "en-US": "Crowe Frankfurt" },
    website: { "en-US": "http://www.crowe-ffm.de" },
    industry: { "en-US": "Accounting" },
    specialities: {
      "en-US": [
        "Wirtschaftsprüfung",
        "Steuerberatung",
        "Unternehmensberatung",
        "Governance",
        "Risk & Compliance",
      ],
    },
    location: { "en-US": "Frankfurt, Hesse, Germany" },
    year: { "en-US": 1968 },
    logo: { "en-US": "https://cdn.worldvectorlogo.com/logos/trenno.svg" },
  },
  {
    name: { "en-US": "Roland Berger Strategy Consultants" },
    website: { "en-US": "http://rolandberger.com.br" },
    industry: { "en-US": "Accounting" },
    location: { "en-US": "São Paulo, São Paulo, Brazil" },
    logo: { "en-US": "https://cdn.worldvectorlogo.com/logos/petronas-2.svg" },
  },
  {
    name: { "en-US": "Kbht" },
    website: { "en-US": "https://www.kbht.de" },
    industry: { "en-US": "Accounting" },
    specialities: {
      "en-US": [
        "Steuerberatung",
        "Wirtschaftsprüfung",
        "Rechtsberatung",
        "International Services",
        "Nachfolgeberatung",
        "Rechnungswesen",
        "Personalwesen",
      ],
    },
    location: { "en-US": "Neuss, North Rhine-Westphalia, Germany" },
    year: { "en-US": 1991 },
    logo: { "en-US": "https://cdn.worldvectorlogo.com/logos/telefonica-3.svg" },
  },
  {
    name: { "en-US": "Dhmp & Kg" },
    website: { "en-US": "https://www.dhmp.de/" },
    industry: { "en-US": "Accounting" },
    specialities: {
      "en-US": [
        "Steuerberatung",
        "Wirtschaftsprüfung",
        "Unternehmensberatung",
        "Personalmanagement und Beratung",
        "Datenschutz",
        "Unabhängige Finanzierungsberatung",
        "Restrukturierung & Sanierung",
        "Digitalisierung",
      ],
    },
    location: { "en-US": "Karlsruhe, Baden-Württemberg, Germany" },
    year: { "en-US": 2009 },
    logo: { "en-US": "https://cdn.worldvectorlogo.com/logos/moderna-logo.svg" },
  },
  {
    name: { "en-US": "Ac Christes & Partner" },
    website: { "en-US": "http://christes.de" },
    industry: { "en-US": "Accounting" },
    location: { "en-US": "Hamburg, Hamburg, Germany" },
    year: { "en-US": 1993 },
    logo: { "en-US": "https://cdn.worldvectorlogo.com/logos/post-3.svg" },
  },
  {
    name: { "en-US": "#Danrevison : Kom Til Tyskland Med Sucess" },
    website: { "en-US": "http://www.kom-til-tyskland-med-succes.dk/welcome/" },
    industry: { "en-US": "Accounting" },
    specialities: { "en-US": ["etablering", "skat", "revision", "bogføring"] },
    location: { "en-US": "Handewitt, Schleswig-Holstein, Germany" },
    year: { "en-US": 1970 },
    logo: { "en-US": "https://cdn.worldvectorlogo.com/logos/issuu.svg" },
  },
  {
    name: { "en-US": "Sausner & Diedrich Gbr" },
    industry: { "en-US": "Accounting" },
    specialities: {
      "en-US": [
        "Buchhaltung",
        "Rechnungswesen",
        "unabhängiger Versicherungsmakler",
        "Baufinanzierungen",
        "Vermögensverwaltung",
      ],
    },
    location: { "en-US": "Wülfrath, North Rhine-Westphalia, Germany" },
    year: { "en-US": 2018 },
    logo: {
      "en-US":
        "https://cdn.worldvectorlogo.com/logos/compaq-logo-until-2008-with-protection-zone-1.svg",
    },
  },
  {
    name: { "en-US": "#Danrevision : Revisor I Tyskland" },
    website: { "en-US": "https://danrevision-tyskland.dk/#velkommen" },
    industry: { "en-US": "Accounting" },
    location: { "en-US": "Handewitt, Schleswig-Holstein, Germany" },
    year: { "en-US": 1970 },
    logo: {
      "en-US":
        "https://cdn.worldvectorlogo.com/logos/randalls-food-markets-logo.svg",
    },
  },
  {
    name: { "en-US": "Salopt" },
    website: { "en-US": "https://salopt.de" },
    industry: { "en-US": "Accounting" },
    specialities: {
      "en-US": [
        "Benefits",
        "Employer Branding",
        "Steuerfreie Gehaltsbestandteile",
        "Vergütungsmanagement",
        "Vergütungsoptimierung",
        "Gehaltskostenoptimierung",
        "Lohnkostenoptimierung",
        "Gestaltung und Optimierung von Löhnen und Gehältern",
        "Lohn und Gehalt",
        "Sachbezüge",
        "Mitarbeiterbenefits",
        "Lohnabrechnung",
        "Gehaltsabrechnung",
      ],
    },
    location: { "en-US": "Berlin, Berlin, Germany" },
    year: { "en-US": 2017 },
    logo: { "en-US": "https://cdn.worldvectorlogo.com/logos/ford-8.svg" },
  },
  {
    name: { "en-US": "Rlt Ruhrmann Tieben & Partner Mbb" },
    website: { "en-US": "http://www.rlt.de" },
    industry: { "en-US": "Accounting" },
    specialities: {
      "en-US": [
        "tax and business consulting services",
        "tax structure advisory services",
        "investment controlling",
        "corporate auditing",
        "corporate valuations",
        "due diligence audits",
        "IT and system audits",
        "internal audits",
        "family office",
        "corporate finance solutions",
        "trustor activities",
      ],
    },
    location: { "en-US": "Essen, North Rhine-Westphalia, Germany" },
    year: { "en-US": 1958 },
    logo: {
      "en-US": "https://cdn.worldvectorlogo.com/logos/funke-gerber-1.svg",
    },
  },
  {
    name: { "en-US": "Küpper & Kollegen Steuerberatung" },
    website: { "en-US": "https://kuepper-kollegen.de" },
    industry: { "en-US": "Accounting" },
    location: { "en-US": "Hilden, North Rhine-Westphalia, Germany" },
    logo: { "en-US": "https://cdn.worldvectorlogo.com/logos/zoey.svg" },
  },
  {
    name: { "en-US": "Hws" },
    website: { "en-US": "http://www.hws.de" },
    industry: { "en-US": "Accounting" },
    specialities: {
      "en-US": [
        "Steuerberatung",
        "Wirtschaftsprüfung",
        "Rechtsberatung",
        "Start-Up Spezialisten",
        "Prüfungswesen",
        "Lohn- und Finanzbuchhaltung",
        "Unternehmensberatung",
        "Nachfolgeplanung",
        "Financial and tax Due Diligence",
        "Unternehmensbewertung",
        "Gesellschaftsrecht",
        "Mergers & Acquisitions",
        "Insolvenzrecht/Unternehmenssanierung",
        "Erbrecht/Nachfolgeregelungen",
        "Steuerstrafrecht",
        "IT-Systemprüfung",
      ],
    },
    location: { "en-US": "Stuttgart, Baden-Württemberg, Germany" },
    year: { "en-US": 1923 },
    logo: { "en-US": "https://cdn.worldvectorlogo.com/logos/sappa.svg" },
  },
  {
    name: { "en-US": "Vrt Linzbach Löcherbach Und Partner Mbb" },
    website: { "en-US": "http://www.vrt.de" },
    industry: { "en-US": "Accounting" },
    specialities: {
      "en-US": [
        "Steuerberatung",
        "Wirtschaftsprüfung",
        "Rechtsberatung",
        "Finanzbuchhaltung",
        "Unternehmensbewertung",
        "Unternehmensberatung",
        "Mitglied des International Accountants Consortium ",
        "führendes Beratungsunternehmen für den Mittelstand",
        "Handelsrecht",
        "Gesellschaftsrecht",
        "Umwelt- und Energierecht",
      ],
    },
    location: { "en-US": "Bonn, North Rhine-Westphalia, Germany" },
    year: { "en-US": 1976 },
    logo: { "en-US": "https://cdn.worldvectorlogo.com/logos/cardone.svg" },
  },
  {
    name: { "en-US": "Steuerberater Garrn & Nett Partg Mbb" },
    website: { "en-US": "http://stb-garrn-nett.de/" },
    industry: { "en-US": "Accounting" },
    specialities: {
      "en-US": [
        "Finanzbuchhaltung",
        "Lohnbuchhaltung",
        "Jahresabschluss",
        "private Steuererklärung",
        "steuerliche Beratung",
        "betriebswirtschaftliche Beratung",
      ],
    },
    location: { "en-US": "Mülheim, Rhineland-Palatinate, Germany" },
    year: { "en-US": 2007 },
    logo: { "en-US": "https://cdn.worldvectorlogo.com/logos/cardone.svg" },
  },
  {
    name: { "en-US": "Cash & Cow" },
    website: { "en-US": "https://cash-and-cow.de/datenschutzerklarung/" },
    industry: { "en-US": "Accounting" },
    specialities: {
      "en-US": [
        "Digitale Buchhaltung",
        "Sichere Datenhaltung",
        "Debitoren",
        "Kreditoren",
        "Mahnwesen",
        "Zahllauf",
        "Controlling",
        "Prozessoptimierung",
        "Qualitätsreviews",
      ],
    },
    location: { "en-US": "Berlin, Berlin, Germany" },
    logo: { "en-US": "https://cdn.worldvectorlogo.com/logos/lancome-logo.svg" },
  },
  {
    name: { "en-US": "Lehnen & Partner Steuerberatungsgesellschaft Mbb" },
    website: { "en-US": "http://lehnen-partner.de" },
    industry: { "en-US": "Accounting" },
    specialities: {
      "en-US": [
        "Steuerberatung ",
        "Wirtschaftsberatung",
        "Rechtsberatung",
        "Branchenberatung ",
      ],
    },
    location: { "en-US": "Orlenbach, Rhineland-Palatinate, Germany" },
    year: { "en-US": 1978 },
    logo: {
      "en-US": "https://cdn.worldvectorlogo.com/logos/honeywell-logo-1.svg",
    },
  },
  {
    name: { "en-US": "Bw Partner Bauer Schätz Hasenclever Partnerschaft Mbb" },
    website: { "en-US": "https://www.bw-partner.com/de/" },
    industry: { "en-US": "Accounting" },
    specialities: {
      "en-US": [
        "Wirtschaftsprüfung",
        "Steuerberatung",
        "Betriebswirtschaft",
        "Unternehmensbewertung",
        "IT-Beratung",
        "IFRS",
        "Nachfolgeberatung",
        "Mergers & Acquisitions",
        "Auditing",
        "Tax Consultancy",
        "Business Administration",
        "Business Valuation",
        "IT Consultancy",
        "Business Succession Consultancy",
      ],
    },
    location: { "en-US": "Stuttgart, Baden-Württemberg, Germany" },
  },
];

// Create entry
client
  .getSpace(process.env.SPACE)
  .then((space) => space.getEnvironment(process.env.CONTENTFUL_ENV))
  .then(async (environment) => {
    await specialities.forEach((name, i) => {
      setTimeout(
        () =>
          environment
            .createEntry("speciality", {
              fields: {
                name: {
                  "en-US": name,
                },
              },
            })
            .then((entry) => entry.publish())
            .catch(console.error),
        1000 * i
      );
    });
    await countries.forEach((name, i) => {
      setTimeout(
        () =>
          environment
            .createEntry("country", {
              fields: {
                name: {
                  "en-US": name,
                },
              },
            })
            .then((entry) => entry.publish())
            .catch(console.error),
        1000 * i
      );
    });
    await companies.forEach((fields, i) => {
      setTimeout(
        () =>
          environment
            .createEntry("company", {
              fields,
            })
            .then((entry) => entry.publish())
            .catch(console.error),
        1000 * i
      );
    });
  });
