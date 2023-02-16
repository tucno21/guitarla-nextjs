import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/guitarras.module.css";
import Layout from "@/components/layout";

const Producto = ({ guitarra, agregarCarrito }) => {
	const [cantidad, setCantidad] = useState(0);
	const { nombre, descripcion, precio, imagen } = guitarra[0].attributes;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (cantidad === 0) {
			alert("Seleccione una cantidad");
			return;
		}

		//construir el objeto
		const producto = {
			id: guitarra[0].id,
			nombre,
			precio,
			cantidad,
			imagen: imagen.data.attributes.formats.medium.url,
		};

		//pasar la inforación al carrito
		agregarCarrito(producto);
	};

	return (
		<Layout title={`GuitarLA | ${nombre}`}>
			<div className={styles.guitarra}>
				<Image
					src={imagen.data.attributes.formats.medium.url}
					width={600}
					height={400}
					alt={`Imagen guitarra ${nombre}`}
				/>

				<div className={styles.contenido}>
					<h3>{nombre}</h3>
					<p className={styles.descripcion}>{descripcion}</p>
					<p className={styles.precio}>${precio}</p>

					<form onSubmit={handleSubmit} className={styles.formulario}>
						<label htmlFor="cantidad">Cantidad:</label>

						<select onChange={(e) => setCantidad(Number(e.target.value))} id="cantidad">
							<option value="0">-- seleccione --</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="4">4</option>
						</select>

						<input type="submit" value="Agregar al carrito" />
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default Producto;

export async function getStaticPaths() {
	const res = await fetch(`${process.env.API_URL}/guitarras`);
	const { data } = await res.json();

	const paths = data?.map((guitarra) => ({
		params: { url: guitarra.attributes.url },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { url } }) {
	const res = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
	const { data: guitarra } = await res.json();

	return {
		props: {
			guitarra,
		},
	};
}

// export async function getServerSideProps(datos) {
// 	const res = await fetch(
// 		`${process.env.API_URL}/guitarras?filters[url]=${datos.params.url}&populate=imagen`
// 	);
// 	const { data: guitarra } = await res.json();

// 	return {
// 		props: {
// 			guitarra,
// 		},
// 	};
// }
