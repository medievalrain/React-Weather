import { useTranslation } from "react-i18next";

interface UvDescriptionProps {
	uvIndex: number;
}

function UvDescription({ uvIndex }: UvDescriptionProps) {
	const { t } = useTranslation();
	if (uvIndex <= 2) {
		return <div className="font-semibold text-green-600 capitalize">{t("uv.low")}</div>;
	} else if (uvIndex <= 5) {
		return <div className="font-semibold text-yellow-600 capitalize">{t("uv.moderate")}</div>;
	} else if (uvIndex <= 7) {
		return <div className="font-semibold text-orange-600 capitalize">{t("uv.high")}</div>;
	} else if (uvIndex <= 10) {
		return <div className="font-semibold text-red-600 capitalize">{t("uv.very_high")}</div>;
	} else {
		return <div className="font-semibold text-violet-600 capitalize">{t("uv.extreme")}</div>;
	}
}

export default UvDescription;
