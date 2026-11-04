import { Helmet } from "react-helmet-async";

function SEO({ title, description, path }) {
  const siteUrl = "https://sririddhiclinic.com"; // Update with your live domain later
  const fullTitle = `${title} | Sri Riddhi Speciality Clinic - Trichy`;

  return (
    <Helmet>
      {/* Standard SEO Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteUrl}${path}`} />

      {/* Local Keywords */}
      <meta name="keywords" content="Orthopedic Surgeon Trichy, Dr M Kalaivanan, Joint Replacement Tiruchirappalli, Robotic Knee Surgery, Portable X Ray Home Care" />

      {/* Open Graph / WhatsApp Sharing Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${path}`} />

      {/* Local Business Schema Markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "Sri Riddhi Speciality Clinic",
          "image": "https://sririddhiclinic.com/assets/banner1.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Thillai Nagar",
            "addressLocality": "Tiruchirappalli",
            "addressRegion": "Tamil Nadu",
            "postalCode": "620018",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 10.8340,
            "longitude": 78.6821
          },
          "telephone": "+919842426363",
          "medicalSpecialty": "Orthopedic Surgery"
        })}
      </script>
    </Helmet>
  );
}

export default SEO;