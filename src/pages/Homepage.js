import AppButton from "../components/AppButtons/AppButton";
import CompanyLogo from "../components/Homepage/CompanyLogo";
import FeaturedImage from "../components/Homepage/FeaturedImage";

export default function Homepage() {
	return (
		<>
			<CompanyLogo />
			<FeaturedImage />
			<AppButton href={"/detailsForm"} text={"ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ"} />
			<AppButton href={"/computerList"} text={"ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ"} />
		</>
	);
}
