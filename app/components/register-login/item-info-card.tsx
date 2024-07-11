export function ItemInfoCard(props:any) {
    return(
        <div className="">            
            <h2 className="pb-1 text-sm font-semibold">{ props.title }</h2>
            <p className="text-xs font-normal text-slate-500">{ props.text }</p>            
        </div>
        
    )
}