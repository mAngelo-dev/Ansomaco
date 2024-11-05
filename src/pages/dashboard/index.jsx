export default function Dashboard() {

  function getSaudation() {
    const hour = new Date().getHours();

    if (hour >= 0 && hour < 12) {
      return 'Bom dia';
    }  else if (hour >= 12 && hour < 18) {
      return 'Boa tarde';
    } else {
      return 'Boa noite';
    }
  }

  return (
    <>
      <h1>{getSaudation()}</h1>
    </>
  )
}