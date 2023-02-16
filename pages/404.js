import Layout from "@/components/layout";
import Link from "next/link";

const Pagina404 = () => {
	return (
		<Layout title="GuitarLA | 404">
			<h1 className="heading">404</h1>
			<p className="error">Esta página no existe</p>
			<Link href="/" className="error-enlace">
				Volver al inicio
			</Link>
		</Layout>
	);
};

export default Pagina404;
