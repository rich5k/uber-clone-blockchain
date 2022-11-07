import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const style = {
    wrappers: 'flex-1 h-full w-full'
}

const Map=()=>{
    useEffect(()=>{
        const map = new mapboxgl.Map({
            style: 'mapbox://styles/rich5k/cla621lqi001i14nsh6simczp'
        })
    }, [])
    return <div className={style.wrappers}>Map</div>
}

export default Map;