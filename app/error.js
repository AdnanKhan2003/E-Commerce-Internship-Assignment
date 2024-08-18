"use client";

function ErrorPage({ error }) {
  console.log(error);
  return (
    <main className="section_spacing section_margin">
      <h1 className="error_title">Error Occurred</h1>
      <p>Failed to Fetch data, please try again later! </p>
    </main>
  );
}

export default ErrorPage;
