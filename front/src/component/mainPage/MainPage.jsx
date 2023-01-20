import React, { useState, useCallback, useEffect } from "react";
import MainTop from "./MainTop";
import useCounter from "./useCounter";

function MainPage() {
    const currentDate = new Date();
    const [year, increaseYear, decreaseYear] = useCounter(currentDate.getFullYear());
    const [Month, setMonth] = useState(1);

    return (
        <MainTop year={year} increaseYear={increaseYear} decreaseYear={decreaseYear} />
    )
}

export default MainPage;