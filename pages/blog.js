import Layout from "@/components/layout";
import Post from "@/components/post";
import styles from "@/styles/grid.module.css";

const Blog = ({ posts }) => {
	return (
		<>
			<Layout title="BLog" description={"Blog de musica, venta de musica y guitarras"}>
				<main className="contenedor">
					<h1 className="heading">Blog</h1>

					<div className={styles.grid}>
						{posts.map((post) => (
							<Post key={post.id} post={post.attributes} />
						))}
					</div>
				</main>
			</Layout>
		</>
	);
};

export default Blog;

// getStaticProps() funcion que sirve para obtener datos, cualquier cambio no se refleja en el cliente
export async function getStaticProps() {
	const res = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
	const { data: posts } = await res.json();

	return {
		props: {
			posts,
		},
	};
}
