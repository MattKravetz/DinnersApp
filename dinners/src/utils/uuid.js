let latest = JSON.parse(localStorage.getItem("uuid-count")) || { count:"999" }

export default function uuid(){
    const new_count = Number(latest["count"]) + 1
    localStorage.setItem("uuid-count", JSON.stringify({count: `${new_count}`}))    
    latest = {count: `${new_count}`}
    return new_count
}