import styles from "./Image.module.scss";
export default function CompanyLogo() {
	return (
		<div className={styles.Logo}>
			<img src="logo.png" alt="logo" />
		</div>
	);
}
