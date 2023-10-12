import React from "react";
import { Link } from "react-router-dom";

export default function Home({ companies }) {
  return (
    <div>
      <section>
        {companies.map((company) => {
          return (
            <div key={company.id}>
              <Link to={`/company/${company.slug}`}>
                <h2>{company.name}</h2>
                <img className="logo" src={company.logo} />;
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}
