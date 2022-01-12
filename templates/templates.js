import dynamic from "next/dynamic";


const Templates = () => {

    const tema="unsia"      // AMBIL DARI DATABASE (?)

    const Tema = dynamic(import("./"+tema+"/tema"));
    
    return ( 
        <>
            <Tema />
        </>
     );
}
 
export default Templates;