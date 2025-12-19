

const Presentational=({total,add,sub})=>{
    return(
        <div>
        {total} <hr />
        <button onClick = {add}> incre </button><hr />
         <button onClick = {sub}> decre </button>
</div>
    )
}

export default Presentational