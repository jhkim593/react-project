import { useEffect } from "react";
import useFirstMount from "./useFirstMount";

const useUpdateEffect = (func, deps)=>{
    const isFirst = useFirstMount();
    
    useEffect(()=>{
        if(!isFirst){
            return func();
        }
    },[deps]);
}

export default useUpdateEffect;