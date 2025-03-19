import React from "react";
import { Aboutme } from "../Aboutme";
import { Contect } from "../Contect";
import { Me } from "../Me";
import  Experience  from "../Experiance";
import { Project } from "../Project";
import Journey from "../Journey";

function DynamicPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Render different components based on the `id` parameter
  if (id === "aboutme") {
    return <Aboutme />;
  } else if (id === "contect") {
    return <Contect />;
  }
  else if(id === "me"){
    return <Me/>
  }
  else if(id === "experiance"){
    return <Experience/>
  } 
  else if(id === "project"){
    return <Project/>
  }
  else if(id === "journey"){
    return <Journey/>
  }
  else {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold">Page Not Found</h1>
      </div>
    );
  }
}

export default DynamicPage;