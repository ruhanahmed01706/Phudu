const getStoreBook = () => {
    const stored = localStorage.getItem("readList");
    if (stored) {
        return JSON.parse(stored);
    }
    return [];
};

const addToStoreDB = (id) => {
    const storedData = getStoreBook();
    if (storedData.includes(id)) {
        alert("Already Added!");
    } else {
        storedData.push(id);
        localStorage.setItem("readList", JSON.stringify(storedData));
        alert("Doctor added to your booking list!");
    }
};

export { addToStoreDB, getStoreBook };
