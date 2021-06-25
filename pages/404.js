import { Layout } from "./components/Layout";
import Link from "next/link";

const custom404 = () => (
  <Layout>
    <div className="text-center">
      <h1>404</h1>
      <p>
        Esta pagina no existe por favor regresar a
        <Link href="/">
          <a> Home</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
