import { RANDOM_REASON } from "./constants";

fetch('something').then((data) => {
    console.log(data.reasons?.[RANDOM_REASON]);
})

