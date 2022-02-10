import getData from "./get_data.js"

(async () => {
    const result = await getData(1);
    console.log(result);
})();
