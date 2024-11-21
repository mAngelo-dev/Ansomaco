import Footer from "../../shared/components/footer.jsx";

export default function NotFound() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src="/tecnisys-logo-positivo.png" alt="Logo Tecnisys" width="72"
             height="72"/>
        <h1>Esta Página Não Existe</h1>

        <p>A página que você está procurando não existe.</p>
        <a className="btn btn-primary" href="/" role="button">Voltar a Página Incial</a>
      </div>
      <Footer/>
    </>
  );
}