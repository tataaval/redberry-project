import { Link } from "react-router-dom";
import styles from "./AppButton.module.scss";
export default function AppButton({ href, text }) {
	return (
		<div className={styles.Button}>
			<Link to={href}>{text}</Link>
		</div>
	);
}
