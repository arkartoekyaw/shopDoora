import React from "react";
import DevicesCarousel from "@/components/deviceCarousel";


const App = () => {
    const images = ["pod1.jpg", "pod2.jpg", "pod3.jpg", "pod4.jpg", "pod5.jpg", "pod6.jpg" ]; // Add your images here
    const backgroundImage = "pod10.jpg"; // Add your background image URL here
    const title = "Pods"; // Add your desired title here
    const subtitle = "Variety of choices <br/> available!"; // Add your desired subtitle here

    return (
        <div>
            <DevicesCarousel
                images={images}
                backgroundImage={backgroundImage}
                title={title}
                subtitle={subtitle}
            />
        </div>
    );
};

export default App;
