import { useSearch } from '../../Global';

export const ErrorBanner = () => {
    const {error, setError} = useSearch((state) => state);
    return (
      <div className="d-flex align-items-center my-1">
            {
                error.length > 0 && 
                    <div className="p-1 br-1" style={{backgroundColor:'#ff5454', width:'100%'}}>
                        <p style={{color:'white', lineBreak:'anywhere'}}><b>¡Error!: </b>{error}<button className="btn bg-red-0" onClick={()=>{setError("")}}>X</button></p>                        
                    </div>
            }
      </div>
    )
}
