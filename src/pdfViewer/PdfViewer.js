import { useEffect, useRef } from "react";
import * as React from "react";
import { vari } from "./vari";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useLocation } from "react-router-dom";




export default function PdfViewer(props) {
  const location = useLocation();
  let isAvailable = false;
  console.log(location);
  const params = useParams();
  console.log(params);
const containerRef = useRef(null);
let instance, PSPDFKit;
const {user}  = React.useContext(AuthContext);
async function saveAnnotion() {
  
  await instance.save();
  const xfdf = await instance.exportXFDF();
  // This saves the XFDF payload to your server, which in turn stores it in a database.
  const body = {annotation : xfdf, book : location.state.book}
  const res = await axios.post(`http://127.0.0.1:8800/api/annotation/${user._id}`,body);
  console.log(res);
}
useEffect(() => {

	const container = containerRef.current;
	let xfdfinit
	(async function() {
    const ann = await axios.get(`http://127.0.0.1:8800/api/users/getAnnotaions/${user._id}/${location.state.book}`);
    if(ann.data == null){
      isAvailable = false;
    }else
    {isAvailable = true;
      console.log(ann);
      xfdfinit = ann.data.annotation;
      //console.log(xfdfinit);
    
    }

		PSPDFKit = await import("pspdfkit");
    

       
    const arrbuffer = await fetch("http://127.0.0.1:8800/api/file/" + params.pdf).then(res => res.arrayBuffer());
		instance = await PSPDFKit.load({
		// Container where PSPDFKit should be mounted.
		container,
		// The document to open.
    XFDF: xfdfinit,
        document: arrbuffer,
		// Use the public directory URL as a base URL. PSPDFKit  will download its library assets from here.
		baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`
		}).then(async (instance) => {
      instance.addEventListener("annotations.didSave", async () => {
        const xfdf = await instance.exportXFDF();
        // This saves the XFDF payload to your server, which in turn stores it in a database.
        if(isAvailable){
          const body = {annotation : xfdf}
          const res = await axios.put(`http://127.0.0.1:8800/api/annotation/${ann.data._id}`,body)
          console.log(res);
          console.log('yep');
        }else{
          const body = {annotation : xfdf, book : location.state.book}
          const res = await axios.post(`http://127.0.0.1:8800/api/annotation/${user._id}`,body);
          isAvailable = true;
        }
       
      });
            
            
          
            console.log("Annotation deleted.");
          });
	})();

	return () => PSPDFKit && PSPDFKit.unload(container);
}, []);

return (
	<div ref={containerRef} style={{ width: "100%", height: "100vh"}}/>

);
}