import styles from "./Layout.module.scss";
export default function Layout(props) {
	return (
		<main>
			<div className={styles.Container}>{props.children}</div>
		</main>
	);
}
