import { useRef, useState } from "react";

const useFirstMount = () => {
    const isFirst = useRef(true);
    if(isFirst.current){
        isFirst.current = false;
        return true;
    }
    return false;
};
export default useFirstMount