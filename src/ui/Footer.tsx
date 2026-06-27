import { useTranslation } from "react-i18next";

function Footer() {
	const { t } = useTranslation();
	return (
		<footer className="flex flex-col items-center justify-center">
			<div className="flex gap-1">
				<a className="underline" href="mailto:react-weather.banshee009@passmail.com">
					Someone
				</a>
				<div>2026</div>
			</div>
			<div className="flex gap-1">
				<div>{t("footer.open_meteo")}</div>
				<a className="underline" href="https://open-meteo.com/">
					open-meteo.com
				</a>
			</div>
		</footer>
	);
}

export default Footer;
