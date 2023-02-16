import Layout from "@/components/layout";
import Guitarra from "@/components/guitarra";
import styles from "@/styles/grid.module.css";

const Tienda = ({ guitarras }) => {
	// console.log(guitarras);
	return (
		<>
			<Layout
				title="Tienda"
				description={"Tienda virtual, venta de guitarras, instrumentos, GuitarLA"}
			>
				<main className="contenedor">
					<h2 className="heading">Nuestra Colección</h2>

					<div className={styles.grid}>
						{guitarras?.map((guitarra) => (
							<Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
						))}
					</div>
				</main>
			</Layout>
		</>
	);
};

export default Tienda;

//getStaticProps() funcion que sirve para obtener datos, cualquier cambio no se refleja en el cliente
// export async function getStaticProps() {
// 	const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
// 	const { data: guitarras } = await res.json();

// 	return {
// 		props: {
// 			guitarras,
// 		},
// 	};
// }

//getServerSideProps() funcion que sirve para obtener datos y cualquier cambio que se haga en el servidor se refleja en el cliente
export async function getServerSideProps() {
	const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
	const { data: guitarras } = await res.json();

	return {
		props: {
			guitarras,
		},
	};
}
