import {useState} from "react";
const Section=({title,desc,isVisible,setisVisible})=>{
    // const[isVisible,setisVisible]=useState(false);
    return(
        <div className="border-2 border-black my-5">
            <p className="text-xl font-semibold">{title}</p>
            {
            isVisible ?
            <button className="border-2 border-black" onClick={()=>{setisVisible(false)}}>Hide</button>
            :
            <button className="border-2 border-black" onClick={()=>{setisVisible(true)}}>Read</button>
            }
            {isVisible ? <p>{desc}</p> : ""}
        </div>
    );
}

const InstaMart=()=>{

    // const[sectionConfig,setsectionConfig]=useState({
    //     showAbout:false,
    //     showTeam:false,
    //     Product:false
    // });
    const[VisibleSection,setVisibleSection]=useState("");

    return(
        <div className="pt-20">
            <h1 className="text-4xl font-semibold m-2">InstaMart</h1>

            <Section title={"About InstaMart"}
            desc={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
            isVisible={VisibleSection ==="about"} // === -> true otherwise anyting will consdier to be false
            setisVisible={()=>setVisibleSection(VisibleSection==="about" ? "":"about")}
            />


            <Section title={"Product"}
            desc={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
            isVisible={VisibleSection =="product"}
            setisVisible={()=>setVisibleSection(VisibleSection==="product" ? "" : "product")}

            />
            
            <Section 
            title={"Team InstaMart"} 
            desc={"This is Team Section of InstaMart"}
            isVisible={VisibleSection =="team"}
            setisVisible={()=>setVisibleSection(VisibleSection==="team" ? "":"team")}

            />

            

            {/* Every Section has own state and pros */}
         
            {/* <AboutInstaMart/>
            <DetailsOfInstaMart/>
            <TeamInstaMart/>
            <Product/>
            <Careers/> */}
        </div>
    );
}
export default InstaMart;
