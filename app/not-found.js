"use client";

function NotFoundPage({ error }) {
  console.log(error);
  return (
    <main className="section_spacing section_margin">
      <h1 className="error_title">Products Not found</h1>
      <p>Unfortunately, we could Not find the requested page or resource! </p>
    </main>
  );
}

export default NotFoundPage;
