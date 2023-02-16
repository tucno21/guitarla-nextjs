import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/blog.module.css";
import { formatearFecha } from "@/utils/helpers";

const Post = ({ post }) => {
	const { titulo, contenido, imagen, url, publishedAt } = post;
	return (
		<article>
			<Image
				src={imagen.data.attributes.formats.medium.url}
				width={600}
				height={400}
				alt={`imagen ${titulo}`}
			/>

			<div className={styles.contenido}>
				<h2>{titulo}</h2>
				<p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
				<p className={styles.resumen}>{contenido}</p>

				<Link href={`/blog/${url}`} className={styles.enlace}>
					Leer más
				</Link>
			</div>
		</article>
	);
};

export default Post;
