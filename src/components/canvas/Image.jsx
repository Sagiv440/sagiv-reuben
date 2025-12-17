import { useEffect, useState } from "react";
import Loading from "./loading";
import { loadImage } from "../../utils/utils";
import { WEB_LOGO } from "../../constants";

const LImage = ({ src, alt, className, hide_text }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getImage = () => {
            loadImage(src).then(() => {
                setLoading(false);
            })
        }
        getImage();
    })
    return (
        <>
            {loading && <Loading hide_text={hide_text} />}
            {!loading && <img
                src={src}
                alt={alt}
                className={className}
                onError={(e) => {
                    e.target.src = WEB_LOGO;
                }}
            />}
        </>
    );
};

export default LImage;