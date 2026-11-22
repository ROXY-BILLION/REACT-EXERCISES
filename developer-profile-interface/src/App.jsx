function App() {
  const name = "Divine";
  const profession = "Software Engineer";
  const experience = 2;
  const isAvailable = true;
  const hasCertificate = true;

  return (
    <div className="profile-container">
      <h1>Name: {name}</h1>
      <h2>Profession: {profession}</h2>
      <h3>years of experience: {experience}</h3>
      <p>Next milestone: {experience + 1} years</p>
      {isAvailable ? ( <h1>Available for work </h1>):( <h1> Currently Unavailable</h1>)}
      {hasCertificate && <h3>Professional certificate Available .</h3>}
    </div>
  )
}
export default App;