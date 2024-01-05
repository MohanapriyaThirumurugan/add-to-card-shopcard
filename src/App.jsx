import React, {useState} from 'react'
import Header from './components/Header'
import Topbar from './components/Topbar'
import Cards from './components/Cards'

let data =[
  {
  product:"Fancy Product",
  dollor:"$40.00-$80.00",
  isproceses:false
},
{
  product:"special Item",
  dollor:"$18.00",
  isproceses:true
},
{
  product:"Sale Item",
  dollor:"$25.00",
  isproceses:false
},{
  product:"Popular Item",
  dollor:"$40.00-$80.00",
  isproceses:true
},{
  product:"Sale Item",
  dollor:"$25.00",
  isproceses:false

},
{
  product:"Fancy Product",
  dollor:"$40.00-$80.00",
  isproceses:false

},
{
  product:"Popular Item",
  dollor:"$40.00-$80.00",
  isproceses:true

},
{
  product:"special Item",
  dollor:"$18.00",
  isproceses:true

}
]



function App() {
  let [Count ,setCount]=useState(0)
  // function card(){
  //   let a=[];
  //   for( let i=0;i<data.length;i++){
  //     a.push(<Cards data={data[i]} key={i} count ={Count} setcount={setCount}/>)
  //   }
  //   return a;
  // }

  return (
    <>
    <Topbar count={Count} setcount={setCount}/>
   <Header/>
   <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {
                // card()
                data.map((ele,i)=>{
                     return <Cards data={ele} key={i} count ={Count} setcount={setCount}/>
                    })
                  }
            

    </div>
    </div>
    </section>
    <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
        </footer>
    
    </>
  )
}

export default App