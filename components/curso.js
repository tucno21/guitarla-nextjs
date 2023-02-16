import styles from "@/styles/curso.module.css";

const Curso = ({ curso }) => {
	const { titulo, contenido, imagen } = curso;
	return (
		<section className={`${styles.curso} curso`}>
			<style jsx>
				{`
					.curso {
						background-image: linear-gradient(to right, rgba(0 0 0 / 0.65), rgba(0 0 0 / 0.7)),
							url(${imagen?.data.attributes.url});
					}
				`}
			</style>
			<div className={`${styles.grid}`}>
				<div className={`${styles.contenido}`}>
					<h2 className="heading">{titulo}</h2>
					<p>{contenido}</p>
				</div>
			</div>
		</section>
	);
};

export default Curso;
