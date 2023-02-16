import Image from "next/image";
import Layout from "@/components/layout";
import styles from "@/styles/nosotros.module.css";

const Nosotros = () => {
	return (
		<Layout title="nosotros" description="sobre nosotros, guitarLA, tienda de música">
			<main className="contenedor">
				<h2 className="heading">Nosotros</h2>
				<div className={styles.contenido}>
					<Image src="/img/nosotros.jpg" alt="imagen nosotros" width={1000} height={800} />

					<div className="texto">
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, eos doloremque iusto ipsam
							reiciendis a exercitationem nobis recusandae quasi est, facilis blanditiis voluptate
							dignissimos similique ex quaerat dolorum velit sit.
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, eos doloremque iusto ipsam
							reiciendis a exercitationem nobis recusandae quasi est, facilis blanditiis voluptate
							dignissimos similique ex quaerat dolorum velit sit.
						</p>
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default Nosotros;
