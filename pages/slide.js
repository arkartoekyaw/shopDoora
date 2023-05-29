import { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function SplideCarousel() {
    const splideRef = useRef(null);

    useEffect(() => {
        const splide = new Splide(splideRef.current, {
            type: "loop",
            perPage: 3,
            perMove: 1,
        });

        // splide.mount();

        return () => {
            // splide.destroy();
        };
    }, []);

    return (
        <div className="splide" ref={splideRef}>
            <div className="splide__track">
                <ul className="splide__list">
                    <SplideSlide>
                        <div>Slide 1</div>
                    </SplideSlide>
                    <SplideSlide>
                        <div>Slide 2</div>
                    </SplideSlide>
                    <SplideSlide>
                        <div>Slide 3</div>
                    </SplideSlide>
                </ul>
            </div>
        </div>
    );
}
