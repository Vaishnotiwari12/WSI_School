import React from "react";
import PageHero from "../components/PageHero";
import FacultyGrid from "../components/FacultyGrid";
import Leadership from "../components/Leadership";

export default function Faculty() {
  return (
    <>
      <PageHero breadcrumb="Faculty" title="Meet Our Leadership & Faculty" subtitle="Dedicated, qualified, and passionate educators committed to bringing out the best in every student." />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FacultyGrid />
        </div>
      </section>

      <Leadership />
    </>
  );
}
