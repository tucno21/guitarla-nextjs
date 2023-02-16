import Image from "next/image";
import Layout from "@/components/layout";
import styles from "@/styles/blog.module.css";
import { formatearFecha } from "@/utils/helpers";

const Post = ({ post }) => {
	const { titulo, contenido, imagen, publishedAt } = post[0].attributes;
	return (
		<Layout title={titulo}>
			<article className={`${styles.post} ${styles["mt-3"]}`}>
				<Image src={imagen.data.attributes.url} width={1000} height={600} alt={`imagen ${titulo}`} />

				<div className={styles.contenido}>
					<h2>{titulo}</h2>
					<p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
					<p className={styles.texto}>{contenido}</p>
				</div>
			</article>
		</Layout>
	);
};

export default Post;

export async function getServerSideProps({ params: { url } }) {
	const res = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
	const { data: post } = await res.json();

	return {
		props: {
			post,
		},
	};
}
