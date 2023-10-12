import React from "react";
import { useParams, Link } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const companyToDisplay = companies.find(
    (company) => company.slug === companySlug
  );

  if (!companyToDisplay) {
    return <p>No content found.</p>;
  }
  document.title = `My Movie DB!  ${companyToDisplay.name}`;
  const technos = companyToDisplay.techStack;

  return (
    <div>
      <h2>{companyToDisplay.name}</h2>
      <img
        style={{ height: "100px" }}
        src={companyToDisplay.logo}
        alt={companyToDisplay.name}
      />
      <p>{companyToDisplay.website}</p>
      <p>{companyToDisplay.description}</p>
      <div>
        {technos.map((techno) => {
          return (
            <article className="oneTechno" key={techno.name}>
              <Link to={`/company/${companyToDisplay.slug}/${techno.slug}`}>
                <h2>{techno.name}</h2>
                <img className="logo" src={techno.image} />;
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyPage;
